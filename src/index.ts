import "dotenv/config";
import app from "./app";

const port = process.env.PORT;
const url = process.env.APP_URL;

app.listen(port, () => {
  console.log(`[server]: Server is running at ${url}:${port}`);
});
