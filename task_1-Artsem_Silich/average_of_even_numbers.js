//Given array of numbers, find average of even.

function averageOfEven(array){
    var countOfEvens = 0;
    var sumOfEvens = 0;

    for(var i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            countOfEvens++;
            sumOfEvens += array[i];
        }
    }

    return sumOfEvens / countOfEvens;
};

(function(){
    var testArray = [0, 2, 4, 7, 6];
    var average = averageOfEven(testArray);

    console.log("Initial array " + testArray);
    console.log("Average of evens " + average);
})();