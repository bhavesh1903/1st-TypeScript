//with using decore
var addAge=(age)=>{
    return (targetClass)=>{
        return class{
            name=new targetClass().name;
            age=age;
        }
    }
}
@addAge(25)
class Perosn{
    name="lalu";
}
console.log(new Perosn());






