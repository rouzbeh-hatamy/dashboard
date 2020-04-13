////left multi tab tables

///tickets

function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
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


///encyclopedias

function openCity1(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentEn");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

///// news

function openCity2(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentNews");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//////time
let myVar = setInterval(myTimer, 1000);

function myTimer() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleTimeString('fa-IR');
}



//// plus icon on responsive
function plus() {
    let rightSide = document.getElementsByClassName("sideBar")[0];
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



////chart


var ctx = document.getElementById('myChart').getContext("2d");
var gradientFill = ctx.createLinearGradient(0, 0, 0, 110);
gradientFill.addColorStop(0, "rgba(239, 158, 27, 1)");
gradientFill.addColorStop(1, "rgba(248, 216, 163, 0.1)");
var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 110);
gradientFill2.addColorStop(0, "rgba(96, 125, 255,1)");
gradientFill2.addColorStop(1, "rgba(35, 197, 246,0.1)");
var gradientFill3 = ctx.createLinearGradient(0, 0, 0, 110);
gradientFill3.addColorStop(0, "rgba(235, 69, 79,1)");
gradientFill3.addColorStop(1, "rgba(243, 72, 127,0.1)");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 5, 10, 15, 20, 25, 30],
        datasets: [{
            label: 'تیکت',
            data: [{y: 10,}, {x: 5,y: 20}, {x: 10,y: 32}, { x: 15,y: 10}, {x: 20,y: 47}, {x: 25,y: 10}, { x: 30, y: 17}],
            backgroundColor: gradientFill,
            borderColor: [
                '#ef9c18'
            ],
            borderWidth: 1,
            lineTension: 0,
        }, {
            label: 'دانشنامه',
            data: [{y: 5,}, {x: 5, y: 35}, {x: 10, y: 40 }, {x: 15,y: 8}, { x: 20, y: 32 }, { x: 25,y: 5}, {x: 30, y: 10}],
            backgroundColor: gradientFill3,
            borderColor: [
                '#eb454f'
            ],
            borderWidth: 1,
            lineTension: 0,

        }, {

            label: 'خبر',
            data: [{y: 15,}, { x: 5,y: 10}, {x: 10, y: 25 }, { x: 15, y: 3}, {x: 20, y: 28}, { x: 25,y: 15}, { x: 30, y: 27 }],
            backgroundColor: gradientFill2,
            borderColor: [
                '#6087FF'
            ],
            borderWidth: 1,
            lineTension: 0,

        }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },

});


///////nav scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}