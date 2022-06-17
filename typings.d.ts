export interface Tweet extends TweetBody {
    _id: string ,
    _createdAt: string,
    _updatedAt: string,
    _rev: string,
    _type: 'tweet',
    _blockTweet: boolean
}

export type TweetBody ={
    tweet: string ,
    username: string,
    profileImg: string,
    text:string,
    image?: string
}


export interface Comment extends CommentBody {
    _id: string ,
    _createdAt: string,
    _updatedAt: string,
    _rev: string,
    _type: 'comment',
    comment:string,
    tweet:{
        _ref:string,
        type: 'reference'
    }
}

export type CommentBody ={
    tweet: string ,
    username: string,
    profileImg: string,
    text:string,
    image?: string
}
