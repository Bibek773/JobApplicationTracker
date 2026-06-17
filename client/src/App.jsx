import { useEffect } from "react";
import { getApplications } from "./services/applicationService";

function App() {
    useEffect(() => {
        getApplications()
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return <h1>Job Application Tracker</h1>;
}

export default App;