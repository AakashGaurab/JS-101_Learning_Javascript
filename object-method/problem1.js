let obj = {
  area: function(length,width)
    {
      console.log('The  area is',length*width);
    },
  per:function(length,width)
    {
      console.log('The perimeter is',2*(length+width));
    }
}

obj.per(10,15);
obj.area (10,15);
