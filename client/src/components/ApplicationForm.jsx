import { useState, useEffect } from "react";
import {
  createApplication,
  updateApplication
} from "../services/applicationService";

const ApplicationForm = ({
  editingApplication,
  onApplicationCreated,
  onApplicationUpdated
}) => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("Internship");
  const [status, setStatus] = useState("Applied");
  const [appliedDate, setAppliedDate] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (editingApplication) {
      setCompanyName(editingApplication.companyName);
      setJobTitle(editingApplication.jobTitle);
      setJobType(editingApplication.jobType);
      setStatus(editingApplication.status);
      setAppliedDate(editingApplication.appliedDate.split("T")[0]);
      setNotes(editingApplication.notes || "");
    }
  }, [editingApplication]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const applicationData = {
      companyName,
      jobTitle,
      jobType,
      status,
      appliedDate,
      notes
    };

    try {
      if (editingApplication) {
        const response = await updateApplication(
          editingApplication._id,
          applicationData
        );

        onApplicationUpdated(response.result);
      } else {
        const response = await createApplication(applicationData);
        onApplicationCreated(response.result);
      }

      setCompanyName("");
      setJobTitle("");
      setJobType("Internship");
      setStatus("Applied");
      setAppliedDate("");
      setNotes("");
    } catch (error) {
      console.error("Error saving application:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Company Name</label>
        <input
          type="text"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />

        <p>You typed: {companyName}</p>

        <label>Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
        />

        <p>You typed: {jobTitle}</p>

        <label>Job Type</label>
        <select
          value={jobType}
          onChange={(event) => setJobType(event.target.value)}
        >
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>

        <p>Selected: {jobType}</p>

        <label>Status</label>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <p>Selected: {status}</p>

        <label>Applied Date</label>
        <input
          type="date"
          value={appliedDate}
          onChange={(event) => setAppliedDate(event.target.value)}
        />

        <p>Selected date: {appliedDate}</p>

        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Add optional notes"
        />

        <p>Notes: {notes}</p>

        <button type="submit">
          {editingApplication ? "Update Application" : "Add Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
