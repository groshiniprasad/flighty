import { Router } from "express";
import FlightController from "../controllers/flight.controller";

class FlightRoutes {
  router = Router();
  controller = new FlightController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Retrieve all Flights
    this.router.get("/", this.controller.findAll);
  }
}

export default new FlightRoutes().router;