
export interface ApiResponse<T> {
    timestamp : Date | string;
    status : number;
    ok : boolean;
    message : string;
    data : T | null,
    errors : Map<string,string>
}

export class Account{
    id !: string;
    firstName !: string;
    lastName !: string;
    fullName !: string;
    email !: string;
    password !: string;
    confirmPassword !: string;
    phone !: string;
    age !: number;
    dob !: string | Date;
    bios !: string;
    deviceId !: string;
    createdDate !: string | Date;
    updatedDate !: string | Date;
    lastLoggedInDate !: string | Date;
    lastLoggedInDeviceId !: string | Date;
    verificationCode !: string;
    hasVerifiedCode !: boolean;
}

export interface AccountConfigurations{
    id : number;
    isMuteRingtone : boolean;
    isLockProfile : boolean;
    showFollowers : boolean;
    showFollowing : boolean;
    showNotification : boolean;
    createdDate : string | Date;
    updatedDate : string | Date;
    account : Account;
}

export interface AccountFollowAccount {
    id : number;
    fromAccount : Account;
    toAccount : Account;
    createdDate : Date;
}

export interface Post {
    id : string;
    title : string;
    description : string;
    createdDate : Date | string;
    updatedDate : Date | string;
    postImage : File;
    postImageUri : string;
    createdAccount : Account;
    tweetCount : number | null;
    commentCount : number | null ;
    reactionCount : number | null;
    isDelete : boolean;
}

export interface PostConfigurations{
    id : number;
    privacyStatus : number;
    commentStatus : number;
    reactionStatus : number;
    tweetStatus : number;
    createdDate : Date | string;
    updatedDate : Date | string;
    post : Post;
}


export interface Comment {
    id : number;
    content : string;
    createdDate : Date | string;
    updatedDate : Date | string;
    reactionCount : number;
    commentedAccount : Account;
    parentComment : Comment;
    post : Post;
}

export interface AccountReactComment {
    id : number;
    account : Account;
    comment : Comment;
    createdDate : Date | string;
}

export interface AccountReactPost {
    id : number;
    account : Account;
    post : Post;
    createdDate : Date | string;
}

export interface AccountTweetPost {
    id : number;
    account : Account;
    post : Post;
    createdDate : Date | string;
    updatedDate : Date | string;
    isDelete : boolean;
}


export interface ReactionDTO<T> {
    account : Account;
    target : T;
}

export interface RetweetPostDTO {
    from : Account;
    post : Post;
}
