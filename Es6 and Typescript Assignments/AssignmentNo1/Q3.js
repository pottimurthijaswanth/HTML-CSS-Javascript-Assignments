let order={
    id : '2345A',
    title:"sweater",
    price:2500,

    printOrder:function(){
        alert('Order details are:\n Id: ${this.id} \n Title: ${this.title} \n Price: ${this.price}');

    },
    getPrice:function(){
        alert('Price is:${this.price}');
    }
};
let myOrder = Object.assign({},order);
console.log(myOrder);
