function ProblemDetails({ job, setJob }) {
    return (
        <div>

            <label>
                Problem Type <span style={{ color: "red" }}>*</span>
            </label>

            <select
                value={job.problemType}
                onChange={(e) =>
                    setJob({
                        ...job,
                        problemType: e.target.value
                    })
                }
            >
                <option value="">Select Problem Type</option>

                <option>Deleted Files</option>
                <option>Formatted Drive</option>
                <option>Not Detecting</option>
                <option>Physical Damage</option>
                <option>Water Damage</option>
                <option>Virus Attack</option>
                <option>OS Corruption</option>
            </select>

            <label>
                Problem Description 
            </label>

            <textarea
                
                value={job.problemDescription}
                onChange={(e) =>
                    setJob({
                        ...job,
                        problemDescription: e.target.value
                    })
                }
            />

            
            

        </div>
    );
}

export default ProblemDetails;