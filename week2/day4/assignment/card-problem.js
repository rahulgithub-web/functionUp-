const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];


// -------------------------------------------------   
// 1.) complete the above function,it should return true /false if card is present/absent
function findCard(suit, value) {
    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];
        if (card.suit === suit && card.value === value) {
            return true;
        }
    }

    return false;
}

 console.log(findCard(10, "club"))   // true
 console.log(findCard(5, "heart"))   // false

// ------------------------------------------------  
// 2. write a function which returns the list of available suits in the above data
function getSuits(cardData) {
    let res = [];
    for(i=0; i<6; i=i+2) {
        res.push(cardData[i].suit);
    }
    console.log(res); 
} 
output: [ 'heart', 'club', 'diamond' ]

getSuits(cardData);
// output: ["heart", "club", "diamond"]

// --------------------------------------------  
// 3. write a function which returns an object with the suits as its key and its total count as its value.

function getSuitCount(cardData) {
    let a=0; b=0; c=0;
    for(i=0; i<6; i++) {
        if(cardData[i].suit == "heart") {
            a++;
        } else if(cardData[i].suit == "club") {
            b++;
        } else {
            c++
        }
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

getSuitCount(cardData);
// output: heart:1,  club:3, diamond:2;

// ------------------------------------------------  
// 4. write a function which returns an object with the suits as its key and its available values as value.

function getSuitValues(cardData) {
    const res = {};
    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];
        const {suit, value} = card;

        if (res[suit]) {
            const valList = res[suit];
            res[suit] = [...valList, value];
        } else {
            res[suit] = [value];
        }
    }
    console.log(res);
}

getSuitValues(cardData);
// output: { heart: [ 7 ], club: [ 8, 2, 10 ], diamond: [ 2, 5 ] }

// ---------------------------------------------------- 

