// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState, useEffect } from "react";
export default function App() {
  const [amount, setAmount] = useState(10);
  const [fromAmount, setFromAmount] = useState("USD");
  const [toAmount, setToAmount] = useState("USD");
  const [outputAmount, setOutputAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchCurremcy() {
        if (fromAmount === toAmount) {
          setOutputAmount(amount);
          return;
        }
        try {
          setIsLoading(true);
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromAmount}&to=${toAmount}`
          );
          if (!response.ok)
            throw new Error("Something went wrong with fetching Rate");

          const data = await response.json();

          const convertedAmount = data.rates[toAmount];

          if (!convertedAmount)
            throw new Error("Rate not found for selected currency");

          console.log(convertedAmount);
          setOutputAmount(convertedAmount);
          setIsLoading(false);
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
        disabled={isLoading}
      />
      <select
        value={fromAmount}
        onChange={(e) => setFromAmount(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toAmount} onChange={(e) => setToAmount(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {outputAmount} {toAmount}{" "}
      </p>
    </div>
  );
}
