import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from 'src/modules/bases/dto/base.dto';
import { StudentDto } from 'src/modules/students/dto/student.dto';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDto, {
  nullable: true,
})
export class DisciplineDto extends BaseDto {
  @FilterableField()
  name: string;
}
