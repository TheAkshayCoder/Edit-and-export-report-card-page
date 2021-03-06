


const container = document.getElementById('container')
var id = window.location.href;
var fullId = id.substring(id.indexOf("=", 60) + 1, id.indexOf("ok", 60));
const newI= document.createElement('iframe')
newI.setAttribute('src',`https://besingularlms.herokuapp.com/getStudentRecord/${fullId}`)
container.appendChild(newI)


async function convertPdf(){

    document.getElementById('loader').style.display='block'

    document.getElementById('convertPdf').disabled=true;
    const response = await fetch(`https://besingularlms.herokuapp.com/convertPdf/${fullId}`)
    response

    if (response.status==200){
        document.getElementById('loader').style.display='none'
        console.log(`https://besingularlms.herokuapp.com/downloadReport/${fullId}`)
        let download = document.getElementById('download')
        let btn = document.getElementById('btn')
        btn.classList.remove('active')
        download.classList.add('active')
        download.setAttribute('href',`https://besingularlms.herokuapp.com/downloadReport/${fullId}`)
        download.setAttribute('target','_blank')
    } else if (response.status==404){
        document.getElementById('loader').style.display='none'
        newI.style.display='none'
        const errDiv= document.createElement('div')
        errDiv.innerHTML=`<h1>Sorry, Report card not found</h1>`
        container.appendChild(errDiv)
    }  else{
        let download = document.getElementById('download')
        let btn = document.getElementById('btn')
        btn.classList.remove('active')
        download.classList.add('active')
        download.setAttribute('href',`https://besingularlms.herokuapp.com/downloadReport/${fullId}`)
        download.setAttribute('target','_blank')
    }
}


function edit(){
    document.getElementById('loader').style.display='block'
    window.location.href=`https://theakshaycoder.github.io/Report-card-iteration-1---level-1---form-page/?id=${fullId}ok`
}

// let download = document.getElementById('download')
// var btn = document.getElementById('btn')
// btn.classList.remove('active')
// download.classList.add('active')
// download.setAttribute('href',`https://besingularlms.herokuapp.com/downloadReport/${fullId}`)
// download.setAttribute('target','_blank')