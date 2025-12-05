const body=document.body;
const lightbut=document.getElementById("lightmode")
const darkbut=document.getElementById("darkmode")


lightbut.addEventListener("click",()=>setTheme("light"))
darkbut.addEventListener("click", ()=>setTheme("dark"))

const setTheme=(theme)=>{
    if(theme==="dark"){
        body.classList.add("dark")
    }
    else{ 
        body.classList.remove("dark")
    }
    sessionStorage.setItem("theme",theme)
}
const currentheme=sessionStorage.getItem("theme");
if(currentheme==="dark"){
    body.classList.add("dark")
}