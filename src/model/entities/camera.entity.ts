import { Exclude } from 'class-transformer';
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Camera extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  nodeId: string;

  @Column()
  cameraId: string;

  @Column()
  cameraIp: string;

  @Column()
  cameraModel: string;

  @Column()
  cameraFw: string;

  @Exclude()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @Exclude()
  @Column({ type: 'timestamp', nullable: true })
  public updatedAt: Date;
}
