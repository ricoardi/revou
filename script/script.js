function setSenderUI(name, birthDate, gender, messages, currenttime){
        document.getElementById("sender-full-name").innerHTML = name ;
        document.getElementById("sender-birth-date").innerHTML = birthDate ;
        document.getElementById("sender-gender").innerHTML = gender ;
        document.getElementById("sender-messages").innerHTML = messages ;
        document.getElementById("currenttime").innerHTML = currenttime;
}