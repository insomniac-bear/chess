import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { FormatUserInterceptor } from 'src/interceptors/format-user.interceptor';
import { User } from './entities/user.entity';

@UseInterceptors(FormatUserInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | Record<string, never>> {
    return this.usersService.findById(+id);
  }

  @UseGuards(JwtGuard)
  @Get('/me')
  getMe(@Req() req): User {
    return req.user;
  }

  @UseGuards(JwtGuard)
  @Patch()
  update(@Req() req, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(req.user, updateUserDto);
  }

  @UseGuards(JwtGuard)
  @Delete()
  remove(@Req() req) {
    return this.usersService.remove(req.user);
  }
}
