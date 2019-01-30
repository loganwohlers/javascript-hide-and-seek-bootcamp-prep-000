function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const z=document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for(let i=0;i<z.length; i++){
    z[i].innerHTML=(parseInt(z[i].innerHTML)+n);
  }
  
}

function deepestChild (){
 const x= document.querySelectorAll('#grand-node div');
 return x[x.length-1];
 
  
  
}