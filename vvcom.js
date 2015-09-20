function random_reason(reason_array){
  var random_reason = reason_array[Math.floor(Math.random()*reason_array.length)]
  return random_reason
}

var reason_array = [
  "Sí",
  "Ya sabes que sí, para que preguntas",
  "Hoy no"
];

var reason = random_reason(reason_array);
var reason_node = document.createElement("P");
var reason_text = document.createTextNode(reason);

reason_node.appendChild(reason_text);

document.body.appendChild(reason_node)
