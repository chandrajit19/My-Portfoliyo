const element=document.getElementById('img01')
element.addEventListener("click", handle)



function handle(){
    const element01=document.getElementById('box012')
   
    if (element01.style.display === "block") {
        element01.style.display = "none";
    } else {
        element01.style.display = "block";
    }
   

}