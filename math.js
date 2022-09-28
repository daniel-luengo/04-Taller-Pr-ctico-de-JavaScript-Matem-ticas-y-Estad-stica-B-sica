
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado



// console.log({
//     ladoCuadrado,
//     perimetroCuadrado,
//     areaCuadrado
// })


// const ladoTriangulo1 =6;
// const ladoTriangulo2 =6;
// const ladoTrianguloBase =4;
// const alturaTriangulo = 5.5;

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
// const areaTriangulo =  (ladoTrianguloBase * alturaTriangulo) / 2


// console.log({
//     ladoTriangulo1 ,
//     ladoTriangulo2,
//     ladoTrianguloBase,
//     alturaTriangulo,
//     perimetroTriangulo,
//     areaTriangulo

// })



function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: base * altura /2
    }
}

console.log(calcularTriangulo(5, 5, 5, 2))



console.group('Circle')

const radioCirculo =3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
})


function CalcularCirculo(radio) {
    const diametro = radio *2;
    const radioAlCuadrado = Math.pow(radio,)

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
    }
}



function calcularAlturaTriangulo () {
    
}



console.groupEnd('Circle')


































// console.group('Cuadrado') 

// const ladoCuadrado = 5;
// const perimetroCuadrado = ladoCuadrado * 4;
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.log({
//   ladoCuadrado,
//   perimetroCuadrado,
//   areaCuadrado,
// });

// function calcularCuadrado(lado) {
//   return {
//     perimetro: lado * 4,
//     area: lado * lado,
//   };
// }

// console.groupEnd('Cuadrado') 

// console.group('Triangulo')

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTrianguloBase = 4;
// const alturaTriangulo = 5.5;

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
// const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

// function calcularTriangulo(lado1, lado2, base, altura) {
//   return {
//     perimetro: lado1 + lado2 + base,
//     area: (base * altura) / 2,
//   };
// }

// console.log({
//   ladoTriangulo1,
//   ladoTriangulo2,
//   ladoTrianguloBase,
//   alturaTriangulo,
//   perimetroTriangulo,
//   areaTriangulo,
// });

// console.groupEnd('Triangulo') 
