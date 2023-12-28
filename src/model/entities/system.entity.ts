import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class System extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
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
  gpuDriver: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  public updatedAt: Date;
}
