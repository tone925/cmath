var enterBtn=document.getElementById("enterBtn")
enterBtn.addEventListener("click", function() {

  var sideA=document.getElementById("sideA").value
  var sideB=document.getElementById("sideB").value
  var diagonal

  if (sideA>0 && sideB>0) {
    diagonal=Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2)).toFixed(2)
  }
  else {
    diagonal="NA"
    alert("Enter dimensions in both fields")
  }

  var result=document.getElementById("result")
  result.innerHTML="<tr><td>Diagonal</td><td>"+diagonal+"</td></tr>"
})
