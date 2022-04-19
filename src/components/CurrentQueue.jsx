import React from 'react';

const getFrontUrl = "https://script.google.com/macros/s/AKfycbxTF6ZgyNTPwlZplPMRS0TBCOQsJPGt3dJuP4nsy7YNyAjCh6V4qdDRC8u3g-s9j4ME/exec";


const CurrentQueue = () => {

  const [queueNumber, setQueueNumber] = React.useState(0);
  const [name, setName] = React.useState("");
  const [waitingCnt, setWaitingCnt] = React.useState(0);
  const [bruh, setBruh] = React.useState(true);




  React.useEffect(
    () => {

      fetch(getFrontUrl)
        .then(response => response.json())
        .then(data => {
          setQueueNumber(data.queueNumber);
          setName(data.customerName);
          setWaitingCnt(data.waiting);
        });
      console.log(queueNumber, name);
      const loop = setInterval(() => { setBruh(!bruh); }, 1000);
      return () => clearInterval(loop);
    }
    , [bruh])




  return (
    <div id="show">
      <p id="current-queue"> A{queueNumber} </p>
      <p id="current-name">คุณ{name} </p>
      <p id="current-number" className="eng">จำนวนรอต่อคิว (Queues in line): {waitingCnt} </p>

    </div>
  )
}

export default CurrentQueue;