import { Tweet } from "src/tweets/tweet.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class TwitterUser {

	@PrimaryColumn()
	twitterUserId: string;

	@Column()
	screenName: string;

	@OneToMany(() => Tweet, tweet => tweet.twitterUser, { cascade: true })
	tweets: Tweet[];
}
