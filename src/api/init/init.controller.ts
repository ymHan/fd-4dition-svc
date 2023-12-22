import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { InitDto } from '@dto/init.dto';
import { InitBasicAdd } from '@proto/fdition.pb';
import { InitService } from './init.service';

@Controller()
export class InitController {
  @Inject(InitService)
  private readonly initService: InitService;

  @GrpcMethod('InitService', 'InitBasicAdd')
  initBasicAdd(payload: InitDto): Promise<InitBasicAdd> {
    console.log(payload);
    return this.initService.InitBasicAdd(payload);
  }
}
