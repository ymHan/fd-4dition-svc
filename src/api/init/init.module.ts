import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sector } from '@entities/sector.entity';
import { System } from '@entities/system.entity';
import { Software } from '@entities/software.entity';
import { Camera } from '@entities/camera.entity';
import { Gimbal } from '@entities/gimbal.entity';
import { Switch } from '@entities/switch.entity';

import { InitController } from './init.controller';
import { InitService } from './init.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Sector,
      System,
      Software,
      Camera,
      Gimbal,
      Switch,
    ]),
  ],
  controllers: [InitController],
  providers: [InitService],
})
export class InitModule {}
