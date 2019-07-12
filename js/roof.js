var btn = document.getElementById('btn')
btn.addEventListener('click', function() {

  var risePerFtRun = document.getElementById('risePerFtRun').value
  var span = document.getElementById('span').value
  var ridgeThk = document.getElementById('ridgeThk').value
  var hipValThk = document.getElementById('hipValThk').value

  var comFactor = (Math.sqrt(Math.pow(risePerFtRun,2)+144)/12).toFixed(4)
  var comLength = ((span-ridgeThk)/2*comFactor).toFixed(2)
  var hipValFactor = (Math.sqrt(Math.pow(risePerFtRun,2)+288)/12).toFixed(4)
  var hipValLength = ((span-ridgeThk)/2*hipValFactor).toFixed(2)
  var hipDropVJL = (hipValThk/2/12*risePerFtRun).toFixed(2)
  var valSeatBevel = (hipValThk/2).toFixed(2)
  var jackDiff16 = (16*comFactor).toFixed(2)
  var jackDiff24 = (24*comFactor).toFixed(2)
  var comSideCut = (12/comFactor).toFixed(2)
  var hipValSideCut = (16.97/hipValFactor).toFixed(2)

  var result = document.getElementById('result')
  result.innerHTML = '<tr><td>Com factor</td><td>'+comFactor+
    '</td></tr><tr><td>Hip/val factor</td><td>'+hipValFactor+
    '</td></tr><tr><td>Com length</td><td>'+comLength+'\''+
    '</td></tr><tr><td>Hip/val length</td><td>'+hipValLength+'\''+
    '</td></tr><tr><td>Hip drop/val jack lift</td><td>'+hipDropVJL+'\''+
    '</td></tr><tr><td>Val seat bevel</td><td>'+valSeatBevel+'\''+
    '</td></tr><tr><td>Jack diff 16\' oc</td><td>'+jackDiff16+'\''+
    '</td></tr><tr><td>Jack diff 24\' oc</td><td>'+jackDiff24+'\''+
    '</td></tr><tr><td>Com side cut 12\' @</td><td>'+comSideCut+'\''+
    '</td></tr><tr><td>Hip/val side cut 12\' @</td><td>'+hipValSideCut+'\''+
    '</td></tr>'
})
