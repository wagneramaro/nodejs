export let versao = '1.0';
export function somar(x:number, y:number): number{
    return x + y;
}

export function subtrair(x:number, y:number): number{
    return x - y;
}

export function multiplicar(x:number, y:number): number{
    return x * y;
}


/* Exportar como ES6 
export default {
    somar,
    subtrair,
    multiplicar,
    versao
}
*/

/* CommonJS 
module.exports.somar = somar;
module.exports.subtrair = subtrair;
module.exports.multiplicar = multiplicar;*/