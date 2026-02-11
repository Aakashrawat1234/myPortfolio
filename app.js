const video1=document.getElementById("projectVideo1");
const video2=document.getElementById("projectVideo2");
const video3=document.getElementById("projectVideo3");
const hoverSign=document.querySelector(".hover-sign")

const sidebar=document.querySelector(".sidebar");
const menu=document.querySelector(".menu-icon");
const close=document.querySelector(".close-icon");

const videoList=[video1,video2,video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active");
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        video.currentTime=0;
          hoverSign.classList.remove("active");
    })
}
)

menu.addEventListener("click",function(){
    sidebar.classList.remove("close-sidebar");
    sidebar.classList.toggle("open-sidebar");
   
})

close.addEventListener("click", function () {
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");  // ✅ this was missing
});