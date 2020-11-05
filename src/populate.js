export function addImages(sliderWrapper, images){
    for (let i = 0; i < images.length; i++){
        const slide = document.createElement('div')
            slide.setAttribute('class', 'slide')
            slide.setAttribute('id', `slide${i + 1}`)
        const slideImg = document.createElement('img')
            slideImg.src = images[i].img
            // added for testing
            slideImg.style.cssText = 'width:100%;' 
        slide.appendChild(slideImg)
        sliderWrapper.appendChild(slide)
        addNavigation(slide, i, images)
        addCompass(slide, i, images) 
        if ([i] != 0){
            slide.style.display = 'none'
        }
    }
}
function addNavigation(slide, i, images){
    if (i > 0){
        const previous = document.createElement('span')
            previous.textContent = 'Previous'
            previous.setAttribute('class', 'previous')
            previous.addEventListener('click', function(){
                const previousSlide = document.getElementById(`slide${i}`)
                //
                slide.style.opacity = '0'
                setTimeout(function(){fadeTimer(slide, previousSlide)}, 3000)
                //  
            })
        const previousWrapper = document.createElement('div')
            previousWrapper.setAttribute('class', 'previousWrapper')
            previousWrapper.appendChild(previous)
            slide.appendChild(previousWrapper)
    }
    if (i < (images.length - 1)){
        const next = document.createElement('span')
            next.textContent = 'Next'
            next.setAttribute('class', 'next')
            next.addEventListener('click', function(){
                const nextNumber = i + 2
                const nextSlide = document.getElementById(`slide${nextNumber}`)
                //
                slide.style.opacity = '0'
                setTimeout(function(){fadeTimer(slide, nextSlide)}, 2000)
                //     
            })
        const nextWrapper = document.createElement('div')
            nextWrapper.setAttribute('class', 'nextWrapper')
            nextWrapper.appendChild(next)
            slide.appendChild(nextWrapper)
    }
}
function fadeTimer(slide, otherSlide){
    slide.style.display = 'none'
    otherSlide.style.cssText = 'opacity:1; display:block;'
}
function addCompass(slide, i, images){
    const currentNumber = i + 1
    const totalNumber = images.length
    const compassWrapper = document.createElement('div')
        compassWrapper.setAttribute('class', 'compassWrapper')
        slide.appendChild(compassWrapper)
    const compass = document.createElement('span')
        compass.setAttribute('class', 'compass')
        compass.textContent = `${currentNumber}/${totalNumber}`
        compassWrapper.appendChild(compass)
}