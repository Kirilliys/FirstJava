let num = 266219;

num = String(num);


 let call = num.split("").reduce(function(a,b) {
  return a * b;
})
console.log(call);

call **= 3;
call = String (call)
console.log(call.substring(0,2));



/*
num = String(num).split("").reduce(function(a,b) {
  return a * b;
});

console.log(typeof num);

num **= 3;
console.log(num);

*/