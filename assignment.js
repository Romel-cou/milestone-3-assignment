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




