var reasonArray = [
    "reason1",
    "reason2",
    "reason3"
];

function randomReason(reasonArray){
  var randomReason = reasonArray[Math.floor(Math.random()*reasonArray.length)]
  return randomReason
};

function showReason(){
  var reasonFromArray = randomReason(reasonArray);
  document.getElementById("today-reason").innerHTML = reasonFromArray
};
