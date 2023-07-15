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
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { FormatUserInterceptor } from 'src/interceptors/format-user.interceptor';
import { User } from './entities/user.entity';

@UseInterceptors(FormatUserInterceptor)
@UseGuards(JwtGuard)
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

  @Post('/me')
  getMe(@Req() req): User {
    return req.user;
  }

  @Patch()
  update(@Req() req, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(req.user, updateUserDto);
  }

  @Delete()
  remove(@Req() req) {
    return this.usersService.remove(req.user);
  }
}
