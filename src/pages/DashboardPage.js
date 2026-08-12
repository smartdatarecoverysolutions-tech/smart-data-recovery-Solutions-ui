import Dashboard
from "../components/dashboard/Dashboard";

import CustomerForm
from "../components/customers/CustomerForm";

//import RecentJobs
//from "../components/dashboard/RecentJobs";

//import RecentPayments
//from "../components/dashboard/RecentPayments";

function DashboardPage() {

    return (

        <>

            <Dashboard />

            <hr />
               <CustomerForm />
           {/* <RecentJobs />*/}

            <hr />

           {/* <RecentPayments />*/}

        </>

    );
}

export default DashboardPage;