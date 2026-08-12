function DeviceDetails({ job, setJob }) {
    return (
        <div>

            <label>
                Device Type <span style={{ color: "red" }}>*</span>
            </label>

            <select
                value={job.deviceType}
                onChange={(e) =>
                    setJob({
                        ...job,
                        deviceType: e.target.value
                    })
                }
            >
                <option value="">Select Device</option>
                <option>HDD</option>
                <option>SSD</option>
                <option>Pen Drive</option>
                <option>Memory Card</option>
                <option>Mobile Phone</option>
                <option>Laptop</option>
                <option>RAID Server</option>
                <option>DVR/CCTV</option>
            </select>

            <label>
                Brand <span style={{ color: "red" }}>*</span>
            </label>

            <input
               
                value={job.brand}
                onChange={(e) =>
                    setJob({
                        ...job,
                        brand: e.target.value
                    })
                }
            />

            <label>
                Model Number 
            </label>

            <input
               
                value={job.modelNumber}
                onChange={(e) =>
                    setJob({
                        ...job,
                        modelNumber: e.target.value
                    })
                }
            />

            <label>
                Capacity <span style={{ color: "red" }}>*</span>
            </label>

            <input
                
                value={job.capacity}
                onChange={(e) =>
                    setJob({
                        ...job,
                        capacity: e.target.value
                    })
                }
            />

            <label>
                Serial Number 
            </label>

            <input
                
                value={job.serialNumber}
                onChange={(e) =>
                    setJob({
                        ...job,
                        serialNumber: e.target.value
                    })
                }
            />

        </div>
    );
}

export default DeviceDetails;