import { Exclude } from 'class-transformer';
import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export class System extends BaseEntity {
  @PrimaryColumn()
  pcId: number;

  @Column()
  nodeId: string;

  @Column()
  id: string;

  @Column()
  ip: string;

  @Column()
  os: string;

  @Column()
  gpu: string;

  @Column()
  gpu_driver: string;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @Exclude()
  @Column({ type: 'timestamp', nullable: true })
  public updatedAt: Date;
}
