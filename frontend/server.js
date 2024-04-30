import express from "express";
import ViteExpress from "vite-express";

const app = express();

ViteExpress.listen(app, 8008, () =>
	console.log("Server is listening on port 8008"),
);
