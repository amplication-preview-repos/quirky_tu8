/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EndUserWhereInput } from "./EndUserWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EndUserOrderByInput } from "./EndUserOrderByInput";

@ArgsType()
class EndUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EndUserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EndUserWhereInput, { nullable: true })
  @Type(() => EndUserWhereInput)
  where?: EndUserWhereInput;

  @ApiProperty({
    required: false,
    type: [EndUserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EndUserOrderByInput], { nullable: true })
  @Type(() => EndUserOrderByInput)
  orderBy?: Array<EndUserOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EndUserFindManyArgs as EndUserFindManyArgs };
