const app = require("./app");
const config = require("./config/env");

app.get("/health", (req, res) => {
  res.json({ status: "okay" });
});

app.listen(config.PORT, () => {
  console.log(`server is running on http://localhost:${config.PORT}`);
});
