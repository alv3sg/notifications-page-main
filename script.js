function read(elemento){
    elemento.style.backgroundColor = "white"    
}
function readall(){
    let section = document.getElementsByClassName("noread")    
    for(let i of section){
        i.style.backgroundColor = "white"
    } 
}