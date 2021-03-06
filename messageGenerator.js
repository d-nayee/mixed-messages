// arrays of words
const adjectives = ["attractive", "bald", "beautiful", "chubby", "clean", "magnificent", "plump", "unsightly", "ambitous", "brave", "faithful", "jolly", "nice", "poilite", "proud", "scilly", "angry", "bewildered", "clumsy", "grumpy", "itchy", "jealous", "lazy", "nervous", "thoughtless", "big", "fat", "gigantic", "microscopic", "miniture", "tall", "short", "tiny"]
const nouns = ["captain", "child", "brother", "sister", "friend", "mum", "dad", "baby", "dog", "pet", "monkey", "tiger", "lion", "clown", "priest", "woman", "man", "king", "thief", "neighbor", "desk", "planet", "grass", "tree", "fridge", "carpet", "wall", "duck", "ghost", "shadow", "mind", "bulb", "internet", "boss", "teacher"]
const adverbs = ["secretly", "fast", "well", "quickly", "slowly", "accidentally", "badly", "carefully", "cheerfully", "strongly", "wishfully", "eagerly", "extermly", "entirely", "completely", "never", "sometimes", "occasionally", "always"]
const verbs = ["argue", "believe", "change", "clean", "complain", "disappear", "dress", "drink", "eat", "encourage", "enjoy", "exist", "grow", "hide", "hold", "laugh", "point", "prepare", "sing", "smile", "talk", "throw", "watch", "write"]

// Functions selects 1 random adjective.
const selectAdjectives = () => {
    const randomAdjectives = []

    // Getting a random value from the adjective array and then adding it to the empty array.
    const tempAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    randomAdjectives.push(tempAdjective)
    return randomAdjectives
}

// This function selects 4 random nouns and pushes it to the "randomNouns" array IF the value is UNIQUE.

const selectNoun = () => {
    // creating an empty list to store the value of the "selectNoun" function.
    const randomNouns = [];
    let uniqueNounCheck = 0
        
        
    // We only want an array of 4 elements.
    while (randomNouns.length < 4) {
        // stores a randomly generated value in variable called tempNoun
        let tempNoun = nouns[Math.floor(Math.random() * nouns.length)]
            

        // A check to see if this is the first generated random value.
        // if it is it can be added to the selectNoun array without camparing against elements in that same array.

        if (randomNouns.length === 0) {
            randomNouns.push(tempNoun)
                
        } else {
            // A check against each element in the array for uniqueness.
            randomNouns.forEach(item => {

                if (item !== tempNoun) {
                    uniqueNounCheck += 1
                    }
                })

            // If the tempNoun is unique the uniqueNounCheck and the length of the array would be equal.
            if(uniqueNounCheck === randomNouns.length) {
                randomNouns.push(tempNoun)
                }
                // reset the variable for the next check.
                uniqueNounCheck = 0

            }
        }
        return randomNouns

    }

    const selectAdverb = () => {
    const randomAdverbs = [];

    let uniqueAdverbCheck = 0
        
        
    // We only want an array of 2 elements.
    while (randomAdverbs.length < 2) {
        // stores a randomly generated value in variable
        let tempAdverb = adverbs[Math.floor(Math.random() * adverbs.length)]
            

        // A check to see if this is the first generated random value.
        // if it is it can be added to the array without camparing against elements in that same array.

        if (randomAdverbs.length === 0) {
            randomAdverbs.push(tempAdverb)
                
        } else {
            // A check against each element in the array for uniqueness.
            randomAdverbs.forEach(item => {

                if (item !== tempAdverb) {
                    uniqueAdverbCheck += 1
                    }
                })

            // If the value is unique the uniqueCheck value and the length of the array would be equal.
            if(uniqueAdverbCheck === randomAdverbs.length) {
                randomAdverbs.push(tempAdverb)
                }
                // reset the variable for the next check.
                uniqueAdverbCheck = 0

            }
        }
        return randomAdverbs
    }

const selectVerb = () => {
    const randomVerbs = [];

    let uniqueVerbCheck = 0
        
        
    // We only want an array of 2 elements.
    while (randomVerbs.length < 2) {
        // stores a randomly generated value in variable
        let tempVerb = verbs[Math.floor(Math.random() * verbs.length)]
            

        // A check to see if this is the first generated random value.
        // if it is it can be added to the array without camparing against elements in that same array.

        if (randomVerbs.length === 0) {
            randomVerbs.push(tempVerb)
                
        } else {
            // A check against each element in the array for uniqueness.
            randomVerbs.forEach(item => {

                if (item !== tempVerb) {
                    uniqueVerbCheck += 1
                    }
                })

            // If the value is unique the uniqueCheck and the length of the array would be equal.
            if(uniqueVerbCheck === randomVerbs.length) {
                randomVerbs.push(tempVerb)
                }
                // reset the variable for the next check.
                uniqueVerbCheck = 0

            }
        }
        return randomVerbs

}

const dearDiary = () => {
 const adjectiveList = selectAdjectives()
 const nounList = selectNoun()
 const adverbList = selectAdverb()
 const verblist = selectVerb()

 const diaryMessage = `Dear Diary,\n\nYesterday, my ${adjectiveList[0]} ${nounList[0]} came to my ${nounList[1]}.`+
                        `\nI appreciated it ${adverbList[0]}.`+
                        `\n\nToday my ${nounList[2]} told me to ${verblist[0]} ten times. I don't know why?`+
                        `\n\nTomorrow, I plan to ${adverbList[1]} ${verblist[1]} with my ${nounList[3]} in the morning. It's on my list of things to do.`
                        

}

dearDiary();





