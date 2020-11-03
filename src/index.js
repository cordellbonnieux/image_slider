import {addImages} from './populate'

const sliderWrapper = document.getElementById('sliderWrapper')
    // for testing
    sliderWrapper.style.cssText = 'display:flex; flex-wrap: wrap;'
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