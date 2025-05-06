
import { useEffect } from 'react'
import './App.css'
import Typeprops from './Component/Typeprops';
import Advanceprops from './Component/Advanceprops';
import Eventprops from './Component/Eventprops';

function App() {
  useEffect(()=>{
  
  },[])
  // list 
  const l:number[]=[2,42,3,54,4]

  // readonly access modifier
  class Person {
     readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }

    public getFullName(): String {
      return `${this.birthDate.toDateString()}`; 
  }

}
const obj=new Person(new Date("2002-12-21"))
obj.birthDate=new Date("2009-3-21")//immutable, error 
// console.log(obj.getFullName());
// console.log("varibale",obj.birthDate);


  // enum datatype
  enum Month {
    Jan=10,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
// console.log(Month.Feb)


// static method
class Example{
  static count:number=0;

  constructor(){
    Example.count++}
  
}

const obj1=new Example()
// console.log("obj1",Example.count)

const obj2=new Example()
// console.log("obj2",Example.count)

  
let value: string = "2";
let strLength:number = value.length;
console.log(strLength)

console.log( strLength)


  return (
    <>
      <h1>typescript</h1>
      <Typeprops name="kumaran"/>
      {/* <Advanceprops>hello</Advanceprops>
      <Eventprops handleClick={(event,id)=>{console.log("clicked!!!!!",event)}}/> */}
      
    </>
  )
}

export default App
