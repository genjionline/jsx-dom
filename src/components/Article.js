import React from "react";

function Article() {
    return (
    <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure</h2>
        <div className="article__description">
        <h3>Article description:</h3>
        <p>
            NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.
        </p>
    </div>
    <div className="article__actions">
        <button>Read</button>
        <button>Mark as read</button>
        <button>Mark as unread</button>
    </div>
    <div className="article__author">
        <p>Author: Mike</p>
        <p>Published: 06.12.2022</p>
        <p>Theme: Video cards</p>
    </div>
    </div>
    );
  }
  export default Article;