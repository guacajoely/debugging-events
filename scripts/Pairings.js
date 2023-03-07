// CHANGES MADE
// 1. CELEBRITY SPELLED WRONG AFTER FOR LOOP AND NEEDS TO BE IN FOR LOOP
// 2. CHANGED celebrity DECLARATION in for loop TO matchingCelebrity
// 3. wrote if function to match celebrityID with celebrity.id and pull their name

import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let matchingCelebrity = null

    for (const celebrity of celebrityArray) {
        if(kidObject.celebrityId === celebrity.id){
            matchingCelebrity = celebrity
        }
    }

    return matchingCelebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish.toLowerCase()}
            </li>
        `
    }

    html += "</ul>"

    return html
}


