import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from 'src/modules/bases/dto/base.dto';
import { LessonDto } from 'src/modules/lessons/dto/lesson.dto';

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDto, { nullable: true })
export class ContentDto extends BaseDto {
  @FilterableField()
  description: string;

  @FilterableField({ nullable: true })
  linkContent: string;
}
