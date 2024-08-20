import '../../Styles/components/extra-product-section.css'
import bacpackImage from '/images/products/backpack.jpg'
import umbrellaImage from '/images/products/umbrella.jpg'
import bathroomRugImage from '/images/products/bathroom-rug.jpg'

const extraProductSection = `
    <div class="container grid grid-three--cols">
        <div class="div-extra grid grid-two--cols">
          <div class="extra-text">
            <p>new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Show now</a>
          </div>
          <div class="extra-img">
            <img src="${bacpackImage}" alt="" />
          </div>
        </div>

        <div class="div-extra grid grid-two--cols">
          <div class="extra-text">
            <p>new year sale</p>
            <h3>40% discount on speakers</h3>
            <a href="#">Show now</a>
          </div>
          <div class="extra-img">
            <img src="${umbrellaImage}" alt="" />
          </div>
        </div>
        <div class="div-extra grid grid-two--cols">
          <div class="extra-text">
            <p>new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Show now</a>
          </div>
          <div class="extra-img">
            <img src="${bathroomRugImage}" alt="" />
          </div>
        </div>
      </div>
`;


export default extraProductSection