const ul = document.querySelector('[data-js="products-list"]')

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const getProductsListOnSale = product => {
    const { name, price } = product
    const isGreatherThanOrEqual30 = price >= 30;

    return isGreatherThanOrEqual30
        ? { name, price}
        : product;
}

const insertProductsOnList = (products) => {
    products.forEach((product) => {
        const { name, price } = product
        const li = document.createElement('li')

        li.textContent = `${name} - R$ ${price}`
        ul.insertAdjacentElement('beforeend', li)
    })
}

const productsOnSale = products
    .map(getProductsListOnSale)
    .map(product => {
        const { name, price } = product
        const formatedPrice = Number(price).toFixed(2)

        return { name, price: formatedPrice}
    })

insertProductsOnList(productsOnSale);
