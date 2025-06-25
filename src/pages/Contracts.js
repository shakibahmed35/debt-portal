import React, {useState} from 'react';
import './Contracts.css';

const Contracts = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedFile) {
        alert(`File "${selectedFile.name}" uploaded successfully (mock).`);
        setSelectedFile(null);
        } else {
        alert('Please select a file to upload.');
        }
    };

    return(
        <div className="contracts-container">
        <h2>Upload Contract</h2>
        <form className="contracts-form" onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
        </div>
    );
};

export default Contracts;