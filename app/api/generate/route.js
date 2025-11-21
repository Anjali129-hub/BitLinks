import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { nanoid } from "nanoid";

export async function POST(req) {
  const { url, shorturl } = await req.json();
  const code = shorturl || nanoid(6);

  const existing = await pool.query("SELECT * FROM links WHERE code=$1", [code]);
  if (existing.rows.length > 0) {
    return NextResponse.json({ error: "Code exists" }, { status: 409 });
  }

  await pool.query(
    "INSERT INTO links (code, url, clicks) VALUES ($1, $2, 0)",
    [code, url]
  );

  return NextResponse.json({ code }, { status: 201 });
}

export async function GET() {
  const result = await pool.query("SELECT * FROM links ORDER BY created_at DESC");
  return NextResponse.json(result.rows);
}

export async function DELETE(req, { params }) {
  const { shorturl } = params;
  const result = await pool.query("DELETE FROM links WHERE code=$1", [shorturl]);
  if (result.rowCount === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}