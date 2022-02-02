import { UseActivitiesContext } from "../../context"
import { Link } from 'react-router-dom'

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


    return(
        <Container>
            
            <h1>Lista de Tarefas</h1>
            <form>
                <div className="divInput">
                    <span>Titulo: </span>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                
                <div className="divInput">
                    <span>Descrição: </span>
                   <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>

                <div className="divInput chk">
                    <span>Concluida: </span>
                    <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)}/>    
                </div>
            </form>            
                <button className="add" onClick={() => setAddactivitie({title: title, description: description, completed: completed})}>ADICIONAR</button>
            
            <h2>Previa de Atividades Adicionadas </h2>
            <Link to="/listar">VER COMPLETO</Link>
               
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
                            
                            <th >
                            </th>
                        
                    </tr>
                </Thead>

            {activities.map(item => (
                <Tr key={item._id}>
                    <Td> {item.title} </Td>
                    <Td> <input type="checkbox" checked={item.completed} readOnly={true} /> </Td>
                    <Td>  {item.description}  </Td>
                    <Td config={{ visibility: 'hidden', width: '5em' }}
                        onClick={() => setRemoveActivitie(item.id)}
                    >
                        <img className="iconDelete" src="/assets/images/trash.svg" alt="trash.svg"/>
                    </Td>
                </Tr>    
            ))} 
            </TableAdm>
    

        </Container>
    )
}