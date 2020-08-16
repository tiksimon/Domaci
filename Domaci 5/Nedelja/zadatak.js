// Napraviti hijerarhiju klasa koje opisuje ljude na fakultetu.

//     Osnovne klase koje treba implementirati (sa njihovim poljima):
//         Čovek: ime, prezime, godina rođenja
//         Student: trenutna godina studija, trenutni prosek
//             Student osnovnih studija: smer osnovnih studija
//             Student master studija: smer master studija
//         Zaposleni: godina zaposlenja, plata
//             Nastavnik: omiljeni predmet, listu predmeta na kojima drži nastavu
//                 Profesor: titula (docent, vanredni, redovni)
//                 Asistent: smer doktorskih studija
//         Službenik: odsek

class Covek {
    constructor(ime, prezime, godinaRodjenja) {
        this.ime = ime;
        this.prezime = prezime;
        this.godinaRodjenja = godinaRodjenja
    }
}

class Student {
    constructor(trenutnaGodinaStudija, trenutniProsek) {
        this.trenutnaGodinaStudija = trenutnaGodinaStudija;
        this.trenutniProsek = trenutniProsek
    }
}

    class StudentOsnovnihStudija extends Student {
        constructor(trenutnaGodinaStudija, trenutniProsek,smerOsnovihStudija) {
            super(trenutnaGodinaStudija, trenutniProsek);
            this.smerOsnovihStudija = smerOsnovihStudija
        }
    }


    class StudentMasterStudija extends Student {
        constructor(trenutnaGodinaStudija, trenutniProsek,smerMasterStudija) {
            super(trenutnaGodinaStudija, trenutniProsek)
            this.smerMasterStudija = smerMasterStudija
        }
    }

class Zaposleni {
    constructor(godinaZaposlenja, plata){
        this.godinaZaposlenja = godinaZaposlenja;
        this.plata = plata
    }
} 

    class Nastavnik extends Zaposleni {
        constructor(godinaZaposlenja, plata, omiljeniPredmet, listuPredmetaNaKojimaDržiNastavu) {
            super(godinaZaposlenja, plata)
            this.omiljeniPredmet = omiljeniPredmet;
            this.listuPredmetaNaKojimaDržiNastavu = listuPredmetaNaKojimaDržiNastavu
        }
    } 
            
        class Profesor extends Nastavnik {
            constructor (godinaZaposlenja, plata, omiljeniPredmet, listuPredmetaNaKojimaDržiNastavu, titula) {
                super(godinaZaposlenja, plata, omiljeniPredmet, listuPredmetaNaKojimaDržiNastavu)
                this.titula = titula
            }
        } 

        class Asistent extends Nastavnik {
            constructor (godinaZaposlenja, plata, omiljeniPredmet, listuPredmetaNaKojimaDržiNastavu, smerDoktorskihStudija){
                super(godinaZaposlenja, plata, omiljeniPredmet, listuPredmetaNaKojimaDržiNastavu)
                this.smerDoktorskihStudija = smerDoktorskihStudija
            }
        }

class Sluzbenik {
    constructor (odsek) {
        this.odsek = odsek
    }
}


let covek = new Covek('Jovan', 'Ilic', 1997);
console.log(covek);


let student = new Student(4, 9.03);
console.log(student);

let studentOsnovnihStudija = new StudentOsnovnihStudija ('Geologija')
console.log(studentOsnovnihStudija)

let zaposleni = new Zaposleni(2019, 125000)
console.log(zaposleni)

listaPredmeta = ['Geologija Foslinih goriva', 'Lezista i istrazivanje nafte i gasa', 'Procena resursa nafte i gasa']
console.log(listaPredmeta)

let nastavnik = new Nastavnik('Geologija Foslinih goriva', listaPredmeta)
console.log(nastavnik)

let titula = ['docent', 'vanredni', 'redovni']

let profesor = new Profesor(2013, 95000,'Lezista i istrazivanje nafte i gasa', listaPredmeta,'redovni')
console.log(profesor)