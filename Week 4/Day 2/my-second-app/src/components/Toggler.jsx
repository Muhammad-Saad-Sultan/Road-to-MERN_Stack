import { useState } from "react"

const Toggler = () => {
    const [showContent, setShowContent] = useState(false);

    const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, natus architecto voluptatibus nemo eligendi magni! Iste sequi, laborum quo voluptate natus neque nisi maxime id corrupti ipsa eaque doloribus asperiores aut unde rerum qui sunt tenetur? Laudantium consequatur odio animi! Officia, optio ullam dolorem accusantium esse iure similique corporis nam?";
    let toggleContent = content;

    if(!showContent) {
        toggleContent = "";
    }
    
    return (
        <>
            <div className="content">
                <h2>Click to show or hide content. </h2>
                <button onClick={() => {setShowContent(!showContent)}} className={`btn tog-width ${showContent ? "red" : "green"}`}>{showContent ? "Hide Content" : "Show Content"}</button>
                <p className="toggleContent">{toggleContent}</p>
            </div>
        </>
    )
}

export default Toggler
