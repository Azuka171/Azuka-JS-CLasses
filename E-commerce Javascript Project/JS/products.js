const products = [
    {
        id: 1,
        name: 'Event Planning ',
        img: './images/plan-image.jpg',
        dsc: 'We are skilled multitaskers, problem solvers, and creative thinkers we   love creating unforgettable experiences for our clients.We excel at organization, budget management, and communication, ensuring every detail is meticulously planned for a seamless event experience.',
        price : 350000
    },
    {
        id: 2,
        name: 'Event Coverage',
        img: './images/Live-Stream.jpg',
        dsc: ' From Pre-Event to Post Event, we are always able to create hype, capture the magic, relive the moments, and strengthen your brand.We also Go live on site  to allow you connect with your audience virtually wherever they may be!',
        price : 150000
    },
     {
        id: 3,
        name: 'Decoration',
        img: './images/dE1.jpeg',
        dsc: 'Some Ladies like their sunglasses having big frames. It is a form of fashion and actually protects the eyes completely, not only from rays of the sun also from wind.This is one of those Designer Luxury Big Frame sunglasses with metal material and very comfortable to wear daily. It gives you a pretty look.',
        price : 50000
     },
    {
       id: 4,
       name: 'Suprise Package',
       img: './images/dE2s.jpeg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course ',
       price : 50000
    },
    {
       id: 5,
       name: 'Traditional Dressing',
       img: './images/make-up.jpg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course ',
       price : 50000
    },
    {  id: 6,
       name: 'Cake',
       img: ' ./images/cakep1.jpeg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course ',
       price : 50000
    },
    {  id: 7,
       name: 'Bridal MakeUp',
       img: ' ./images/new p29.jpg',
       dsc: 'A wedding this regal calls for a makeup look of equal refinement. Soft shadows and elegantly sculpted brows pair beautifully with hazelnut lipstick. Those long lashes, however, definitely steal the show.',
       price : 50000
    },
    {  id: 8,
       name: 'Small Chops',
       img: './images/dEs1.jpeg',
       dsc: '10x6 Inch Professional Graphics Drawing Tablet 12 Express Keys with 8192 Levels Battery-Free Stylus/8pcs Nibs/Pen Clip Support PC/Laptop Connection Compatible with Windows Mac for Painting Designing Online Course ',
       price : 50000
    },

]
const Cart = []
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
        view_btn.innerText = 'More Details';
        view_btn.addEventListener("click",  ()=>openModal(product))
        const book_btn = document.createElement('button');
        book_btn.innerText = 'Add to Cart'
        book_btn.classList = 'btn'
       

        book_btn.addEventListener("click",  ()=>addToCart(product.id))
        product_box.appendChild(img);
        product_box.appendChild(product_name);
        product_box.appendChild(view_btn);
        product_box.appendChild(book_btn);

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
document.getElementsByClassName('btn-close')[0].addEventListener('click', (event)=>{
    event.preventDefault()
    closeModal()
} )

function addToCart(productId){
    // console.log(productId);
    const productIndex = products.findIndex(e =>e.id===productId)
    // console.log(products[productIndex]);
    Cart.push(products[productIndex])
    console.table(Cart);
    updateCart();

}
function toggleDisplayCart(){
    const cart_box = document.getElementById('cart-container');
    if(cart_box.style.display==='none'){
        cart_box.style.display = 'block'
    }else{
        cart_box.style.display = 'none'
    }
}
document.getElementById('cartToggle').addEventListener('click', (event)=>{
    toggleDisplayCart()
})

function updateCart(){
    const cartDiv = document.getElementsByClassName('injectDiv')[0]
    if(cartDiv===null){
        return
    }
    Cart.map((cartItem)=>{
        const cart_containerBox = document.createElement('div');
        cart_containerBox.classList = 'item-container'
        const namebox = document.createElement('div');
        namebox.innerText = cartItem.name;
        cart_containerBox.appendChild(namebox);
        const cartQty = document.createElement('div');
        cartQty.classList = 'cart-qty-box'
        const price = document.createElement('div');
        price.innerText = cartItem.price;
        cartQty.appendChild(price);
        const btn_box = document.createElement('div');
        btn_box.classList = 'cart-qty';
        const button = document.createElement('button');
        button.innerText ='-'
        button.classList = 'btn-min'
        btn_box.appendChild(button);
        const number = document.createElement('div');
        number.innerText = '2' //to revisit
        btn_box.appendChild(number);
        const lastbutton = document.createElement('button')
        lastbutton.innerText = '+'
        lastbutton.classList = 'btn-min'
        btn_box.appendChild(lastbutton);

        
        cartQty.appendChild(btn_box);
        cart_containerBox.appendChild(cartQty);
        cartDiv.appendChild(cart_containerBox);


    })
}


