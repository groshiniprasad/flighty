
// import express, { Request, Response } from "express";
 
// const app = express();

// app.get("/", (req: Request, res: Response) => res.json({
//     staus: "sucess!!!ss"
// }));

// const port = process.env.PORT || 4000;

// app.listen(port, () => console.log('hey this appliction runs on this port'));

import express, { Application } from "express";
import Routes from "./routes";
import Database from "./db";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    this.syncDatabase();
    new Routes(app);
  }


  private config(app: Application): void {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }

  private syncDatabase(): void {
    const db = new Database();
    db.sequelize?.sync();
  }
}