import React, { useState } from 'react';
import './SubmitAccount.css';

const SubmitAccount = () => {
  const [form, setForm] = useState({
    name: '',
    accountNumber: '',
    amountDue: '',
    dueDate: '',
    notes: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted account:', form);
    alert('Account submitted!');
    setForm({
      name: '',
      accountNumber: '',
      amountDue: '',
      dueDate: '',
      notes: '',
    });
  };

  return (
    <div className="submit-container">
      <h2>Submit Consumer Account</h2>
      <form className="submit-form" onSubmit={handleSubmit}>
        <label>
          Consumer Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Account Number
          <input name="accountNumber" value={form.accountNumber} onChange={handleChange} required />
        </label>

        <label>
          Amount Due
          <input type="number" name="amountDue" value={form.amountDue} onChange={handleChange} required />
        </label>

        <label>
          Due Date
          <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} required />
        </label>

        <label>
          Notes
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} />
        </label>

        <label>
          Supporting Document
          <input type="file" name="file" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitAccount;
