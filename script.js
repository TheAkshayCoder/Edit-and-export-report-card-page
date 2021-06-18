const container = document.getElementById('container')
var id = window.location.href;
var fullId = id.substring(id.indexOf("=", 60) + 1, id.indexOf("ok", 60));
console.log(container)
// var fullId = 28
const newI= document.createElement('iframe')
newI.setAttribute('src',`https://besingularlms.herokuapp.com/getStudentRecord/${fullId}`)


    container.appendChild(newI)
