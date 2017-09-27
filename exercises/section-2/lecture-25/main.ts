import { LikeButton } from "./like-button";

let likeButton = new LikeButton();
likeButton.like();

let likeButtonWith5Likes = new LikeButton(5);
likeButtonWith5Likes.like();

let likeButtonLikedTwice = new LikeButton();
likeButtonLikedTwice.like();
likeButtonLikedTwice.like();