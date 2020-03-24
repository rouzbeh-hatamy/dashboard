function openCity(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
let myVar = setInterval(myTimer, 1000);

function myTimer() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleTimeString('fa-IR');
}

function plus() {
    let rightSide = document.getElementsByClassName("rightHandSide")[0];
    let icon = document.getElementById("plusIcon")
    let visi = rightSide.style.display;
    if (visi == "" || visi == "none") {
        icon.style.transition = "1s"
        icon.style.color = "rgb(98, 84, 229)"
        icon.style.transform = "rotate(45deg)"
        rightSide.style.display = "flex"
    } else {
        rightSide.style.display = "none"
        icon.style.transition = "1s"
        icon.style.color = "black"
        icon.style.transform = "rotate(0deg)"
    }

}