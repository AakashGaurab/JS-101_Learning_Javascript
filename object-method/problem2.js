let obj1={

 products:[],

  data : function(item,quantity,price)
    {
      let obj={};
      obj.item=item;
      obj.quantity=quantity;
      obj.rate=price;
      this.products.push(obj);
      
    },
     

total:function()
  {    
    let obj2={};
    let sum =0;
       for (i=0;i<this.products.length;i++)
         {
           total = (this.products[i].quantity) * (this.products[i].rate);
           sum = sum + total;
         }
    console.log(sum);
  },
  
  
};
obj1.data('rice',2,60);
obj1.data('Dal',3,50);
obj1.data('Salt',1,20);
console.log(obj1.products);
obj1.total();






