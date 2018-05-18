$(document).ready(function () {
    /* Variante 1 nur 1 button
    // Funktion wird nur registriert 
    $("button").click(function () {
        // $("p").hide(1000);   //direkt die funktion realisiert
        hideContent(); //funktion in eigener methode
    })
    alert("JS läuft nun"); //Wird sofort ausgeführt
    */

    //Variante 2 mit 3 sub screens (contents) .. der erste soll den 2ten sichtbar machen u.s.w
   
        
        switchView("page1"); 
        $("#btnC1").click(function() { switchView("page2"); });
        $("#btnC2").click(function() { switchView("page3"); });
 //   $("#btnC3").click(function () { switchView("page1"); });
    $("#btnC3").click(function () { switchView("page1"); loadData(); });

    $("#btnSaveLastName").click(function () { saveLastName() });


});

function loadDate() {
    LoadDemoData(DemoDataLoadSuccess, DemoDataLoadError);
}

function DemoDataLoadSuccess(data) {
    alert("juhuu");
}

function DemoDataLoadError() {
    alert("ohjeee");
}

var views = ["page1", "page2", "page3"];

function switchView(newView) {
    for (var i = 0; i < views.length; i++) {
        if (newView == views[i]) {
            $("#" + newView).show();
        } else {
            $("#" + views[i]).hide();
        }
    }
}