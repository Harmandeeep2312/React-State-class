import './App.css'
import Lottery from './lottery.jsx';
import Ticket from './Ticket';
import {sum} from './helper.js'
function App() {
  let winCondition = (ticket) => {
      return sum(ticket)===15;
     }
  return (
    
    <>
    <Lottery n={3} winningSum={winCondition}/>
    
    </>
  );
}

export default App
