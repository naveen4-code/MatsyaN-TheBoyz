const functions = require("firebase-functions");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors")({ origin: true }); // ✅ ALLOW ALL ORIGINS

const GEMINI_API_KEY = "your-api-key";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

exports.analyzeFish = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    try {
      const { base64Image } = req.body;

      if (!base64Image) {
        return res.status(400).send("Image data missing");
      }

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
      });

      const image = {
        inlineData: {
          data: base64Image,
          mimeType: "image/jpeg",
        },
      };

      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              { text: "Identify this fish and provide common name, scientific name, habitat, and edibility." },
              image,
            ],
          },
        ],
      });

      const response = await result.response;
      const text = response.text();

      res.status(200).send({ result: text });
    } catch (error) {
      console.error("Gemini AI error:", error);
      res.status(500).send("Failed to analyze image");
    }
  });
});
