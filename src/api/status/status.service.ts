import { Inject, Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { Status } from '@model/interfaces/status.interface';
import { InputStatusResponse, InputStatusRequest } from '@proto/fdition.pb';

@Injectable()
export class StatusService {
  constructor(
    @Inject('STATUS_MODEL') private readonly statusModel: Model<Status>) {}
  public async InitStatus(
    data: InputStatusRequest,
  ): Promise<InputStatusResponse> {
    try {
      if (data.command !== 'info') {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'Invalid command',
          error: ['Invalid command'],
        };
      }

      this.statusModel.create(data);

      return {
        status: HttpStatus.OK,
        message: 'OK',
        error: [],
      };
    } catch (err) {
      console.log(err);
    }
  }
}
