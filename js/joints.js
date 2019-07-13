var btn = document.getElementById('btn');
btn.addEventListener('click', function () {

  var sides = document.getElementById('sides').value;
  var diagonal = document.getElementById('diagonal').value;
  var corner;
  var preAngle;
  var miter;
  var butt;

  if (document.getElementById('inside').checked) {
    corner = 'inside';
  } else {
    corner = 'outside';
  }

  if (sides > 0 && diagonal > 0) {
    if (corner == 'inside') {
      preAngle = (Math.asin(diagonal / 2 / sides) / Math.PI * 180) * 2;
      miter = (90 - preAngle / 2).toFixed(1);
      butt = (Math.abs(90 - preAngle)).toFixed(1);
      miter = miter + '°';
      butt = butt + '°';
    } else if (corner == 'outside') {
      preAngle = 180 - ((Math.asin(diagonal / 2 / sides) / Math.PI * 180) * 2);
      miter = (90 - preAngle / 2).toFixed(1);
      butt = (Math.abs(90 - preAngle)).toFixed(1);
      miter = miter + '°';
      butt = butt + '°';
    }
  } else {
    miter = 'NA';
    butt = 'NA';
    alert('Enter dimensions in both fields');
  }

  var result = document.getElementById('result');
  result.innerHTML = '<tr><td>Miter</td><td>' + miter +
    '</td></tr><tr><td>Butt</td><td>' + butt +
    '</td></tr>';
});
