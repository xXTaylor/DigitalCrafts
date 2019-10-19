var pokemon = [
    {
        name : "Pichachu",
        attackPower: 500
    },
    {
        name : "Charizard",
        attackPower: 1500
    },
    {
        name : "Kakarot",
        attackPower: 9000
    }    
];

var myFunction = function(item, index) {
    console.log("Pokemon " + item.name + " Has an attack power of" + item.attackPower);
};

pokemon.forEach(myFunction);