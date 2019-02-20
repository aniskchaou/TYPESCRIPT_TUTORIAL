function add(num1:number,num2:number,num3?:number):number{
	return num1+num2;
}
add(5,10,11);
add(5,10);

function fullName(person:{firstName:string,lastName:string})
{
  console.log('${person.firstName} ${person.lastName}');	
}

let p={
	firstName:'Bruce',
	lastName:'Wayne'
};
fullName(p);