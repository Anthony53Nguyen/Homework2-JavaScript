document.getElementById("go").onclick = function () {
    
    var rate = document.getElementById("rate").value*1;
    var num = document.getElementById("num").value*1;
    
    var currentFormat = new Intl.NumberFormat("VN-vn");

    var payment = rate*num;

    var result = ""
    result += "<p>Your payment: " + currentFormat.format(payment) + " dong</p>"

    document.getElementById("total").innerHTML = result
}