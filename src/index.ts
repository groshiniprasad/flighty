import express, { Application, Request, Response } from "express";
import cors from "cors";

import Routes from "./routes";
import Database from "./db";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    this.syncDatabase();
    new Routes(app);
  }


  private config(app: Application): void {

    const corsOptions: cors.CorsOptions = {
      allowedHeaders: ["authorization", "Content-Type"], 
      exposedHeaders: ["authorization"],
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false
    };

    app.use(cors(corsOptions))

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }

  private syncDatabase(): void {
    const db = new Database();
    db.sequelize?.sync();
  }
}