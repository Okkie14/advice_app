const diceEvent = document.getElementById('dice');
const adviceId = document.getElementById('adviceId');
const adviceMessage = document.getElementById('text');
const loadingState = document.querySelector('.loader');
const quotes = document.querySelector('.adviceText')

let loading;

async function advice() {
    loading = true;
    quotes.classList.add('hidden')

    if (loading) {
        loadingState.classList.add('isLoading');
        const message = await fetch("https://api.adviceslip.com/advice");

        if (message.status === 200) {
            loadingState.classList.remove('isLoading');
            loading = false;
            const response = await message.json();
            const adviceNumber = response.slip.id;
            const adviceText = response.slip.advice;
            
            adviceId.innerHTML = adviceNumber;
            adviceMessage.innerHTML = adviceText;
            quotes.classList.remove('hidden')
        } else {
            quotes.classList.add('hidden')
        }
    }
}

window.onload = advice();

diceEvent.addEventListener("click", () =>{
    diceEvent.setAttribute("disabled", '');
    advice();
    diceEvent.removeAttribute("disabled", '');
})