



function message() {
    let object = {
        
        message1: ["help","strength","guidance with love"
        ],

        message2: ["road","town","house"
        ],

        message3: ["Oliver", "Lorenzo", "Clara"
        ],

        message4: ["Rodbury", "Jacobson", "Rottingdean"
        ],

        message5: ["Mirta", "Josephina", "Magdalena"
        ],

        message6: ["book", "potion", "flower"
        ],

        num: Math.floor(Math.random() * 3)

    }  // end of object

    let y = "";
    
    switch (object.message1[object.num]) {
        case "help" : y = object.message6[0];
        break;
        case "strength" : y = object.message6[1];
        break;
        case "guidance with love": y = object.message6[2];
        break;
    }


    console.log(object.num);

    console.log(`Hello I am ${object.message3[object.num]} your fortune teller! Today we will look at your horiscope`);
    console.log(`It sounds like you need ${object.message1[object.num]}`);
    console.log(`You need to look for a ${object.message2[object.num]} called ${object.message4[object.num]}`);
    console.log(`Ask for a woman called ${object.message5[object.num]} she will give you a ${y}`);
    
    

}

message();