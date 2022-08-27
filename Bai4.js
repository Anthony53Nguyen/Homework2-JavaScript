document.getElementById("go").onclick = function () {
    
    var l = document.getElementById("length").value*1;
    var w = document.getElementById("width").value*1;
    
    var area = l*w
    var circum = (l+w)*2;

    var result = ""
    result += "<p>Area: " + area + " </p>"
    result += "<p>Circumference: " + circum + " </p>"


    document.getElementById("res").innerHTML = result
}