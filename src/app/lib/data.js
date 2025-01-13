import { sql } from "@vercel/postgres";

async function fetchConcultaAll(){
    // console.log('Buscando Dados')
    // await new Promise((resolve) => setTimeout(resolve, 3000)) //Simulando atraso em uma requisição
    // console.log('Feito')
    const consult =  await sql `
    SELECT * FROM users
`
return consult
}

async function fetchCount(){
    const acount = await sql `
        SELECT * FROM users
    `
    const total = acount.rowCount

    return(total)
}


export {fetchConcultaAll, fetchCount}