// Get pin Number
function pinGenerator() {
  let pinNumber = Math.round(Math.random() * 10000);
  let pintext = pinNumber + '';
  if (pintext.length == 4) {
    return pinNumber;
  }
  else {
    return pinGenerator();// recursion function has to return himself 
  }
};

// Pin Show by button click
document.getElementById('generate-button').addEventListener('click', function () {
  const pinShow = document.getElementById('pin-show');
  const pin = pinGenerator();
  pinShow.value = pin;
});

// Numbers Input
document.getElementById('typed-numbers').addEventListener('click', function (event) {
  const inputedPin = document.getElementById('pin-input');
  const numberString = event.target.innerText;

  if (isNaN(numberString)) {
    if (numberString == 'C') {
     inputedPin.value = '';
    }
    // for back space
    else if (numberString == '<') {
      let back=inputedPin.value; //value read of the input field
      back = back.substr(0, back.length - 1);//last element cut 
      document.getElementById('pin-input').value = back;// again update inputfield
    }
  }
  else {
    const prevNumber = inputedPin.value;
    const newNumber = prevNumber + numberString;
    inputedPin.value = newNumber;
  }
//  alert for input
  if (inputedPin.value.length == 4) {
    inputedPin.style.border = " 2px solid green";
  }
  else if(inputedPin.value.length <4||inputedPin.value.length >4){
    inputedPin.style.border = " 2px solid red";
  }
});
//  count should be added out side of the click event so that it can count
let count = 3;
// Submit button clic handle
document.getElementById('submit').addEventListener('click', function () {
  {
    const inputedPin = document.getElementById('pin-input');
    const pinA = document.getElementById('pin-show').value;
    if (inputedPin.value == pinA) {
      document.getElementById('success').style.display = 'block';
      document.getElementById('error').style.display = 'none';
      document.getElementById('pin-show').value = '';
      document.getElementById('pin-input').value = '';
    }

    // pin not matched here
    else {
     const tries = document.getElementById('tries');  
      document.getElementById('success').style.display = 'none';
      document.getElementById('error').style.display = 'block';
      document.getElementById('action-left').style.display = 'block';
      tries.innerText = count; 
      if (count == 0) {
        document.getElementById('action-left').innerText = "Sorry! No action left";
        document.getElementById('gone').style.display = 'block';
        document.getElementById('error').style.display = 'none';
        document.getElementById('pin-show').value = '';
        document.getElementById('pin-input').value = '';
        document.getElementById('submit').setAttribute('disabled', true);
      }
     count--;
    }
  }
});
