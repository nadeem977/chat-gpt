
import './App.css';
import logo from "./assets/chatgpt.svg"
import sms from './assets/message.svg'
import home from "./assets/home.svg"
import rokcet from "./assets/rocket.svg"
import saved from "./assets/bookmark.svg"
import chat from './assets/add-30.png'
import GPT from "./assets/chatgptLogo.svg"
import gpticon from "./assets/user-icon.png"
import send from "./assets/send.svg"
import { sendMngOpenai } from './OpenAi';
import { useState } from 'react';


function App() {


  const[question , setQuestion]= useState('')
  const [response , setResponse] = useState([])
  const[user , setUser] = useState([])
const handelSend =async ()=>{
  setUser([...user, question]);
  const res = await sendMngOpenai(question)
  setResponse([res.choices[0].message.content]);
  setQuestion(" ")
  console.log('THIS IS WORKING URL ======================',res);
}
console.log('user',user,'===========response',response)
  return (
    <div className="App">

      <div className='sidebar'>
        <div className='upperSide'>
          <div className='logo'><img src={logo} alt='logo' /> GPT-3.5</div>
          <button className='new_chat'><img src={chat} alt="" /> New Chat</button>
          <div className="message_box">
            <button className='quriy'><img src={sms} alt="" /> what is proggramning ?</button>
            <button className='quriy'><img src={sms} alt="" /> how to use an API ?</button>
          </div>


        </div>
        <div className='lowerSide'>

          <div className="lower_btn_div">
            <button><img src={home} alt="" /> Home</button>
            <button><img src={saved} alt="" /> Saved</button>
            <button><img src={rokcet} alt="" /> Upgrade to Pro</button>

          </div>
        </div>

      </div>

      <div className='main'>
          {user && user.map((item,i)=>(
      <div className="chat_div" key={i}>
          <img src={gpticon}alt="" />
          <pre className='text'>{item}</pre>
        </div>
          ))}
          {response && response.map((item,i)=>(
        <div className="chat_div cha_response" key={i}>
          <img src={GPT} alt="" />
          <pre className='text'>
          {item}
          </pre>
        </div>
          ))}
        
        <div className="chat_footer">
          <div className="input_div">
            <input type='text' placeholder='Send a message...' value={question} onChange={(e)=>setQuestion(e.target.value)}/>
            <button className='send' onClick={handelSend}><img src={send} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
