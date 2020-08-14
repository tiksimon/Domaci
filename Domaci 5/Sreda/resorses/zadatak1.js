// Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

let pokemon1 = {
    ime: 'pikacu1' ,
    vrsta: 'elektricni1' ,
    sposobnosti: 'Staticki elektricitet1' ,
    karakteristike: {
        napad: 5 ,
        odbrana: 8 ,
        brzina: 10 ,
    }
}

let pokemon2 = {
    ime: 'pikacu2' ,
    vrsta: 'elektricni2' ,
    sposobnosti: 'Staticki elektricitet2' ,
    karakteristike: {
        napad: 25 ,
        odbrana: 28 ,
        brzina: 15 ,
    }
}

let pokemon3 = {
    ime: 'pikacu3' ,
    vrsta: 'elektricni3' ,
    sposobnosti: 'Staticki elektricitet3' ,
    karakteristike: {
        napad: 18 ,
        odbrana: 34 ,
        brzina: 29 ,
    }
}

let pokemon4 = {
    ime: 'pikacu4' ,
    vrsta: 'elektricni4' ,
    sposobnosti: 'Staticki elektricitet4' ,
    karakteristike: {
        napad: 45 , 
        odbrana: 36 ,
        brzina: 27 ,
    }
}

// Даље, направити низ од ових објеката

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]
console.log(pokemoni)

// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона


function izdvajanjeSposobnosti(pokemoni) {
    let sposobnostPokemona = []
    for(let i = 0; i < pokemoni.length; i++) {
       sposobnostPokemona.push(pokemoni[i].sposobnosti)
    } 
    return sposobnostPokemona
}
console.log(izdvajanjeSposobnosti(pokemoni))

// [<...>,...]

// Сортирати покемоне по брзини, растуће.

// pokemoni.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina) 
// console.log(pokemoni)

export{izdvajanjeSposobnosti}
