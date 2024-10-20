function sumArray(arr:number[]){
  return arr.reduce((acc, curr) => acc + curr,0);
}

export default sumArray;