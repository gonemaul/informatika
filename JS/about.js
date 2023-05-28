// Navbar
const body = document.querySelector('body'),
  nav = document.querySelector(".nav-bar"),
  modeToggle = document.querySelector(".dark-light"),
  toggle = document.querySelector(".toggle-switch"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose"),
  main = document.querySelector(".main-box"),
  modeGantung = document.querySelector(".mode-melayang"),
  toTop = document.querySelector(".to-top");
  modeText = body.querySelector(".mode-text");
      
  function ModeDark(toggle){
    toggle.classList.toggle("active");
    body.classList.toggle("dark");
  
    // js code to keep user selected mode even page refresh or file reopen
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
        modeText.innerText = "Dark mode";
    }else{
        localStorage.setItem("mode" , "dark-mode");
        modeText.innerText = "Light mode";
    }
  }
      
        let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
        }

// toogle dark and light
    modeToggle.addEventListener("click" ,() =>{ModeDark(modeToggle)});
    toggle.addEventListener("click" , () =>{ModeDark(toggle)});
    modeGantung.addEventListener("click" , () =>{ModeDark(modeGantung)});
  


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

// to top button
    window.addEventListener("scroll", ( ) => {
        if (window.pageYOffset > 100 ){
            toTop.classList.add("active");
            modeGantung.classList.add("muncul");
        } else{
            toTop.classList.remove("active");
            modeGantung.classList.remove("muncul");
        }
    });
