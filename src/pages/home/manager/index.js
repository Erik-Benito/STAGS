import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';

import Container from "./styled"

import { useState } from 'react';

export default function Manager() {
    const  [title, setTitle] = useState('');
    const  [description, setDescription] = useState(''); 
    const  [completed, setCompleted] = useState(false);

    function addAtivitie() {
        if (!title){
            return toast.error('O campo Titulo deve ser preenchido')
        }
        if (!description){
            return  toast.error('O campo Descrição deve ser preenchido')
        }   
        toast.success('✨A atividade foi Cadastrada✨')
    }

    return(
        <Container>
            <ToastContainer/>
            <div className="container-form">
                <h1>Lista de Tarefas</h1>
                <form>
                    <div className="divInput">
                        <span>Titulo: </span>
                        <input type="text"  value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="divInput">
                        <span>Descrição: </span>
                        <textarea type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>                   
                </form>            
                <button className="add" onClick={addAtivitie}>ADICIONAR</button>
            </div>     
        </Container>
    )
}