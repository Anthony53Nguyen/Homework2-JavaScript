document.getElementById("go").onclick = function () {
    
    var num = document.getElementById("num").value*1;
    
    var sum = (num % 10) + Math.floor(num/10)
    

    var result = ""
    result += "<p>Sum of two digits of " + num + " is: " + sum + " </p>"
    


    document.getElementById("res").innerHTML = result
}