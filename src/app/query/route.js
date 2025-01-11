import { pool } from "../lib/db";
import { NextResponse } from "next/server";

export async function GET(){

    try{
       const resp =  await pool.query(`
            SELECT * FROM users
            
            `)
            return NextResponse.json(resp.rows)
    
    }catch(error){
        console.error('Erro ao buscar dados: ', error.message)
    }

    
    

}


