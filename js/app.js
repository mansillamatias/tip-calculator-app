const section = document.getElementById('section')
const bill = document.getElementById('bill')
const tip = document.getElementById('tip')
const tipCustom = document.getElementById('tip').children[5]
const numberPeople = document.querySelector('.number-people')
const people = document.getElementById('people')
const zero = document.querySelector('.number-people').children[0].children[0]
const reset = document.getElementById('reset')
const tipAmount = document.getElementById('tip-amount')
const total = document.getElementById('total')

let userBill = 0
let userTip = 0
let userTipCustom = 0
let userPeople = 0
let userTipAmount
let userTotal


function removeTipButtonActive() {
  const buttons = [...tip.children]
  buttons.forEach(item => {
    if (item.classList.contains('active')){
      item.classList.remove("active")
    }
  })
}

function displayResult() {
  if (userBill === 0 || userPeople === 0){
    userTipAmount = 0.00
    userTotal = 0.00
  } else if(userTip !== 0){
    userTotal = (userBill * (userTip / 100)).toFixed(2)
    userTipAmount = (userTotal / userPeople).toFixed(2)
    reset.disabled = false
  } else if(userTipCustom !== 0){
    userTotal = (userBill * (userTipCustom / 100)).toFixed(2)
    userTipAmount = (userTotal / userPeople).toFixed(2)
    reset.disabled = false
  }
  tipAmount.textContent = `$${userTipAmount}`
  total.textContent = `$${userTotal}`
}

function reseteo(e) {
  bill.value = ""
  userBill = 0
  people.value = ""
  userPeople = 0
  userTip = 0
  userTipCustom = 0
  tipCustom.children[0].value= ""
  tipAmount.textContent = "$0.00"
  total.textContent = "$0.00"
  removeTipButtonActive()
  e.target.disabled = true
}

section.addEventListener('change', (e) => {
  let id = e.target.id

  if (id === 'bill'){
    userBill = bill.valueAsNumber
  }

  if (id === 'people'){
    if(people.valueAsNumber === 0){
      numberPeople.classList.add('number-people-zero')
      console.log({people})
    } else {
      numberPeople.classList.remove('number-people-zero')
      userPeople = people.valueAsNumber
    }
  }
  displayResult()
})

tip.addEventListener('change', (e) => {
  userTipCustom = e.target.valueAsNumber
  removeTipButtonActive()
  userTip = 0
  displayResult()
})


tip.addEventListener('click', (e) => {
  const tagName = e.target.tagName
  let valueTip = +(e.target.value)

  if(tagName === "BUTTON"){
    userTip = valueTip
    removeTipButtonActive()
  }
  e.target.classList.add('active')
  displayResult()
  e.stopPropagation()
})

reset.addEventListener('click', (e) => {
  reseteo(e)
})
