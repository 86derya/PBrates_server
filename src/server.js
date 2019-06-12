const http = require("http");
const app = require("./modules/app");
const morgan = require("morgan");
const router = require("./router");
const config = require("../config");

const errorHandler = (request, response, next) => {
  response.status(500).send("No such page");
  next();
};
const PORT = process.env.PORT || config.port;
const startServer = port => {
  app
    .use(morgan("dev"))
    .use("/", router)
    .use(errorHandler);

  http.createServer(app).listen(PORT);

  console.log("Server is running at http://localhost:" + PORT);
};

module.exports = startServer;
