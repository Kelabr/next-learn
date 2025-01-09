"use client"

import Image from "next/image";
import useAppContext from "../hook/useAppContext";
import Link from "next/link";
import {registrarComEmailSenha} from '@/services/firebase/authentication'



const ola = true

// if(ola === true){
    

//   const registrar = async () =>{
//     const name = 'Danilo'
//     const email = 'dan@email.com'
//     const pwd = 'banana123'

//     await registrarComEmailSenha(name, email, pwd)
//   }

//   registrar()
// }


export default function Home() {
  const [contexto, setContexto] = useAppContext()

  return (
    <>
      <p>O valor é {contexto ? 'Verdadeiro' : 'Falso'}</p>
      <input type="checkbox" onInput={(e) =>{ setContexto(e.target.checked)}}></input>
      <Link href='/nomes'>Avançar</Link>
    </>
  );
}

