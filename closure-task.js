//task
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

//solution
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log(i);
  }.call(i), 0);
}

for (var i = 0; i < 10; i++) {
  var callback = function(){
    console.log(i);
  }.bind(i);
  setTimeout(callback, 0);
}
