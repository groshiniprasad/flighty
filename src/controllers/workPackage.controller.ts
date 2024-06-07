import { Request, Response } from "express"; 
import workPackageRepository from '../repositories/workPackage.repository';

export default class FlightController {

  async findAll(req: Request, res: Response) {
    const registration = typeof req.query.registration === "string" ? req.query.registration : "";

    try {
      const workPackages = await workPackageRepository.retrieveAll({ registration });
      res.status(200).send(workPackages);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving workPackages."
      });
    }
  }

}