var a = prompt("Enter Operator (+, -, *, /)")
var b = Number(prompt("Enter first number"))
var c = Number(prompt("Enter second number"))
var hasil = ""

if (a == "+"){
    hasil = (b + c)
}else if (a == "-"){
    hasil = (b - c)
}else if (a == "*"){
    hasil = (b * c)
}else if (a == "/"){
    hasil = (b / c)
}else{
    document.write("error")
}

document.write(hasil)
