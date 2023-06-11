import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class FormatUserInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data: User | User[] | Record<string, never>) => {
        if (Array.isArray(data)) {
          for (const user of data) {
            delete user.hashed_password;
          }
        } else {
          if (data.hasOwnProperty('hashed_password')) {
            delete data.hashed_password;
          }
        }

        return data;
      }),
    );
  }
}
