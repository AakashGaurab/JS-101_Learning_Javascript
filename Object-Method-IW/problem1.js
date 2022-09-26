let obj={
  arr:[],
 detail: function(name,eng,math,sci)
   {
     obj1={}
     obj1.name=name;
     obj1.eng=eng;
     obj1.math=math;
     obj1.sci=sci;
     this.arr.push(obj1);
   },

  least: function()
  {
    let least_student ="";
    let min =Infinity;
    for (i=0;i<this.arr.length;i++)
      {
        total= this.arr[i].eng+this.arr[i].math+this.arr[i].sci;
        if (total<min)
        {
          min = total;
          least_student=this.arr[i].name;
        }
      }
    console.log(least_student);
  },

   highest:function()
     {
       let max =-Infinity;
       for (let i=0;i<this.arr.length;i++)
         {
           total = this.arr[i].math+this.arr[i].eng+this.arr[i].sci;
            if (total>max)
           {
             max= total;
             highest_student=this.arr[i].name;
           }
         }
      
       console.log(highest_student);
     }

  
};
obj.detail('ravi',50,45,15);
obj.detail('kammo',55,49,15);
obj.detail('sabnam',69,45,35);

obj.least();
obj.highest();