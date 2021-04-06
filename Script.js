//var num = 123122 // type number
//var name1 = "Jack" // type string
//var name2 = "Tom"

// alert(name1); // modal oyna
//document.write(name1 + " " + name2) // browzer ekraniga chiqarad
// console.log(name1, name2);

//var name1 = "Jerry"
//console.log(name1);
//var name1 = "Tom"
//console.log(name1);

//var name1 = prompt("Ismingizni kiriting:", "ism quy bu yer//ga");
//var surname = prompt("Familiyangizni kiritin:")
//console.log(name1);
//document.write("Ismingiz : " + name1 + " " + "Familiyangiz: " + surname )

var a =  son1 = prompt("Birinchi son kiriting:");
var b =  son2 = prompt("Ikkinchi son kiritin:")
var c =  amal = prompt("Amalni kiritin:")

    if (isNaN(a, b)){
        document.write( "XARF KIRITMANG");
    }
    if (amal == "*"){
        document.write(a * b);
    }
    if (amal == "+"){
        document.write(+a + + b);
    }
    if (amal == "-"){
        document.write(a - b);   
    }

    if (amal == "/"){
    document.write(a / b);    
    }
