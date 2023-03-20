const strarr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
const k = 2;

function longest_consec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  let longest = "";
  for (let i = 0; i <= n - k; i++) {
    const curr = strarr.slice(i, i + k).join("");
    if (curr.length > longest.length) {
      longest = curr;
    }
  }

  return longest;
}

const longest = longest_consec(strarr, k);
console.log(longest);
