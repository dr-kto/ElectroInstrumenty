let currency = " тг"
let items = divs(".item")


for (let i = 0; i < items.length; i++)
{
    let item = items[i]
    
    let price = item.dataset.itemPrice
    let count = item.dataset.itemCount
    let total = item.dataset.totalPrice
    
    item.addEventListener('click', e => {
        switch (e.target.className)
        {
            case "item_btn_add":
                e.target.classList.add("hide")
                count = 1
                item.querySelector(".item_btn_count").classList.remove("hide")
                item.querySelector(".item_count").classList.remove("hide")
                item.querySelector(".item_btn_count_number").innerText = count  
                item.querySelector(".item_btn_count_number").innerText = count
                total = price * count
                break
            case "item_btn_count_decrease":
                if(count > 0)
                {
                    count--;
                    item.querySelector(".item_btn_count_number").innerText = count  
                    item.querySelector(".item_count").innerText = count  
                    total = price * count
                }
                if(count == 0)
                {
                    item.querySelector(".item_btn_add").classList.remove("hide")
                    item.querySelector(".item_btn_count").classList.add("hide")
                    item.querySelector(".item_count").classList.add("hide")
                }
                break
            case "item_btn_count_increase":
                count++
                item.querySelector(".item_btn_count_number").innerText = count
                item.querySelector(".item_count").innerText = count
                total = price * count 
                break    
        }
        item.dataset.itemCount = count
        item.dataset.totalPrice = total
        sum()  

    })
}


const mainContent = div(".items")

items.forEach((item) => {
  item.addEventListener("click", e => {
    document.startViewTransition(() => {
      if (!item.classList.contains('active') && e.target.className == "item_img"  ) {
        mainContent.classList.add("expanded");
        item.classList.add("active");
      } else if (e.target.className == "item_close")
        {
        item.classList.remove("active");
        mainContent.classList.remove("expanded");
      }
    });
  });
});
