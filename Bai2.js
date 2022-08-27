document.getElementById("go").onclick = function () {
    
    var num1 = document.getElementById("num1").value*1;
    var num2 = document.getElementById("num2").value*1;
    var num3 = document.getElementById("num3").value*1;
    var num4 = document.getElementById("num4").value*1;
    var num5 = document.getElementById("num5").value*1;
    
    
    var avg = (num1 + num2 + num3 + num4 + num5)/5

    var result = ""
    result += "<p>The average is : " + avg + "</p>"

    document.getElementById("avg").innerHTML = result
}