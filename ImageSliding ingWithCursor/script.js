// Appling the styles
document.querySelector(".parent-div").addEventListener("mousemove",(val)=>{

const upperImg = document.querySelector(".upperImgPart");
const text = document.querySelector(".text");
 console.log(val.clientX)
 upperImg.style.width =  val.clientX +"px";
 text.style.width =  val.clientX +"px";
})