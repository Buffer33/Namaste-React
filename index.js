// // const radius =[2,3,4,8,5]
// // function area(r){
// // return Math.PI*r**2;
// // }
// // function circumference(r){
// //     return 2 * Math.PI*r;
// // }
// // function diameter(r){
// //     return 2*r;
// // }

// // Array.prototype.calculate =function  (logic){
// // const arr=[];
// // for(let i=0; i<this.length; i++){
// //     arr.push(logic(this[i]));
// // }
// // return arr;
// // }

// // console.log(radius.calculate(area))
// // console.log(radius.calculate(circumference))
// // console.log(radius.calculate(diameter))


// // createOrder(cart)
// // proceedToPayment(orderId)
// // OrderSummry(pyamentInfo)
// // updateWalate(pyamentInfo)

// // createOrder(cart,function(orderId){
// //     proceedToPayment(orderId,function(pyamentInfo){
// //         OrderSummry(pyamentInfo,function(pyamentInfo){
// //             updateWalate(pyamentInfo)
// //         })
// //     })
// // })

// createOrder(cart)
// .then(orderId=>proceedToPayment(orderId))
// .then(pyamentInfo=>OrderSummry(pyamentInfo))
// .then(pyamentInfo=>updateWalate(pyamentInfo))

// const cart =["sirt", "paint", "kurta"];
// async function promissCall(){
//     try {
//         const pr = await createOrder(cart)
//          console.log(pr)
        
//     } catch (error) {
//         console.log(error)
//     }

// }
// promissCall()

// //created own promiss ******************************************
// function createOrder(cart){
//     const ps = new Promise(function(resolve, reject){
//         if(!validate(cart)){
//             const err = console.error("cart is not validated");
//             reject(err)
    
//         }
//         const orderId ="15116"
//         if(orderId){
     
//             resolve(orderId)
//         }
//     });
   
//     return ps
// }



// function validate(cart){
//     return false
// }

// const p1 = new Promise((resolve, reject)=>setTimeout(()=>resolve("p1 hase resolve"),1000))
// const p2 = new Promise((resolve, reject)=>setTimeout(()=>resolve("p2 hase resolved"),2000))
// const p3 = new Promise((resolve, reject)=>setTimeout(()=>resolve("p3 hase resolved"),3000))

// const getall=async()=>{
// const promiss1 = await p1
// const promiss2 = await p2
// const promiss3 = await p3


// console.log(promiss3)
// console.log(promiss1)
// console.log(promiss2)
// }

// getall().catch(errr=>console.log(errr))


// setTimeout(()=>console.log("object"),5000)
// setTimeout(()=>console.log("ashish"),3000)


// call , apply , bind ********************************************
//  const name={
//     firstName: 'ahish',
//     lastName: 'rampal',
   
//  }
//  const printname= function(city,state){
//     console.log(this.firstName+" "+this.lastName+" "+ city+" "+ state);
// }
 

//  const name2 ={
//     firstName:'karan',
//     lastName: 'kumar'
//  }
// //  call method
//  printname.call(name,"ghaziabd", "uttar pradesh");
//  //apply method
// printname.apply(name2,["kanpur", "bihar"]);
// //bind method
// const printMyname = printname.bind(name2,"kanpur", "bihar")
// printMyname();
// function mybind(){
   
// }


// const displayName = printname.myBind(name2)


// fetch("https://api.github.com/users/buffer33")
// fetch("https://api.github.com/users/buffer33")
// fetch("https://api.github.com/users/buffer33")
// fetch("https://api.github.com/users/buffer33")
// fetch("https://api.github.com/users/buffer33")
// fetch("https://api.github.com/users/buffer33")
// fetch("https://api.github.com/users/buffer33")
// console.log("object")
"use strict"
// const score =undefined
// let valunuber = Boolean(score)
// console.log(typeof valunuber)
// console.log(valunuber)


// let binumber=123466789612312345985136523n;
// console.log(typeof binumber)

let myuser = "username";