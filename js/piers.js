var btn = document.getElementById('btn')
btn.addEventListener('click', function() {

  var diameter = document.getElementById('diameter').value
  var depth = document.getElementById('depth').value
  var cy

  if (diameter>0 && depth>0) {
    cy = (Math.PI*diameter*depth/Math.pow(36,3)).toFixed(2)
  }
  else {
    cy = 'NA'
    alert('Enter dimensions in both fields')
  }

  var result = document.getElementById('result')
  result.innerHTML = '<tr><td>Cubic yards</td><td>'+cy+'</td></tr>'
})
