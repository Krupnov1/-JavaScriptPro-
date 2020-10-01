const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    shopCartUrl: '/getBasket.json',
    imgCatalog: 'https://placehold.it/200x150',
    imgShopCart: 'https://placehold.it/50x100',
    products: [],
    filtered: [],
    productShopCarts: [],
    searchLine: "",
    isVisibleCart: false
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },

    addProduct(product) {
      this.getJson(`${API}/addToBasket.json`).then(data => {
        if (data.result === 1) {
          let find = this.productShopCarts.find(el => el.id_product === product.id_product);
          if (find) {
            find.quantity++;
          } else {
            this.productShopCarts.push({...product, quantity: 1,});
          }
        } else {
          alert('Error');
        }
      })
    },

    remove(item) {
      this.getJson(`${API}/deleteFromBasket.json`).then(data => {
        if (data.result === 1) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            this.productShopCarts.splice(this.productShopCarts.indexOf(item), 1)
          }
        }
      })
    },
    
    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    }
  },

  created() {
    this.getJson(`${API + this.catalogUrl}`).then(data => {
      for(let el of data){
        this.products.push(el);
        this.filtered.push(el);
      }
    });
  }, 
});
