//Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
//Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)


function kolikoJeDovoljno(kolikoPice, brojGodina) {
    return  (100 - brojGodina) * 12 * kolikoPice
}
console.log(kolikoJeDovoljno(1,99))
