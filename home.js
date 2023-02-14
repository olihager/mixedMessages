



function message() {
    let object = {
        
        message1: [" help"," strength"," love"
        ],

        message2: [" road"," town"," house"
        ],

        num: Math.floor(Math.random() * 3),

    }

    console.log(object.num);

    console.log("Hello I am ! Today we will look at your horiscope");
    console.log("It sounds like you need" + object.message1[object.num]);
    console.log("You need to look for a" + object.message2[object.num]);
    console.log("In this")
     // end of object

}

message();