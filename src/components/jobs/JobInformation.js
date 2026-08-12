function JobInformation({ job, setJob }) {
    return (
        <div>

            {/* JOB NAME DROPDOWN */}
            <label>
                Job Name <span style={{ color: "red" }}>*</span>
            </label>

            <select
                value={job.jobName}
                onChange={(e) =>
                    setJob({
                        ...job,
                        jobName: e.target.value
                    })
                }
            >
                <option value="">Select Job Name</option>
                
                <option>HDD Recovery</option>
                <option>SSD Recovery</option>
                <option>Pen Drive Recovery</option>
                <option>Memory Card Recovery</option>
                <option>Mobile Recovery</option>
                <option>RAID Recovery</option>
                <option>DVR/CCTV Recovery</option>
                <option>Device Diagnosis</option>
                <option>CCTV Recovery</option>

            </select>

            {/* RECEIVED BY */}
            <label>
                Received By 
            </label>

            <input
                
                value={job.receivedBy}
                onChange={(e) =>
                    setJob({
                        ...job,
                        receivedBy: e.target.value
                    })
                }
            />

          <label>
            Priority<span style={{ color: "red" }}>*</span>
            </label>

<select
    value={job.priority}
    onChange={(e) =>
        setJob({
            ...job,
            priority: e.target.value
        })
    }
>
    <option value="">Select Priority</option>
    <option value="Normal">Normal</option>
    <option value="Urgent">Urgent</option>
    <option value="Critical">Critical</option>
</select>

            {/* ESTIMATED COST */}
            <label>
                Estimated Cost <span style={{ color: "red" }}>*</span>
            </label>

            <input
                type="number"
                
                value={job.estimatedCost}
                onChange={(e) =>
                    setJob({
                        ...job,
                        estimatedCost: e.target.value
                    })
                }
            />

            {/* ADVANCE */}
            <label>
                Advance Amount<span style={{ color: "red" }}>*</span>


            </label>

            <input
                type="number"
                
                value={job.advanceAmount}
                onChange={(e) =>
                    setJob({
                        ...job,
                        advanceAmount: e.target.value
                    })
                }
            />

            {/* RECOVERY STATUS */}
            <label>
                Recovery Status<span style={{ color: "red" }}>*</span>

            </label>

            <select
                value={job.recoveryStatus}
                onChange={(e) =>
                    setJob({
                        ...job,
                        recoveryStatus: e.target.value
                    })
                }
            >
                <option value="">Select Recovery Status</option>
                <option>Received</option>
                <option>Diagnosis</option>
                <option>Recovery Started</option>
                <option>Recovery Completed</option>
                <option>Delivered</option>
                <option>Failed</option>
            </select>

            {/* REMARKS */}
            <label>Remarks</label>

            <textarea
                placeholder="Remarks"
                value={job.remarks}
                onChange={(e) =>
                    setJob({
                        ...job,
                        remarks: e.target.value
                    })
                }
            />

        </div>
    );
}

export default JobInformation;