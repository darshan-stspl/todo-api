const express = require("express");
const app = express();
require("dotenv").config();
const todoRoutes = require("./routes/todo.routes");

app.use(express.json());
app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
