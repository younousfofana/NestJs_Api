import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('pays')
export class Pays{
    @PrimaryColumn()
    Code : string;

    @Column()
    Designation : string;

    @Column()
    Langue : string;
}