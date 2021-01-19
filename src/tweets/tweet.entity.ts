import { TwitterUser } from '../twitter-users/twitter-user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Tweet {

	@PrimaryColumn({ nullable: false })
	tweetId: number;

	@PrimaryColumn({ nullable: false })
	tweetIdStr: string;

	@Column({ nullable: false })
	tweetedAt: Date;

	@Column({ nullable: false, length: 200 })
	text: string;

	@ManyToOne(() => TwitterUser, twitterUser => twitterUser.tweets, { onDelete: 'CASCADE' })
	twitterUser: TwitterUser;
}