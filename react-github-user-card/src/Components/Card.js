import React from "react";

function Card(props) {
    //step 5 - see when it's rendering and check if props was passed down ... still empty but component works
    console.log("Rendering Card component")
    console.log("props", props)

    return (
        <div>
            {/* stretch 1h.a use search prop (searchUser state) to show name of who you search -- moved it to App so it's above the search bar */}
            {/* <h4>{props.search}'s Github Follow List</h4> */}

            {/* step 6: map over the objects */}
            {/* for each card, I want to get and display its id, avatar, and login info */}

            {props.card.map((eachCard) => (
                <div key={eachCard.id} className="follower">
                    <img 
                        src={eachCard.avatar_url} 
                        alt={eachCard.login} 
                        width="200"
                    />
                    
                    <div>
                        {/* step 6a: username */}
                        <h4>{eachCard.login}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;
