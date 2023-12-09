let cont = document.querySelector('.container')
let btn_five = document.querySelector('[data-five]')
let btn_all = document.querySelector('[data-all]')
let total_view = document.querySelector('#total')
let saveds = []

btn_five.onclick = () => {
    reload(arr.slice(0, 5))
}

btn_all.onclick = () => {
    reload(arr)
}

reload(arr)

function reload(product) {
    cont.innerHTML = ""

    for (let item of product) {
        // crate
        let div_item = document.createElement('div')
        let img = document.createElement('img')
        let descrip_div = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let button = document.createElement('button')
        let b = document.createElement('b')

        // styling
        div_item.classList.add('item')
        descrip_div.classList.add('description')

        img.src = item.image
        img.alt = item.title

        h2.innerHTML = `${item.category} (${item.rating.count})`
        p.innerHTML = item.description.slice(0, 100)
        b.innerHTML = " read more..."
        button.innerHTML = "Save"

        // append
        div_item.append(img, descrip_div)
        descrip_div.append(h2, p, button)
        p.append(b)
        cont.append(div_item)

        // functions
        button.onclick = () => {
            if (saveds.includes(item.id)) {
                // delete
                let idx = saveds.indexOf(item.id)
                saveds.splice(idx, 1)
                button.classList.remove('active-btn')
            } else {
                button.classList.add('active-btn')
                saveds.push(item.id)
            }
            total_view.innerHTML = saveds.length
        }
        b.onclick = () => {
            if (b.innerHTML === "close") {
                p.innerHTML = item.description.slice(0, 100)
                b.innerHTML = " read more..."
            } else {
                p.innerHTML = item.description
                b.innerHTML = "close"
            }
            p.append(b)
        }
    }
}

// innerHTML - он покажить HTML элемент тоже а textContent только тексты

let open_Cart = document.querySelector('[data-cart]')
let clsoeCart = document.querySelector('.close2')
let body = document.querySelector('body')

open_Cart.onclick = () => {
    body.classList.toggle('showCart')
}

clsoeCart.onclick = () => {
    body.classList.toggle('showCart')
}