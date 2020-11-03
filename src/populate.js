export function addImages(sliderWrapper, images){
    for (let i = 0; i < images.length; i++){
        const slide = document.createElement('div')
            slide.setAttribute('class', 'slide')
            slide.setAttribute('id', `slide${i}`)
            slide.style.display = 'inline-block'
        const slideImg = document.createElement('img')
            slideImg.src = images[i].img
            // added for testing
            slideImg.style.cssText = 'width:300px;' 
        slide.appendChild(slideImg)
        sliderWrapper.appendChild(slide)
    }
}