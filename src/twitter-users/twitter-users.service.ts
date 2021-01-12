import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as Twitter from 'twitter';
import { Repository } from 'typeorm';
import { AddTwitterUserDto } from './dto/addTwitterUserDto';
import { TwitterUser } from './twitter-user.entity';

@Injectable()
export class TwitterUsersService {
	private readonly client: Twitter;
	constructor(
		@InjectRepository(TwitterUser)
		private twitterUserRepository: Repository<TwitterUser>,
	) {
		this.client = new Twitter({
			consumer_key: process.env.CONSUMER_KEY,
			consumer_secret: process.env.CONSUMER_SECRET,
			access_token_key: process.env.ACCESS_TOKEN_KEY,
			access_token_secret: process.env.ACCESS_TOKEN_SECRET,
		});
	}

	async addTwitterUser(addTwitterUserDto: AddTwitterUserDto) {
		const userObj = await this.client.get('users/show', { screen_name: addTwitterUserDto.screenName });
		// add a new record to twitter_user table
		const twitterUser = await this.twitterUserRepository.findOne({
			where: { screenName: addTwitterUserDto.screenName }
		});
		if (twitterUser) {
			throw new BadRequestException('Twitter user with this screen name already exists.')
		}
		let newTwitterUser = await this.twitterUserRepository.create({
			twitterUserId: userObj.id,
			screenName: userObj.screen_name,
		});
		// save
		newTwitterUser = await this.twitterUserRepository.save(newTwitterUser);
		return newTwitterUser;
	}

}
