import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager, DataSource } from 'typeorm';

import { Sector } from '@entities/sector.entity';
import { System } from '@entities/system.entity';
import { Software } from '@entities/software.entity';
import { Camera } from '@entities/camera.entity';
import { Gimbal } from '@entities/gimbal.entity';
import { Switch } from '@entities/switch.entity';

@Injectable()
export class InitService {
  constructor(
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
    @InjectRepository(System)
    private systemRepository: Repository<System>,
    @InjectRepository(Software)
    private softwareRepository: Repository<Software>,
    @InjectRepository(Camera)
    private cameraRepository: Repository<Camera>,
    @InjectRepository(Gimbal)
    private gimbalRepository: Repository<Gimbal>,
    @InjectRepository(Switch)
    private switchRepository: Repository<Switch>,
    @InjectDataSource('default')
    private dataSource: DataSource,
  ) {}

  public async InitBasicAdd(data: any): Promise<any> {
    try {
      const result = await this.dataSource.manager.transaction(
        async (entityManager: EntityManager) => {
          console.log(data);
          const sector = await this.sectorRepository.findOne({ id: data.sectorId })
          if (!sector) {
            return { error: 'sector not found' };
          }

          sector.latitude = data.latitude;
          sector.longitude = data.longitude;

          await entityManager.save(sector);

          return data;
        },
      );
      console.log(result);
      return { result };
    } catch (error) {
      console.log(error);
      return { error };
    }
  }
}
