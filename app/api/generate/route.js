// app/api/generate/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.url || !body.shorturl) {
      return NextResponse.json(
        { success: false, error: true, message: "URL and shorturl are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short URL already exists
    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return NextResponse.json(
        { success: false, error: true, message: "URL already exists!" },
        { status: 400 }
      );
    }

    // Insert new URL
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, error: false, message: "URL Generated Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/generate:", error);
    return NextResponse.json(
      { success: false, error: true, message: "Server error" },
      { status: 500 }
    );
  }
}
