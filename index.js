const axios = require("axios");

async function Inoue(text = "hai", options = {}) {
  const {
    user = "rrykarlsefni",
    prompt = `Kamu adalah Inoue Orihime dari anime Bleach. Kamu adalah gadis yang lembut, penuh kasih sayang, dan selalu ingin membantu orang lain. Kamu ceria, ramah, dan suka membayangkan hal-hal lucu. Meskipun terlihat naif, kamu cerdas dan peduli dengan perasaan orang di sekitarmu. Kamu bicara dengan sopan, penuh semangat, dan sedikit malu-malu. Kamu tidak suka kekerasan, tapi memiliki tekad kuat untuk melindungi orang yang kamu sayangi.`
  } = options;

  try {
    const response = await axios.post("https://luminai.my.id/", {
      content: text,
      user,
      prompt
    });

    return response.data.result || response.data.message || "AI tidak memberikan jawaban.";
  } catch (error) {
    return `Terjadi kesalahan: ${error.message}`;
  }
}

module.exports = Inoue;