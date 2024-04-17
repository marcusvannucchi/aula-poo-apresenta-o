
    class Header {

        openclose(){
            let drawer = document.getElementById("drawerMenu");
            drawer.style.display === "none" || drawer.style.display == "" ? drawer.style.display = "block" : drawer.style.display = "none";
        }
    }
    
    let header = new Header ();

    let btn = document.getElementById("btnToggleDrawer")
    btn.addEventListener("click", ()=>{
        header.openclose();
    })

    
   

    