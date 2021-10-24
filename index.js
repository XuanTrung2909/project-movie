const express = require("express");
const path = require("path");
const { rootRouter } = require("./src/routers/root.router");

const app = express();

const port = 9000;

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello world");
});

app.use("/api/v1", rootRouter);

app.listen(port, () => {
	console.log(`connect port ${port} success`);
});
