//1)

var i = 13;
var k = 0;
var soma = 0;

while (k < i) {
  k = k + 1;
  soma = soma + k;
}
console.log(soma);

//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

var fib = [];
fib[0] = 0;
fib[1] = 1;

const num = Number(prompt('Digite um número: '));
//Realiza um loop for pra calcular os números da sequência Fibonacci, caso o número da sequencia seja igual ou maior, ele para o processamento.
for (var i = 2; ; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  if (fib[i] >= num) break;
}
console.log(fib);

if (fib.includes(num)) {
  console.log(`O número ${num} está contido na sequência de Fibonacci`);
} else {
  console.log(`O número ${num} NÃO está contido na sequência de Fibonacci`);
}

// 3)

//a) 1,3,5,7,>9< (lógica: Sempre somar +2)
//b) 2,4,8,16,32,64,>128< (Lógica: multiplicando por 2)
//c) 0,1,4,9,16,25,36,>49< (Lógica: Somando o elmento atual a uma sequencia paralela de numeros impares 0+1 1+3 4+5 e assim em sequência )
//d) 4,16,36,64,>100< (Lógica: 16-4 = 12, 36-16 = 20, 64-36 = 28... o próximo número é igual a soma do número atual mais a diferença entre o atual e o último somando 8)
//e) 1,1,2,3,5,>8< (Lógica: Sequência Fibonacci do exercício acima)
//f) 2,10,12,16,17,18,19,>200< (Lógica: números naturais que comcem com a letra D?)

// 4)

//Equação carro: x1 = v1 * t
//Equação caminhão: x2 = 100km - v2 * t //Caminão partindo do ponto 0 a um ponto com d = 100km

//Tempo da viagem do caminhão sem obstáculos = 100km/80(km/h) = 1,25h - Como o caminhão possuí um acréscimo de 10 min na viagem, 10 min = 0,17h, tempo total da viagem pro caminhão = 1,42h com velocidade média total de 70,6Km/h

//Igualando as equações  horárias temos que:
//x1 = x2 => x/v1 = x -100km/(-v2)
//-v2*x = v1*x - v1*100km
//x = (v1 * 100km) / v1 + v2 = (110(km/h) * 100km)/110(km/h)+70,6(km/h)
//x = 60,9km

// 5) Escreva um programa que inverta os caracteres de um string.

const string = String(prompt('Digite uma string: '));
console.log(string);
var aux = [...string];
console.log(aux);
var tam = aux.length - 1;

var inverso = [];
for (let i = 0; i <= tam; i++) {
  inverso.push(aux[tam - i]);
}

console.log(inverso);
console.log(inverso.join(''));
