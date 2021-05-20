const fatorial = function(x){
    if (x>1){
        return x * fatorial(x-1)
    } else if(x==0 || x==1){
        return 1
    }
    
    return x
    
}
console.log(fatorial(0))
