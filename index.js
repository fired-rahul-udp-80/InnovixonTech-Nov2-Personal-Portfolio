 
const popUp1 = document.querySelector(".pop-up1");


function popUpDiv(){
     setInterval(()=>{
          popUp1.style.visibility ="hidden";
     },3400);
      

     
}
popUpDiv();
let pop_resume_2 = document.querySelector(".pop-resume-2");

var view_btn = document.querySelector(".view-btn");
view_btn.addEventListener('click',()=>{
     pop_resume_2.style.display="block";

     let file_close = document.querySelector("#file-close");
     file_close.addEventListener("click",()=>{
     pop_resume_2.style.display = "none";
});

     
});

//-------dark theme-------->

    let dark_theme = document.getElementById("dark-theme");
 
    dark_theme.onclick = function (){
     document.body.classList.toggle("light-theme");
     if(document.body.classList.contains("light-theme")){
      
        dark_theme.classList.remove("fa-moon");
        dark_theme.classList.add("fa-sun");
        // dark_theme.src ="img/brightness.png";

        document.querySelector(".section1").style.backgroundImage = "url('post1.jpg')";
        document.querySelector(".div-content").classList.add("dark-contentBorder");
        document.querySelector("#navbar").style.boxShadow = "none";
     }
     else{
        // dark_theme.src ="img/night-mode.png";
         dark_theme.classList.add("fa-moon");
         dark_theme.classList.remove("fa-sun");
        document.querySelector(".section1").style.backgroundImage = "url('post4.jpg')";
        
        document.querySelector("#navbar").style.boxShadow = "1px 1px 50px 1px rgba(255,255,255,0.1)";
        
     }
    };
    


//-- ------ end dark theme------ -


 
