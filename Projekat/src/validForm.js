
// Постоји форма којом убацујемо информације о приходу/расходу и она се састоји од:
// Dropdown којим се бира приход/расход
// Текстуални опис трансакције (не може бити празан)
// Износ трансакције (пазити да се не уносе негативни бројеви,нити 0)
// Дугме за потврду, којим се убацују елементи у одговарајућу листу
// Постоје две листе (једна за расходе, друга за приходе) (Напомена: Ове листе не мрају конкретно бити ul или ol, већ се може реализовати на други начин, ако вам је лакше)
// Елементима листе се на hover појављује дугме за уклањање тог елемента
// Сваки елемент садржи Опис и цену, док елементи за расходе,садрже и додатну информацију о томе колики проценат од укупне зараде чине (ако смо зарадили 100рсд и потрошили 2.3рсд, поред трансакције од 2.3рсд стоји 2.3%)
// Постоје информације о укупним приходима,расходима и укупном стању, које се мењају сваки пут када се нека од листа промене. Расход такође има информацију о проценту
// Радити са модулима.


const selektovanje = document.querySelector('#selektovanje')
const opisInput = document.querySelector('#unos-opis')
const iznosInput = document.querySelector('#unos-iznosa')

const greska = document.querySelector('#poruka-greske')

const divPrihodi = document.querySelector('#div-prihod')
const divRashod = document.querySelector('#div-rashod')

const procenti = document.querySelector('#procenti')

const button = document.querySelector('.btn')

const iznosDiv = document.querySelector('#iznos')
const prihod = document.querySelector('#iznos-prihod')
const rashod = document.querySelector('#iznos-rashod')

let ukupanIznos = 0.0
let ukupanRashod = 0.0
let ukupanPrihod = 0.0
let noviProcenti = 0.0

const isValid = () => selektovanje.value.trim() !== "" 
    && opisInput.value.trim() !== ''
    && iznosInput.value.trim() !== ''
    && !Number.isNaN(Number(iznosInput.value.trim()))
    && Number(iznosInput.value.trim()) > 0 

button.addEventListener('click', (e) => {
    e.preventDefault()
    if(!isValid()){
        greska.innerHTML = "Pogresan unos!"
        return
    }

    greska.innerHTML = ""

    const selekcija = selektovanje.value.trim()
    const opis = opisInput.value.trim();
    const iznos = Number(iznosInput.value.trim())

    if(selekcija === 'P') {
        const noviPrihod = document.createElement("div")
        noviPrihod.classList.add("okvir")
        noviPrihod.innerHTML = "Opis: " + opis + " " + "Iznos: " + iznos
        divPrihodi.appendChild(noviPrihod)
        
        ukupanPrihod += iznos
        prihod.innerHTML = ukupanPrihod
    } else {
        const noviRashod = document.createElement("div")
        noviRashod.classList.add("okvir")
        noviRashod.innerHTML = "Opis: " + opis + " " + "Iznos: " + iznos
        divRashod.appendChild(noviRashod)

        ukupanRashod += iznos
        rashod.innerHTML = ukupanRashod
    }

    ukupanIznos = ukupanPrihod - ukupanRashod
    iznosDiv.innerHTML  = ukupanIznos
    
    noviProcenti = (ukupanRashod/ukupanPrihod)*100
    console.log(noviProcenti)
    procenti.innerHTML = noviProcenti + '%'


    console.log(procenti)
})




   
// export { opisInput, iznosInput,  }