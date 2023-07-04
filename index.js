
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}



function ready() {
    let uploadProfilePic = document.querySelector('#upload-pic')
    uploadProfilePic.addEventListener('change', uploadProfileImg)

    document.querySelector('.tweet-btn').addEventListener('click', tweet)

    let removeButtons = document.querySelectorAll('.trash')
        for(let i = 0; i < removeButtons.length; i++) {
            let removeButton = removeButtons[i]
            removeButton.addEventListener('click', removeTweet)
        }
        
    document.querySelector('.tweet-btn').addEventListener('click', clearTweetForm)

    let reactionIcons = document.querySelectorAll('.posted-reactions')
        for (let i = 0; i < reactionIcons.length; i++) {
            let reactionIcon = reactionIcons[i]
           
            reactionIcon.addEventListener('click', iconClicked)
    }
}



function uploadProfileImg() {
    let newProfilePic = ''
    let reader = new FileReader()
        reader.addEventListener('load', () => {
        newProfilePic = reader.result;
        document.querySelector('.user-picture').style.backgroundImage =  `url(${newProfilePic})`
    })
        reader.readAsDataURL(this.files[0])
}



function tweet(event) {
    let buttonClicked = event.target
    let formElement = buttonClicked.parentElement.parentElement
    let profileImgContainer = formElement.querySelector('.user-picture')
    let getBackgroundImg = window.getComputedStyle(profileImgContainer, false)  
    let backgroundImgUrl = getBackgroundImg.backgroundImage.slice(4, -1).replace(/"/g, "")
    let formUserFirstName = formElement.querySelector('.input-first').value
    let formUserLastName = formElement.querySelector('.input-last').value
    let formHandlerName = formElement.querySelector('.input-handler').value
    let formTweet = formElement.querySelector('.tweet').value

    let date = new Date();
    let dateToString = date.toDateString()
    let dateLength = dateToString.slice(4, 11)
    console.log(dateLength)

    postTweet(backgroundImgUrl, formUserFirstName, formUserLastName, formHandlerName, dateLength, formTweet)
}



function postTweet(backgroundImgUrl, formUserFirstName, formUserLastName, formHandlerName, dateLength, formTweet) {
    let newTweetRow = document.createElement('div')
    newTweetRow.classList.add('posted-tweet-row')
    let tweetsContainer = document.querySelectorAll('.posted-tweets')[0]
    
    let tweet = 
        `
        <div class='real-container'>
        <div class="posted-pic-container user-pic-container " style="background-image: url(${backgroundImgUrl})">
        </div>
        </div>
        <div class="post-flex-wrap-container">
            <div class="posted-user-info">
                <p class='posted-user-name'>${formUserFirstName} ${formUserLastName}<span class='posted-user-handler'> @${formHandlerName}  ${dateLength}</span></p>
            </div>
            <i class="trash fa-solid fa-trash-can"></i>
            <div class="posted-tweet">
                <p>${formTweet}</p>
            </div>
            <div class="posted-reactions">
                <div class='color1'>
                <i class="reaction reaction-icons-1 fa-regular fa-comment"></i> <span class='c count1'></span>
                </div>
                <div class='color2'>
                <i class="reaction reaction-icons-2 fa-solid fa-retweet"></i> <span class='c count2'></span>
                </div>
                <div class='color3'>
                <i class="reaction reaction-icons-3 fa-regular fa-heart"></i> <span class='c count3'></span>
                </div>
                <div class='color4'>
                <i class="reaction reaction-icons-4 fa-solid fa-share"></i> <span class='c count4'></span>
                </div>
            </div>
        </div>`
    
     newTweetRow.innerHTML = tweet
     tweetsContainer.append(newTweetRow)
     newTweetRow.querySelector('.posted-reactions').addEventListener('click', iconClicked)
     newTweetRow.querySelector('.trash').addEventListener('click', removeTweet)
}



function removeTweet(event) {
    let removeButton = event.target
    removeButton.parentElement.parentElement.remove()
    console.log(removeButton.parentElement.parentElement)
}



function clearTweetForm(event) {
    let buttonClicked = event.target
    let defaultPhoto = document.querySelector('.user-picture')
    let clearFormInputs = document.querySelectorAll('.input-section')
        for(let i = 0; i < clearFormInputs.length; i++) {
            let clearFormInput = clearFormInputs[i]
            if (buttonClicked) {
                defaultPhoto.style.backgroundImage = ''
                clearFormInput.value = ''
            }
        }
}



let reaction1Likes = 1
let reaction2Likes = 1
let reaction3Likes = 1
let reaction4Likes = 1

// let reactions1Likes = document.querySelector('.count1')
// let convert = parseFloat(reaction1Likes.innerText)
// convert++

// let reaction2Likes = document.querySelector('.count1')
// let reaction3Likes = document.querySelector('.count1')
// let reaction4Likes = 1

let counter = 1

function iconClicked(event) {

//     let reaction1 = event.target.classList.contains('reaction-icons-1')
//     let reaction2 = event.target.classList.contains('reaction-icons-2')
//     let reaction3 = event.target.classList.contains('reaction-icons-3')
//     let reaction4 = event.target.classList.contains('reaction-icons-4')

//     let currentIcon = event.target
//     let currentRow = event.target.parentElement.parentElement
//     //console.log(event.target.parentElement.parentElement)

//     let currentI = document.querySelectorAll('.c')
//         for (let i = 0; i < currentI.length; i++) {

//             let icon = currentI[i]
//             console.log(icon)

//     if (currentRow &&  ) {
//         doucument.querySelector()
//         //console.log(currentRow)
//     }
   

// }



    let currentRow = event.target.parentElement
    console.log(currentRow)
        
    
         
    let reaction1 = event.target.classList.contains('reaction-icons-1')
    let reaction2 = event.target.classList.contains('reaction-icons-2')
    let reaction3 = event.target.classList.contains('reaction-icons-3')
    let reaction4 = event.target.classList.contains('reaction-icons-4')

    
    if (reaction1) {
        console.log(reaction1)
        currentRow.querySelector('.count1').innerText = reaction1Likes++
        
    } else if (reaction2) {
        currentRow.querySelector('.count2').innerText = reaction2Likes++
    } else if (reaction3) {
        currentRow.querySelector('.count3').innerText = reaction3Likes++
    } else if ( reaction4) {
        currentRow.querySelector('.count4').innerText = reaction4Likes++
    } else {
        console.log('err')
    }
        

    
}

// setTimeout(() => {
//     console.log(userFirstName)
//   }, "9000")


