var elem=document.querySelectorAll(".elem")
elem.forEach((e)=>{
    e.addEventListener('mousemove',(det)=>{
        var i=e.childNodes[3];
        i.style.opacity=1;
        i.style.left=det.x +"px";
    })
    e.addEventListener('mouseleave',()=>{
        var i=e.childNodes[3];
        i.style.opacity=0;
    })
})