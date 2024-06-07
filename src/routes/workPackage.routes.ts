import { Router } from "express";
import WorkPackageController from "../controllers/workPackage.controller";

class WorkPackageRoutes {
  router = Router();
  controller = new WorkPackageController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Retrieve all Workpackages
    this.router.get("/", this.controller.findAll);
  }
}

export default new WorkPackageRoutes().router;