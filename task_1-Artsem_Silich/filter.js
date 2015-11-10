//Implement a function that filters array based on callback result.

function filter(array, callback){
    var result = [];
    for(var i=0; i < array.length; i++) {
        if(callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

function numberOrFunction(element) {
    if(typeof(element) == "number" || typeof (element) == "function") {
        return true;
    }
    return false;
}

(function(){
    var testArray = [22, "", function(){}, 78, "qwe"];
    var elements = filter(testArray, numberOrFunction);

    console.log("Initial array " + testArray);

    if(elements.length == 0) {
        console.log("No elements have been filtered");
    } else {
        console.log("Filtered elements " + elements);
    }
})();



