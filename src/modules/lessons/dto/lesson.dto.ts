import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from 'src/modules/bases/dto/base.dto';
import { ContentDto } from 'src/modules/contents/dto/content.dto';

@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDto, { nullable: true })
export class LessonDto extends BaseDto {
  @FilterableField()
  description: string;
}
