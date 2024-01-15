import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InitModule } from '@api/init/init.module';
import { StatusModule } from '@api/status/status.module';

import ormConfig = require('./config/ormconfig');

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig[0]), InitModule, StatusModule],
})
export class AppModule {}
