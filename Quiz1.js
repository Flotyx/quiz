function Function()
 {
var btn = document.createElement("BUTTON");
btn.innerHTML = "Change the document";
document.body.appendChild(btn);
btn.addEventListener("click", myFunction)
}

function myFunction() 
{
  document.getElementById("try").innerHTML="CSIE@CGU";
  document.getElementById("demo").innerHTML = "怎麽那麽棒！！.";
}