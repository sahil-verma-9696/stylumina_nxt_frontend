// pages/api/upload.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { embedding, description } = req.body;

    if (!embedding) {
      return res.status(400).json({ error: "Embedding is required." });
    }

    return res.status(200).json({
      success: true,
      message: "Embedding and description uploaded successfully!",
      embedding,
      description: description || null,
    });
  }

  // Return 405 if any other method is used
  return res.setHeader("Allow", ["POST"]).status(405).json({
    error: "Method Not Allowed",
  });
}
