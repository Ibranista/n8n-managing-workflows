
import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  rating: number;

  constructor(listing: Partial<Listing>) {
    Object.assign(this, listing);
  }
}