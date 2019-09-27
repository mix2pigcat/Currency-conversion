function conv() {
    let a = Number(document.getElementById('a').value);
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;

    if (select1 == "vnd" && select2 == "usd") {
        result = a / 23000;
    } else if (select1 = "usd" && select2 == "vnd") {
        result = a * 23000;
    }
    document.getElementById("display").innerHTML=result ;
}