var buenosAires = {
      location: "Buenos Aires",
        depthInMeters: "400",
          annualBudget: 1000000,
            specimens: ["Dilophosaurus","Brachiosaurus"]
};

var mexico = {
      location: "Mexico",
        depthInMeters: "350",
          annualBudget: 900000,
            specimens: ["Gallimimus","Parasaurolophus"]
};

var snakewaterMontana = {
      location: "SnakewaterMontana",
        depthInMeters: "10",
          annualBudget: 150000,
            specimens: ["Velociraptor","Brachiosaurus"]
};

var nicaragua = {
      location: "Nicaragua",
        depthInMeters: "200",
          annualBudget: 1500000,
            specimens: ["Tyrannosaurus  Rex","Stegosaurous","Triceratops","Velociraptor"]
};


var hammondsMines = [];

hammondsMines.push(nicaragua);
hammondsMines.push(buenosAires);
hammondsMines.push(mexico);
hammondsMines.push(snakewaterMontana);

//console.log(hammondsMines);

// for loop ourput specimens in each dig site

for (var i =0; i < hammondsMines.length; i++) {
    for (var j = 0; j < hammondsMines[i].specimens.length; j++) {
       console.log(hammondsMines[i].specimens[j]);
    }
}

// calculate the average depth for all sites
var totalDepths = 0;
for (var i = 0; i < hammondsMines.length; i++) {
    totalDepths += Number(hammondsMines[i].depthInMeters);
}
console.log(totalDepths);

// average depth
console.log(totalDepths/hammondsMines.length);

var totalBudget = 0;
for (var i = 0; i < hammondsMines.length; i++) {
    totalBudget += Number(hammondsMines[i].annualBudget);
}
//console.log(totalBudget);

//console.log(totalBudget/totalDepths);

// most expensive site

var mostExpensive = { annualBudget: 0, depthInMeters: '1' }
for (var i = 0; i < hammondsMines.length; i++) {
    if ( (mostExpensive.annualBudget/Number(mostExpensive.depthInMeters)) <
        (hammondsMines[i].annualBudget/Number(hammondsMines[i].depthInMeters)) ){
        mostExpensive = hammondsMines[i];
    }
//    console.log(mostExpensive);
}
//console.log(mostExpensive)


// print all data in each object

for ( var i = 0; i < hammondsMines.length; i++) {
    for (var key in hammondsMines[i]) {
        if (typeof(hammondsMines[i][key]) !== "object") {
            // console.log("The value of " + key + " is " + hammondsMines[i][key]);
        }
    }
}
