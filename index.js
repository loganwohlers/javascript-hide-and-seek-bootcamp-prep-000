function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  const x=document.querySelector('nested');
  const y=x.querySelector('target');
  return y.innerHTML;
}

function increaseRankBy(n){
  const z=document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for(let i=0;i<z.length; i++){
    z[i].innerHTML=(parseInt(z[i].innerHTML)+n);
  }
  
}