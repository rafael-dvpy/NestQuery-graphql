import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from 'src/modules/bases/dto/base.dto';

@ObjectType('Lesson')
export class LessonDto extends BaseDto {
  @FilterableField()
  description: string;
}
