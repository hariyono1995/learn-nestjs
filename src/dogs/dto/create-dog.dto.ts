import * as Joi from 'joi';

export const createDogSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

export interface CreateDogDto {
  name: string;
  age: number;
  breed: string;
}
