import { sql } from "@vercel/postgres";

async function fetchConcultaAll(){
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