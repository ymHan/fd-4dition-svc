import { IsString, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class locationDTO {
  @IsString()
  public readonly latitude: string;
  @IsString()
  public readonly longitude: string;
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
  public readonly id: string;
  @IsString()
  public readonly ip: string;
  @IsString()
  public readonly model: string;
  @IsString()
  public readonly fw: string;
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
  public readonly nodeId: string;

  @IsObject()
  @Type(() => locationDTO)
  readonly location: locationDTO;

  @IsObject()
  @ValidateNested()
  @Type(() => pcDTO)
  readonly pc: pcDTO[];

  @IsObject()
  @ValidateNested()
  @Type(() => swDTO)
  readonly sw: swDTO[];

  @IsObject()
  @ValidateNested()
  @Type(() => cameraDTO)
  readonly camera: cameraDTO[];

  @IsObject()
  @Type(() => gimbalDTO)
  readonly gimbal: gimbalDTO[];

  @IsObject()
  @ValidateNested()
  @Type(() => switchDTO)
  readonly switch: switchDTO[];
}
