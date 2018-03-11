function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n){
  var list = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0; i < list.length; i++){
    list[i].innerHTML=parseInt(list[i].innerHTML)+n;
  }
}

function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var child;
  for(let i=0;i<lis.length-1;i++) {
    child=lis[i].querySelector("div");
  }
return child;
}