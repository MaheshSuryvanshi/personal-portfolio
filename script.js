let tablinks = document.getElementsByClassName("tab-links")
let tabcontent = document.getElementsByClassName("tab-content")

function opentab(tabname){
    for ( tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for ( tabcontents of tabcontent){
        tabcontents.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}