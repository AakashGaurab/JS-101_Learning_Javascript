var name =["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
var age = [32, 30, 26, 28, 44];
var obj={};
var data=[];
for (i=0;i<name.length;i++)
  {
    obj={};
    if (obj[name[i]]==undefined)
    {
     obj["name"]=name[i];
    obj["age"]=age[i];
    }
    data.push(obj);
  }
console.log(data);
var bag = "";
for (j=0;j<data.length;j++)
  {
    bag = bag + data[j]['name'] + " ";
  }
console.log(bag);