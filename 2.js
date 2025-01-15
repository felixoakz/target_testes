function verificaFibonacci(numero) {
    let a = 0, b = 1;

    while (b < numero) {
        console.log(a, b);
        [a, b] = [b, a + b];
    }

    if (numero === a || numero === b) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

verificaFibonacci(21);
