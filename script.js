let calculationField = document.querySelector(".calculation-field")
let resultFiled = document.querySelector(".result-field")
let keys = document.querySelectorAll(".key")
let clearKey = document.querySelector(".clear-key")
let arrowClearKey = document.querySelector(".arrow-clear-key")
let resultKey = document.querySelector(".result-key")

let operators = document.querySelectorAll(".key-operator")

calculationField.value = ""
resultFiled.value = "0"

let calculate = function() {
    
    function disabled() {
        for (let operator of operators) {
            operator.disabled = false
        }
    }

    let modal = {
        fullClear()  {
            calculationField.value = ""
            resultFiled.value = "0"
            disabled()
        },
        smallClear() {
            let target = calculationField.value

            calculationField.value = target.substring(0, target.length-1)
            if (calculationField.value.length == 0) {
                calculationField.value = ""
            }

            resultFiled.value = "" 
            disabled()
        },
        resultation() {
            if (calculationField.value == "") {
                resultFiled.value = "0"
            } else {
                resultFiled.value = eval(calculationField.value)
            }
        },
        calcValue(event) {
            for (let operator of operators) {
                if (event.target.className == "key key-operator" && calculationField.value == "") {
                    calculationField.value = "0"
                }
                if (event.target.className == "key key-operator") {
                    operator.disabled = true
                } else {
                    operator.disabled = false
                }
            }
            calculationField.value += event.target.textContent
        }
    }

    clearKey.addEventListener("click", modal.fullClear)
    arrowClearKey.addEventListener("click", modal.smallClear)
    resultKey.addEventListener("click", modal.resultation)
    for (let key of keys) {
        key.addEventListener("click", modal.calcValue)
    }
   
}

calculate()
console.log("hello")
console.log(keys)
console.log(keys)
// console.log(event.target)