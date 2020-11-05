import {addImages} from './populate'

const sliderWrapper = document.getElementById('sliderWrapper')
const images = [
    {
        img : 'img/image1.jpg'
    },
    {
        img : 'img/image2.jpg'
    },
    {
        img : 'img/image3.jpg'
    },
    {
        img : 'img/image4.jpg'
    }
]

addImages(sliderWrapper, images)

import css from './style.css'