import { Application } from "express";

import flightsRoutes from "./flight.routes";
import homeRoutes from "./home.routes";
import workPackageRoutes from "./workPackage.routes";


export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/flights", flightsRoutes);
    app.use("/api/workPackages", workPackageRoutes);

  }
}