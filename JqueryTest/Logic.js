function hideContent() {
    $("p").hide(1000);
}

function saveLastName() { //wennn save button gedrückt wird wert des eingabefeldes geholt
    lastname = $("#lastname").val();
    // $("p").text("Hello " + lastname);  Das war die einfache variante
    // nun die listen variante
    $("#listing").append(addToList(lastname));
}

function addToList(entry) {
   // return "<li> <p>" + lastname + " </p> </li>"
    return "<tr><td>" + entry + "</td> <td>false </td> </tr>";
}