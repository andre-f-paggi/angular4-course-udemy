export class LikeButton{
    public liked: boolean;

    constructor(private likes: number = 0){

    }

    like(){
        this.liked = !this.liked;
        this.liked ? this.likes++ : this.likes--;

        console.log(`Number of likes: ${this.likes}`);
        console.log(`Already liked? ${this.liked ? 'Yes' : 'No'}`);
    }
}