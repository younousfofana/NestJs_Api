import { Club } from "src/club/club.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('facture')
export class Facture {

    @PrimaryGeneratedColumn()
    Id : number;

    @Column()
    DateFacture : Date;

    @Column()
    NumeroFacture : string;

    @Column()
    MontantAPayer : number;

    @Column()
    MontantPaye : number;

    @Column()
    Frais : number;

    @OneToOne(() => Club, (club) => club.Id, { cascade: true, eager: true })
    @JoinColumn()
    club : Club; 

    @Column()
    Objet : string;

    @Column()
    Commentaire : string;

    @Column()
    Solde : number;
}
