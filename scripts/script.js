let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"


let item = ""

let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    if (tg.MainButton.isVisible)
    {
        tg.MainButton.hide();
    }
    else
    {
        tg.MainButton.setText("Выйти")
        tg.MainButton.show()
    }
})

Telegram.WebApp.onEvent("mianButtonClicked", () => {
    tg.sendData(item)
})

let p = document.createElement("p")

p.innerText =  `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`

let container = document.querySelector(".container")

container.appendChild(p)