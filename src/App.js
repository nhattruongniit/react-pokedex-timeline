import { useWeb3React } from '@web3-react/core';
import React from 'react';

function App() {
  const { active, account } = useWeb3React();

  return (
    <main>
      <h1>Timeline</h1>

      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}

      <div className="timeline_wrapper">
        <div className="timeline_container">
          {Array.from(Array(2).keys()).map(ele => {
            return (
              <React.Fragment key={ele}>
                {ele % 2 !== 0 ? (
                  <div className="timeline_block timeline_even">
                    <div className="timeline_monster">
                      <img src="assets/images/monster-pikachu.png" alt="" />
                    </div>
                    <img className="block-common block-2" src="assets/images/block-orange.svg" alt="" />
                    <img className="block-common block-3" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-4" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-5" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-6" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-7" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-8" src="assets/images/block-blue.svg" alt="" />
                  </div>
                ) : (
                  <div className="timeline_block timeline_odd">
                    <div className="timeline_monster">
                      <img src="assets/images/monster-charmember.png" alt="" />
                    </div>
                    <img className="block-common block-2" src="assets/images/block-orange.svg" alt="" />
                    <img className="block-common block-3" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-4" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-5" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-6" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-7" src="assets/images/block-blue.svg" alt="" />
                    <img className="block-common block-8" src="assets/images/block-blue.svg" alt="" />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
        
      </div>
    </main>
  );
}

export default App;
