import React, { Component } from "react";
import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component{
    render(h) {
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Caique Alves</span>
                            <span className="place">GRU aka Guarulhos, SP</span>
                        </div>

                        <img src={more} alt="Mais"/>
                    </header>

                    <img src="http://localhost:3333/files/OmniStack%20-%20Wallpaper%20Mobile.jpg" />

                    <footer>
                        <div className="actions">
                            <img src={like}/>
                            <img src={comment}/>
                            <img src={send}/>
                        </div>

                        <strong>990</strong>

                        <p>
                            style style, Uhuu, react!!!

                            <span>
                                #VamoQueVamo
                            </span>
                        </p>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed;