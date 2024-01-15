export class CreateStatusDto {
  readonly nodeId: string;
  readonly type: string;
  readonly command: string;
  readonly pc: object;
  readonly sw: object;
  readonly camera: object;
}
