
const API_CURRENT_VERSION : string = "v1";
const API_PREFIX = `/api/${API_CURRENT_VERSION}`;

const API = {
    REGISTER_ACCOUNT : `${API_PREFIX}/accounts`,
    VERIFY_EMAIL : `${API_PREFIX}/verify-email`,
    LOGIN : `${API_PREFIX}/login`,
    EDIT_ACCOUNT : `${API_PREFIX}/accounts/:accountId`,
    ACCOUNT_CONFIGS : `${API_PREFIX}/accounts/:accountId/configurations`,
    FOLLOW_ACCOUNT : `${API_PREFIX}/follow-account`,
    UNFOLLOW_ACCOUNT : `${API_PREFIX}/unfollow-account`,
    CREATE_TWEET : `${API_PREFIX}/tweets`,
    EDIT_TWEET : `${API_PREFIX}/tweets/:tweetId`,
    DELETE_TWEET : `${API_PREFIX}/accounts/:accountId/tweets/:tweetId`,
    GET_ACCOUNT_TWEETS : `${API_PREFIX}/accounts/:accountId/tweets`,
    RETWEET : `${API_PREFIX}/retweet`,
    TOGGLE_REACT_TWEET : `${API_PREFIX}/react-tweet`,
    CONFIGURE_TWEET : `${API_PREFIX}/tweets/:tweetId/configure`,
    CREATE_COMMENT : `${API_PREFIX}/comments`,
    EDIT_COMMENT : `${API_PREFIX}/comments/:commentId`,
    DELETE_COMMENT : `${API_PREFIX}/comments/:commentId`,
    TOGGLE_REACT_COMMENT : `${API_PREFIX}/react-comment`
}

export default API;