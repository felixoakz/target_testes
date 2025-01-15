import fs from 'fs'

fs.readFile('./dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }

    const dados = JSON.parse(data);

    analiseFaturamento(dados);
});

function analiseFaturamento(dados) {

    const valores = dados.filter(d => d.valor > 0).map(d => d.valor);
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;

    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);

    const diasAcimaMedia = valores.filter(v => v > media).length;

    console.log(`Menor valor de faturamento: ${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: ${maiorValor.toFixed(2)}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
}
