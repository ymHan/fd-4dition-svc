import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Switch extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  nodeId: string;

  @Column()
  switchId: string;

  @Column()
  switchIp: string;

  @Column()
  switchBrand: string;

  @Column()
  switchModel: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  public updatedAt: Date;
}
