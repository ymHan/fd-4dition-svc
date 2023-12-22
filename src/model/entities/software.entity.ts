import { Exclude } from 'class-transformer';
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
<<<<<<< HEAD
export class Software extends BaseEntity {
=======
export class System extends BaseEntity {
>>>>>>> origin/master
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pcId: string;

  @Column()
  nodeId: string;

  @Column()
  ip: string;

  @Column()
  name: string;

  @Column()
  version: string;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @Exclude()
  @Column({ type: 'timestamp', nullable: true })
  public updatedAt: Date;
}
