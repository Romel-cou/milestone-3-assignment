// ---------->>converting feet to mile<<-----------------

function feetToMile(feet){
    var mile=[];
     for(var i=0 ; i<feet.length; i++){
          if(feet[i]>0)
          {
             var convertToMile = feet[i]/5280; // 1 mile = 5280 feet
             mile.push(convertToMile.toFixed(5));
          }
        else
            {
                var error = 'distance can not be negative';
                mile.push(error);
            }
     }
     return mile;
 }
 var feet = [10000, -1000];
 var result = feetToMile(feet);
 
 console.log(result);




// ------------->>Wood Calculator<<--------------

function woodCalculator(input){
    var chair = input[0];
    var table = input[1];
    var bed = input[2];
    var sum = 1*chair + 3*table + 5*bed;
    if(chair<0 || table<0 || bed<0){
        return "Input values can't be negative!!";
    }
    return sum;
}
input = [6, 4, 4];
var woodAmount = woodCalculator(input);
console.log("Wood piece you will need(in cubic-feet):", woodAmount);

// // ---------------->>brickCalculator<<----------------

function brickCalculator(floorCount){
    var bricks = 1000;
    var bricksNeeded = floorCount * bricks;  
    if(floorCount < 0){
        return "You can't get result for negative input."; 
    }
    else if(floorCount <= 10){
        var total1 = 15*bricksNeeded;
        return total1;
    }
    else if(floorCount <= 20){
        var total2 = 150000 + (floorCount - 10) * 12 * bricks;
        return total2;
    }
    else{
        var total3 = 270000 + (floorCount - 20) * 10 * bricks;
        return total3;
    }
}
var output = brickCalculator(45);
console.log("Total number of bricks you will need:", output, "units"); 


// // // ---------------------------tinyFriend----------------------------

function tinyFriend(friendsName){
    return friendsName.sort((currentName, smallestName) => currentName.length - smallestName.length)[0];
  }
friendsName = ["Bindu", "Ami", "Tumi", "Pani", "Chini"];
let nameOutput = tinyFriend(friendsName);
console.log("The tinyFriend is:", nameOutput);
 


