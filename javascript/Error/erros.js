function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");
        if(typeof arr !== 'Object') throw new TypeError("Nao é um objeto");
        if(typeof num !== 'number') throw new TypeError("Nao e numero");
        if(arr.length !== num) throw new RangeError("Tamanho diferente");
    }catch(e){
        if(e instanceof ReferenceError){
            console.log(e.messege);
        }else if(e instanceof TypeError){
            console.log(e.messege);
        }else if(e instanceof TypeError){
            console.log(e.messege);
        }
    }
}
console.log(validaArray());