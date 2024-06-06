import { other_content, contents_container, service_content} from "./navigation.js";
const products = [
    {
        id: 1,
        name: 'Event Planning',
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
        name: 'Decoration:',
        img: './images/dE1.jpeg',
        dsc: 'We can transform your event from ordinary to extraordinary with various types of event decoration. From stunning table decorations to immersive digital backdrops, get inspired for your next event!',
        price : 50000
     },
    {
       id: 4,
       name: 'Suprise Package',
       img: './images/dE2s.jpeg',
       dsc: 'We doubles the joy of any occasion with our  most unique and impressive surprise and gift ideas that can be creatively planned and organised for the most significant milestones of people’s lives. We have numerous surprise and gift packages  in store for all the occasions like birthdays, anniversaries, Christmas, engagements, baby showers, bridal showers, retirements and many more joyous occasions',
       price : 10000
    },
    {
       id: 5,
       name: 'Traditional Dressing',
       img: './images/make-up.jpg',
       dsc: 'We offer as many different costume traditions in Africa as there are languages. Each country, each tribe has clothing traditions that arise from local availability of materials, level of industrialization, trade partners, religions, weather, and cultural influences. There is no single traditional African costume. Africa has an exceedingly rich and varied costume landscape.',
       price : 50000
    },
    {  id: 6,
       name: 'Cake for all Occasions',
       img: ' ./images/cakep1.jpeg',
       dsc: 'We offer an Exceptional Cakes and other Bakery products that bring Joy and Sweet Memories to life’s Celebrations. ',
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
       dsc: 'We offer finger foods such as samosas, spring rolls, puff-puff, etc. They are usually used at occasions and events as appetizers, until the main meal comes. They are very delicious and can be eaten as snacks along with cold drinks, tea or water. ',
       price : 50000
    },
    {  id: 9,
       name: 'Wedding dress',
       img: './images/new p37.jpg',
       dsc: 'We offer Unique and inexpensive wedding gowns that wow!',
       price : 50000
    },
    {  id: 10,
       name: 'Cocktails',
       img: './images/cocktails.jpg',
       dsc: 'We offer classic, refreshing and sweet cocktails made with wine preferably red wine, fruit juice, and a variety of fruits.',
       price : 50000
    },
    {  id: 11,
       name: 'Food Tray',
       img: './images/pic20.jpg',
       dsc: 'We deliver amazing food packages. this is best for occasions like birthdays, anniversaries etc.If you want to surprise your loved ones with something affordable and delicious , our premium food tray package will pay attention to your luxury and details and bring you mouth watering deliciousness.The package is affordable, and will bring you all the value and happiness you desire.',
       price : 50000
    },

]
const Cart = []
class cartItemClass{
    constructor(id, name, img, price){
        this.id = id;
        this.name= name;
        this.img = img;
        this.price = price;
        this.qty = 1;
        
    }
    getTotalCost(){
        return this.qty * this.price;
    }
}
// const currencyFormater = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN', currencyDisplay: 'symbol' });
function formatCurrency(amount) {
    const currencySymbol = '₦'
    // Format the number with commas and two decimal places
    const formattedAmount = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    
    // Concatenate the currency symbol to the formatted amount
    return currencySymbol + formattedAmount;
}
export function updateUI(){
    const product_grid = document.getElementById('product-div')
    updateCart()
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
        product_name.classList='name'
        const product_price = document.createElement('div');
        product_price.innerText = formatCurrency(product.price);
        product_price.classList='price'
        const view_btn = document.createElement('button');
        view_btn.innerText = 'More Details';
        view_btn.addEventListener("click",  ()=>openModal(product))
        const book_btn = document.createElement('button');
        book_btn.innerText = 'Add to Cart'
        book_btn.classList = 'btn'
       

        book_btn.addEventListener("click",  ()=>addToCart(product.id))
        product_box.appendChild(img);
        product_box.appendChild(product_name);
        product_box.appendChild(product_price);
        product_box.appendChild(view_btn);
        
        product_box.appendChild(book_btn);

        product_grid.appendChild(product_box);
    })
}
updateUI(); //initial function call
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
document.getElementById('cart_link').addEventListener('click', (event)=>{
    event.preventDefault()
    closeModal()
} )


