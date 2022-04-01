const resetBtn = document.getElementById("reset")

let tip = 0;
let tipCard = document.querySelectorAll(".btn")
let selected = false

tipCard.forEach(card => {
    card.addEventListener("click", (e)=> {
        tip = e.target
        tip.classList.toggle("btn-active")
        for(let i = 0; i < tipCard.length; i++) {
            if(tipCard[i] !== tip) {
                tipCard[i].classList.remove("btn-active")
            } 
        }  
        tip = Number(tip.firstChild.textContent)
    })
})


resetBtn.addEventListener("click", ()=> {
    let amount = 0
    let total = 0

    let bill = document.getElementById("bill")
    let number = document.getElementById("people")
    let custom = document.getElementById("custom-btn")

    if(tip === 0 || custom.value !== "") {
        tip = custom.value
    }

    bill = Number(bill.value)
    number = Number(number.value)

    amount = (((bill * tip) / 100) / number)
    total = amount + (bill / number)
    amount = amount.toFixed(2)
    total = total.toFixed(2)

    document.getElementById("amount").textContent = `$${amount}`
    document.getElementById("total").textContent = `$${total}`
})