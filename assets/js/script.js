// TODO: Declare any global variables we need
let headsCount = 0
let tailsCount = 0
let headsPct = 0
let tailsPct = 0
let totalFlips = 0 
let status = document.querySelector(".message-container")
let headsTable = document.querySelector("#heads")
let tailsTable = document.querySelector("#tails")
let headsPctTable = document.querySelector("#heads-percent")
let tailsPctTable = document.querySelector("#tails-percent")
let flipButton = document.querySelector("#flip")
let clearButton = document.querySelector("#clear")
let image = document.querySelector("img")

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
 
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener("click", function(){
        totalFlips ++
        // TODO: Determine flip outcome
        let result = Math.round(Math.random() * 101)
        console.log("result variable", result)

        if (result < 51) {//heads 0 - 50
            headsCount ++
            status.textContent = "You Flipped Heads!"
            headsTable.textContent = `${headsCount}`
            image.src = "assets/images/penny-heads.jpg"
        } else {
            tailsCount ++
            status.textContent = "You Flipped Tails!"
            tailsTable.textContent = `${tailsCount}`
            image.src = "assets/images/penny-tails.jpg"
           }
        console.log("headsCount", headsCount)
        console.log("tailsCount", tailsCount)   
        
        headsPct = Math.round((headsCount/totalFlips) * 100)
        tailsPct = Math.round((tailsCount/totalFlips) * 100)
        headsPctTable.textContent = `${headsPct}%`
        tailsPctTable.textContent = `${tailsPct}%`
         // TODO: Update image 
        })

            // Clear Button Click Handler
        clearButton.addEventListener("click", function(){
            status.textContent = "Let's Get Rolling!"
            headsCount = 0
            headsTable.textContent = `${headsCount}`
            tailsCount = 0 
            tailsTable.textContent = `${tailsCount}`
            headsPct = 0
            headsPctTable.textContent = `${headsPct}%`
            tailsPct = 0
            tailsPctTable.textContent = `${tailsPct}%`
            totalFlips = 0
        })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})