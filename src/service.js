require("dotenv").config();
const app = require("./app.js");
var path = require("path");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
