import React, { useState } from 'react'
import './Emi.css'
const Emi = () => {
    const [loan, setLoan] = useState('')
    const [rate, setRate] = useState('')
    const [amount, setAmount] = useState('')
    const [output, setOutput] = useState('')

    const cal = () => {
        if(loan==='' || rate==='' || amount===''){
            alert("Please enter a value")
        }
        let rates = rate / 12 / 100;
        let output = (loan * rates * (1 + rates) ** amount) / ((1 + rates) ** amount - 1)
        setOutput(output)
    }
    return (
        <>
            <div className="container">
                <h1>EMI Calculator</h1>
                <div className="data">
                    <span>Loan Amount</span>
                    <input type="number" placeholder='Enter a loan Amount' value={loan} onChange={(e) => setLoan(e.target.value)} />
                    <span>Interest Rate</span>
                    <input type="number" placeholder='Enter a Interest Rate' value={rate} onChange={(e) => setRate(e.target.value)} />
                    <span>Month to Pay</span>
                    <input type="number" placeholder='Enter a Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="output">
                    <button onClick={cal}>Calculate</button>
                    <div className='value'>Your EMI is {output}</div>
                </div>
            </div>
        </>
    )
}

export default Emi