let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let s = ""

function increment()
{
    count += 1
    countEl.innerText = count
}

function del()
{
    count = 0
    countEl.innerText = count
}

function save()
{
    s = "[" + count + "]"
    saveEl.textContent += s;
}