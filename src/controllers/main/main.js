const mainRoute = (request, response) => {
  response.set("Content-Type", "text/html");
  response.send("<h1>Response on mainRoute</h1>");
};

module.exports = mainRoute;
