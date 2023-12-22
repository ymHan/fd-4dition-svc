import { IsString } from 'class-validator';
export class InitBasicAddDto {
  @IsString()
  public readonly data: string;
}
