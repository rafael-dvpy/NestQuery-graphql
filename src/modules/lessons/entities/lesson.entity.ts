import { Base } from 'src/modules/bases/entities/base.entity';
import { Content } from 'src/modules/contents/entities/content.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Lesson extends Base {
  @Column()
  description: string;

  @OneToMany(() => Content, (content) => content.lesson)
  contents: Content[];
}
