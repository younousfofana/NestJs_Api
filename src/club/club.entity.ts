import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('club')
export class Club{

    @PrimaryGeneratedColumn()
    Id : number;

    @Column()
    Designation : string;

    @Column()
    PresidentNom : string;

    @Column()
    PresidentPrenom : string;

    @Column()
    PresidentEmail : string;

    @Column()
    TresorierNom : string;

    @Column()
    TresorierPrenom : string;

    @Column()
    TresorierEmail : string;
    
    @Column()
    SecretaireNom : string;

    @Column()
    SecretairePrenom : string;

    @Column()
    SecretaireEmail : string;

    @Column({ default: true })
    EstActif : boolean;

    @Column()
    CodePays : string;
}