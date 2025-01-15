function inverteString(texto) {
    let invertida = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }

    console.log(`String invertida: ${invertida}`);
}

inverteString("cachorro");
