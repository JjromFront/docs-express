const express = require('express');
const app = express();
const path = require("path")

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
    app.use("/public", express.static(__dirname + "/public"));
});

app.listen(3000, () => {
    console.log("✅ Running Correctly!")
})