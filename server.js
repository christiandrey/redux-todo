const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 1425;
const app = express();

app.use("/bundles", express.static("./dist/bundles"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
