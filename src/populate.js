export function addImages(sliderWrapper, images){
    for (let i = 0; i < images.length; i++){
        const slide = document.createElement('div')
            slide.setAttribute('class', 'slide')
            slide.setAttribute('id', `slide${i + 1}`)
            slide.style.display = 'block'
        const slideImg = document.createElement('img')
            slideImg.src = images[i].img
            // added for testing
            slideImg.style.cssText = 'width:300px;' 
        slide.appendChild(slideImg)
        sliderWrapper.appendChild(slide)
        addNavigation(slide) 
        if ([i] != 0){
            slide.style.display = 'none'
        }
    }
}
function addNavigation(slide){
    const previous = document.createElement('span')
        previous.textContent = 'Previous'
        previous.addEventListener('click', function(){
            slide.style.display = 'none'
            //previousSlide.style.display = 'block'
        })
        slide.appendChild(previous)

    const next = document.createElement('span')
        next.textContent = 'Next'
        next.addEventListener('click', function(){
            slide.style.display = 'none'
            //nextSlide.style.display = 'block'
        })
        slide.appendChild(next)
}