import React, { useState } from 'react';

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
    <div style={{ padding: '2rem' }}>
      <h2>Submit Consumer Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Consumer Name:</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Account Number:</label>
          <input name="accountNumber" value={form.accountNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount Due:</label>
          <input type="number" name="amountDue" value={form.amountDue} onChange={handleChange} required />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Notes:</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>
    </div>
  );
};

export default SubmitAccount;
