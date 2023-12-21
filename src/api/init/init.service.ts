import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sector } from '@model/entities/sector.entity';
import { System } from '@model/entities/system.entity';

@Injectable()
export class InitService {
  @InjectRepository(Sector)
  private readonly sectorRepository: Repository<Sector>;
  @InjectRepository(System)
  private readonly systemRepository: Repository<System>;

  public async InitSector({}): Promise<void> {
    const sector: Sector = new Sector();
    sector.id = '000';
    sector.name = 'Sector';
    sector.description = 'Sector';
    sector.isDeleted = false;
    await this.sectorRepository.save(sector);
  }
}
