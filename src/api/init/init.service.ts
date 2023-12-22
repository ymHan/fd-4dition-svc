import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sector } from '@entities/sector.entity';
import { System } from '@entities/system.entity';
import { Software } from '@entities/software.entity';
import { Camera } from '@entities/camera.entity';
import { Gimbal } from '@entities/gimbal.entity';
import { Switch } from '@entities/switch.entity';

import { InitDto } from '@dto/init.dto';

import { InitBasicResponse } from '@proto/fdition.pb';

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
  ) {}

  public async InitBasic(data: InitDto): Promise<InitBasicResponse> {
    try {
      const sectorId = await this.sectorRepository.find({})
      console.log(data);
      return { data };
    } catch (error) {
      console.log(error);
      return { error };
    }
  }
}
