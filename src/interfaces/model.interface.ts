import Flight from '../models/flight.model';
import WorkPackage from "../models/workPackage.model";



export interface IFlightRepository {
  retrieveAll(searchParams: {registration: string }): Promise<Flight[]>;
  retrieveById(flightId: number): Promise<Flight | null>;
}


export interface IWorkPackageRepository {
  retrieveAll(searchParams: {registration: string }): Promise<WorkPackage[]>;
  retrieveById(workPackageId: number): Promise<WorkPackage | null>;
}