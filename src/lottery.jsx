import {useState} from "react";
import {genTicket,sum} from './helper';
import Ticket from './Ticket.jsx'


export default function lottery({n=3,winningSum=15}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winningSum(ticket);
    let buyTicket = () =>{
        setTicket(genTicket(n))
    } 
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
        <br></br><br></br>
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulations, you Won!"}</h3>
        
        </div>
        
    )
}