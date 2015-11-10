//Implement a function that returns the first element in array that satisfies given condition.

function search(array, condition) {
    for(var i = 0; i < array.length; i++) {
        if(condition(array[i])) {
            return array[i];
        }
    }
};

function numberOrFunction(element) {
    if(typeof(element) == "number" || typeof (element) == "function") {
        return true;
    }
    return false;
}

(function(){
    var testArray = [{}, 44, 5, "a"];
    var element = search(testArray, numberOrFunction);

    console.log("Initial array " + testArray);

    if(!element) {
        console.log("No element has been founded");
    } else {
        console.log("First element founded " + element);
    }
})();
