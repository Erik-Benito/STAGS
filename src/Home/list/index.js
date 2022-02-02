import { UseActivitiesContext } from "../../context";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  TableAdm,
  Thead,
  Tr,
  Td,
  RobotoStyle,
} from "../../components/style/table";

import Container from "./styled";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function List() {

    const [activitiesArray, setActivitiesArray] = useState([])
    const [filter, setFilter] = useState("")  

    const {
      activitieState: {
        item: { id, title, description, completed },
        activities,
    },
    setCompleted,
    setTitle,
    setDescription,
    setRemoveActivitie,
    setUpdateActivitie,
    setId,
  } = UseActivitiesContext();

  function edtActivities(item) {
      setTitle(item.title)
      setDescription(item.description)
      setCompleted(item.completed)
      setId(item.id)
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

  function edtItemActivies() {
    if (!title){
      return toast.error('O campo Titulo deve ser preenchido')
        
    }
    if (!description){
        return  toast.error('O campo Descrição deve ser preenchido')
    }   
    
    setUpdateActivitie({id: id, title: title, description: description, completed: completed})
    toast.success('✨A atividade foi Atualizada')
    
    setActivitiesArray(activities)
    setFilter("Todos")
  }

  function filterActivies() {
    switch (filter) {
      case "Todos":
          setActivitiesArray(activities)
      break;
    
      case "Concluido":
        setActivitiesArray(activities.filter(item => item.completed === true))
      break;
  
      case "Não concluido":
        setActivitiesArray(activities.filter(item => item.completed === false))
      break;

      default:
        setActivitiesArray(activities)
        break;
    }
    return 
}
  useEffect( () => {filterActivies()}, [filter])
  
  
  return (
    <Container>
      <ToastContainer/>
      <Link to="/">NOVA ATIVIDADE + </Link>
      <h1>LISTA COMPLETA</h1>
      <form
        style={
          title === ""
            ? {
                pointerEvents: "none",
                opacity: "0.4",
              }
            : {}
        }
      >
        <div className="divInput">
          <span>Titulo: </span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="divInput">
          <span>Descrição: </span>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="divInput chk">
          <span>Concluida: </span>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
        </div>
      </form>
      <button className="add"
        style={ title === "" ? {
                pointerEvents: "none",
                opacity: "0.4",
              } : { }
            }
        onClick={edtItemActivies}
      >
        ALTERAR
      </button>
      <div className="tables">
          <div className="filter">
            <label>FILTROS:</label>
            <label><input name="radioInput" checked={ filter === "Todos" ? true : false} onClick={() => setFilter("Todos")} type="radio" value="Todos"/>         <span>Todos</span>             </label>
            <label><input name="radioInput" checked={ filter === "Concluido" ? true : false} onClick={() => setFilter("Concluido")} type="radio" value="Concluido"/>     <span>Concluido</span>         </label>
            <label><input name="radioInput" checked={ filter === "Não concluido" ? true : false} onClick={() => setFilter("Não concluido")} type="radio" value="Não Concluido"/> <span>Não Concluido</span>     </label>
          </div>
          <TableAdm size="100%">
            <Thead>
              <tr>
                <th>
                  <RobotoStyle> Titulo </RobotoStyle>
                </th>
                <th>
                  <RobotoStyle> Descrição </RobotoStyle>
                </th>
                <th>
                  <RobotoStyle> Status </RobotoStyle>
                </th>
                <th></th>
                <th></th>
              </tr>
            </Thead>
            <tbody>
              {activitiesArray.map((item) =>
                  <Tr key={item._id}>
                    <Td> {item.title.length >= 15  ? item.title.substring(0,15) + '...' : item.title} </Td>
                    <Td> < input type="checkbox" checked={item.completed} readOnly={true} /> </Td>
                    <Td> {item.description.length >= 30  ? item.description.substring(0,30) + '...': item.description } </Td>
                    <Td
                      config={{ visibility: "hidden", width: "5em" }}
                      onClick={() => confirmDelete(item.id)}
                    >
                      <img className="iconDelete" src="/assets/images/trash.svg" alt="trash.svg"/>
                    </Td>
                    <Td
                      config={{ visibility: "hidden", width: "5em" }}
                      onClick={() => edtActivities(item)}
                      >
                      <img className="iconDelete" src="/assets/images/edt.svg" alt="trash.svg"/>
                    </Td>
                  </Tr>
              )}
            </tbody>
          </TableAdm>
      </div>
    </Container>
  );
}
