import { SwanlingGuard } from '@modules/common/guards/swanling-microservice.guard';
import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateSwanlingInput } from '../dto/input/create-swanling.input';
import { UpdateSwanlingInput } from '../dto/input/update-swanling.input';
import { API } from '../dto/output/api.output.dto';
import { SwanlingOutput } from '../dto/output/swanling.output';
import { SwanlingService } from '../service/swanling.service';

@Controller('swanling')
export class SwanlingController {
  constructor(private readonly swanlingService: SwanlingService) {}

  @Get('/health-check')
  @UseGuards(SwanlingGuard)
  checkAPI(): API {
    return {
      message: 'Hello from Swanling Service!',
    };
  }

  @Post('/create')
  @UseGuards(SwanlingGuard)
  async createSwanling(@Body() input: CreateSwanlingInput): Promise<SwanlingOutput> {
    return this.swanlingService.createSwanling(input);
  }

  @Patch('/update/:id')
  @UseGuards(SwanlingGuard)
  async updateSwanling(@Param() id: string, @Body() input: UpdateSwanlingInput): Promise<void> {
    await this.swanlingService.updateSwanling(id, input);
  }

  @Get('/all')
  @UseGuards(SwanlingGuard)
  async getSwanlings(): Promise<SwanlingOutput[]> {
    return this.swanlingService.getSwanlings();
  }

  @Get('/:id')
  @UseGuards(SwanlingGuard)
  async getSwanling(@Param() id: string): Promise<SwanlingOutput> {
    return this.swanlingService.getSwanling(id);
  }
}
