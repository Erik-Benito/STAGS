import { Container } from "./styled";

import Manager from './manager';
import List from './list';

export default function Index() {
  return (
    <Container>
      <Manager />
      <List/>
    </Container>
  )
}