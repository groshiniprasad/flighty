import { Op } from "sequelize";

import WorkPackage from "../models/workPackage.model";
import { IWorkPackageRepository  } from "../interfaces/model.interface";
import { SearchCondition } from "../interfaces/utils.interface";


export  class FlightRepository implements IWorkPackageRepository {
    
    async retrieveAll(searchParams: { registration?: string }): Promise<WorkPackage[]> { 
        try {
            let condition: SearchCondition = {};
        
            if (searchParams?.registration)
              condition.registration = { [Op.like]: `%${searchParams.registration}%` };
        
            return await WorkPackage.findAll({ where: condition });
          } catch (error) {
            throw new Error("Failed to retrieve WorkPackages!");
          }
    }

    async retrieveById(flightId: number): Promise<WorkPackage | null> { 
        try {
            return await WorkPackage.findByPk(flightId);
          } catch (error) {
            throw new Error("Failed to retrieve WorkPackages!");
          }
    }
   
}

export default new FlightRepository();