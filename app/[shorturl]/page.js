import pool from "@/lib/db";
import { redirect } from "next/navigation";

export default async function ShortURLPage({ params }) {
  // await params if it's a promise
  const { shorturl } = await params; // ✅ unwrap promise

  // Fetch link from Postgres
  const result = await pool.query("SELECT * FROM links WHERE code=$1", [shorturl]);

  if (result.rows.length === 0) {
    redirect(process.env.NEXT_PUBLIC_HOST); // fallback
  }

  const link = result.rows[0];

  // Increment clicks
  await pool.query(
    "UPDATE links SET clicks = clicks + 1, last_clicked = NOW() WHERE code=$1",
    [shorturl]
  );

  // Redirect to target URL
  redirect(link.url);
}
