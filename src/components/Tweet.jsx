import { TwitterTweetEmbed } from 'react-twitter-embed';

export function Tweet({ tweetId }) {
	return (
		<div className='mx-auto max-w-[575px] my-12'>
			<TwitterTweetEmbed tweetId={tweetId} />
		</div>
	);
}