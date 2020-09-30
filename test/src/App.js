import React, { useState } from 'react';
import Modal from 'react-modal'
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')
function App() {
  const [ modal, setmodal ] = useState(false)
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Sorts+Mill+Goudy&display=swap" rel="stylesheet" />
      <header className="App-header">
        <button onClick={() => setmodal(true)} className="button">Open modal</button>
        <Modal className="modal" isOpen={modal} onRequestClose={() => setmodal(false)} style={
          { overlay: {
            backgroundColor: 'rgb(84, 84, 84)'
          }, ...customStyles
        }
        }>
          <div>
            <button className="closeButton" onClick={() => setmodal(false)}>X</button>
          </div>
          <div className="content">
          <div className="image">
            <img src="/IMG.png" alt="deskItems" />
          </div>
          <div className="modalText">
            <p className="prompt">Let's get going!</p>
          </div>
          <div>
            <p className="description">Follow these tips to get your <br />
              project off to a great start and <br />
              create a truly memorable book!</p>
          </div>
            {/* <div className="pagination">
              <div className="circle">
                <a className="active" href="#"><span /></a>
              </div>
              <div className="circle">
                <a href="#"><span /></a>
              </div>
              <div className="circle">
                <a href="#"><span /></a>
              </div>
            </div> */}
            <div className="pagination">
              <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23" cy="3" r="3" fill="#C3C8CC"/>
                <circle cx="13" cy="3" r="3" fill="#C3C8CC"/>
                <circle cx="3" cy="3" r="3" fill="#C3C8CC"/>
                <circle cx="3" cy="3" r="3" fill="#49545C"/>
              </svg>
            </div>
            <button className="secondButton">
                <span className="next">Next</span>
            </button>
            </div> 
          </Modal>
        </header>
    </div>
  );
}

export default App;
