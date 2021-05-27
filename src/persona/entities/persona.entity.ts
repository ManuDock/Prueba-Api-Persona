import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    nombre: string;

    @Column('text')
    apellidos: string;

    @Column('int')
    edad: number;
}
