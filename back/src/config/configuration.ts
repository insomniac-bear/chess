import { User } from 'src/users/entities/user.entity';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    host: process.env.DATABASE_HOST || 'localhost',
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    database: process.env.DATABASE_NAME || 'chess',
    entities: [User],
    synchronize: true,
  },
  jwtSecret: process.env.JWT_SECRET || 'v#rY&EcReTk*y',
});
