import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SwanlingController } from './controller/swanling.controller';
import { SwanlingService } from './service/swanling.service';
import { SwanlingSchema, Swanling } from '@schemas/moment.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Swanling.name, schema: SwanlingSchema }])],
  providers: [SwanlingController, SwanlingService],
  controllers: [SwanlingController],
})
export class TestDataModule {}
