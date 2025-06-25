import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const staticAccounts = [
    {
      name: 'John Doe',
      accountNumber: 'AC12345',
      amountDue: 1500.25,
      amountPaid: 1220.34,
      dueDate: '2025-06-01',
      notes: 'Medical debt',
      files: 'PayStub',
    },
    {
      name: 'Jane Smith',
      accountNumber: 'AC98765',
      amountDue: 820.00,
      amountPaid: 300.21,
      dueDate: '2025-05-15',
      notes: 'Utility bill from March',
      files: '-',
    },
    {
      name: 'Carlos Alvarez',
      accountNumber: 'AC56789',
      amountDue: 239.50,
      amountPaid: 0.00,
      dueDate: '2025-06-10',
      notes: '',
      files: 'Notice'
    },
  ];

  return (
    <div className="dashboard-container">
      <h2>Submitted Consumer Accounts</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Consumer Name</th>
            <th>Account #</th>
            <th>Amount Due</th>
            <th>Amount Paid</th>
            <th>Due Date</th>
            <th>Notes</th>
            <th>Files</th>
          </tr>
        </thead>
        <tbody>
          {staticAccounts.map((account, index) => (
            <tr key={index}>
              <td>{account.name}</td>
              <td>{account.accountNumber}</td>
              <td>${account.amountDue.toFixed(2)}</td>
              <td>${account.amountPaid.toFixed(2)}</td>
              <td>{account.dueDate}</td>
              <td>{account.notes || '-'}</td>
              <td><a href="url">{account.files || '-'}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
