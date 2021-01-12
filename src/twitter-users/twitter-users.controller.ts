import { Body, Controller, Post, Req } from '@nestjs/common';
import { AddTwitterUserDto } from './dto/addTwitterUserDto';
import { TwitterUsersService } from './twitter-users.service';

@Controller('twitter-users')
export class TwitterUsersController {
	constructor(private readonly twitterUsersService: TwitterUsersService) { }
	
	@Post('add')
	async addTwitterUser(@Body() addTwitterUserDto: AddTwitterUserDto) {
		// add a record and a new table
		return this.twitterUsersService.addTwitterUser(addTwitterUserDto);
	}
}
