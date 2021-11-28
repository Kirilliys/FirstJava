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
num = num.split("").reduce(function(a,b) {
  return a * b;
});

console.log(num);

num **= 3;
num = String(num);
console.log(num.substring(0,2));

*/