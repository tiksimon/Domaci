

    // Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

    

    let pokemon1 = {
        ime: 'pikacu1' ,
        vrsta: 'elektricni1' ,
        sposobnosti: 'Staticki elektricitet1' ,
        karakteristike: {
            napad: 5 ,
            odbrana: 8 ,
            brzina: 10 ,
            jacina: 18 ,
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
            jacina: 28 ,
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
            jacina: 30 ,
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
            jacina: 50 ,
        }
    }

    let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]

    function izdvajanjePoJacini(pokemoni) {
        let pokemon = pokemoni[0]
        for(let i = 1; i < pokemoni.length; i++) {
            if(pokemon.karakteristike.jacina < pokemoni[i].karakteristike.jacina) {
                pokemon = pokemoni[i]
            }
        } 
        return pokemon
    } 
    console.log(izdvajanjePoJacini(pokemoni))
    
// За дати html направити скрипту која:

    //     <div class="wrapper">
    // 		<button id="prikaz">PRIKAZI POKEMONE</button>
    // 		<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
    // 	</div>


const body = document.querySelector('body');
const divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
body.appendChild(divWrapper);

const PrikaziPokemone = document.createElement('button');
PrikaziPokemone.id = 'prikaz';
PrikaziPokemone.textContent = 'PRIKAZI POKEMONE';
divWrapper.appendChild(PrikaziPokemone);

const NajjaciPokemon = document.createElement('button');
NajjaciPokemon.id = 'pobednik';
NajjaciPokemon.textContent = 'PRIKAZI NAJJACEG POKEMONA';
divWrapper.appendChild(NajjaciPokemon);

PrikaziPokemone.addEventListener('click', function sviPokemoni() {

    pokemoni.forEach(el => {
        const divAll = document.createElement('div');
        body.appendChild(divAll);  
        const par = document.createElement('p');
        par.textContent = el.ime;
        divAll.appendChild(par)
        const img = document.createElement('img');
        img.src = el.slika;
        divAll.appendChild(img)
    })
})

NajjaciPokemon.addEventListener('click', function najjaciPokemon() {
    
    const div = document.createElement('div');
    body.appendChild(div);
    const p = document.createElement('p');

    pokemoni.sort((a, b) => b.karakteristike.jacina - a.karakteristike.jacina)
    p.textContent = pokemoni[0].ime;
    div.appendChild(p);
    const img = document.createElement('img');
    img.src = pokemoni[0].slika;
    div1.appendChild(img)
})
// 5. За дати html направити скрипту која:
// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

const prikazi = document.querySelector('#prikaz')
const wrapperDiv = document.querySelector('.wrapper')
const dugmeZaPobednika = document.querySelector('#pobednik')
const divPobednik = document.createElement('div') 
const prikaziDiv = document.createElement('div')


prikazi.addEventListener('click', (e) => {
    pokemoni.forEach( el => {

        const pokemonParagraf = document.createElement('p')
        const infoOPokemonu = document.createElement('p')
        pokemonParagraf.textContent = `Name: ${el.name}|| Type: ${el.type}|| Abilities: ${el.abilities}||`
        infoOPokemonu.textContent = el.about
    
        const pokemonImg = document.createElement('IMG')
        pokemonImg.src = el.image
        pokemonImg.height = 100

        prikaziDiv.append(pokemonImg, pokemonParagraf, infoOPokemonu)
        wrapperDiv.append(prikaziDiv)
    })
    winnerDiv.classList.add('hide')
    winnerDiv.innerHTML = ''
    prikaziDiv.classList.remove('hide')
})
// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад 
// (користити већ написану функцију иѕ 4. задатка) по истом формату.

dugmeZaPobednika.addEventListener('click', (e) => {
    najjaciPokemon(pokemoni)

    const winnerPar = document.createElement('p')
    const infoOPobedniku = document.createElement('p')
    winnerPar.textContent = `Name: ${pokemoni[0].name}|| Type: ${pokemoni[0].type}|| Abilities: ${pokemoni[0].abilities}||`
    infoOPobedniku.textContent = pokemoni[0].about

    const winnerImg = document.createElement('IMG')
    winnerImg.src = pokemoni[0].image
    winnerImg.height = 100

    winnerDiv.append(winnerPar, winnerImg)
    wrapperDiv.append(winnerDiv)

    prikaziDiv.classList.add('hide')
    prikaziDiv.innerHTML = ''
    winnerDiv.classList.remove('hide')
})