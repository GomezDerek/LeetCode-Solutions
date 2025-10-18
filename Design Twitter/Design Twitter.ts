// because newsfeed is only self/friends tweets.
// unfollows need to update newsfeed

// to track followers
// map = {userId: {...followees}}

// newsfeed is deque for frontpush


// to get user's newsfeed
// newsfeed.filter(tweet => following[userId].has(tweet.user))

class Tweet {
    userId: number;
    tweetId: number;
    constructor(userId, tweetId) {
        this.userId = userId;
        this.tweetId = tweetId;
    }
}

type UserId = number;

class Twitter {
    // use this DS for front insertion
    // allTweets: Deque<number> = new Deque<number>();
    // nvm
    allTweets: Tweet[] = [];

    // O(1) ops
    // following: Set<number> = new Set<number();
    following: {[key: UserId]: Set<UserId>} = {};
    
    constructor() {}

    postTweet(userId: number, tweetId: number): void {
        // console.log('post');
        const tweet: Tweet = new Tweet(userId, tweetId);
        this.allTweets.push(tweet);
    }

    getNewsFeed(userId: number): number[] {
        const followList: Set<UserId> = this.following[userId];
        // console.log(`newsfeed: ${[...this.allTweets].map(tweet=>tweet.tweetId)} \nfollowList: ${followList}`);
        const newsFeed: number[] = [];

        // iterate backwards through all tweets to build newsfeed
        let i: number = this.allTweets.length-1;
        while (newsFeed.length < 10 && i>=0) {
            const feedTweet: Tweet = this.allTweets[i];

            // if followList is undefined, returns undefined / falsey
            if (
                followList?.has(feedTweet.userId) 
                || feedTweet.userId === userId
            ) {
                newsFeed.push(feedTweet.tweetId);
            }
            i--;
        }

        return newsFeed;
    }

    follow(followerId: number, followeeId: number): void {
        // console.log('follow');
        if (this.following[followerId] !== undefined) {
            this.following[followerId].add(followeeId);
        }
        else this.following[followerId] = new Set<UserId>([followeeId]);
    }

    // ASSUME they are already following
    // looks like my assumption is wrong...
    unfollow(followerId: number, followeeId: number): void {
        // console.log('unfollow');
        // this.following[followerId].delete(followeeId);
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