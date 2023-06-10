import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return hash(createUserDto.password, 10).then((hashed_password) =>
      this.userRepository.save({
        email: createUserDto.email,
        name: createUserDto.name,
        hashed_password,
      }),
    );
  }

  findAll() {
    return this.userRepository.find();
  }

  findById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async update(user: User, updateUserDto: UpdateUserDto) {
    return updateUserDto.hasOwnProperty('password')
      ? await hash(updateUserDto.password).then((hashed_password) =>
          this.userRepository.save({
            ...user,
            ...updateUserDto,
            hashed_password,
          }),
        )
      : await this.userRepository.save({
          ...user,
          ...updateUserDto,
        });
  }

  remove(user: User) {
    return this.userRepository.remove(user);
  }
}
