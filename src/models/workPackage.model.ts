import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "work_packages",
})
export default class Test extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    field: "workPackageId"
  })
  workPackageId?: string;

  @Column({
    type: DataType.STRING(255),
    field: "name"
  })
  name?: string;

  @Column({
    type: DataType.STRING(255),
    field: "station"
  })
  station?: string;

  @Column({
    type: DataType.STRING(255),
    field: "status"
  })
  status?: string;

  @Column({
    type: DataType.STRING(255),
    field: "area"
  })
  area?: string;

  @Column({
    type: DataType.STRING(255),
    field: "registration"
  })
  registration?: string;

  @Column({
    type: DataType.DATE,
    field: "startDateTime"
  })
  startDateTime?: string;

  @Column({
    type: DataType.DATE,
    field: "endDateTime"
  })
  endDateTime?: string;

}