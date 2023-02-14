



function message() {
    let object = {
        
        message1: [" help"," strength"," love"
        ],

        message2: [" road"," town"," house"
        ],

        num: Math.floor(Math.random() * 3),

    }

    console.log(num);

    console.log("Hello I am ! Today we will look at your horiscope");
    console.log("It sounds like you need" + message1[num]);
    console.log("You need to look for a" + message2[num]);
    console.log("In this")
     // end of object

}

message();