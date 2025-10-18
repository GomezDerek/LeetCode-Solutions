// helper alias & class
type UserId = number;
class Tweet {
    userId: number;
    tweetId: number;
    constructor(userId, tweetId) {
        this.userId = userId;
        this.tweetId = tweetId;
    }
}


class Twitter {
    allTweets: Tweet[] = [];

    // {follower: Set([...followees])}
    following: {[key: UserId]: Set<UserId>} = {};
    
    constructor() {}

    postTweet(userId: number, tweetId: number): void {
        this.allTweets.push( new Tweet(userId, tweetId) );
    }

    getNewsFeed(userId: number): number[] {
        const followList: Set<UserId> = this.following[userId];
        const newsFeed: number[] = [];

        // iterate backwards through all tweets to build newsfeed
        let i: number = this.allTweets.length-1;
        while (newsFeed.length < 10 && i>=0) {
            const feedTweet: Tweet = this.allTweets[i];

            if (
                followList?.has(feedTweet.userId) // if user is following tweeter
                || feedTweet.userId === userId    // OR it's a self-tweet
            ) {
                newsFeed.push(feedTweet.tweetId);
            }
            i--;
        }

        return newsFeed;
    }

    follow(followerId: number, followeeId: number): void {
        // if following list exists, add followee
        if (this.following[followerId] !== undefined) {
            this.following[followerId].add(followeeId);
        }
        // else following list DNE, so initialize
        else this.following[followerId] = new Set<UserId>([followeeId]);
    }

    // optional chaining because follower may not already be following followee
    unfollow(followerId: number, followeeId: number): void {
        this.following[followerId]?.delete(followeeId);
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */