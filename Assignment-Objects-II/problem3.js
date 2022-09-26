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
for (k=0;k<data.length;k++)
  {
    sum1 =0;
    sum2=0;
for (j=0;j<data[k].students.length;j++)
  {
    
for(i=0;i<data[k].students[j].marks.length;i++)
  {
    // start of marks loop
    if (j==0)
    {
    sum1= sum1+ data[k].students[j].marks[i];
    
    }
    else 
    {
      sum2 = sum2 + data[k].students[j].marks[i];
    }

  }
     //end of marks loop 
  
  }
    //end of students loop
if (sum1>sum2)
{
  console.log(data[k].grade+'-'+data[k].students[0].name+'-'+sum1);
}
    else 
{
  console.log(data[k].grade+'-'+data[k].students[1].name+'-'+sum2);
}
  }