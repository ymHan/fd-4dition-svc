import { Injectable, HttpStatus } from '@nestjs/common';

import { InputStatusResponse } from '@proto/fdition.pb';

@Injectable()
export class StatusService {
  public async InitStatus(data: any): Promise<InputStatusResponse> {
    try {
      if (data.command !== 'info') {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'Invalid command',
          error: ['Invalid command'],
        };
      }

      console.log(data);

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
