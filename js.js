const inputBox = document.getElementById("inputbox");
const listcont = document.getElementById("listCont");
console.log(listcont)

function addTask(){
    if(inputBox.value=== ''){
        alert("You must write something");
    }
    else{
        let newli = document.createElement("li");
        newli.innerHTML = inputBox.value;
        listcont.appendChild(newli);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newli.appendChild(span)
    }
    inputBox.value="";
}
listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN" ) {
    e.target.parentElement.remove();
    }
    }, false);