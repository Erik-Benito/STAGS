import { UseActivitiesContext } from "../../context";

import {
  TableAdm,
  Thead,
  Tr,
  Td,
  RobotoStyle,
} from "../../components/style/table";

import Container from "./styled";
import { Link } from "react-router-dom";



export default function list() {


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

  return (
    <Container>
        <Link to="/"> VOLTAR </Link>
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
      <button
        className="add"
        style={
          title === ""
            ? {
                pointerEvents: "none",
                opacity: "0.4",
              }
            : {}
        }
        onClick={() =>
          setUpdateActivitie({
            id: id,
            title: title,
            description: description,
            completed: completed,
          })
        }
      >
        ALTERAR
      </button>

      <div className="tables">
        <div>
          <RobotoStyle>NÃO CONCLUIDOS</RobotoStyle>
          <TableAdm size="500px">
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

            {activities.map((item) =>
              item.completed === false ? (
                <Tr key={item._id}>
                  <Td> {item.title} </Td>
                  <Td>
                    {" "}
                    <input
                      type="checkbox"
                      checked={item.completed}
                      readOnly={true}
                    />{" "}
                  </Td>
                  <Td> {item.description} </Td>
                  <Td
                    config={{ visibility: "hidden", width: "5em" }}
                    onClick={() => setRemoveActivitie(item.id)}
                  >
                    <img
                      className="iconDelete"
                      src="/assets/images/trash.svg"
                      alt="trash.svg"
                    />
                  </Td>
                  <Td
                    config={{ visibility: "hidden", width: "5em" }}
                    onClick={() => edtActivities(item)}
                    >
                    <img
                      className="iconDelete"
                      src="/assets/images/edt.svg"
                      alt="trash.svg"
                    />
                  </Td>
                </Tr>
              ) : (
                ""
              )
            )}
          </TableAdm>
        </div>

        <div>
        <RobotoStyle>CONCLUIDOS</RobotoStyle>
          <TableAdm size="500px">
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

            {activities.map((item) =>
              item.completed === true ? (
                <Tr key={item._id}>
                  <Td> {item.title} </Td>
                  <Td>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      readOnly={true}
                    />
                  </Td>
                  <Td> {item.description} </Td>
                  <Td
                    config={{ visibility: "hidden", width: "5em" }}
                    onClick={() => setRemoveActivitie(item.id)}
                  >
                    <img
                      className="iconDelete"
                      src="/assets/images/trash.svg"
                      alt="trash.svg"
                    />
                    </Td>
                    <Td
                    config={{ visibility: "hidden", width: "5em" }}
                    onClick={() => edtActivities(item)}
                    >
                    <img
                      className="iconDelete"
                      src="/assets/images/edt.svg"
                      alt="trash.svg"
                    />
                  </Td>
                </Tr>
              ) : (
                ""
              )
            )}
          </TableAdm>
        </div>
      </div>
    </Container>
  );
}
