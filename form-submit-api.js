import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to the Lore Submission API");
})

app.post("/api/submit-lore", (req, res) => {
  try {
    const { name, email, title, body } = req.body;

    if (!name || !email || !title || !body) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in /api/submit-lore:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
