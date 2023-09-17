

function div(querySelector, index=0)
{
    return document.querySelectorAll(querySelector)[index]
}

function divs(querySelectorAll)
{
    return document.querySelectorAll(querySelectorAll)
}

function sum()
{
    let sum = div(".total_price")
    let items = divs(".item")
    sum.innerText = 0
    for (item of items)
    {
        let totalPrice = item.dataset.totalPrice
        sum.innerText = Number(sum.innerText) + Number(totalPrice)
    }
}

