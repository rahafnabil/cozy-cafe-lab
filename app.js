////////part1/////////////
console.log('Cozy Cafe JavaScript is connected!');
const mainTitleEl = document.querySelector('#main-title')
mainTitleEl.textContent='Welcome to the cozy cafe'

//////part2////////

const highLightEls=document.querySelectorAll('.highlight-title')
console.log(highLightEls)

highLightEls.forEach((highLightEl)=>{
    console.log(highLightEl.textContent)
    highLightEl.style.fontStyle= 'italic'
})
const quoteElement=document.querySelector('#quote-of-the-day')
quoteElement.textContent='A little coffee, a little conversation.'
quoteElement.classList.add('featured')
/////////////part3/////////////

const mainPhotoEl=document.querySelector('#main-photo')
console.log(mainPhotoEl.getAttribute('src'))
mainPhotoEl.setAttribute('src','./assets/berry-cake.jpg')
mainPhotoEl.setAttribute('alt','berry cake img')
////////////////part4//////////
const bgClrBtnEl=document.querySelector('#bg-color-btn')
const bodyBgEl=document.querySelector('body')
function handleBackgroundChange(){
   bodyBgEl.style.backgroundColor=('lightsteelblue') 
    
}
bgClrBtnEl.addEventListener("click",handleBackgroundChange)
/////////////pt5 w\ lvl up/////////
const cafeSpecList=document.querySelectorAll('.specialty-status')
const soldoutBtns=document.querySelectorAll('.sold-out-btn')

const statuses=['Available', 'Sold Out', 'Available']

const renderstatus =()=>{
    statuses.forEach((status,index)=>{
        cafeSpecList[index].textContent=status
    })

}
renderstatus()
soldoutBtns.forEach((button,index)=>{
    button.addEventListener('click',()=>{
       statuses[index]='sold out'
       renderstatus()

    })
})




