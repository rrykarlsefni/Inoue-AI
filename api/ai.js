const itsAI = require("../itsAI");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt, text } = req.query;

  if (!text) return res.status(400).json({ error: "Parameter text wajib diisi" });

  try {
    const result = await itsAI(text, { prompt });
    return res.status(200).json({ result });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "AI service error" });
  }
};