let getByTag=document.querySelector('form')
let getByClass=document.querySelector('.para')
let getById =document.querySelector('#bloc')
let input=document.querySelector('input')
let btn=document.querySelector('button')
let link=document.querySelector('a')
let p=document.getElementById('time')

let contentDiv=getByClass.textContent

getByClass.textContent="Bonjour 2 a ete modifie"

//console.log(contentDiv)

let getAttr=link.getAttribute('href')

link.setAttribute('href',"https//www.facebook.com")

let getClass=getByClass.getAttribute('class')
getByClass.setAttribute('class',"pa")

//console.log(getClass)
//console.log(getAttr)
getByClass.addEventListener('click',function (){
    alert('hello')
})

setInterval(()=>{
    let d=new Date()
    p.innerHTML=d.toLocaleString()
},1000)



