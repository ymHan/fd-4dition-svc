import { IsString, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class locationDTO {
  @IsString()
  public readonly lat: string;
  @IsString()
  public readonly long: string;
}

export class pcDTO {
  @IsString()
  public readonly id: string;
  @IsString()
  public readonly ip: string;
  @IsString()
  public readonly os: string;
  @IsString()
  public readonly gpu: string;
  @IsString()
  public readonly gpuDriver: string;
}

export class swDTO {
  @IsString()
  public readonly ip: string;
  @IsString()
  public readonly name: string;
  @IsString()
  public readonly ver: string;
}

export class cameraDTO {
  @IsString()
  public readonly id: string;
  @IsString()
  public readonly ip: string;
  @IsString()
  public readonly model: string;
  @IsString()
  public readonly fw: string;
}

export class gimbalDTO {
  @IsString()
  public readonly ip: string;
}

export class switchDTO {
  @IsString()
  public readonly id: string;
  @IsString()
  public readonly ip: string;
  @IsString()
  public readonly brand: string;
  @IsString()
  public readonly model: string;
}

export class InitDto {
  @IsString()
  nodeId: string;

  @IsString()
  public readonly type: string;

  @IsString()
  public readonly command: string;

  @IsObject()
  @Type(() => locationDTO)
  readonly location: locationDTO;

  @ValidateNested({ each: true })
  @Type(() => pcDTO)
  pc: pcDTO[];

  @ValidateNested({ each: true })
  @Type(() => swDTO)
  readonly sw: swDTO[];

  @ValidateNested({ each: true })
  @Type(() => cameraDTO)
  readonly camera: cameraDTO[];

  @Type()
  readonly gimbal: gimbalDTO[];

  @ValidateNested()
  @Type(() => switchDTO)
  readonly switch: switchDTO[];
}

export class SystemDTO {
  @IsString()
  public readonly nodeId: string;
  @IsString()
  public readonly id: string;
  @IsString()
  public readonly ip: string;
  @IsString()
  public readonly os: string;
  @IsString()
  public readonly gpu: string;
  @IsString()
  public readonly gpuDriver: string;
}
