const app = require("./app");
const config = require("./config/env");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));

app.get("/health", (req, res) => {
  res.json({ status: "okay" });
});

app.listen(config.PORT, () => {
  console.log(`server is running on http://localhost:${config.PORT}`);
});
