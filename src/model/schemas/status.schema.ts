import * as mongoose from 'mongoose';

export const StatusSchema = new mongoose.Schema({
  nodeId: String,
  type: String,
  command: String,
  pc: Object,
  sw: Object,
  camera: Object,
});
