import { SWANLING_DEFAULT_VALUE } from '@modules/common/environment';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Swanling, SwanlingDocument } from '@schemas/swanling.schema';
import { ObjectID, UUID } from 'bson';
import { Model } from 'mongoose';
import { CreateSwanlingInput } from '../dto/input/create-swanling.input';
import { UpdateSwanlingInput } from '../dto/input/update-swanling.input';
import { SwanlingOutput } from '../dto/output/swanling.output';

@Injectable()
export class SwanlingRepository {
  constructor(@InjectModel(Swanling.name) private swanlingModel: Model<SwanlingDocument>) {}

  async createSwanling(input: CreateSwanlingInput): Promise<SwanlingOutput> {
    return this.swanlingModel.create({ ...input, serial: new UUID(), value: SWANLING_DEFAULT_VALUE });
  }

  async updateSwanling(id: string, input: UpdateSwanlingInput): Promise<void> {
    await this.swanlingModel.updateOne({ _id: new ObjectID(id), ...input });
  }

  async getSwanlings(): Promise<SwanlingOutput[]> {
    return this.swanlingModel.find({});
  }

  async getSwanling(id: string): Promise<SwanlingOutput> {
    return this.swanlingModel.findById(new ObjectID(id));
  }
}
