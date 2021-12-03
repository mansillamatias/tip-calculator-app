const section = document.getElementById('section')
const bill = document.getElementById('bill')
const tip = document.getElementById('tip')
const people = document.getElementById('people')
const reset = document.getElementById('reset')
const tipAmount = document.getElementById('tip-amount')
const total = document.getElementById('total')

let userBill = 0
let userTip = 0
let userPeople = 0
let userTipAmount
let userTotal

bill.addEventListener('change', () => {
  userBill = bill.valueAsNumber
})


tip.addEventListener('click', (e) => {
  const elements = e.target.parentElement.children
  const items = [...elements]

  if(e.target.tagName === "BUTTON"){
    items.forEach(item => {
      if(item.classList.contains('active')){
        item.classList.remove("active")
      }
    })

    e.target.classList.add('active')
  }

  userTip = +(e.target.value)
  e.stopPropagation()
})

people.addEventListener('change', () => {
  userPeople = people.valueAsNumber
})

function displayResult() {
  userTotal = (userBill * (userTip / 100)).toFixed(2)
  userTipAmount = (userTotal / userPeople).toFixed(2)
  tipAmount.textContent = `$${userTipAmount}`
  total.textContent = `$${userTotal}`
}

section.addEventListener('change', () => {
  if (userBill !== 0 && userTip !== 0 && userPeople !== 0 )
    displayResult()
})


function reseteo() {
  bill.value = "0"
  userBill = 0
  people.value = "0"
  userPeople = 0
  tipAmount.textContent = "0.00"
  total.textContent = "0.00"
}

reset.addEventListener('click', reseteo)
