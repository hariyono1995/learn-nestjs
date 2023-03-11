import { Module } from '@nestjs/common';
import { HorseController } from './horse.controller';

@Module({
  controllers: [HorseController],
})
export class HorseModule {}
