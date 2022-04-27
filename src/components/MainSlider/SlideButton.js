import React from "react";

export default function SlideButton({ direction, onClick }) {
    return (
        <button onClick={onClick} className={`btn-slide-control btn-${direction}`}>
            <img src="../../../images/right.svg" style={{marginTop:"-4px"}}></img>
        </button>
    );
}