document.getElementById("go").onclick = function () {
    
    var rate = document.getElementById("rate").value*1;
    var us = document.getElementById("us").value*1;
    
    var currentFormat = new Intl.NumberFormat("VN-vn");

    var vnd = rate*us;

    var result = ""
    result += "<p>Amount in vnd: " + currentFormat.format(vnd) + " dong</p>"

    document.getElementById("vnd").innerHTML = result
}