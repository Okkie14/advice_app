const diceEvent = document.getElementById('dice');
const adviceId = document.getElementById('adviceId');
const adviceMessage = document.getElementById('text');

async function advice() {
    const message = await fetch("https://api.adviceslip.com/advice");
    const response = await message.json();

    const adviceNumber = response.slip.id;
    const adviceText = response.slip.advice;
    
    adviceId.innerHTML = adviceNumber;
    adviceMessage.innerHTML = adviceText;

}

window.onload = advice();

diceEvent.addEventListener("click", () =>{
    advice();
})