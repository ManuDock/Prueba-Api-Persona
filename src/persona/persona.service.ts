import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona) private personaRepository: Repository<Persona>,
  ) {}
  create(createPersonaDto: CreatePersonaDto) {
    const ret = this.personaRepository.save(createPersonaDto);
    return ret;
  }

  findAll() {
    return this.personaRepository.find();
  }

  findOne(id: number) {
    return this.personaRepository.findOne(id);
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const person = await this.personaRepository.findOne({
      where: { id }
    });
    
    return this.personaRepository.save({
      ...person, // existing fields
      ...updatePersonaDto // updated fields
    });
  }

  remove(id: number) {
    return this.personaRepository.delete(id);
  }
}
