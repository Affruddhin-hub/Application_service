import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ schema: { properties: { username: { type: 'string' }, password: { type: 'string' } } } })
  async login(@Body() body: { username: string; password: string }) {
    return this.authService.login(body);
  }
}
