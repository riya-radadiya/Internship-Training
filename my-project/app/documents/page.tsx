"use client";

import { useState } from "react";
import "./styles.css";

interface Document {
  id: number;
  employee: string;
  documentName: string;
  documentType: string;
  uploadDate: string;
  status: string;
}

export default function DocumentsPage() {
  const [employee, setEmployee] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("Aadhar");
  const [uploadDate, setUploadDate] = useState("");
  const [search, setSearch] = useState("");

  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      employee: "John Smith",
      documentName: "Aadhar Card",
      documentType: "Aadhar",
      uploadDate: "2026-07-20",
      status: "Verified",
    },
    {
      id: 2,
      employee: "Emma Watson",
      documentName: "Resume",
      documentType: "Resume",
      uploadDate: "2026-07-22",
      status: "Pending",
    },
  ]);

  const addDocument = () => {
    if (!employee || !documentName || !uploadDate) {
      alert("Please fill all fields.");
      return;
    }

    const newDocument: Document = {
      id: Date.now(),
      employee,
      documentName,
      documentType,
      uploadDate,
      status: "Pending",
    };

    setDocuments([...documents, newDocument]);

    setEmployee("");
    setDocumentName("");
    setDocumentType("Aadhar");
    setUploadDate("");
  };

  const deleteDocument = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const verifyDocument = (id: number) => {
    setDocuments(
      documents.map((doc) =>
        doc.id === id ? { ...doc, status: "Verified" } : doc
      )
    );
  };

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.employee.toLowerCase().includes(search.toLowerCase()) ||
      doc.documentName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Employee Documents</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />

        <input
          type="text"
          placeholder="Document Name"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
        />

        <select
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
        >
          <option>Aadhar</option>
          <option>PAN</option>
          <option>Passport</option>
          <option>Resume</option>
          <option>Certificate</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={uploadDate}
          onChange={(e) => setUploadDate(e.target.value)}
        />

        <button onClick={addDocument}>Add Document</button>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search Documents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Document</th>
            <th>Type</th>
            <th>Upload Date</th>
            <th>Status</th>
            <th>Verify</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {filteredDocuments.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.employee}</td>
              <td>{doc.documentName}</td>
              <td>{doc.documentType}</td>
              <td>{doc.uploadDate}</td>

              <td>
                <span
                  className={
                    doc.status === "Verified"
                      ? "verified"
                      : "pending"
                  }
                >
                  {doc.status}
                </span>
              </td>

              <td>
                <button
                  className="verify-btn"
                  onClick={() => verifyDocument(doc.id)}
                >
                  Verify
                </button>
              </td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteDocument(doc.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredDocuments.length === 0 && (
            <tr>
              <td colSpan={7}>No documents found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}