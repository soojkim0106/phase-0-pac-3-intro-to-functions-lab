function shout(string){
    return string.toUpperCase();
}

function whisper(string1){
    return string1.toLowerCase();
}

function logShout(string2){
    console.log(string2.toUpperCase());
}

function logWhisper(string3){
    console.log(string3.toLowerCase());
}

function sayHiToHeadphonedRoommate(string4){
    if(string4 === string4.toLowerCase()){
        return "I can't hear you!"
    }
    else if(string4 === string4.toUpperCase()){
        return "YES INDEED!"
    }
    else if(string4 === "Let's have dinner together!"){
        return "I would love to!"
    }
}