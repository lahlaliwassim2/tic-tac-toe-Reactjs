import {Start} from "./components/start/Start"
import {Board} from "./components/board/Board"
import {Modal} from "./components/modal/Modal"

function App() {
  return (
    <div className="  App">
        <div className="container">
             {/* <Start />  */}
              <Board />
            
        </div>
        <Modal />
  </div>
  );
}

export default App;
