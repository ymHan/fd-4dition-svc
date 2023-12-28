import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Util } from '@filter/backoffice.util';

import { Sector } from '@entities/sector.entity';
import { System } from '@entities/system.entity';
import { Software } from '@entities/software.entity';
import { Camera } from '@entities/camera.entity';
import { Gimbal } from '@entities/gimbal.entity';
import { Switch } from '@entities/switch.entity';

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

  public async InitBasic(data: any): Promise<InitBasicResponse> {
    try {
      if (data.command !== 'register') {
        return {
          status: HttpStatus.I_AM_A_TEAPOT,
          message: 'I am a teapot',
          data: undefined,
          error: ['Invalid command'],
        };
      }

      // 입력되는 데이터의 nodeId에서 id들을 추출한다.
      const ids = await Util.separateId(data.nodeId);
      // sectorId를 이용하여 sector 정보를 가져온다.
      const sector = await this.sectorRepository.findOne({
        where: { id: ids.sectorId },
      });

      //같은 pc, sw, camera, gimbal, switch 정보가 있는지 확인한다.
      const systemExist = await this.systemRepository.find({
        where: { nodeId: data.nodeId },
      });
      const softwareExist = await this.softwareRepository.find({
        where: { nodeId: data.nodeId },
      });
      const cameraExist = await this.cameraRepository.find({
        where: { nodeId: data.nodeId },
      });
      const gimbalExist = await this.gimbalRepository.find({
        where: { nodeId: data.nodeId },
      });
      const switchExist = await this.switchRepository.find({
        where: { nodeId: data.nodeId },
      });

      if (!sector) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'fail',
          data: null,
          error: ['sector not found'],
        };
      }

      if (systemExist[0]) {
        return {
          status: HttpStatus.CONFLICT,
          message: 'fail',
          data: null,
          error: ['system info already exist'],
        };
      }

      if (softwareExist[0]) {
        return {
          status: HttpStatus.CONFLICT,
          message: 'fail',
          data: null,
          error: ['software info already exist'],
        };
      }

      if (cameraExist[0]) {
        return {
          status: HttpStatus.CONFLICT,
          message: 'fail',
          data: null,
          error: ['camera already exist'],
        };
      }

      if (gimbalExist[0]) {
        return {
          status: HttpStatus.CONFLICT,
          message: 'fail',
          data: null,
          error: ['gimbal already exist'],
        };
      }

      if (switchExist[0]) {
        return {
          status: HttpStatus.CONFLICT,
          message: 'fail',
          data: null,
          error: ['switch already exist'],
        };
      }

      if (!sector.latitude || !sector.longitude) {
        sector.latitude = data.location.lat;
        sector.longitude = data.location.long;
        sector.updatedAt = new Date();

        await this.sectorRepository.save(sector);
      }

      if (!data.pc.length) {
        // pc 데이터가 없을 경우
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'fail',
          data: null,
          error: ['pc data not found'],
        };
      } else {
        for (const pc of data.pc) {
          const system = new System();
          system.gpu = pc.gpu;
          system.gpuDriver = pc.gpuDriver;
          system.os = pc.os;
          system.ip = pc.ip;
          system.id = pc.id;
          system.nodeId = data.nodeId;

          await this.systemRepository.save(system);
        }
      }

      if (!data.sw.length) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'fail',
          data: null,
          error: ['sw data not found'],
        };
      } else {
        for (const sw of data.sw) {
          const pcInfo = await this.systemRepository.find({
            where: { ip: sw.ip },
          });

          const software = new Software();
          software.pcId = pcInfo[0].id;
          software.ip = sw.ip;
          software.name = sw.name;
          software.version = sw.ver;
          software.nodeId = data.nodeId;

          await this.softwareRepository.save(software);
        }
      }

      if (!data.camera.length) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'fail',
          data: null,
          error: ['camera data not found'],
        };
      } else {
        for (const camera of data.camera) {
          const cameraInfo = new Camera();
          cameraInfo.cameraId = camera.id;
          cameraInfo.nodeId = data.nodeId;
          cameraInfo.cameraIp = camera.ip;
          cameraInfo.cameraModel = camera.model;
          cameraInfo.cameraFw = camera.fw;

          await this.cameraRepository.save(cameraInfo);
        }
      }

      if (!data.gimbal.length) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'fail',
          data: null,
          error: ['gimbal data not found'],
        };
      } else {
        for (const gimbalIp of data.gimbal) {
          const gimbal = new Gimbal();
          console.log(gimbalIp);
          gimbal.nodeId = data.nodeId;
          gimbal.gimbalIp = gimbalIp;

          await this.gimbalRepository.save(gimbal);
        }
      }

      if (!data.switch.length) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'fail',
          data: null,
          error: ['switch data not found'],
        };
      } else {
        for (const sw of data.switch) {
          const switchInfo = new Switch();
          switchInfo.switchId = sw.id;
          switchInfo.nodeId = data.nodeId;
          switchInfo.switchIp = sw.ip;
          switchInfo.switchBrand = sw.brand;
          switchInfo.switchModel = sw.model;

          await this.switchRepository.save(switchInfo);
        }
      }

      return {
        status: HttpStatus.OK,
        message: 'success',
        data: {
          fdition: data.nodeId,
        },
        error: [undefined],
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'fail',
        data: null,
        error: [error],
      };
    }
  }
}
