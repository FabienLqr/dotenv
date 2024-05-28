// server.js
require("dotenv").config(); // this line is mandatory when you want to read variables from the '.env' file
console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(
  `I am "${process.env.DB_USER}", Wilder in "${process.env.DB_CITY}" and I love "${process.env.DB_LANGAGE}"`
);
