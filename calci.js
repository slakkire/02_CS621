const b = document.querySelectorAll('.ctr');

const d = document.querySelector('.results');

function works(para1) {

  var val1 = para1.target;
  const v2 = val1.value;

  if (v2 === '=') {
    if (d.value !== '') 
    {d.value = eval(d.value);}
  } else if (v2 === 'C') 
  {d.value = ''; } 
  else 
  { d.value += v2;}
}

b.forEach(function(b) {
    evnt = addEventListener('click', works)
    b.evnt;
});