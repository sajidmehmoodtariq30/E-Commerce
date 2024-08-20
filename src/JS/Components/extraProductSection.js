import '../../Styles/components/extra-product-section.css'
import Image3 from '/images/laptop.png'
import Image2 from '/images/headphoneEcom.png'
import Image1 from '/images/mobiles.png'

const extraProductSection = `
    <div class="container grid grid-three--cols">
        <div class="div-extra grid grid-two--cols">
          <div class="extra-text">
            <p>new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Show now</a>
          </div>
          <div class="extra-img">
            <img src="${Image3}"  alt="" />
          </div>
        </div>

        <div class="div-extra grid grid-two--cols">
          <div class="extra-text">
            <p>new year sale</p>
            <h3>40% discount on speakers</h3>
            <a href="#">Show now</a>
          </div>
          <div class="extra-img">
            <img src="${Image2}"  alt="" />
          </div>
        </div>
        <div class="div-extra grid grid-two--cols">
          <div class="extra-text">
            <p>new year sale</p>
            <h3>get and extra 50% off</h3>
            <a href="#">Show now</a>
          </div>
          <div class="extra-img">
            <img src="${Image1}"  alt="" />
          </div>
        </div>
      </div>
`;


export default extraProductSection