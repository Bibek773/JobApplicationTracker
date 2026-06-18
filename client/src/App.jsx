import { useEffect, useState } from "react";
import { getApplications, deleteApplication } from "./services/applicationService";
import ApplicationForm from "./components/ApplicationForm";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("")
  const [editingApplication, setEditingApplication] = useState(null);
  const [applications, setApplications] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);
useEffect(() => {
  const loadApplications = async () => {
      try {
          setLoading(true);
          setError("");
          const data = await getApplications(filterStatus, search);
          setApplications(data.result || []);
        } catch (error) {
          setError("Failed to load applications");
        } finally {
          setLoading(false);
      }
  };

  loadApplications();
}, [filterStatus, search]);
const handleDelete = async (id) => {
  const confirmed = window.confirm("Delete this application?");

  if (!confirmed) {
    return;
  }

  try {
    await deleteApplication(id);

    setApplications(
      applications.filter((application) => application._id !== id)
    );
  } catch (error) {
    console.error("Failed to delete application:", error);
  }
};

  return (
    <div>
      <h1>Job Application Tracker</h1>

      <ApplicationForm
        editingApplication={editingApplication}
        onApplicationCreated={(newApplication) => {
          setApplications((previousApplications) => [
            ...previousApplications,
            newApplication
          ]);
        }}
         onApplicationUpdated={(updatedApplication) => {
            setApplications(
            applications.map((application) =>
            application._id === updatedApplication._id
              ? updatedApplication
              : application));

    setEditingApplication(null);
  }}/>

      <h2>Applications</h2>
      <input type="text" placeholder="Search by company or job title" value={search} onChange={(event) => setSearch(event.target.value)}/>
      {error && <p>{error}</p>}
      {loading && <p>Loading applications...</p>}
      {!loading && applications.map((application) => {
        return (
          <div key={application._id}>
            <h3>{application.companyName}</h3>
            <p>Job Title: {application.jobTitle}</p>
            <p>Status: {application.status}</p>
            <p>Job Type: {application.jobType}</p>
            <hr/>
            <button onClick={() => handleDelete(application._id)}>Delete</button>
            <button onClick={() => setEditingApplication(application)}>Edit</button>
            <button onClick={() => setSelectedApplication(application)}>View</button>
          </div>
        );
      })}
      {selectedApplication && (
        <div>
          <h2>Application Details</h2>
          <p>Company: {selectedApplication.companyName}</p>
          <p>Job Title: {selectedApplication.jobTitle}</p>
          <p>Job Type: {selectedApplication.jobType}</p>
          <p>Status: {selectedApplication.status}</p>
          <p>
            Applied Date:{" "}
            {new Date(selectedApplication.appliedDate).toLocaleDateString()}
          </p>
          <p>Notes: {selectedApplication.notes}</p>

          <button onClick={() => setSelectedApplication(null)}>Close</button>
        </div>
      )}
      <label>Filter by Status</label>

        <select value={filterStatus} onChange={(event) => setFilterStatus(event.target.value)}>
          <option value="">All</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
    </div>
  );
};

export default App;