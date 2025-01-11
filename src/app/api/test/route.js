export default function handler(req, res) {
    if (req.method === "GET") {
      return res.status(200).json({
        success: true,
        message: "GET request successful!",
        data: {
          example: "This is a test response.",
        },
      });
    }
  
    // Handle other methods
    return res.setHeader("Allow", ["GET"]).status(405).json({
      error: "Method Not Allowed",
    });
  }
  