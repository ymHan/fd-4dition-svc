import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Software extends BaseEntity {
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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  public updatedAt: Date;
}
