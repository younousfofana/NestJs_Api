import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  firstEndpoint() : string{
    return "j ai cree mon premier endpoint";
  }
}
