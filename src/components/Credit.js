import React from "react";

// Contexts //
import LivestreamContext from "contexts/LivestreamContext";

// Assets //
import muxLogo from "assets/mux_logo.png";
import streamLogo from "assets/stream_logo.svg";

const Credit = () => (
    <p className='credit'>
        Powered by{" "}
        <span>
            <a target='_blank' rel='noopener noreferrer' href='https://www.mux.com/'>
                <img src={muxLogo} />
            </a>
        </span>{" "}
        &{" "}
        <span>
            <a target='_blank' rel='noopener noreferrer' href='https://getstream.io'>
                <img src={streamLogo} width={40} height={20} />
            </a>
        </span>
    </p>
);

export default Credit;
