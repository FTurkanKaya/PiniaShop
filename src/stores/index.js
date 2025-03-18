
import { defineStore} from "pinia";

export const useStore = defineStore('cart',{
    state:() => ({
        items:[],
        productCatalog: [
            { id: 1, name: "Product 1", price: 100 },
            { id: 2, name: "Product 2", price: 200 },
            { id: 3, name: "Product 3", price: 150 }
        ]

    }),
    getters: {
        totalPrice(state) {
            return state.items.reduce((total, item) => total +
            item.price, 0);
        },
        aantalProduct(state){
            return state.items.length;
        }
    },
    actions:{
        addToCart(product) {
            const existingIndex = this.findCartItemIndex(product);
            if (existingIndex !== -1) {
                // Eğer ürün sepette varsa adedini artır
                this.items[existingIndex].quantity += 1;
                //this.aantalProduct +=1
            } else {
                // Eğer ürün sepette yoksa yeni bir ürün olarak ekle
                this.items.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1, // Başlangıçta 1 adet olarak ayarla

                });

            }
            this.aantalProduct +=1
        },
        removeFromCart(index){
            this.items.splice(index,1);
        },
        clearCart(){
            this.items = [];
        },
        getCartItemQuantity(item) {
            return this.items.filter(cartItem => cartItem.id === item.id).length;
        },
        findCartItemIndex(product){
            return this.items.findIndex(item => item.id === product.id);
        },

        updateCartItemQuantity(index) {
            this.items[index].quantity += 1;
            this.aantalProduct += 1;
        }
    }



});