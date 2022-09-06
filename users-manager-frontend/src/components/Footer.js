import React from "react"
import "../components_styles/footer.css"

export default function Footer(){
    const date = new Date()
    const year = date.getFullYear()
    return(
        <footer>
            <h4 className="author">Coded by
                <a href="https://github.com/juanpablomancera" rel="noreferrer" target="_blank" className="author_link">
                    Juan Pablo Mancera
                </a>
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}/> {year}
            </h4>
        </footer>

    )
}