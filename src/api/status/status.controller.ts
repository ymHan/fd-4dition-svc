import { Controller, Inject, UsePipes, ValidationPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FDITION_SERVICE_NAME, InputStatusResponse } from '@proto/fdition.pb';
import { StatusService } from './status.service';

@Controller()
export class StatusController {
  @Inject(StatusService)
  private readonly statusService: StatusService;

  @GrpcMethod(FDITION_SERVICE_NAME, 'inputStatus')
  @UsePipes(new ValidationPipe({ transform: true }))
  initStatus(payload: any): Promise<InputStatusResponse> {
    return this.statusService.InitStatus(payload);
  }
}
