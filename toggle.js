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
}