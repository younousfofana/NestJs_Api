import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('facturedetail')
export class FactureDetail {

    @PrimaryGeneratedColumn()
    Id : number;

    @Column()
    Designation : string;

    @Column()
    Quantite : string;

    @Column()
    FactureId : number;

    @Column()
    CodeRubrique : string;
}
