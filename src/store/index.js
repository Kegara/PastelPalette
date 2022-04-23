import { createStore } from 'vuex';

export default createStore({
  state: {
    stockcakes: [
      {
        id: 1,
        title: "Avellana",  
        description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam iusto incidunt debitis excepturi repellat consequuntur nisi velit, deserunt accusantium eveniet illo fugit nesciunt, fuga quaerat rem aliquam architecto. Iusto!",
        button: "I want this!",
        img: require("@/assets/img/pasteles/vainilla.svg"),
        price: 1.99 ,
        quantity: 10,
        flavors: [{flavor:1, quantity:1},{flavor:2, quantity:1},{flavor:3, quantity:1}],
        table: 
          [ 
            {
            shape: "Barra",
            measures: "12 x 30",
            persons: "14",
          },
          {
            shape: "Redonda pequeña",
            measures: "22 (diametro)",
            persons: "20",
          },
           {
            shape: "Barra",
            measures: "12 x 30",
            persons: "14",
          },
          {
            shape: "Redonda pequeña",
            measures: "22 (diametro)",
            persons: "20",
          },
        ],
      }
    ],
    pedidos: [
      {
        id: 1,
        selectedflavors:[{
          id: 1,
          name: "birthday",
        },
        {
          id: 2,
          name: "carrot",
        }
        ,
        {
          id: 3,
          name: "cherry",
        }],
        selectedToppings:[
          {
            id: 1,
            name : "Candle"
          }
          ,
          {
            id: 2,
            name : "Cherries"
          },
          {
            id: 3,
            name : "Fruits"
          }

        ],
        message: 'MITAD Y MITAD DE TOPPINGS',
        status: 'Pendente',
        price: 1000,
        clientid : 1,
        clientname: 'John Doe',
    }],
    clients: [
      {
        id: 1,
        name: 'John Doe',
        email: '@ndi',
        phone: '+380991234567',
      }
    ],
    flavors: [
      {
        id: 1,
        name: "birthday",
        price: 1.99,
        stock: 0,
        image: require("@/assets/img/pasteles/birthday.svg"),
      },
      {
        id: 2,
        name: "carrot",
        price: 2.99,
        stock: 10,
        image: require("@/assets/img/pasteles/carrot.svg"),
      },
      {
        id: 3,
        name: "cherry",
        price: 3.99,
        stock: 10,
        image: require("@/assets/img/pasteles/cherry.svg"),
      },
      {
        id: 4,
        name: "chocolate",
        price: 4.99,
        stock: 10,
        image: require("@/assets/img/pasteles/chocolate.svg"),
      },
      {
        id: 5,
        name: "sanvalentin",
        price: 5.99,
        stock: 10,
        image: require("@/assets/img/pasteles/sanvalentin.svg"),
      },
      {
        id: 6,
        name: "vainilla",
        price: 6.99,
        stock: 10,
        image: require("@/assets/img/pasteles/vainilla.svg"),
      },
    ],
    toppings: [
      {
        id: 1,
        name: "Candle",
        price: 1.99,
        stock: 10,
        image: require("@/assets/img/decoraciones/pastel_decoration.svg"),
      },
      {
        id: 2,
        name: "Cherries",
        price: 2.99,
        stock: 10,
        image: require("@/assets/img/decoraciones/pastel_decoration1.svg"),
      },
      {
        id: 3,
        name: "Fruits",
        price: 3.99,
        stock: 10,
        image: require("@/assets/img/decoraciones/pastel_decoration2.svg"),
      },
      {
        id: 4,
        name: "Fresh Fruits",
        price: 4.99,
        stock: 10,
        image: require("@/assets/img/decoraciones/pastel_decoration3.svg"),
      },
    ],
  },
  getters: {
    getstockcakes: state => {
      return state.stockcakes;
    },
    getpedidos: state => {
      let pedidostable = [];
      state.pedidos.forEach(pedido => {
        let flavors =[];
        let toppings = [];
        pedido.selectedflavors.forEach(flavor => {
          flavors.push(flavor.name);
        });
        pedido.selectedToppings.forEach(topping => {
          toppings.push(topping.name);
        });
        pedidostable = [{
          id: pedido.id,
          selectedflavors: flavors,
          selectedToppings: toppings,
          message: pedido.message,
          status: pedido.status,
          price: pedido.price,
          clientname: pedido.clientname,
        }];
      });
      console.log(pedidostable);
      return pedidostable;
    },
    getclients: state => {
      return state.clients;
    },
    getflavors: state => {
      return state.flavors;
    },
    gettoppings: state => {
      return state.toppings;
    },
    getactiveflavors: state => {
      let activeflavors = [];
      state.flavors.forEach(flavor => {
        if (flavor.stock > 0) {
          activeflavors.push(flavor);
        }
      });
      return activeflavors;
    },
    getactivetoppings: state => {
      let activetoppings = [];
      state.toppings.forEach(topping => {
        if (topping.stock > 0) {
          activetoppings.push(topping);
        }
      });
      return activetoppings;
    },
    getAllStock: state => {
      let stock = [];
      state.flavors.forEach(flavor => {
        stock.push(flavor);
      });
      state.toppings.forEach(topping => {
        stock.push(topping);
      });
      console.log(stock);
      return stock;
    }

  },
  mutations: {
    addcake(state, payload) {
      state.stockcakes[payload.index].quantity = payload.quantity;
    },
    addClient(state, payload) {
      state.clients.push(payload);
    },
    addPedido(state, payload) {
      state.pedidos.push(payload);
    }
  },
  actions: {
    addcake(context, cake) {
      context.commit('addcake', cake);
    },
    addPedido(context, pedido) {
      context.commit('addPedido', pedido);
    },
    addClient(context, cliente) {
      context.commit('addClient', cliente);
    },
    addFlavor(context, flavor) {
      context.commit('addFlavor', flavor);
    },
    addTopping(context, topping) {
      context.commit('addTopping', topping);
    }



  },
  modules: {
  },
});
