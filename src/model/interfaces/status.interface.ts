import { Document } from 'mongoose';

export interface Status extends Document {
  readonly nodeId: string;
  readonly type: string;
  readonly command: string;
  readonly pc: object;
  readonly sw: object;
  readonly camera: object;
}
