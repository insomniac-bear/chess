import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ServerException } from 'src/exceptions/server-exception';
import { ErrorCode } from 'src/exceptions/error-codes';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const candidate = await this.findByEmail(createUserDto.email);

    if (candidate) {
      throw new ServerException(ErrorCode.UserAlreadyExist);
    }

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

  async findById(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      return {};
    }
    return user;
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
