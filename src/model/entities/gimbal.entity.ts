import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gimbal extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  Id: number;

  @Column()
  nodeId: string;

  @Column()
  public gimbalIp: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  public updatedAt: Date;
}
