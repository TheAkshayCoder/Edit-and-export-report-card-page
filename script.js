const container = document.getElementById('container')
var id = window.location.href;
var fullId = id.substring(id.indexOf("=", 60) + 1, id.indexOf("ok", 60));


container.innerHTML=`<iframe src="https://besingularlms.herokuapp.com/getStudentRecord/${fullId}" frameborder="0"></iframe>`