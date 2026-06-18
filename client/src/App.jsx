import { useEffect, useState } from "react";
import { getApplications } from "./services/applicationService";
import ApplicationForm from "./components/ApplicationForm";

const App = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
  const loadApplications = async () => {
    try {
      const data = await getApplications();
      setApplications(data.result || []);
    } catch (error) {
      console.error("Failed to load applications:", error);
    }
  };

  loadApplications();
}, []);
  return (
    <div>
      <h1>Job Application Tracker</h1>

      <ApplicationForm
        onApplicationCreated={(newApplication) => {
          setApplications((previousApplications) => [
            ...previousApplications,
            newApplication
          ]);
        }}/>

      <h2>Applications</h2>

      {applications.map((application) => {
        return (
          <div key={application._id}>
            <h3>{application.companyName}</h3>
            <p>Job Title: {application.jobTitle}</p>
            <p>Status: {application.status}</p>
            <p>Job Type: {application.jobType}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default App;