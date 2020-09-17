/*1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. 
     Продумайте, какие методы понадобятся для работы с этими сущностями.*/

     //Класс корзины товаров
     class Basket {      
         constructor() {
            //Показать блок корзины 
            showCartBlock();

            //Скрыть блок корзины
            hideBucketBlock();

            //Определяет атрибуты товара при возникновении события
            extractingAttributes();

            //Добавляет выбранный товар в корзину;
            addProductToBasket();

            //Получаем общую сумму стоимости товара;
            getTotalSum();

            //Удаление товара из корзины;
            removeProductFromBasket();
         }
     };

     //Класс элемента корзины товаров
     class Element {
         constructor() {
            //Отображает элементы корзины товаров исходя из добавленного в корзину товара; 
            addProductToList();
            //Отображает общую сумму стоимости при добавлении и удалении товара;
            totalSum(); 
            //Добавление и удаление прослушивателей при событии
            addRemoveListeners();
            //Выполнение удаления товара из корзины
            removeProductListener();
         }
     };


//2. Добавьте для ProductList (GoodsList) метод, определяющий суммарную стоимость всех товаров.

class ProductList {
    #goods;
  
    constructor(container = '.products') {
      this.container = container;
      this.#goods = [];
      this.allProducts = [];
  
      this.#fetchGoods();
      this.#render();
      this.#totalSum();
    }
  
    #fetchGoods() {
      this.#goods = [
        {id: 1, title: 'Notebook', price: 20000},
        {id: 2, title: 'Mouse', price: 1500},
        {id: 3, title: 'Keyboard', price: 5000},
        {id: 4, title: 'Gamepad', price: 4500},
      ];
    }
  
    #render() {
      const block = document.querySelector(this.container);
  
      for (let product of this.#goods) {
        const productObject = new ProductItem(product);
  
        this.allProducts.push(productObject);
  
        block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
      }
    }

    #totalSum() {
      let sum = 0;
      for (let product of this.#goods) {
        sum += product.price;
      }
      console.log(`Cуммарная стоимость всех товаров ${sum}`);
    }
  }
  
  class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
    }
    getHTMLString() {
      return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="products">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="by-btn">Купить</button>
                </div>
            </div>`;
    }
  }
  
  const list = new ProductList();



/*const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProducts = (title, price, img = "https://placehold.it/200x150") => {
    return `<div class="product-item">
                <img src="${img}" alt="products">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
};

const renderProduct = (list) => {
    list.forEach(product => {
        const productList = renderProducts(product.title, product.price);
        document.querySelector('.products').insertAdjacentHTML("beforeend", productList);
    });
};

renderProduct(products);*/

