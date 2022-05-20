import React, { Component } from 'react';

class HomePage extends Component {

 
  render() {
    return (
        <div className='chat-bot-area'>
        <div className='textcontainerbase'>
        <div className='chatcontainer'></div>
        <button className='img-1' >plus{/*<img src={"/src/img/send.png"} alt="send-icon"/>*/}</button>
        <input className='textarea'></input>
        <button className='img-2'>send{/*<img src={"/src/img/send.png"} alt="send-icon"/>*/}</button>      
       {/*} <div className='toolbar-area'/>
        <button className='tool1'>1</button>
        <button className='tool2'>2</button>*/}
        <div className='messagebubble-user'> how are you good to see you good luck have fun Nice to meet you </div>
        </div>
        </div>
    )
  }
}

export default HomePage