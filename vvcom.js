var reason_array = [
  "Sí",
  "Ya sabes que sí, para que preguntas",
  "Hoy no"
];

function random_reason(reason_array){
  var random_reason = reason_array[Math.floor(Math.random()*reason_array.length)]
  return random_reason
};

var show_reason = function(){
  reason_from_array = random_reason(reason_array);
  reason_text = document.createTextNode(reason_from_array);
  reason_node = document.createElement("P");
  reason_node.appendChild(reason_text);
  document.body.appendChild(reason_node);
};
