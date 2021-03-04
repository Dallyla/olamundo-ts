
var p = document.createElement('p');
var ola:string = "oioioioi";
p.textContent = ola;
document.body.appendChild(p);

var num: number = 10; //numérico
var bool: boolean = true; //boleano -> true or false mas não recebe 1 e 0
var str: string = "A beautiful message"; //aspas duplas
var str2: string = 'A beautiful message'; //aspas simples
var str3: string = `${str2} to william
finishing my string todaay`;  //template string

console.log(str3);

// function func():void {}  // um tipo primitivo. usado para funções que não retornam nada

// if (bool !== null) {}

// if(bool !== undefined) {}

var list: number[] = [1,2,3]; //array (numérico)
var list2: Array<number> = [1,2,3]; //array de tipo genérico

//tupla: array de tamanho pré-definido o qual você pode
//dizer o tipo dos objetos que serão inseridos no array

var tuple: [string, number];
var tupla1 = ["william", 22];

//enum permite definir um grupo de constantes nomeadas
enum Day{
    MONDAY,
    TUESDAY=5,
    WEDNESDAY,
    THURSDAY
}
var day = Day.TUESDAY;
console.log(`day: ${Day[0]} ${Day[5]} ${Day[6]} ${Day[7]}`); 
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
function add(v1:any,v2:any,v3?:any): any{
    if (v3!== undefined)
        return v1+v2+v3;
    return v1+v2;
}

console.log(`${add("olá","tudo bem?","how are you?")}`);

//type casting (mudar o tipo da variável)
//Existem 2 formas
let var1: any = "sasa";
let stringLength: number = (<string>var1).length;
 //<string> define o tipo da variável que antes era any
let stringUpperCase: string = (var1 as string).toUpperCase();
// as também vai tranformar var 1 em string

console.log(stringLength);
console.log(stringUpperCase);

/*rest parameters
When the number of parameters that a function will receive
is not known or can vary, we can use rest parameters.
In JavaScript, this is achieved with the "arguments" variable. 
However, with TypeScript, we can use the rest parameter denoted by ellipsis ....*/

function add2(v1:string, ...v2: number[]): void{
    let sum:number = 0;
    for(let i=0; i<v2.length; i++){
        sum += v2[i];
    }
    console.log(v1+sum);

}

add2("Sum is: ", 1,2,4,5,6);  //por conta do ... não precisa chamar entre []