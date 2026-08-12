function DashboardCards({
    title,
    value
}) {

    return (

        <div
            style={{
                border: "1px solid #ccc",
                padding: "20px",
                margin: "10px",
                width: "220px"
            }}
        >

            <h3>{title}</h3>

            <h2>{value}</h2>

        </div>

    );
}

export default DashboardCards;