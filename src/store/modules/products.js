import axios from 'axios'
const state = {
    stockDetails : [
        {
            itemNumber: 1,
            itemName : "Bass Guitar",
            itemPrice : 18600,
            itemQuantity : 10,
            itemImage: 'public/Images/zaki-arik-lJonRphb6Y4-unsplash.jpg'
        },
        {
            itemNumber: 27466,
            itemName : "Violin",
            itemPrice : 12000,
            itemQuantity : 12,
            itemImage: 'public/Images/lucia-macedo-d9_2kPJBG0U-unsplash.jpg'
        },
        {
            itemNumber: 1,
            itemName : "Grand Piano",
            itemPrice : 672000,
            itemQuantity : 10,
            itemImage: 'public/Images/jean-philippe-delberghe-2fL7eoxAapc-unsplash.jpg'
        },
         {
            itemNumber: 1,
            itemName : "Trumpet",
            itemPrice :17000,
            itemQuantity : 10,
            itemImage: 'public/Images/hal-gatewood-3j45Gy-WkyA-unsplash.jpg'
        },
         {
            itemNumber: 1,
            itemName : "Acoustic Guitar",
            itemPrice : 9000,
            itemQuantity : 30,
            itemImage: 'public/Images/brent-ninaber-C8gib_msapY-unsplash.jpg'
        }, 
        {
            itemNumber: 1,
            itemName : "Electric Guitar",
            itemPrice : 12600,
            itemQuantity : 30,
            itemImage: 'public/Images/apolo-photographer-xmksM4em7a0-unsplash.jpg'
        },
    ],
    allProducts:[]
    }

const getters = {
	stock: (state) => state.stockDetails,
}
const actions = {

    async fetchProducts({ commit }) {
		try {
		  const data = await axios.get(
			"https://back3nd.onrender.com/api/products" // base url + endpoint
		  );
		  commit("SET_PRODUCTS", data.data);
		} catch (error) {
		  alert(error);
		  console.log(error);
		}
	  },

}
const mutations = {
	SET_PRODUCTS (state, allProducts) {
		state.allProducts = allProducts //this will modify the all products state
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}