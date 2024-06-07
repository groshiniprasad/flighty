import { Request, Response } from "express"; 
import flightRepository from '../repositories/flight.repository';

export default class FlightController {

  async findAll(req: Request, res: Response) {
    const registration = typeof req.query.registration === "string" ? req.query.registration : "";

    try {
      const flights = await flightRepository.retrieveAll({ registration });
      res.status(200).send(flights);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving flights."
      });
    }
  }

}