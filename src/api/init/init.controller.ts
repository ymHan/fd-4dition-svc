import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { InitBasicAddDto } from '@dto/sector.dto';
import { InitPcInfoAdd } from '@proto/fdition.pb';
import { InitService } from './init.service';

@Controller()
export class InitController {
  @Inject(InitService)
  private readonly initService: InitService;

  @GrpcMethod('InitService', 'InitBasicAdd')
  private initBasicAdd(payload: InitBasicAddDto): Promise<InitPcInfoAdd> {
    return this.initService.InitBasicAdd(payload);
  }
}
