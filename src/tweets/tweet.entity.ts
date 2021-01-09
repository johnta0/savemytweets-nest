import { TwitterUser } from '../twitter-users/twitter-user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Tweet {

	@PrimaryColumn()
	tweetId: number;

	@PrimaryColumn()
	tweetIdStr: string;

	@Column()
	tweetedAt: Date;

	@Column({ nullable: false, length: 200 })
	text: string;

	@ManyToOne(() => TwitterUser, twitterUser => twitterUser.tweets, { onDelete: 'CASCADE' })
	twitterUser: TwitterUser;
}