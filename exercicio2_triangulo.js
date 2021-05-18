const triangulos = function (a, b, c) {
    if (a == b && b == c) {
        console.log('Triângulo equilátero!')
    } else if ((a == b && b != c) || (a == c && b != c)) {
        console.log('Triângulo Isosceles!')
    } else {
        console.log('Trângulo Escaleno!')
    }

}

triangulos(2, 2, 2)
triangulos(1, 1, 3)
triangulos(1, 3, 1)
triangulos(1, 2, 3)