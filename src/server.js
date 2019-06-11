const http = require("http");
const app = require("./modules/app");
const morgan = require("morgan");
const router = require("./router");

const errorHandler = (request, response, next) => {
  response.status(500).send("No such page");
  next();
};

const startServer = port => {
  app
    .use(morgan("dev"))
    .use("/", router)
    .use(errorHandler);

  http.createServer(app).listen(port);

  console.log("Server is running at http://localhost:" + port);
};

module.exports = startServer;
