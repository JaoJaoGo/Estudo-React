import './App.css';

import FirstComponent from './components/FirstComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello React!</h2>
      <FirstComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={8} y={10}/>
      <Fragment />
      <Container>
        <h1>Este é filho do container!</h1>
      </Container>
    </div>
  );
}

export default App;
