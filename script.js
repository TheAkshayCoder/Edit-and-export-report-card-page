
btn.classList.add('active')
download.classList.remove('active')

const container = document.getElementById('container')
var id = window.location.href;
var fullId = id.substring(id.indexOf("=", 60) + 1, id.indexOf("ok", 60));
console.log(container)

const newI= document.createElement('iframe')
newI.setAttribute('src',`https://besingularlms.herokuapp.com/getStudentRecord/${fullId}`)
container.appendChild(newI)


async function convertPdf(){

    document.getElementById('convertPdf').disabled=true;
    const response = await fetch(`https://besingularlms.herokuapp.com/convertPdf/${fullId}`)
    console.log(response)

    if (response.status==200){
        console.log(`https://besingularlms.herokuapp.com/downloadReport/${fullId}`)
        let download = document.getElementById('download')
        let btn = document.getElementById('btn')
        btn.classList.remove('active')
        download.classList.add('active')
        download.setAttribute('href',`https://besingularlms.herokuapp.com/downloadReport/${fullId}`)
        download.setAttribute('target','_blank')
    } else if (response.status==404){
        newI.style.display='none'
        const errDiv= document.createElement('div')
        errDiv.innerHTML=`<h1>Sorry, Report card not found</h1>`
        container.appendChild(errDiv)
    }
}