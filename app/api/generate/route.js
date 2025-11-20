import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short url exists
    const existing = await collection.findOne({
      shorturl: body.shorturl
    });

    if (existing) {
      return Response.json(
        { success: false, error: true, message: "URL already exists!" },
        { status: 400 }
      );
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date()
    });

    return Response.json(
      { success: true, error: false, message: "URL Generated Successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error in /api/generate:", error);
    return Response.json(
      { success: false, error: true, message: "Server error" },
      { status: 500 }
    );
  }
}
