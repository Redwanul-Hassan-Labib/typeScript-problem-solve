//todo abstraction ===> eta idea create krte help kore.

/*
idea create krte amra 2ta way pai.

1.interface.
2.abstraction

*/

//! interface implement.

// interface MusicPlayer  {
//     play(): void;
//     pause() : void;
//     stop(): void;
// }

// class Player implements MusicPlayer {
//     play(){
//         console.log("sound a play.....")
//     }
//     pause(){
//         console.log("sound a pause.....")
//     }
//     stop(){
//         console.log("sound a stop.....")
//     }
// }

// const result = new Player()


// result.play()
// result.pause()
// result.stop()


//! abstraction implement..


abstract class MusicPlayer {
   abstract play(): void;
   abstract pause() : void;
   abstract stop(): void;

}

class Player extends MusicPlayer {
   play(){
        console.log("sound a play.....")
    }
    pause(){
        console.log("sound a pause.....")
    }
    stop(){
        console.log("sound a stop.....")
    }
}


const result = new Player();

result.play()
result.pause()
result.stop()