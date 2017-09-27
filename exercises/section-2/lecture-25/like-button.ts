export class LikeButton{
    constructor(private _likes: number = 0, private _liked: boolean = false){

    }

    get likes(){
        return this._likes;
    }
    
    get liked(){
        return this._liked;
    }

    like(){
        this._liked = !this._liked;
        this._liked ? this._likes++ : this._likes--;

        console.log(`Number of likes: ${this._likes}`);
        console.log(`Already liked? ${this.liked ? 'Yes' : 'No'}`);
    }
}