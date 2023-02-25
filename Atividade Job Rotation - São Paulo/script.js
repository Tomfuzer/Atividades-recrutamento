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

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const obj = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

//Convertando para array de arrays
const arr = obj.map(function (obj) {
  return Object.keys(obj).map(function (chave) {
    return obj[chave];
  });
});

// console.log(arr);
// console.log('tamanho array:', arr.length);

var lista = [];
//Criando array apenas com dias em que houve faturamento
for (let i = 0; i < arr.length; i++) {
  if (arr[i][1] > 0) {
    lista.push(arr[i][1]);
  }
}

//Calculado a média em cima dos dias em que houve faturamento
console.log('tamanho lista:', lista.length);
const media =
  lista.reduce(function (acc, cur, i, arr) {
    return acc + cur;
  }) / lista.length;

console.log(`Valor da média é: R$ ${Number(media).toFixed(2)}`);

//Cálculo do menor valor
var menorValor = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i][1] === 0) continue;
  if (menorValor === 0) menorValor = arr[i][1];
  if (arr[i][1] < menorValor) menorValor = arr[i][1];
}
//Cálculo do maior valor
var maiorValor = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i][1] === 0) continue;
  if (maiorValor === 0) maiorValor = arr[i][1];
  if (arr[i][1] > maiorValor) maiorValor = arr[i][1];
}

//Verificação da quantidade de dias em que o faturamento foi acima da média
var acimaMedia = media;
var totalDias = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i][1] === 0) continue;
  if (arr[i][1] > acimaMedia) totalDias++;
}

console.log('Menor valor: R$', menorValor);
console.log('Maior valor: R$', maiorValor);
console.log('Total de dias acima da média:', totalDias);

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

var sp = 67836.43;
var rj = 36678.66;
var mg = 29229.88;
var es = 27165.48;
var outros = 19849.53;
var totalFaturamento = sp + rj + mg + es + outros;
console.log(totalFaturamento);

//Função pra calcular o percentual correspondente de cada local
const percentualFaturamento = function (total, valor) {
  valor = (valor * 100) / total;
  return valor;
};

console.log(
  `O valor percentual de faturamento por região é: SP: ${percentualFaturamento(
    totalFaturamento,
    sp
  ).toFixed(2)}%\nRJ: ${percentualFaturamento(totalFaturamento, rj).toFixed(
    2
  )}%\nMG: ${percentualFaturamento(totalFaturamento, mg).toFixed(
    2
  )}%\nES: ${percentualFaturamento(totalFaturamento, es).toFixed(
    2
  )}%\nOutros: ${percentualFaturamento(totalFaturamento, outros).toFixed(2)}% `
);

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
