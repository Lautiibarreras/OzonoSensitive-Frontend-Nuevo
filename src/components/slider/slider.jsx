import './slider.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

export default function Slider() {

    return (
      <div className='sliderInicio'>
        <CCarousel controls indicators>
            <CCarouselItem>
              <CImage className="img-slider d-block w-100" src="https://m.media-amazon.com/images/I/61ylNQtdMSL.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src="https://m.aspozono.es/imagenes/generadores-de-ozono-agua.jpg" alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src="https://noticias.coches.com/wp-content/uploads/2020/07/ozono-700x394.png" alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
      </div>  
    )
}