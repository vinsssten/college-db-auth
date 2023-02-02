import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'db-auth'})
class Auth {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  login: string

  @Column()
  password: string

  @Column()
  name: string
}

export {Auth}