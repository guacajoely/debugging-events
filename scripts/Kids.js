// CHANGES MADE
// 1. 


import { getChildren } from "./database.js"
const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="kid--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A KID?
        if (itemClicked.id.startsWith("kid")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED KID?
            const [,kidPrimaryKey] = itemClicked.id.split("--")

            //GRAB THE WHOLE KID OBJECT TO GET THE NAME
            let matchingKid = null
            for (const child of children){
                if (parseInt(kidPrimaryKey) === child.id){
                    matchingKid = child
                }
            }

            // INSERT THE KIDS NAME AND WISH INTO AN ALERT
            window.alert(`${matchingKid.name}'s wish is to ${matchingKid.wish.toLowerCase()}`)

        }
    }
)


