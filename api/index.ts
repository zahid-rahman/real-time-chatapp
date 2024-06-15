import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3001; // this will be in different file very soon;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello CHATAPP api");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
