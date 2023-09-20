import './slider.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'
import IMAGEN from '../../img/IMAGEN.png'; 

export default function Slider() {

    return (
        <CCarousel controls indicators>
            <CCarouselItem>
              <CImage className="img-slider d-block w-100" src="https://images.ecestaticos.com/AYFOKZ0biBZpywYHJyVtjI6yI08=/30x9:640x330/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F872%2F945%2F0ad%2F8729450adcbcc482ad51fff0968e283c.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src="https://tecnol.es/shop/tecnol-health/3026-home_default/purificador-ozono.jpg" alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={IMAGEN} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
        
    )
}