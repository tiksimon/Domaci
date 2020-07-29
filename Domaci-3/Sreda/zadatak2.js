

// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function cenaPicePoKvadratnomCentimetru(poluprecnik, cena) {
    let PI = 3.14;
    return cena / ((poluprecnik/2)**2 * PI)
}
let resoult = cenaPicePoKvadratnomCentimetru(5, 500)
console.log ("Cena pice po cm^2 je" + " " + resoult)

