import { Controller, Get, Param } from '@nestjs/common';
// import { Request } from 'express';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
	constructor(private readonly tweetsService: TweetsService) {}

	@Get('/saveNewTweets/:screenName')
	async saveNewTweets(@Param() params) {
		// if (params.screenName == '' || !params.screenName) {
		// 	return { error: "Please specify screen_name" }
		// }
		const tweets = await this.tweetsService.getUserTimeline(params.screenName);
		return tweets
	}
}
