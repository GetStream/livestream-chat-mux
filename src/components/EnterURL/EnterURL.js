import React, { Component } from "react";

// Assets //
import muxLogo from "assets/mux_logo.png";

// Styles //
import "./styles.scss";

const EnterURL = ({ onChange, setVideo, useFallback }) => (
    <div className='enter-url'>
        <img src={muxLogo} />
        <p>Enter a Mux stream url:</p>
        <input name='videoUrl' onChange={onChange} placeholder='Livestream URL' />
        <button onClick={setVideo}>Start Streaming</button>
        <button className='flat' onClick={useFallback}>
            Use default fallback
        </button>
    </div>
);

export default EnterURL;
