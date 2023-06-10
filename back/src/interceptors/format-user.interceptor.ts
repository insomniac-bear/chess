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
      map((data: User | User[]) => {
        if (Array.isArray(data)) {
          for (const user of data) {
            delete user.hashed_password;
          }
        } else {
          delete data.hashed_password;
        }

        return data;
      }),
    );
  }
}