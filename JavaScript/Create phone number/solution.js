function createPhoneNumber(numbers){
var format = '(XXX) XXX-XXXX';
  
  for(let i = 0; i <numbers.length; i++)
    {
      format = format.replace('X',numbers[i]);
    }
  
  return format;
}
