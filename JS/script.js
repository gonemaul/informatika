const body = document.querySelector('body'),
  nav = document.querySelector(".nav-bar"),
  modeToggle = document.querySelector(".dark-light"),
  toggle = document.querySelector(".toggle-switch"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose"),
  main = document.querySelector(".main-box"),
  modeText = body.querySelector(".mode-text");


  let getMode = localStorage.getItem("mode");
      if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");

      }

// js code to toggle dark and light mode
  modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    // main.classList.toggle("dark");

    // js code to keep user selected mode even page refresh or file reopen
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
        modeText.innerText = "Dark mode";
    }else{
        localStorage.setItem("mode" , "dark-mode");
        modeText.innerText = "Light mode";
    }
    // if(body.classList.contains("dark")){
    //     modeText.innerText = "Light mode";
    // }else{
    //     modeText.innerText = "Dark mode";
        
    // }
  });
  toggle.addEventListener("click" , () =>{
    toggle.classList.toggle("active");
    body.classList.toggle("dark");
    // main.classList.toggle("dark");

    // js code to keep user selected mode even page refresh or file reopen
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
        modeText.innerText = "Dark mode";
    }else{
        localStorage.setItem("mode" , "dark-mode");
        modeText.innerText = "Light mode";
    }
  });

// js code to toggle search box
    searchToggle.addEventListener("click" , () =>{
    searchToggle.classList.toggle("active");
  });


//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
nav.classList.add("active");
});

body.addEventListener("click" , e =>{
let clickedElm = e.target;

if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")&& !clickedElm.classList.contains("inp")&& !clickedElm.classList.contains("switch")){
    nav.classList.remove("active");
}
});

