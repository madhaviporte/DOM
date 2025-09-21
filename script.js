var circle =document.querySelector("#circle")
var btn = document.querySelector("button")


var flag = 0


btn.addEventListener("click", function(){
    if(flag==0){
     circle.style.backgroundColor= "lightseagreen"
     console.log("Cliocked");
     flag =1
     
    }
    else{
        circle.style.backgroundColor= "Transparent"
     console.log("Again Cliockedf");
     flag =0
     
    }
})