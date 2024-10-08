const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentFormEl = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const modalInner = document.getElementById("modal-inner")
const decline = document.getElementById("decline")
const modalChoiceBtns = document.getElementById("modal-choice-btns")


modalCloseBtn.addEventListener("click", function(){ //not working on render due to disabled
    modal.style.display = "none"
})

setTimeout(function(){
    modal.style.display = "flex"
},1500)

decline.addEventListener("mouseover", function(){
    modalChoiceBtns.classList.toggle("decline") //you are just adding or removing this additional class decline, the original class that is on the element stays
})

consentFormEl.addEventListener("submit",function(e){
    e.preventDefault()
    
    const data = new FormData(consentFormEl) //create a new Instance strict name FormData on the dom and save it in a variable, you can also use html tag with query selector new FormData(document.querySelector('form'))
    
    const name = data.get("name-input") //get the user answer from input field with name "name-input", get() is a inbuilt JS method on instances
    const email = new FormData(consentFormEl).get("email-input")

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


