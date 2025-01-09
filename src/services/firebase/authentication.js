import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from 'firebase/auth'
import {app} from './firebaseConfig'

const auth = getAuth(app)

const loginComEmailSenha = async (email, senha) => {
    try{
        await signInWithEmailAndPassword(auth, email, senha);
    } catch (error){

    }
}

const registrarComEmailSenha = async (name, email, pwd) => {
    try{
         // Cria o usuário com e-mail e senha
        const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
        return userCredential
        
    }catch (error){
        console.error('Problema ao registrar usuário:', error.message)
        throw error
    }
}

const recuperaSenha = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email);
        alert("Email para recuperação de senha enviado")
    }catch(error){
        console.error('Erro ao enviar recuperação:', error.message)
        throw error
    }
}

const logOut = () => {
    signOut(auth)
}


export{auth, registrarComEmailSenha, recuperaSenha, logOut}