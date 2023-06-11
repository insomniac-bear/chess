import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalGuard } from 'src/guards/auth.guard';

@Controller('auth/')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(LocalGuard)
  @Post('signin')
  sigin(@Req() req, @Res() res) {
    return res.status(200).json(this.authService.auth(req.user));
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return this.authService.auth(user);
  }
}
