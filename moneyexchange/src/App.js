// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState, useEffect } from "react";
export default function App() {
  const [amount, setAmount] = useState(10);
  const [fromAmount, setFromAmount] = useState("USD");
  const [toAmount, setToAmount] = useState("USD");
  const [outputAmount, setOutputAmount] = useState(1);
  // const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchCurremcy() {
        if (fromAmount === toAmount) {
          setOutputAmount(amount);
          return;
        }
        try {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=1&from=${fromAmount}&to=${toAmount}`
          );
          if (!response.ok)
            throw new Error("Something went wrong with fetching Rate");

          const data = await response.json();
          const rate = data.rates[toAmount];
          if (!rate) throw new Error("Rate not found for selected currency");

          const convertedAmount = (amount * rate)?.toFixed(2);
          console.log(convertedAmount);
          setOutputAmount(convertedAmount);
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchCurremcy();
    },
    [amount, fromAmount, toAmount]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : 0)}
      />
      <select onChange={(e) => setFromAmount(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setToAmount(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{outputAmount} </p>
    </div>
  );
}
