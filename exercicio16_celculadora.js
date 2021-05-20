var calculadora = function(x, sinal, y){

    x=10
    y=12
    sinal = '+'
    
    switch(calculadora){
        case sinal=='+':
            console.log(x+y)
            break;
        case sinal=='-':
            console.log(x-y)
            break;
        case sinal=='*':
            console.log(x*y)
            break;
        case sinal=='/':
            console.log(x/y)
            break
        default:
            console.log('Operação inválida')
    
    }
}


calculadora()




