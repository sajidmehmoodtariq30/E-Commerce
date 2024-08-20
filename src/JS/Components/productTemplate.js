import '../../Styles/components/product-template.css'

const productTemplate = `
<template id="productTemplate">
    <div class="cards" id="cardValue">
    <article class="information [ card ]">
        <span class="category"></span>
        <div class="imageContainer">
        <img class="productImage" src="" alt="" />
        </div>

        <h2 class="productName"></h2>
        <div class="productRating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
        ><i class="fa-solid fa-star"></i>
        </div>

        <p class="productDescription"></p>
        <!-- <p class="productPrice"></p> -->
        <div class="productPriceElement">
        <p class="productPrice"></p>
        <p class="productActualPrice"></p>
        </div>

        <div class="productStockElement">
        <p class="productProperty">Total Stocks Available:</p>
        <p class="productStock"></p>
        </div>

        <div class="productQuantityElement">
        <p class="productProperty">Quantity(Pieces)</p>
        <div class="stockElement">
            <button class="cartIncrement">+</button>
            <p class="productQuantity">1</p>
            <button class="cartDecrement">-</button>
        </div>
        </div>

        <button class="add-to-cart-button">
        <i class="fa-solid fa-cart-shopping"></i> Add To Cart
        </button>
    </article>
    </div>
</template>
`
export default productTemplate;