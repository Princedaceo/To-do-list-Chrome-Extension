const inputBox= document.getElementById("inputtext")
const listContainer=document.getElementById("list-container")

function addlist(){
    if (inputBox.value===''){
        alert("You have to input a value")
    }else{
        let li = document.createElement("li")
        listContainer.appendChild(li)
        li.innerHTML=inputBox.value
        let span = document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }
    inputBox.value="";
    saveData()
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()