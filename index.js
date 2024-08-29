const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const modalInner = document.getElementById("modal-inner")

setTimeout(function(){
    modal.style.display = "flex"
},1500)

modalCloseBtn.addEventListener("click", function(){modal.style.display = "none"})

consentForm.addEventListener("submit",function(e){
    e.preventDefault()
    
    const formData = new FormData(document.querySelector('form')) //create a new instance and save it in a variable, you can also replace document.querySelector('form') by the dom consentForm
    
    const name = formData.get("name-input")
    const email = new FormData(consentForm).get("email-input")
    // const password = new FormData(document.getElementById("consent-form")).get("password-input")
    console.log(name,email)

    modalText.innerHTML = `
    <div class="modal-inner-loading">
    <img src="loading.svg" class="loading">
    <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    setTimeout(function(){
        document.getElementById("upload-text").innerText = `Making the sale...` //since compiler reads html first and then JS, you cannot declare the dom on top of the page, the dom will have passed prior to being used in html and hence not used
    },1500)

    setTimeout(function(){
        modalInner.innerHTML = `<h2>Thanks  <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to ${email}.</p>
    <div class="idiot-gif">
        <img src="laughing.gif">
    </div>` 
    modalCloseBtn.disabled = false
    },3000)

})


