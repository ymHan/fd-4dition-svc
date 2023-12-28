import { Controller, Inject, UsePipes, ValidationPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FDITION_SERVICE_NAME, InitBasicResponse } from '@proto/fdition.pb';
import { InitService } from './init.service';

@Controller()
export class InitController {
  @Inject(InitService)
  private readonly initService: InitService;

  @GrpcMethod(FDITION_SERVICE_NAME, 'initBasic')
  @UsePipes(new ValidationPipe({ transform: true }))
  initBasic(payload: any): Promise<InitBasicResponse> {
    return this.initService.InitBasic(payload);
  }
}
