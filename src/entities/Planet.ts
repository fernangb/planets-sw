import {
    ObjectID,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ObjectIdColumn,
  } from 'typeorm';
  
  @Entity('planets')
  class Planet {
    @ObjectIdColumn()
    id: ObjectID;
  
    @Column()
    nome: string;

    @Column()
    clima: string;

    @Column()
    terreno: string;

    @Column({default: 0})
    nr_filmes: number;
  
    @CreateDateColumn()
    dt_criacao: Date;
  
    @UpdateDateColumn()
    dt_atualizacao: Date;
  }
  
  export default Planet;
  