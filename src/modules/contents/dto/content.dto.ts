import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDto } from 'src/modules/bases/dto/base.dto';

@ObjectType('Content')
export class ContentDto extends BaseDto {
  @FilterableField()
  description: string;

  @FilterableField()
  linkContent: string;
}
