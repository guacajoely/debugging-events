// CHANGES MADE
// 1. CHANGE STAR IN FOR LOOP TO CELEBRITY
// 2. UNCAPITALIZED .sport in the alert 

import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li id="star--${celebrity.id}">${celebrity.name}</li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A CELEBRITY?
        if (itemClicked.id.startsWith("star")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED CELEBRITY?
            const [,celebPrimaryKey] = itemClicked.id.split("--")

            //GRAB THE MATCHING CELEBRITY OBJECT AND STORE IT
            let matchingCelebrity = null
            for (const celebrity of celebrities){
                if (parseInt(celebPrimaryKey) === celebrity.id){
                    matchingCelebrity = celebrity
                }
            }

            // INSERT THE KIDS NAME AND WISH INTO AN ALERT
            window.alert(`${matchingCelebrity.name} is a ${matchingCelebrity.sport.toLowerCase()} star`)

        }
    }
)



