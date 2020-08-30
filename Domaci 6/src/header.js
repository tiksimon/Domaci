import { getCompanyInfo } from './sourse'

const header = () => {

    const headerDiv = document.createElement('div')

    getCompanyInfo().then(res => {

        const companyName = document.createElement('p')
        companyName.textContent = `Company Name ${res.data.name}`
        headerDiv.append(companyName)

        const founder = document.createElement('p')
        founder.textContent = `Founder ${res.data.founder}`
        headerDiv.append(founder)

        const founded = document.createElement('p')
        founded.textContent = `Founded ${res.data.name}`
        headerDiv.append(founded)
    })
    return headerDiv
}