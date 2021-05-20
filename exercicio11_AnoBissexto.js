const anoBissexto = function(ano){
    if (ano%400==0 || ano%4==0){
        console.log(`${ano} é ano bissexto`)
    } else {
        console.log(`${ano} não é ano bissexto`)
    }
}

anoBissexto(1987)