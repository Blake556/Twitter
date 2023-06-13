if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

     choooseProfileImg()


    document.querySelector('.tweet-btn').addEventListener('click', tweet)
    
    let removeButtons = document.querySelectorAll('.trash')
        for(let i = 0; i < removeButtons.length; i++) {
            let removeButton = removeButtons[i]
            removeButton.addEventListener('click', removeTweet)
        }
    
    

}




function choooseProfileImg() {

    let chooseImg = document.querySelector('#upload-pic')
    
    let newProfilePic = ''

    chooseImg.addEventListener('change', function() {
        let reader = new FileReader()
        reader.addEventListener('load', () => {
            newProfilePic = reader.result;
            document.querySelector('.user-pic-container').style.backgroundImage =  `url(${newProfilePic})`
            //console.log(newProfilePic)
        })
        reader.readAsDataURL(this.files[0])
    })

}



setTimeout(() => {

const div = document.querySelector('.user-pic-container')  
const style = window.getComputedStyle(div, false)  
const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");  
postTweet(bi)
}, "5000")




function tweet(event) {
    let buttonClicked = event.target
    let formElement = buttonClicked.parentElement.parentElement

    let formPhoto = formElement.querySelector('#upload-pic')
   // console.log(formPhoto)

    let formUserFirstName = formElement.querySelector('.input-first').value
    let formUserLastName = formElement.querySelector('.input-last').value
    let formHandlerName = formElement.querySelector('.input-handler').value
    let formTweet = formElement.querySelector('.tweet').value

    // console.log(formPhoto, formUserFirstName, formUserLastName, formHandlerName, formTweet)

    postTweet(formPhoto, formUserFirstName, formUserLastName, formHandlerName, formTweet)
    
}
// WE LEFT OFF ON LINE 74 STYLES ALMOST THERE!!!
function postTweet(bi, formUserFirstName, formUserLastName, formHandlerName, formTweet) {
    let newPostContainer = document.createElement('div')
    let postsContainer = document.querySelectorAll('.posted-tweets')[0]
    newPostContainer.classList.add('posted-tweet-row')

   
    let tweet = 
        `<div class="user-pic-container" style="background-image: url(${bi})">
         
        </div>

        <div class="post-flex-wrap-container">
            <div class="posted-user-info">
                <p class='posted-user-name'>${formUserFirstName} ${formUserLastName}<span class='posted-user-handler'> @${formHandlerName}</span></p>
            </div>
            <i class="trash fa-solid fa-trash-can"></i>
            <div class="posted-tweet">
                <p>${formTweet}</p>
            </div>
            <div class="posted-reactions">
                <i class="reaction-icons fa-regular fa-comment"></i>
                <i class="reaction-icons fa-solid fa-retweet"></i>
                <i class="reaction-icons fa-regular fa-heart"></i>
                <i class="fa-solid fa-share"></i>
            </div>
        </div>`

     newPostContainer.innerHTML = tweet
     postsContainer.append(newPostContainer)
     newPostContainer.addEventListener('click', removeTweet)
}


function removeTweet(event) {
    let removeButton = event.target
    removeButton.parentElement.parentElement.remove()
}