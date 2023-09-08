import './slider.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'
import IMAGEN from '../../img/IMAGEN.png'; 

export default function Slider() {

    return (
        <CCarousel controls indicators>
            <CCarouselItem>
              <CImage className="d-block w-100" src={IMAGEN} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={IMAGEN} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={IMAGEN} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
        
    )
}