const API_HOST = 'http://localhost:8080';
const API_CURRENT_VERSION : string = "v1";
export const API_PREFIX = `${API_HOST}/api/${API_CURRENT_VERSION}`;

export const API = {
    REGISTER_ACCOUNT : `/accounts`,
    VERIFY_EMAIL : `/verify-email`,
    LOGIN : `/login`,
    EDIT_ACCOUNT : `/accounts/:accountId`,
    ACCOUNT_CONFIGS : `/accounts/:accountId/configurations`,
    FOLLOW_ACCOUNT : `/follow-account`,
    UNFOLLOW_ACCOUNT : `/unfollow-account`,
    CREATE_TWEET : `/tweets`,
    EDIT_TWEET : `/tweets/:tweetId`,
    DELETE_TWEET : `/accounts/:accountId/tweets/:tweetId`,
    GET_ACCOUNT_TWEETS : `/accounts/:accountId/tweets`,
    RETWEET : `/retweet`,
    TOGGLE_REACT_TWEET : `/react-tweet`,
    CONFIGURE_TWEET : `/tweets/:tweetId/configure`,
    CREATE_COMMENT : `/comments`,
    EDIT_COMMENT : `/comments/:commentId`,
    DELETE_COMMENT : `/comments/:commentId`,
    TOGGLE_REACT_COMMENT : `/react-comment`
}

export default API;