function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className = "active";
}

function openCall(evt, callName) {
    var i, calltoaction,
    calltoaction = document.getElementsByClassName("calltoaction");
    for (i = 0; i < calltoaction.length; i++) {
        calltoaction[i].style.display = "none";
    }

    document.getElementById(callname).style.display = "block";
}


