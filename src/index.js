module.exports = function reverse (n) {
  let ans = "";
  let num = Math.abs(n);
  while (num >= 1){
    ans += num%10;
    num = Math.floor(num/10);
  }

  return ans;
}
