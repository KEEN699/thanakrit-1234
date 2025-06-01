import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { CatrgoryModule } from './modules/catrgory/catrgory.module';
import { CatrgorService } from './modules/catrgory/catrgor.service';
import { CatrgorController } from './modules/catrgory/catrgor.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return typeOrmConfig(configService);
      },
      inject: [ConfigService],
    }),
    UsersModule,
    CatrgoryModule,

  ],
  controllers: [AppController, CatrgorController],
  providers: [AppService, CatrgorService],
})
export class AppModule {}
