import { Injectable, Logger } from '@nestjs/common';
import { CreateSwanlingInput } from '../dto/input/create-swanling.input';
import { SwanlingOutput } from '../dto/output/swanling.output';
import { SwanlingRepository } from '../repository/swanling.repository';

@Injectable()
export class SwanlingService {
  constructor(private readonly swanlingRepository: SwanlingRepository) {}
  private logger: Logger = new Logger(this.constructor.name);

  async createSwanling(input: CreateSwanlingInput): Promise<SwanlingOutput> {
    return this.swanlingRepository.createSwanling(input);
  }

  async updateSwanling(id: string, input: CreateSwanlingInput): Promise<void> {
    await this.swanlingRepository.updateSwanling(id, input);
  }

  async getSwanlings(): Promise<SwanlingOutput[]> {
    return this.swanlingRepository.getSwanlings();
  }

  async getSwanling(id: string): Promise<SwanlingOutput> {
    return this.swanlingRepository.getSwanling(id);
  }
}
