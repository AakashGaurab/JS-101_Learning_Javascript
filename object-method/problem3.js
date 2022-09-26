let obj={

objects:[],
  entry: function(item,stock,original,discount)
    {
      let obj1={};
      if (discount>0)
      {
      obj1.discount=discount;
      }
      obj1.item=item;
      obj1.stock=stock;
      obj1.original=original;
      this.objects.push(obj1);
      
    }
  
};


obj.entry('PS4 pro',3,399.99,);
obj.entry('Xbox One X',1,499.99,0.1);
obj.entry('Nintendo Switch',4,299.99,);
obj.entry('PS2 Console',1,299.99,0.8);
obj.entry('Nintendo 64',2,199.99,0.65);

console.log(obj.objects);














