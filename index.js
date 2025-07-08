const ma=document.querySelector('.main');
const images=[
    'room-homepage-master/images/desktop-image-hero-2.jpg',
    'room-homepage-master/images/desktop-image-hero-1.jpg',
    'room-homepage-master/images/desktop-image-hero-3.jpg'
];
const main_text_heading=document.querySelector('.main-text-heading');
const main_text_text=document.querySelector('.main-text-text');
const headings = [
    "We are available all across the globe",
    "Discover innovative ways to decorate" ,
    "Manufactured with the best materials"];
const texts = [
"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];
let index = 1;

function updateContent() {
    ma.style.backgroundImage = `url('${images[index]}')`;
    main_text_heading.textContent = headings[index];
    main_text_text.textContent = texts[index];
}
function previous(){
    if(index>0){
        index--;
        updateContent();
    }
}
function next(){
    if(index<2){
        index++;
        updateContent();
    }
}