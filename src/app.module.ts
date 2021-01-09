import { Module } from '@nestjs/common';
// import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsService } from './tweets/tweets.service';
import { TweetsModule } from './tweets/tweets.module';
import { TwitterUsersController } from './twitter-users/twitter-users.controller';
import { TwitterUsersService } from './twitter-users/twitter-users.service';
import { TwitterUsersModule } from './twitter-users/twitter-users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // ScheduleModule.forRoot(),
    TweetsModule,
    TwitterUsersModule,
  ],
  controllers: [AppController, TwitterUsersController],
  providers: [AppService, TweetsService, TwitterUsersService],
})
export class AppModule {}
