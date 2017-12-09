import path from "path";  
import express from "express";  
import webpack from "webpack";  
import webpackDevMiddleware from "webpack-dev-middleware";  
import webpackHotMiddleware from "webpack-hot-middleware";  
import { default as config } from "./webpack.config.js";

const app           = express(),  
  DIST_DIR      = path.join(__dirname, "dist"),
  HTML_FILE     = path.resolve(__dirname, './src/views/index.html'),
  envDev = process.env.NODE_ENV !== "production",
  envProd = process.env.NODE_ENV === "production",
  DEFAULT_PORT  = 3000,
  compiler      = webpack(config);

app.set("port", process.env.PORT || DEFAULT_PORT);

/**
 * DEVELOPMENT
 */
if (envDev) {  
  app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  app.get("/", (req, res, next) => {
    res.sendFile(HTML_FILE);
  });
}

/**
 * PRODUCTION
 */
if (envProd) {  
  app.use('/dist', express.static('./dist'));

  app.get("/", (req, res) => res.sendFile(HTML_FILE));
}

app.listen(process.env.PORT || DEFAULT_PORT, () => {
  console.log(`Listen to port :${process.env.PORT || DEFAULT_PORT}`)
});