interface exampleObj {
  name: string,
  age: number,
  gender?: string
}
function person(param: exampleObj){
  alert( param.name + param.age + (param.gender||'') );
}
person({
  name: "Sergio",
  age: 41
});
let x:number = 15;
alert(x);

var mainTimerId = window.setTimeout(()=>{var tagHeadHandler = document.getElementsByTagName("head")[0];console.log(tagHeadHandler)},0);
var infoAboutComputedStyle = document.getElementById("infoAboutComputedStyle");
var tagBody = document.getElementsByTagName("body")[0];

//let HELLo = document.getElementById("example");
document.body.innerHTML = "<h1>Hello world</h1>";
console.log(window.getComputedStyle(tagBody, null));
