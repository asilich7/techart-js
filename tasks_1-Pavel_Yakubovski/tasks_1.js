// 1. sort

function sort(ary){
  if(ary.length == 1 || ary.length == 0)
    return ary;

  var max = Math.max(...ary),
      min = Math.min(...ary);

  var pivot = (max + min) / 2;

  var lower = filter(ary, function(el){ return el < pivot }),
      higher = filter(ary, function(el){ return el > pivot }),
      equal = filter(ary, function(el){ return el == pivot });

  return sort(lower).concat(equal, sort(higher));
};

// 2. find

function find(ary, condition){
  return filter(ary, condition)[0];
};

// 3. filter

function filter(ary, condition){
  var res = [];

  for(var i = 0, length = ary.length; i < length; i++){
    var el = ary[i];

    if(condition(el, i)){
      res.push(el);
    };
  };

  return res;
};

// 4. map

function map(ary, condition){
  var res = [];

  for(var i = 0, length = ary.length; i < length; i++){
    var el = ary[i];
    res.push(condition(el));
  };

  return res;
};

// 5. average of even numbers

function average(ary){
  var even = filter(ary, function(el){return el % 2 == 0});
  var sum = reduce(even, function(memo, obj){return memo + obj});

  return sum / even.length;
};

function reduce(ary, callback){
  var memo = 0;
  for(var i = 0, length = ary.length; i < length; i++){
    var el = ary[i];
    memo = callback(memo, el);
  };

  return memo;
};

// 6. Robot toy

function Robot(){
  const DIRECTION_NAMES = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

  var direction = 0,
      x = 0,
      y = 0;

  function directionName(){
    var len = DIRECTION_NAMES.length;

    direction %= len;
    direction += len;
    direction %= len;

    return DIRECTION_NAMES[direction];
  };

  function move(){
    switch (directionName()){
      case 'NORTH':
        y++;
        break;
      case 'EAST':
        x++;
        break;
      case 'SOUTH':
        y--;
        break;
      case 'WEST':
        x--;
        break;
    };
  };

  function invalidMove(){
    if(directionName() == 'SOUTH' && y == 0)
      return true;

    if(directionName() == 'WEST' && x == 0)
      return true;
  };

  var actions = {
    left: function(){
      direction--;
    },
    right: function(){
      direction++;
    },
    report: function(){
      return [x, y, directionName()].join();
    },
    move: function(){
      if(!invalidMove()){
        move();
      }
    }
  };

  return actions;
};

// 7. Triangular number

var gen = (function(){
  var sum = 0,
      el = 0;

  var next = function(){
    el++;
    sum += el;
    return sum;
  };

  return { next: next };
})();

function divisors(num){
  var res = [];

  var x = Math.ceil(Math.sqrt(num));

  for(var i = 1; i <= x; i++){
    if (num % i == 0){
      res.push(i);
      res.push(num / i);
    }
  };
  return uniq(res);
};

function uniq(ary){
  return filter(ary, function(el, index){ return ary.indexOf(el) == index });
};

while(true){
  var num = gen.next();
  var len = divisors(num).length;
  if(len > 500){
    console.log(num);
    break;
  };
}
