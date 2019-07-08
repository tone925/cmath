var btn=document.getElementById("btn")
btn.addEventListener("click", function() {

  var side1=document.getElementById("side1").value
  var side2=document.getElementById("side2").value
  var diagonal

  if (side1>0 && side2>0) {
    diagonal=Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2)).toFixed(2)
  }
  else {
    diagonal="NA"
    alert("Enter dimensions in both fields")
  }

  var result=document.getElementById("result")
  result.innerHTML="<tr><td>Diagonal</td><td>"+diagonal+"</td></tr>"
})
