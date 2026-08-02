require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDatabase = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

connectDatabase();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Portfolio Backend Running"
    });
});

const PORT = process.env.PORT || 5000;
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});