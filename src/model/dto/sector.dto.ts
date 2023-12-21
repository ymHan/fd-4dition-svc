import { IsString } from 'class-validator';
import { InitBasicAdd } from '@proto/fdition.pb';
export class InitBasicAddDto implements InitBasicAdd {
  @IsString()
  public readonly id: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;
}
