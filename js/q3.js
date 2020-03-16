'use strict';

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

var dateD = document.getElementById('date');
dateD.textContent = date;

function DateOrder(subject, newDate) {
    this.subject = subject;
    this.newDate = newDate;
    DateOrder.all.push(this);
}
DateOrder.all = [];

document.getElementById('dateForm').addEventListener('submit', theForm);

function theForm(event) {
    event.preventDefault();
    var whatDone = event.target.doneToday.value;
    var dateDate = event.target.Date.value;

    new DateOrder(whatDone, dateDate);
    update();
}

var theDiv = document.getElementById('olE');
function render() {
    
    var liE = document.createElement('li');
    olE.appendChild(liE);
    liE.setAttribute('class','liC');
    var pE1 = document.createElement('p');
    liE.appendChild(pE1);
    pE1.textContent = DateOrder.all.subject;
    
    var pE2 = document.createElement('p');
    liE.appendChild(pE2);
    pE2.textContent = DateOrder.all.newDate;


    getDate();
}
// render();

function update() {
    var TheDate = JSON.stringify(DateOrder.all);
    localStorage.setItem('upDateDate', TheDate);
}

function getDate() {
    var TheDate2 = localStorage.getItem('upDateDate');
    if (TheDate2) {
        DateOrder.all = JSON.parse(TheDate2);
    }
    
    render();
}
getDate();