// CHANGES MADE
// 1. CHANGE STAR IN FOR LOOP TO CELEBRITY


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


