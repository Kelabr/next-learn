'use client'

import Link from "next/link";
import useAppContext from "../../hook/useAppContext";
import { registrarComEmailSenha } from "@/services/firebase/authentication";
import { useState } from "react";
import { auth } from "@/services/firebase/authentication";
import clsx from "clsx";
import { lusitana } from "../ui/fonts";
import Image from "next/image";

function Nomes(){
    
    const [context, setContext, nomes] = useAppContext()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] =  useState('')
    const [status, setStatus] = useState('paid')

    async function register(){
        try{
            await registrarComEmailSenha(nome, email, senha)
            console.log('Usuário registrado')
        }catch(error){
            console.error('Erro no registro do usuário: ',error.menssage)
        }
    }
    
    return(
        <>
            <form>
                <input type="text" value={nome} onChange={(value) => setNome(value.target.value)}></input>
                <input type="text" placeholder="Email" value={email} onChange={(value) => setEmail(value.target.value)}></input>
                <input type="text" placeholder="Nome" value={senha} onChange={(value) => setSenha(value.target.value)}></input>
                <button className='bg-slate-500 w-20' type="button" onClick={register}>Login</button>
            </form>
            <div
  className={`relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black`}/>
<span
      className={`${lusitana.className} ${clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}`}
    >ola</span>
    <Image
        src="/emoji.png"
        width={300}
        height={760}
        className="hidden md:block" //Você também notará a classe hiddenpara remover a imagem do DOM em telas móveis e md:blockpara mostrar a imagem em telas de desktop
        alt="Imagem de um emoji "
    />

{//Caso você queira usar uma imagem responsiva no Next.js, você pode adicionar estilos CSS ao contêiner da imagem (não diretamente ao componente Image):
}
<div style={{ width: "100%", height: "auto" }}> 
      <Image 
        src="/emoji.png"
        alt="Imagem responsiva"
        width={1000}   // Usando pixels para redimensionamento
        height={760}   // Usando pixels para redimensionamento
        layout="responsive" // Torna a imagem responsiva dentro do contêiner
      />
    </div>
        </>

    )
}

export default Nomes