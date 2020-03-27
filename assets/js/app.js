// define ui variable 
let loanAmount = document.querySelector('#loan');
let loanProfit = document.querySelector('#percent');
let loanYear = document.querySelector('#year');
let calculateBtn = document.querySelector('button');
let loanAllProfit = document.querySelector('#allProfit');
let loanMontlyProfit = document.querySelector('#profitInMonth');
let loanProfitAndAmount = document.querySelector('#totalPay');
let alertBox = document.querySelector('.alert-float');
let spinner = document.querySelector('.loading');
let resultBox = document.querySelector('.resultBox');
let result = document.querySelector('.result');


//invoke all events
loadAllEvents();

function loadAllEvents() {
    calculateBtn.addEventListener('click', () => {
        resultBox.style.display = 'block';
        spinner.style.display = 'inline-block';
        setTimeout(calculateLoan, 2000);
    });
}

function calculateLoan() {
    let intAmount = parseFloat(loanAmount.value);
    let intPercent = parseFloat(loanProfit.value);
    let intMonth = parseFloat(loanYear.value) * 12;

    let calPercent = (intAmount * intPercent * (intMonth + 1)) / 2400;
    let calMontlyPayment = (calPercent + intAmount) / intMonth;
    let calTotalPayment = calPercent + intAmount;

    if (!isNaN(intAmount) && !isNaN(intPercent) && !isNaN(intMonth)) {
        loanAllProfit.value = Math.round(calPercent).toString() + " هزار تومان";
        loanMontlyProfit.value = Math.round(calMontlyPayment).toString() + " هزار تومان";
        loanProfitAndAmount.value = Math.round(calTotalPayment).toString() + " هزار تومان";
        resultBox.style.display = 'block';
        result.style.display = 'block';
        spinner.style.display = 'none';
    } else {
        showError();
    }

}

function showError() {
    resultBox.style.display = 'none';
    alertBox.classList.add('show');
    loanAmount.classList.add('invalid');
    loanProfit.classList.add('invalid');
    loanYear.classList.add('invalid');
    setTimeout(clearError, 2000);

}

function clearError() {
    alertBox.classList.remove('show');
    loanAmount.classList.remove('invalid');
    loanProfit.classList.remove('invalid');
    loanYear.classList.remove('invalid');
}