function addToCart(productId){
    // console.log(productId);
    const productIndex = products.findIndex(e =>e.id===productId);
    const productIndexInCart = Cart.findIndex(e =>e.id===productId);
    // console.log(products[productIndex]);
    const tmp_p = products[productIndex];
    const newobj = new cartItemClass(tmp_p.id, tmp_p.name, tmp_p.img, tmp_p.price);
    if(productIndexInCart === -1){
        Cart.push(newobj);
    }else{
        Cart[productIndexInCart].qty++;
    }
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
    // cartDiv.classList = 'cart_div'
    if(cartDiv===null){
        return
    }
    cartDiv.innerHTML = '';
    const checkOutBox = document.getElementsByClassName('check-btn')[0];
    updateNotification();
  
    if(Cart.length === 0){
        // cartDiv.innerHTML = 'You do not have any items in your cart please continue shopping!'
        const shopCart = document.createElement('div')
        shopCart.innerText = 'You do not have any items in your cart please continue shopping!'
        shopCart.classList = 'shop'
        shopCart.addEventListener("click",  Nav2Shop)
        cartDiv.appendChild(shopCart)
        
        console.log(shopCart)
        checkOutBox.setAttribute("disabled", "true");
        return
    }else{
        checkOutBox.setAttribute("disabled", "false");
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
        price.innerText = formatCurrency(cartItem.getTotalCost());
        cartQty.appendChild(price);
        const btn_box = document.createElement('div');
        btn_box.classList = 'cart-qty';
        const decreaseBtn = document.createElement('button');
        decreaseBtn.innerText ='-'
        decreaseBtn.classList = 'btn-min'
        decreaseBtn.addEventListener('click', ()=>(decreaseQty(cartItem.id)));
        btn_box.appendChild(decreaseBtn);
        const number = document.createElement('div');
        number.innerText = cartItem.qty //!to revisit
        btn_box.appendChild(number);
        const increaseBtn = document.createElement('button')
        increaseBtn.innerText = '+'
        increaseBtn.classList = 'btn-min'
        increaseBtn.addEventListener('click', ()=>(increaseQty(cartItem.id)));
        btn_box.appendChild(increaseBtn);

        cartQty.appendChild(btn_box);
        cart_containerBox.appendChild(cartQty);
        cartDiv.appendChild(cart_containerBox);
    })
    const cartTotal = document.createElement('div');
    cartTotal.innerText = `cart total: ${formatCurrency(calculateCartTotal())}`
    cartTotal.classList = 'total'
    cartTotal.style.color = 'black'
    cartDiv.appendChild(cartTotal);
}
function increaseQty(cartId){
    const cartIndex = Cart.findIndex(e =>e.id===cartId);
    if(cartIndex === -1){
        return console.error('can not find cartid in the cart');
    }
    Cart[cartIndex].qty++;
    updateCart();
}

function decreaseQty(cartId){
    const cartIndex = Cart.findIndex(e =>e.id===cartId);
    if(cartIndex === -1){
        return console.error('can not find cartid in the cart');
    }
    if(Cart[cartIndex].qty > 1){
        Cart[cartIndex].qty--;
    }else{
        Cart.splice(cartIndex, 1);
    }
    updateCart();
}

function Nav2Shop(){
    contents_container.innerHTML = service_content;
    updateUI();
    toggleDisplayCart();
}
function updateNotification(){
    const notBox = document.getElementsByClassName('notification_Badge')[0];
    notBox.innerText = Cart.length;
    if(Cart.length !== 0 ){
        notBox.style.display = 'flex'
    }else{
        notBox.style.display = 'none'
    }
    console.log('updatenotification runs', Cart.length)
}
function calculateCartTotal(){
    let sumTotal = 0;
    for (const cartItem of Cart) {
       sumTotal += cartItem.getTotalCost();
    }
    return sumTotal;
    // console.log(sumTotal)
}

