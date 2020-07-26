{
    let cena = 246
    let kolicina = 121

    if (cena <= kolicina) {
        console.log ("Uspesno ste kupili proizvod")
        console.log ("Trenutno stanje: " + (kolicina - cena ))
    } else {
        console.log ("Nemate dovoljno novca")
        console.log ("Trenutno stanje:" + (kolicina))

    }
    
}