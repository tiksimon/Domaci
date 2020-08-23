
import {input} from './4.js'
import {sumOfIncome, sumOfExprenses, sub, percentage } from './1.js'

const incomePar = document.querySelector('#sum-income')
const expensesPar = document.querySelector('#sum-expenses')
const subtractionPar = document.querySelector('#subtraction')

const percentPar = document.createElement('p')
percentPar.id = 'percent'

const sumPrint = () =>{
    if(input.filter(el => el.status === 'Prihodi')){ 
        incomePar.innerHTML = ` <p>Prihodi</p> 
                                <p class="right">+ ${(Math.round(sumOfIncome * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>` 
    }
    if(input.filter(el => el.status === 'Rashodi')){
        expensesPar.innerHTML = `<p>Rashodi</p> 
                                 <p class="right">- ${(Math.round(sumOfExprenses * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>`
        percentPar.innerHTML = `${Math.round(percentage)}%`
        expensesPar.append(percentPar)
    }
    if(sub > 0){
        subtractionPar.innerHTML = `+${(Math.round(sub * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
       
    }
    else{
        subtractionPar.innerHTML = `${(Math.round(+sub * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
       
    }
}

export { incomePar, expensesPar, subtractionPar, sumPrint }