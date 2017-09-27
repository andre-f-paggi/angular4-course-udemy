"use strict";
var like_button_1 = require("./like-button");
var likeButton = new like_button_1.LikeButton();
likeButton.like();
var likeButtonWith5Likes = new like_button_1.LikeButton(5);
likeButtonWith5Likes.like();
var likeButtonLikedTwice = new like_button_1.LikeButton();
likeButtonLikedTwice.like();
likeButtonLikedTwice.like();
