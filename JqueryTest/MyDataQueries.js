var baseurl = "";


function LoadDemoData(onSuccess, onError) {
    $.ajax({
        url: "http://localhost?callback=callback1234", //callback parameter wegen jsonp ... sonst gehts nicht
        cache: false,
        dadaType: "jsonp",
        success: onSuccess,
        error: onError,
        data: ""
    });
}