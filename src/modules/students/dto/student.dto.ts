import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from 'src/modules/bases/dto/base.dto';
import { DisciplineDto } from 'src/modules/disciplines/dto/discipline.dto';

@ObjectType('Student')
@FilterableOffsetConnection('disciplines', () => DisciplineDto, {
  nullable: true,
})
export class StudentDto extends BaseDto {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
