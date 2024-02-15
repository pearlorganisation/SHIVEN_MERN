import express from "express";
import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 7003;
dotenv.config();

app.listen(PORT, () => {
  console.log(
    chalk.bold.bgMagentaBright(`Server Started and Running at PORT ${PORT}`)
  );
});
