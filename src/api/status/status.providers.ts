import { Mongoose } from 'mongoose';
import { StatusSchema } from '@model/schemas/status.schema';

export const statusProviders = [
  {
    provide: 'STATUS_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Status', StatusSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
