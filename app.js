// const number = document.querySelectorAll('[number]');
// const operator = document.querySelectorAll('[operator]');
// const equal = document.querySelector('[equal]');
// const allclear = document.querySelector('[allclear]');
// const percentage = document.querySelector('[per]');
// const sign = document.querySelector('[sign]');

// const display = document.querySelector('[output]');

// class Calculator{
//   constructor(displayScreen){
//     this.display = displayScreen;
//     this.clear();
//   }

//   clear(){
//     this.value_used_internal = '';
//     this.operator_sign = undefined;
//     this.firstValue = '';
//   }


//   stingConvertor(array){
//   var n;
//   n ='';
//   for(var ele of array){
//   n += ele.toString();
// }
//   return n;
//   }


//   signForm(display){
   
//   }
  
//   operating(operator_symbol){
//     if(this.operator_sign === undefined){
//       this.operator_sign = operator_symbol;
//     }
//     return ;
//   }

//   computation(){
//     let finalValue;
//     if(this.firstValue !== '' && this.value_used_internal !== ''){
//     this.value_used_internal = parseFloat(this.value_used_internal);
//       switch(this.operator_sign){
//         case '*':
//           finalValue = this.firstValue * this.value_used_internal;
//           break;
//         case '+':
//           finalValue = this.firstValue + this.value_used_internal;
//           break;
//         case '/':
//           finalValue = this.firstValue / this.value_used_internal;
//           break;
//         case '-':
//           finalValue = this.firstValue - this.value_used_internal;
//           break;
//         default:
//         return;
//       }
//     this.value_used_internal = finalValue;
//     this.displayOutput();
//     this.firstValue = finalValue;
//     this.value_used_internal = '';
//     this.operator_sign = undefined;
//     }
//       this.value_used_internal = '';
//       return this.operator_sign;
//   }

// percentageFormate(){
//   this.value_used_internal = this.value_used_internal / 100;
//   this.displayOutput();
// }
 

// create_firstValue(){
//   if(this.firstValue === ''){
//     this.firstValue = parseFloat(this.value_used_internal);
//     this.value_used_internal = '';
//   }
// }

// comma(num){
//     var string = num.toString();
//     var wholeDigit = parseFloat(string.split('.')[0])
//     var decimal = string.split('.')[1];

//   if(!isNaN(wholeDigit)) return;
//   this.floatValue = wholeDigit.toLocaleString('en', {maximumFractionDigits: 0})
//   if(decimal !== ''){
//     this.floatValue = `${this.floatValue}.${decimal}`
//   }else{
//     return this.floatValue;
//   }

//   return this.floatValue;
    

//   }


//   inputation(numb){
//     if(numb === '.' && this.value_used_internal.includes('.'))return;
    
//     this.value_used_internal = this.value_used_internal.toString() + numb.toString();

//     this.displayOutput();
//   }

//   displayOutput(){
//     this.display.textContent = this.value_used_internal;
//   }
// }



// // class creation

// const newCal = new Calculator(display);






// // number inputation
// number.forEach((numbers)=>{
//   numbers.addEventListener('click', ()=>{
//     newCal.inputation(numbers.textContent);
//     newCal.displayOutput()
//   })
// })






// // operation event handler
// operator.forEach((operate)=>{
//   operate.addEventListener('click', ()=>{
//    newCal.operating(operate.textContent);
//    newCal.computation();
//    newCal.create_firstValue();
//   //  newCal.operating(operate.textContent);
//   })
// })

// // clear handler
// allclear.addEventListener('click',()=>{
//   newCal.clear();
//   newCal.displayOutput();
// })


// // equal handler
// equal.addEventListener('click', ()=>{
//     newCal.computation();
// })

// percentage.addEventListener('click', ()=>{
//   newCal.percentageFormate();
// })

// sign.addEventListener('click', ()=>{
  
// })



