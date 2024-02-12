import React from 'react';
import { useState } from 'react';
import "../styles/Faq.css";

import { BiHelpCircle } from "react-icons/bi";

function Faq() {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);

  const dropFunction = () => setDrop(!drop);
  const dropFunction2 = () => setDrop2(!drop2);
  const dropFunction3 = () => setDrop3(!drop3);
  const dropFunction4 = () => setDrop4(!drop4);

  return (
    <div className='Featured' id='faq'>
        <center><p className="block-head">Frequently asked questions</p></center>
        <center><p className="block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing.</p></center>
        <div className="auto">
          <div className="questions">
            <div className="ques" onClick={dropFunction}>
              <div>
                <p>What is the process of buying a house in a country?</p>
                <i><BiHelpCircle /></i>
              </div>
              <p className={drop ? "answer show" : "answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Gravida ante quis nisl amet, suspendisse massa. Venenatis imperdiet mauris lacus justo, hac nibh. Cursus in et odio at at commodo.</p>
            </div>
            <div className="ques" onClick={dropFunction2}>
              <div>
                <p>How can I calculate the potential return on investment for a rental property?</p>
                <i><BiHelpCircle /></i>
              </div>
              <p className={drop2 ? "answer show" : "answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Gravida ante quis nisl amet, suspendisse massa. Venenatis imperdiet mauris lacus justo, hac nibh. Cursus in et odio at at commodo.</p>
            </div>
            <div className="ques" onClick={dropFunction3}>
              <div>
                <p>What are the common closing costs associated with purchasing a property?</p>
                <i><BiHelpCircle /></i>
              </div>
              <p className={drop3 ? "answer show" : "answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Gravida ante quis nisl amet, suspendisse massa. Venenatis imperdiet mauris lacus justo, hac nibh. Cursus in et odio at at commodo.</p>
            </div>
            <div className="ques" onClick={dropFunction4}>
              <div>
                <p>How does the rental market in different cities compare within a country?</p>
                <i><BiHelpCircle /></i>
              </div>
              <p className={drop4 ? "answer show" : "answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh pretium nunc mauris sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Gravida ante quis nisl amet, suspendisse massa. Venenatis imperdiet mauris lacus justo, hac nibh. Cursus in et odio at at commodo.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Faq