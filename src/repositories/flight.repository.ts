import { Op } from "sequelize";

import Flight from "../models/flight.model";
import { IFlightRepository  } from "../interfaces/model.interface";
import { SearchCondition } from "../interfaces/utils.interface";


export  class FlightRepository implements IFlightRepository {
    
    async retrieveAll(searchParams: { registration?: string }): Promise<Flight[]> { 
        try {
            let condition: SearchCondition = {};
        
            if (searchParams?.registration)
              condition.registration = { [Op.like]: `%${searchParams.registration}%` };
        
            return await Flight.findAll({ where: condition });
          } catch (error) {
            throw new Error("Failed to retrieve Flights!");
          }
    }

    async retrieveById(flightId: number): Promise<Flight | null> { 
        try {
            return await Flight.findByPk(flightId);
          } catch (error) {
            throw new Error("Failed to retrieve Flights!");
          }
    }
   
}

export default new FlightRepository();