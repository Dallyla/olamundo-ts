var p = document.createElement('p');
var ola = "oioioioi";
p.textContent = ola;
document.body.appendChild(p);
var num = 10; //numérico
var bool = true; //boleano -> true or false mas não recebe 1 e 0
var str = "A beautiful message"; //aspas duplas
var str2 = 'A beautiful message'; //aspas simples
var str3 = str2 + " to william\nfinishing my string todaay"; //template string
console.log(str3);
// function func():void {}  // um tipo primitivo. usado para funções que não retornam nada
// if (bool !== null) {}
// if(bool !== undefined) {}
var list = [1, 2, 3]; //array (numérico)
var list2 = [1, 2, 3]; //array de tipo genérico
//tupla: array de tamanho pré-definido o qual você pode
//dizer o tipo dos objetos que serão inseridos no array
var tuple;
var tupla1 = ["william", 22];
//enum permite definir um grupo de constantes nomeadas
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 5] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 6] = "WEDNESDAY";
    Day[Day["THURSDAY"] = 7] = "THURSDAY";
})(Day || (Day = {}));
var day = Day.TUESDAY;
console.log("day: " + Day[0] + " " + Day[5] + " " + Day[6] + " " + Day[7]);
//imprime day: MONDAY TUESDAY WEDNESDAY THURSDAYj
// para informar que um argumento de uma função não é obrigatório "?"
//quando houver a chamada da função é opcional passá-lo
// function add(v1:number,v2:number,v3?:number): number{
//     if (v3!== undefined)
//         return v1+v2+v3;
//     return v1+v2;
// }
// console.log(`${add(1,5,5)}`);
//any é utilizado quando não se sabe o tipo do retorno, o tipo dos parâmetros, etc
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log("" + add("olá", "tudo bem?", "how are you?"));
//type casting (mudar o tipo da variável)
//Existem 2 formas
var var1 = "sasa";
var stringLength = var1.length;
//<string> define o tipo da variável que antes era any
var stringUpperCase = var1.toUpperCase();
// as também vai tranformar var 1 em string
console.log(stringLength);
console.log(stringUpperCase);
/*rest parameters
When the number of parameters that a function will receive
is not known or can vary, we can use rest parameters.
In JavaScript, this is achieved with the "arguments" variable.
However, with TypeScript, we can use the rest parameter denoted by ellipsis ....*/
function add2(v1) {
    var v2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        v2[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add2("Sum is: ", 1, 2, 4, 5, 6); //por conta do ... não precisa chamar entre []
