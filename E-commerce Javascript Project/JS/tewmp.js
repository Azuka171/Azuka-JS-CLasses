const products = [
    {
        id: 1,
        name: 'Event Planning:',
        img: './images/plan-image.jpg',
        dsc: 'We are skilled multitaskers, problem solvers, and creative thinkers we   love creating unforgettable experiences for our clients.We excel at organization, budget management, and communication, ensuring every detail is meticulously planned for a seamless event experience.',
        price : 350000
    },
    {
        id: 2,
        name: 'Event Coverage:',
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
       name: 'Suprise Package:',
       img: './images/dE2s.jpeg',
       dsc: 'We doubles the joy of any occasion with our  most unique and impressive surprise and gift ideas that can be creatively planned and organised for the most significant milestones of people’s lives. We have numerous surprise and gift packages  in store for all the occasions like birthdays, anniversaries, Christmas, engagements, baby showers, bridal showers, retirements and many more joyous occasions',
       price : 10000
    },
    {
       id: 5,
       name: 'Traditional Dressing:',
       img: './images/make-up.jpg',
       dsc: 'We offer as many different costume traditions in Africa as there are languages. Each country, each tribe has clothing traditions that arise from local availability of materials, level of industrialization, trade partners, religions, weather, and cultural influences. There is no single traditional African costume. Africa has an exceedingly rich and varied costume landscape.',
       price : 50000
    },
    {  id: 6,
       name: 'Cake for all Occasions:',
       img: ' ./images/cakep1.jpeg',
       dsc: 'We offer an Exceptional Cakes and other Bakery products that bring Joy and Sweet Memories to life’s Celebrations. ',
       price : 50000
    },
    {  id: 7,
       name: 'Bridal MakeUp:',
       img: ' ./images/new p29.jpg',
       dsc: 'A wedding this regal calls for a makeup look of equal refinement. Soft shadows and elegantly sculpted brows pair beautifully with hazelnut lipstick. Those long lashes, however, definitely steal the show.',
       price : 50000
    },
    {  id: 8,
       name: 'Small Chops:',
       img: './images/dEs1.jpeg',
       dsc: 'We offer finger foods such as samosas, spring rolls, puff-puff, etc. They are usually used at occasions and events as appetizers, until the main meal comes. They are very delicious and can be eaten as snacks along with cold drinks, tea or water. ',
       price : 50000
    },
    {  id: 9,
       name: 'Wedding dress:',
       img: './images/new p37.jpg',
       dsc: 'We offer Unique and inexpensive wedding gowns that wow!',
       price : 50000
    },
    {  id: 10,
       name: 'Cocktails:',
       img: './images/cocktails.jpg',
       dsc: 'We offer classic, refreshing and sweet cocktails made with wine preferably red wine, fruit juice, and a variety of fruits.',
       price : 50000
    },
    {  id: 11,
       name: 'Food Tray:',
       img: './images/pic20.jpg',
       dsc: 'We deliver amazing food packages. this is best for occasions like birthdays, anniversaries etc.If you want to surprise your loved ones with something affordable and delicious , our premium food tray package will pay attention to your luxury and details and bring you mouth watering deliciousness.The package is affordable, and will bring you all the value and happiness you desire.',
       price : 50000
    },

]
const Cart = []

class CartItemClass{
    constructor(id, name, img, price){
        this.name = name;
        this.name = name;
    }
}


function addToCart(productId){
    // console.log(productId);
    const productIndex = products.findIndex(e =>e.id===productId)
    // console.log(products[productIndex]);
    Cart.push(products[productIndex])
    console.table(Cart);
    updateCart();

}



