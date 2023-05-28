// Navbar
const body = document.querySelector('body'),
    nav = document.querySelector(".nav-bar"),
    modeToggle = document.querySelector(".dark-light"),
    toggle = document.querySelector(".toggle-switch"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose"),
    main = document.querySelector(".main-box"),
    modeText = body.querySelector(".mode-text"),
    tabel = body.querySelector(".table"),
    tabel2 = body.querySelector(".tabel-2"),
    tabel3= body.querySelector(".tabel-3"),
    modeGantung = document.querySelector(".mode-melayang");
      
        let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
        modeGantung.classList.add("dark");
        tabel.classList.add("table-dark");
        tabel2.classList.add("table-dark");
        tabel3.classList.add("table-dark");
            }
        else{
        tabel.classList.remove("table-dark")
        tabel2.classList.remove("table-dark")
        tabel3.classList.remove("table-dark")
        }

    function modeDark(toogle){
        toogle.classList.toggle("active");
        body.classList.toggle("dark");
        tabel.classList.toggle("table-dark");
        tabel2.classList.toggle("table-dark");
        tabel3.classList.toggle("table-dark");

        // js code to keep user selected mode even page refresh or file reopen
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
        modeText.innerText = "Dark mode";
    }else{
        localStorage.setItem("mode" , "dark-mode");
        modeText.innerText = "Light mode";
    }
    }
// toogle dark and light
    modeToggle.addEventListener("click" , () =>{modeDark(modeToggle)});
    modeGantung.addEventListener("click" , () =>{modeDark(modeGantung)});
    toggle.addEventListener("click" , () =>{modeDark(toggle)});

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


// Chart
// === Jenis kendaraan ===
    var cfg = document.getElementById('PieChart').getContext('2d');
    var myChart = new Chart(cfg, {
        type: 'doughnut',
        data: {
            labels: ['Kendaraan Umum', 'Kendaraan Pribadi'],
            datasets: [{
                
                    label: '# of Votes',
                    data: [7, 73],
                    backgroundColor: ['#17BEBB', '#FFC914'],
                    borderWidth: 1
                }],
                
        }
    });

// === kendaraan umum ===
    var cxt = document.getElementById('PieChart-umum').getContext('2d');
    var myChartUmum = new Chart(cxt, {
        type: 'polarArea',
        data: {
            labels: ['Bus', 'Kereta Api', 'Pesawat'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [5,1,1],
                    backgroundColor: ['#17BEBB','green', '#FFC914'],
                    borderWidth: 1
                }
            ]
        }
    });

// === Kendaraan Pribadi ===
    var tcx = document.getElementById('PieChart-pribadi').getContext('2d');
    var myChartPribadi = new Chart(tcx, {
        type: 'bar',
        data: {
            labels: ['Mobil','Motor', 'Sepeda'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [48,13,7],
                    backgroundColor: ['#17BEBB','red', '#FFC914'],
                    borderWidth: 1
                }
            ]
        }
    });



// response google spretsheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyF762NLCFygKLhWwXc4cvLwtcR1TKOemxOW7FILOOPmb_3HU3dmE96h5fyrcf8riDh5g/exec'
            const form = document.forms['submit-to-google-sheet']
            const btnKirim = document.querySelector('.kirim');
            const btnLoading = document.querySelector('.btn-loading');
            const alertKomen = document.querySelector('.alert-komen');
        
            form.addEventListener('submit', e => {
            e.preventDefault()
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    btnLoading.classList.toggle('d-none');
                    btnKirim.classList.toggle('d-none');
                    section.classList.add("active");
                    form.reset();
                    console.log('Success!', response)
                })
                .catch(error => console.error('Error!', error.message))
            });


// modal pop up
    const section = document.querySelector(".modal-popup"),
            overlay = document.querySelector("main"),
            closeBtn = document.querySelector(".close-btn");

        overlay.addEventListener("click", () =>
            section.classList.remove("active")
        );

        closeBtn.addEventListener("click", () =>
            section.classList.remove("active")
        );

// to-top bottom
    const toTop = document.querySelector(".to-top");
    const modeMelayang = document.querySelector(".mode-melayang");

    window.addEventListener("scroll", ( ) => {
        if (window.pageYOffset > 110 ){
            toTop.classList.add("active");
            modeMelayang.classList.add("muncul")
        } else{
            toTop.classList.remove("active");
            modeMelayang.classList.remove("muncul");
        }
    });

// daftar isi
    const btnList = document.querySelector(".hideList"),
            tabelList = document.querySelector(".tabelContent");

            btnList.addEventListener("click", () => {
                tabelList.classList.toggle('active');
            });


// like
    const   Like = document.querySelector('.like'),
            Likeon = document.querySelector('.Likeon'),
            Likeoff = document.querySelector('.Likeoff');

            let LikeMode = localStorage.getItem("like");
            let hasilLike = localStorage.getItem("jumlahLike")

        if(LikeMode && LikeMode === "like-on"){
            Likeon.classList.remove('d-none');
            Likeoff.classList.add('d-none');
            Like.classList.add('active');
            if(hasilLike >= 1){
                body.querySelector('.jumlahLike').innerText = hasilLike;
            }
        }
        else{
            Likeoff.classList.remove('d-none');
            Like.classList.remove('active');
        }
      
        function add() {
            var jumlahLike = body.querySelector('.jumlahLike').innerText;
            var tambahlike = "1";
            var hasil = Number(jumlahLike) + Number(tambahlike);
            
            body.querySelector('.jumlahLike').innerText = hasil ;
            localStorage.setItem("jumlahLike" , hasil );
        }
        function remove() {
            var jumlahLike = body.querySelector('.jumlahLike').innerText;
            var hapuslike = "1"; 
            
            if(!Number(jumlahLike) <= 0 ) {
                var hasil = Number(jumlahLike) - Number(hapuslike);
                body.querySelector('.jumlahLike').innerText = hasil ;
                localStorage.setItem("jumlahLike" , hasil );
            }
            
        }
        Like.addEventListener("click", () => {
            Likeon.classList.toggle('d-none');
            Likeoff.classList.toggle('d-none');
            Like.classList.toggle('active');
            
            if(!Like.classList.contains("active")){
                localStorage.setItem("like" , "like-off");
                remove();
            }else{
                localStorage.setItem("like" , "like-on");
                add();
            }
        });

        
