const products = [
    {
        id: 1,
        name: 'Wedding gown ',
        img: '<img src="./images/wedding picture.jpg">',
        dsc: 'Promote hair growth with the rich formula of the Kirkland Signature Minoxidil 5% treatment made for men. Kirkland Signature Minoxodil topical Aerosol 5% is for men who have a general thinning of hair on the top of the scalp. Minoxidil has been show to regrow hair in men with low to moderate hair loss.Treat thinning hair and balding with this Kirkland hair loss treatment.Promote hair growth with the rich formula of the Kirkland Signature Minoxidil 5% treatment made for men. The active ingredient of this Kirkland extra strength treatment is 5% Minoxidil that nourishes the hair follicle to facilitate the hair growth process. As believed by the makers, this Kirkland hair loss treatment takes about 2 - 4 months time for effective results to start showing. Just 1 ml of the Kirkland Signature Minoxidil 5% treatment has to be applied twice daily to give you the best results possible. Treat thinning hair and balding with this Kirkland hair loss treatment.'
    },
    {
        id: 2,
        name: 'Suprise Package ',
        img: './images/ballon.jpeg',
        dsc: ' A fantastic wrist watch, does its functions with near accuracy. This H11 Ultra Plus (H11 Ultra+) Series 8 smart watch is an excellent wearable smart device or smart watch, so much different from many smart watches and upgraded with abilities more superior and long lasting than the other smart watches you have purchased and seen.'
    },
     {
        id: 3,
        name: 'Decoration',
        img: './images/dE1.jpeg',
        dsc: 'Some Ladies like their sunglasses having big frames. It is a form of fashion and actually protects the eyes completely, not only from rays of the sun also from wind.This is one of those Designer Luxury Big Frame sunglasses with metal material and very comfortable to wear daily. It gives you a pretty look.'
     },
    {
       id: 4,
       name: 'Suprise Package',
       img: './images/dE2s.jpeg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course '
    },
    {
       id: 5,
       name: 'Traditional Dressing',
       img: './images/make-up.jpg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course '
    },
    {  id: 6,
       name: 'Cake',
       img: ' ./images/cakep1.jpeg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course '
    },
    {  id: 7,
       name: 'Castle Cake',
       img: ' ./images/castle1.jpeg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course '
    },
    {  id: 8,
       name: 'Small Chops',
       img: './images/dEs1.jpeg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course '
    },

]

export function updateUI(){
    const product_grid = document.getElementById('product-div')
    if(product_grid===null){
        return
    }
    products.map((product)=>{
        const product_box = document.createElement('div');
        product_box.classList = 'product-box'
        const img = document.createElement('img');
        img.src = product.img;
        const product_name = document.createElement('div');
        product_name.innerText = product.name;
        const view_btn = document.createElement('button');
        view_btn.innerText = "view";
        view_btn.addEventListener("click",  ()=>openModal(product))

        product_box.appendChild(img);
        product_box.appendChild(product_name);
        product_box.appendChild(view_btn);

        product_grid.appendChild(product_box);
    })
}
updateUI() //initial function call
function openModal(product_obj){
    const modal = document.getElementsByClassName('modal_box')[0]
    modal.getElementsByClassName('product_name')[0].innerHTML = product_obj.name
    modal.getElementsByClassName('product_dsc')[0].innerHTML = product_obj.dsc
    modal.querySelector('img').src = product_obj.img
    modal.style.display = 'flex'
}
function closeModal(){
    const modal = document.getElementsByClassName('modal_box')[0]
    modal.style.display = 'none'
}

document.getElementsByClassName('overlay')[0].addEventListener('click', (event)=>{
        event.preventDefault()
        closeModal()
    }
)