var reason_array = [
  "Sí"
];

function random_reason(reason_array){
  var random_reason = reason_array[Math.floor(Math.random()*reason_array.length)]
  return random_reason
};

var show_reason = function(){
  reason_from_array = random_reason(reason_array);
  document.getElementById("today-reason").innerHTML = reason_from_array
};

console.log(new Date())
