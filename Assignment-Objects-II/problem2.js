var sum =0;
var sum1=0;
var sum2= 0;
var data = [
{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
      ]},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

/*for (i=0;i<data.length;i++)
  {
    for(j=0;j<data[i].students.length;j++)
      {
        
        
        
        for(k=0;k<data[i].students[j].marks.length;k++)
          {
            sum =sum + data[i].students[j].marks[k]
          }
        if (j=0)
        {
          sum1=sum;
        }
        else 
        {
          sum2=sum;
        }
      }


    
    if (sum1>sum2)
    {
      console.log(data[i].grade+'-'+data[i].students[1].name+'-'+sum1);
    }
    else 
    {
     console.log(data[i].grade +'-'+data[i].students[2].name+'-'+sum2); 
    }
console.log(data[i].students[j].marks[k]);


    
  }*/
for(l=0;l<data.length;l++)
  {
    console.log(data[l]);
for(k=0;k<data[l].students.length;k++)
  {
    console.log(data[l].students[k]);
for(i=0;i<data[l].students[k].marks.length;i++)
  {
    sum1 =0;
    sum2 = 0;
    if(k=0){
    sum1=sum1+data[l].students[k].marks[i];}
  
else
  {
    sum2= sum2 + data[l].students[k].marks[i];
  }}
if (sum1>sum2)
{
  console.log(sum1);
}
else 
{
  console.log(sum2);
}


  }

  }
