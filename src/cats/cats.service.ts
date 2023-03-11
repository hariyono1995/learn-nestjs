import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cats.interface';

@Injectable()
export class CatsService {
  private readonly _cats: Cat[] = [];

  create(cat: Cat) {
    this._cats.push(cat);
  }

  findAll(): Cat[] {
    return this._cats;
  }
}
