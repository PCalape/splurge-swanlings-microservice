import { Controller, Get } from '@nestjs/common';
import { API } from '../dto/output/api.output.dto';
import { SwanlingService } from '../service/swanling.service';

@Controller('swanling')
export class SwanlingController {
  constructor(private readonly swanlingService: SwanlingService) {}

  @Get('/health-check')
  checkAPI(): API {
    return {
      message: 'Hello from Swanling Service!',
    };
  }
}
