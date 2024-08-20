import '../../Styles/components/product-template.css';

const productTemplate = (currproduct) => {
    let actualPrice = ((currproduct.price*0.5)+currproduct.price).toFixed(2)
    return  `
<div class="cards" id="cardValue">
    <article class="information [ card ]">
        <span class="category">${currproduct.category}</span>
        <div class="imageContainer">
            <img class="productImage" src="${currproduct.image}" alt="${currproduct.name}" />
        </div>

        <h2 class="productName">${currproduct.name}</h2>
        <div class="productRating">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>

        <p class="productDescription">${currproduct.description}</p>

        <div class="productPriceElement">
            <p class="productPrice">$${currproduct.price}</p>
            <p class="productActualPrice">${actualPrice}</p>
        </div>

        <div class="productStockElement">
            <p class="productProperty">Total Stocks Available:</p>
            <p class="productStock">${currproduct.stock}</p>
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
`;
}
export default productTemplate;
