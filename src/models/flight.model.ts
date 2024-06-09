import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "flights",
})
export default class Flight extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    field: "flightId"
  })
  flightId?: string;

  @Column({
    type: DataType.STRING(255),
    field: "airline"
  })
  airline?: string;

  @Column({
    type: DataType.STRING(255),
    field: "registration"
  })
  registration?: string;

  @Column({
    type: DataType.STRING(255),
    field: "aircraftType"
  })
  aircraftType?: string;

  @Column({
    type: DataType.STRING(255),
    field: "flightNum"
  })
  flightNum?: string;

  @Column({
    type: DataType.DATE,
    field: "schedDepTime"
  })
  schedDepTime?: string;

  @Column({
    type: DataType.DATE,
    field: "schedArrTime"
  })
  schedArrTime?: string;

  @Column({
    type: DataType.DATE,
    field: "actualDepTime"
  })
  actualDepTime?: string;

  @Column({
    type: DataType.DATE,
    field: "actualArrTime"
  })
  actualArrTime?: string;


  @Column({
    type: DataType.DATE,
    field: "estimatedArrTime"
  })
  estimatedArrTime?: string;

  @Column({
    type: DataType.DATE,
    field: "estimatedDepTime"
  })
  estimatedDepTime?: string;

  @Column({
    type: DataType.STRING(255),
    field: "schedDepStation"
  })
  schedDepStation?: string;

  @Column({
    type: DataType.STRING(255),
    field: "schedArrStation"
  })
  schedArrStation?: string;

  @Column({
    type: DataType.STRING(255),
    field: "depStand"
  })
  depStand?: string;


  @Column({
    type: DataType.STRING(255),
    field: "origDepStand"
  })
  origDepStand?: string;
  
}