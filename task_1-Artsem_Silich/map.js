//Implement a function that creates new array with the results of calling a provided function on every element in this array.

function map(array, someFunction){
    var result = [];

    for(var i = 0; i < array.length; i++) {
        result.push(someFunction.call(this, array[i]));
    }

    return result;
}

function testFunc(element) {
    if(! element){
        return;
    }
    if(typeof element == "number"){
        return ~element;
    }

    return element + "s";
}

(function(){
    var testArray = [22, 9, function(){}, 78, "qwe"];
    var mappedElements = map(testArray, testFunc);

    console.log("Initial array " + testArray);

    if(mappedElements.length == 0) {
        console.log("No elements have been mapped");
    } else {
        console.log("Mapped elements " + mappedElements);
    }
})();