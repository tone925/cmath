var enterBtn=document.getElementById("enterBtn")
enterBtn.addEventListener("click", function() {

  var width=document.getElementById("width").value
  var brow=document.getElementById("brow").value
  var radius=document.getElementById("radius").value
  var label
  var value

  if (width>0 && brow>0 && brow<=width/2 && radius==0) {
    label="Radius"
    value=(brow/2+Math.pow(width,2)/(8*brow)).toFixed(2)
  }
  else if (width>0 && brow==0 && radius>=width/2) {
    label="Brow"
    value=(radius-Math.sqrt(Math.pow(radius,2)-Math.pow(width/2,2))).toFixed(2)
  }
  else if (width==0 && brow>0 && radius>=brow) {
    label="Width"
    value=(2*Math.sqrt(2*brow*radius-Math.pow(brow,2))).toFixed(2)
  }
  else {
    label="NA"
    value="NA"
    alert("Enter dimensions in 2 of the 3 fields\n\nIf the width and brow are specified, then the brow must not be more than half the width\n\nIf the width and radius are specified, then the radius must not be less than half the width\n\nIf the brow and radius are specified, then the radius must not be less than the brow")
  }

  var result=document.getElementById("result")
  result.innerHTML="<tr><td>"+label+"</td><td>"+value+"</td></tr>"
})
