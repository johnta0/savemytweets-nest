import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterUser } from './twitter-user.entity';
import { TwitterUsersController } from './twitter-users.controller';
import { TwitterUsersService } from './twitter-users.service';

@Module({
	imports: [TypeOrmModule.forFeature([TwitterUser])],
	providers: [TwitterUsersService],
	controllers: [TwitterUsersController],
	exports: [TwitterUsersModule]
})
export class TwitterUsersModule {}
