document.write("<br/>");

for(var i = 0; i < 10; i++){
    for(var y = 0; y < 7; y++){
        document.write("&nbsp");
    }
    for(var p = 0; p < 40; p++){
       document.write("*"); 
    }
    document.write("<br/>");
}    
document.write("<br/>");

for(var i = 0; i < 15; i++){
    for(var p = 0 + i * 2; p < 35; p++){
        document.write("&nbsp");
    }
    for(var y = 0; y < 1 + i; y++){
        document.write("*");
    }
    document.write("<br/>");
}
document.write("<br/>");

for(var i = 0; i < 15; i++){
    for(var p = 0 + i * 2; p < 35; p++){
        document.write("&nbsp");
    }
    for(var y = 0; y < 1 + i * 2; y++){
        document.write("*");
    }
    document.write("<br/>");
}
document.write("<br/>");

for(var i = 0; i < 10; i++){
    for(var y = 0 + i; y < 20; y++){
        document.write("&nbsp");
    }
    for(var p = 0; p < 1 + i; p++){
        document.write("*")
    }
    document.write("<br/>");
}

for(var i = 0; i < 11; i++){
    for(var y = 0 - i; y < 10; ++y){
        document.write("&nbsp");
    }
    for(var p = 0; p < 11 - i; p++){
        document.write("*")
    }
    document.write("<br/>");
}