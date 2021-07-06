function myFunction(linkName){
    link = document.getElementById("sky");
    link.src = linkName;
    
}

function myFunction1(linkName){
link = document.getElementById("drudge");
link.src = linkName;

}

function myFunction2(linkName){
 link = document.getElementById("infowars");
 link.src = linkName;

}

function myFunction4(linkName){
    link = document.getElementById("sky");
    link.src = linkName;
}

function myFunction5(){
    var sky = document.getElementById("sky");
    var drudge = document.getElementById("drudge");
    var infowars = document.getElementById("infowars");

    sky.toggleAttribute("disabled");
}
