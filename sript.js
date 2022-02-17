const number = document.querySelectorAll('[number]');
const operator = document.querySelectorAll('[operator]');
const equal = document.querySelector('[equal]');
const allclear = document.querySelector('[allclear]');
const percentage = document.querySelector('[per]');
const sign = document.querySelector('[sign]');
const display = document.querySelector('[output]');

                            // calculator class
class Calculator{
  constructor(screen){
    this.screen = screen;
    this.clearAll();
  }

  signFromOut(displayContent){
    this.signVa = displayContent.getAttribute('sign__value');
    this.valueForTest = this.screen.textContent 
    if(this.signVa === ''){
      displayContent.setAttribute('sign__value', '-')
    }else{
      displayContent.setAttribute('sign__value', '');
    }
    this.signVa = displayContent.getAttribute('sign__value');
    
    //made changes
    this.newValue = displayContent.textContent;

    if(this.signVa === '-' && this.newValue.includes('-'))return
    this.newValue = this.signVa + this.newValue;
    
    if(this.signVa === '' && this.newValue.includes('-')){
      this.newValue = this.newValue.split('');
      this.newValue = this.newValue.slice(1, this.newValue.length).join('');
    }
    if(this.valueForTest == this.current_value){
      this.current_value = this.newValue;
    }else if(this.valueForTest == this.firstValue){
      this.firstValue = this.newValue;
    }
    this.screen.textContent = this.newValue;
    

  }



  percentageSign(displayValue){         //made changes
    if(displayValue === '')return;
    if(displayValue == this.firstValue){
      this.firstValue = this.firstValue / 100;
      this.screen.textContent = (this.firstValue);
    }else if(displayValue == this.current_value){
      this.current_value = this.current_value / 100;
      this.screen.textContent = (this.current_value);
    }
    // this.screen.textContent = displayValue / 100;
  }

                            // input methods
  appendNumber(number_from_outside){
    if(number_from_outside === '.' && this.current_value.includes('.'))return;
      this.current_value = this.current_value.toString() + number_from_outside.toString();
  }

                          // save value method
  saveValue(){
    this.current_value = parseFloat(this.current_value);
   if(this.firstValue !== '' && this.current_value!== '' && !isNaN(this.current_value)){
     
     
      this.firstsign = this.sign;
      
      this.computation(this.secondsign);
      

      this.secondsign = this.firstsign;

      this.firstsign = undefined;

  }else if(this.firstValue === ''){
     this.secondsign = this.sign;
     this.firstValue = this.current_value;   //made changes
     this.current_value = '';
   }else if(isNaN(this.current_value)){
     this.secondsign = this.sign;
     this.current_value= '';
   }
  }

                            // operator method
  operationControl(signs){
    if(this.current_value == '')return;  //made changes
   this.sign = signs;
   this.saveValue();

  }
  
  // numberFormate(numB){
  //   var stringNumber = numB.toString().split('.');
  //   this.decimalPart = stringNumber[1];
  //   this.wholeNumber = stringNumber[0];

  //   this.newFloat = parseFloat(this.wholeNumber).toLocaleString('en', {maximumFractionDigits: 0})
    
  //   if(this.decimalPart != undefined || this.decimalPart == ''){
  //     this.newFloat = `${this.newFloat}.${this.decimalPart}`;
  //   }else{
  //     this.newFloat = this.newFloat;
  //   }

  //   return this.newFloat.toString();
  // }



                            // clear Method
  clearAll(){
    this.current_value = '';
    this.firstValue = '';
    this.sign = undefined;
    this.firstsign = undefined;
    this.secondsign = undefined;
    this.screen.textContent = '';
  }


                                // equal methods
equal(){
  if(this.firstValue == '')return;
  this.computation(this.secondsign)
  this.computation(this.sign);
  this.firstsign = undefined;
  this.secondsign  = undefined;
}


                            // computation methods
  computation(operationSign){
    var finalValue;
    this.firstValue = parseFloat(this.firstValue); //made changes changed this.curvalue
    this.current_value = parseFloat(this.current_value);
    if(this.firstValue !== '' && this.current_value !== ''){
      switch(operationSign){
                case '*':
                  finalValue = this.firstValue * this.current_value;
                  break;
                case '+':
                  finalValue = this.firstValue + this.current_value;
                  break;
                case '/':
                  finalValue = this.firstValue / this.current_value;
                  break;
                case '-':
                  finalValue = this.firstValue - this.current_value;
                  break;
                default:
                return;
              }
              this.firstValue = '';
              this.current_value = finalValue.toPrecision(7).toString().split('.');
              if(this.current_value[1] == 0){
                this.current_value = this.current_value[0];
                
              }else{
                this.current_value = `${this.current_value[0]}.${this.current_value[1]}`;
              }
              this.output()
              this.saveValue()
              this.sign = undefined;    
    }

   

  }




                            // display methods
  output(){
    this.screen.textContent = (this.current_value);
  }

}


                      // new class 
const calc = new Calculator(display);

                    // output Call from numbers
number.forEach((numberButton)=>{
  numberButton.addEventListener('click', ()=>{
    calc.appendNumber(numberButton.textContent);
    calc.output()
  })
})



                    // operator call
operator.forEach((operation)=>{
  operation.addEventListener('click', ()=>{
    calc.operationControl(operation.textContent)
  })
})


                                // allclear
allclear.addEventListener('click', ()=>{
  calc.clearAll();
})


                            // equal sign
equal.addEventListener('click', ()=>{
  calc.equal();
})




percentage.addEventListener('click', ()=>{
  calc.percentageSign(display.textContent);
})

sign.addEventListener('click',()=>{
  calc.signFromOut(display);
})
