import { Column } from 'typeorm';

export class Locations {
  @Column()
  lat: number;

  @Column()
  long: number;
}
