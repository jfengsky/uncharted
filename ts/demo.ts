const a:string = 'aaaa'
const b:number = 2222

let c: string | number = 7
c = 'ccc'

// const add = (x: number, y: number): number => x + y

function add(x: number, y: number = 0): number {
  return x + y
}

const reduce = (x: number, y: number): number => x - y

add(3)

reduce(4, 6)

const test = (a: string, b?: string, c?:string) => {
  console.log(a)
  console.log(b)
  console.log(c)
}

function func1(...args: number[]) {
  console.log(args)
}

func1(1, 2, 3, 4)

class Person {

  constructor(){

  }
  
  private name: string
  eat(): void{
    console.log(name)
  }
}

const p1 = new Person()

class Employer extends Person {
  constructor(name: string, code: number) {
    super()
  }
  code: number
  work(){
    super.eat()
  }
}

const e1 = new Employer('aaa', 1)
// e1.


interface PersonType {
  readonly name: string
  age: number
  height?: number
  [propName: string]: any
}

let xcatliu: PersonType = {
  name: 'xCat',
  age: 25
}

// xcatliu.name = 'xbt'
xcatliu.age = 20


let array1: Array<any> = [1,2,3,4]
let array2: any[] = [1,'2',true]

let mySum:(x:number, y:number) => number = function (x: number, y:number): number {
  return x + y
}

let mySum2 = (x: number, y:number): number => x + y

mySum2(1, 2)

interface AddFace {
  (x: number, y: number): number
}

let mySum3: AddFace = function(x, y){
  return x + y
}

/// <>
// declare let jQuery: (string) => any

// jQuery('#foo')

type Name = string
type NameResolve = () => string
type NameOrResolve = Name | NameResolve

function getName(n: NameOrResolve): Name {
  if(typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

type EventNames = 'click' | 'scroll' | 'mouseenter'
function handleEvent(ele: Element, event: EventNames) {

}

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
