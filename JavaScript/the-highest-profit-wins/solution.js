function minMax(arr){
let max = arr[0] , min = arr[0];
  for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] > max)
        {
          max = arr[i];
        }
    }
  for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] < min)
        {
          min = arr[i];
        }
    }
  let new_arr = [min,max];
  return new_arr;
}
