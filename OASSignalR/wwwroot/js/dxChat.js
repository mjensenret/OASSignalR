"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/dxChatHub2").build();

connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says " + msg;
    var msgBox = $("#messages").dxTextArea("instance");
    msgBox.option("value", (msgBox.option("value") + encodedMsg + "\r\n"));
});

connection.on("ReceiveVersion", function (versionNumber) {
    $("#txtVersion").dxTextBox("instance").option('value', versionNumber)
})

connection.start().then(function () {
    getFormInstance().getEditor('btnSubmit').option("visible",true);
}).catch(function (err) {
    return console.error(err.toString());
});

function getFormInstance() {
    return $("#chatForm").dxForm("instance");
}
function sendMessage(e) {
    var userName = getFormInstance().getEditor('User').option('value');
    var message = getFormInstance().getEditor('Message').option('value');
    window.console.log(userName + ' ' + message);
    if (userName != null && message != null) {
        connection.invoke("CoolMessage", userName, message).catch(function (err) {
            return console.error(err.toString());
        })
    }
    else {
        window.alert("Please enter all fields");
    }
}

function getVersion() {
    connection.invoke("VersionNumber").catch(function (err) {
        return console.error(err.toString());
    })
}
function enableButton() {
    if (getFormInstance().getEditor('User').option('value')) {

    }
}