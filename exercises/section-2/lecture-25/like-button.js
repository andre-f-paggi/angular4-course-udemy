"use strict";
var LikeButton = (function () {
    function LikeButton(likes) {
        if (likes === void 0) { likes = 0; }
        this.likes = likes;
    }
    LikeButton.prototype.like = function () {
        this.liked = !this.liked;
        this.liked ? this.likes++ : this.likes--;
        console.log("Number of likes: " + this.likes);
        console.log("Already liked? " + (this.liked ? 'Yes' : 'No'));
    };
    return LikeButton;
}());
exports.LikeButton = LikeButton;
