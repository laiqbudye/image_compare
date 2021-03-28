import React from 'react';

const ImageGrid = ({ imgUrl, imgTitle, imgId, isCompareClikced, buttonToggleHandler }) => {

    return (
        <div className="container">
            <img src={imgUrl} alt="img"></img>
            <p>Title:- {imgTitle}</p>
            <p>ID:- {imgId}</p>
            <p>URL:- {imgUrl}</p>
            <button
                className={isCompareClikced(imgId) ? "remove" : "compare"}
                onClick={() => buttonToggleHandler(imgId)}
            >
                {isCompareClikced(imgId) ? "Remove" : "Compare"}
            </button>
        </div>
    )

}

export default ImageGrid;
