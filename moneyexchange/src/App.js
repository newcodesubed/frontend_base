// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState } from "react";
export default function App() {
  const [amount, setAmount] = useState();
  const [fromAmount, setFromAmount] = useState("USD");
  const [toAmount, setToAmount] = useState("USD");
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onClick={(e) => setFromAmount(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onClick={(e) => setToAmount(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
