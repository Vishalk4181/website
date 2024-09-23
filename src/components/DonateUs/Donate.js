import React, { useState } from 'react';
import './Donate.css';
import { FaUser, FaEnvelope, FaRupeeSign, FaCreditCard } from 'react-icons/fa';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: 1000,  // Default amount set to 1000 INR
    paymentMethod: 'credit_card',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name} for your donation of ₹${formData.amount}`);
    setFormData({ name: '', email: '', amount: 1000, paymentMethod: 'credit_card' });
  };

  return (
    <div className="donation-page">
      <div className="container">
        <h1 className="heading">Donate</h1>
        <p className="subheading">Your support helps us continue our mission. Every contribution counts.</p>

        <form onSubmit={handleSubmit} className="donation-form">
          <div className="form-group">
            <FaUser className="form-icon" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <FaEnvelope className="form-icon" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <FaRupeeSign className="form-icon" />
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="1"
              required
              placeholder="Donation Amount (₹)"
            />
          </div>

          <div className="form-group">
            <FaCreditCard className="form-icon" />
            <select
              id="payment-method"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
              <option value="net_banking">Net Banking</option>
              <option value="upi">UPI</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <button type="submit" className="donate-button">
            Donate ₹{formData.amount}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
