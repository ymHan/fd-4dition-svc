import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import { InitModule } from '@api/init/init.module';
import { StatusModule } from '@api/status/status.module';

import ormConfig = require('./config/ormconfig');

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig[0]),
    //TypeOrmModule.forRoot(ormConfig[1]),
    MongooseModule.forRoot(process.env.MONGO_URI),
    InitModule,
    StatusModule,
  ],
})
export class AppModule {}
