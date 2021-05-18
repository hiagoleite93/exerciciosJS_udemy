const baskara = function (a, b, c) {
    const delta = (b ** 2) - (4 * a * c)
    console.log(`O delta vale ${delta}`);

    if (delta < 0) {
        console.log('Delta é negativo')
    }

    else if (delta == 0) {
        const x = ((-b) + Math.sqrt(delta)) / 2 * a
        console.log(`x=${x.toFixed(2)}`)
    }

    else if (delta > 0) {
        const x = ((-b) + Math.sqrt(delta)) / 2 * a
        const y = ((-b) - Math.sqrt(delta)) / 2 * a
        console.log(`x=${x.toFixed(2)}, y=${y.toFixed(2)}`)
    }
}
baskara(1, -4, -3)
baskara(1, 0, -9)
baskara(6, 0, 0)
baskara(-4, 2, 0)