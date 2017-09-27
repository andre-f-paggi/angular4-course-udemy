"use strict";
var LikeButton = (function () {
    function LikeButton(_likes, _liked) {
        if (_likes === void 0) { _likes = 0; }
        if (_liked === void 0) { _liked = false; }
        this._likes = _likes;
        this._liked = _liked;
    }
    Object.defineProperty(LikeButton.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "liked", {
        get: function () {
            return this._liked;
        },
        enumerable: true,
        configurable: true
    });
    LikeButton.prototype.like = function () {
        this._liked = !this._liked;
        this._liked ? this._likes++ : this._likes--;
        console.log("Number of likes: " + this._likes);
        console.log("Already liked? " + (this.liked ? 'Yes' : 'No'));
    };
    return LikeButton;
}());
exports.LikeButton = LikeButton;
