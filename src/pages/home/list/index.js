import { ToastContainer } from 'react-toastify';

import {
  TableAdm,
  Thead,
  Tr,
  Td,
  RobotoStyle,
} from "../../../components/style/table";

import Container from "./styled";
import {  useState } from "react";


export default function List() {

  const [activities ] =  useState([]);

  return (
    <Container>
      <ToastContainer/>
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
          {activities.map((item) =>
              <Tr key={item._id}>
                <Td> {item.title.length >= 15  ? item.title.substring(0,15) + '...' : item.title} </Td>
                <Td> < input type="checkbox" checked={item.completed} readOnly={true} /> </Td>
                <Td> {item.description.length >= 30  ? item.description.substring(0,30) + '...': item.description } </Td>
                <Td
                  config={{ visibility: "hidden", width: "5em" }}
                >
                  <img className="iconDelete" src="/assets/images/trash.svg" alt="trash.svg"/>
                </Td>
                <Td
                  config={{ visibility: "hidden", width: "5em" }}
                  >
                  <img className="iconDelete" src="/assets/images/edt.svg" alt="trash.svg"/>
                </Td>
              </Tr>
          )}
        </tbody>
      </TableAdm>
    </Container>
  );
}
