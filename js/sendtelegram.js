var telegram_bot_id = "6562472951:AAEN4H2Ys3scLzdxhGuPRIXJxPRIkqTyhLk";
var chat_id = -1001948133314;
var u_name, email, message, user_dtls;
var ready = function() {
    u_name = document.getElementById("namee").value;
    email = document.getElementById("senderr").value;
    message = document.getElementById("subjectt").value;
    user_dtls = document.getElementById("user_dtlss").value;

    message = "Ismi: " + u_name + "\nEmail: " + email + "\nSubject: " + user_dtls + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("namee").value = "";
    document.getElementById("senderr").value = "";
    document.getElementById("subjectt").value = "";
    document.getElementById("user_dtlss").value = "";
    return false;
};
