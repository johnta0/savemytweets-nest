import { Injectable } from '@nestjs/common';
import * as Twitter from 'twitter'
// import { Response } from 'request';

@Injectable()
export class TweetsService {
	private readonly client: Twitter;

	constructor() {
		this.client = new Twitter({
			consumer_key: process.env.CONSUMER_KEY,
			consumer_secret: process.env.CONSUMER_SECRET,
			access_token_key: process.env.ACCESS_TOKEN_KEY,
			access_token_secret: process.env.ACCESS_TOKEN_SECRET,
		});
	}

	// get user tweets by GET statuses/user_timeline
	// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-user_timeline
	async getUserTimeline(screenName: string, maxId?: number): Promise<any> {
		const params = {
			screen_name: screenName,
			count: 200,
			// max_id: 54321, // Returns results with an ID less than (that is, older than) or equal to the specified ID.
		};
		if (maxId) { params['max_id'] = maxId; }
		try {
			return await this.client.get('/statuses/user_timeline', params);
		} catch (e) {
			return { errorMessage: e }
		}
	}
}
