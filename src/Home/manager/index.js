import { UseActivitiesContext } from "../../context"
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';


import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Container from "./styled"
import {
    TableAdm, Thead, Tr, Td, RobotoStyle
} from '../../components/style/table'

export default function Manager() {

    const { 
        activitieState: {
            item:{
                title,
                description,
                completed
            },
            activities
        },
        setCompleted,
        setTitle,
        setDescription,
        setAddactivitie,
        setRemoveActivitie
        
    } = UseActivitiesContext()

    function addAtivitie() {
        if (!title){
            return toast.error('O campo Titulo deve ser preenchido')
            
        }
        if (!description){
            return  toast.error('O campo Descrição deve ser preenchido')
        }   
        setAddactivitie({title: title, description: description, completed: completed})
        toast.success('✨A atividade foi Cadastrada✨')
    }

    const confirmDelete = (id) => {
        confirmAlert({
          title: "Remover Atividade",
          message: `Tem certeza que deseja remover esta Atividade? `,
          buttons: [
            {
              label: "Sim",
              onClick: () => setRemoveActivitie(id)
            },
            { label: "Não" },
          ],
        });
      };

    return(
        <Container>
            <ToastContainer/>
            <Link to="/listar">VER A ATIVIDADES  </Link>
            <div className="container-form">
                <h1>Lista de Tarefas</h1>
                <form>
                    <div className="divInput">
                        <span>Titulo: </span>
                        <input type="text"  value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    
                    <div className="divInput">
                        <span>Descrição: </span>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>

                    <div className="divInput chk">
                        <span>Concluida: </span>
                        <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)}/> 
                    </div>
                    <RobotoStyle>Selecionado = Concluido</RobotoStyle>
                    <br/><RobotoStyle>Não selecionado = Não concluido</RobotoStyle>  
                    
                </form>            
                <button className="add" onClick={addAtivitie}>ADICIONAR</button>
            </div>    
            
            <h2>Previa de Atividades</h2>
               
            <TableAdm
                size="80%"
            >
                <Thead >
                    <tr >
                        <th >
                            <RobotoStyle > Titulo </RobotoStyle>
                        </th>
                        <th >
                            <RobotoStyle> Descrição </RobotoStyle>
                        </th>
                        <th >
                            <RobotoStyle> Status </RobotoStyle>
                        </th>
                        <th ></th>
                    </tr>
                </Thead>
            <tbody>
                {activities.map(item => (
                    <Tr key={item.id}>
                        <Td> {item.title.length >= 15  ? item.title.substring(0,15) + '...' : item.title} </Td>
                        <Td> 
                            <input type="checkbox"  
                                checked={item.completed}
                                readOnly={true}
                            /> 
                        </Td>
                        <Td> {item.description.length >= 30  ? item.description.substring(0,30) + '...': item.description }  </Td>
                        <Td config={{ width: '5em' }}
                            onClick={() => confirmDelete(item.id)}
                        >
                            <img className="iconDelete" src="/assets/images/trash.svg" alt="trash.svg"/>
                        </Td>
                    </Tr>    
                ))} 
            </tbody>
            </TableAdm>
    

        </Container>
    )
}