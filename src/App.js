import { useState } from 'react';
import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  
  const [chatLogData, setChatLogData] = useState(chatMessages); 
  const [totalLikes, setTotalLikes] = useState(0); 
  // let likeCount = 0
  const toggleLike = (id) => {
    const allEntries = chatLogData.map((entry) => {
      if (entry.id === id) {
        entry.liked = !entry.liked;
        }
      
      return entry;
    });
  
    setChatLogData(allEntries);
    calcLikes(chatLogData);


  }

  let allLikes = 0
  const calcLikes = (chatLogData) => {
    for (let chat of chatLogData) {
      if (chat.liked === true) {
        allLikes += 1;
      }
    setTotalLikes(allLikes)
    }
    // return allLikes
  };


  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry
          sender={chatMessages[0].sender} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp}
        /> */}
        <ChatLog
          entries={chatLogData}
          updateLikes={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
