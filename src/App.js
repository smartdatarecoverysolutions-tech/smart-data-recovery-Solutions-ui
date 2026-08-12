import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// PAGES
import CustomerForm from "./components/customers/CustomerForm";
import CustomerList from "./components/customers/CustomerList";
import JobForm from "./components/jobs/JobForm";
import JobList from "./components/jobs/JobList";
import PaymentPage from "./pages/PaymentPage";
import PaymentList from "./components/payments/PaymentList";
import InvoicePage from "./pages/InvoicePage";
import MainLayout from "./components/layout/MainLayout";
import ReportDashboard from "./components/reports/ReportDashboard";
import EditJobPage from "./pages/EditJobPage";
import EditCustomerPage from "./pages/EditCustomerPage";
import CustomerReport from "./components/reports/CustomerReport";
import JobReport from "./components/reports/JobReport";
import PaymentReport from "./components/reports/PaymentReport";
import DateWiseReport from "./components/reports/DateWiseReport";
import InvoiceReport from "./components/reports/InvoiceReport";
import MonthlyRevenueReport from "./components/reports/MonthlyRevenueReport";
import LoginPage from "./pages/LoginPage";
import EmployeeMainLayout
from "./components/employee/EmployeeMainLayout";
import EmployeeCustomerList from "./components/employee/EmployeeCustomerList";
import EmployeeJobList from "./components/employee/EmployeeJobList";
import EmployeeEditJobPage from "./pages/EmployeeEditJobPage";
import FeedbackPage from "./pages/FeedbackPage";
import InvoiceList from "./components/invoice/InvoiceList";
import FeedbackList from "./components/feedback/FeedbackList";
import FeedbackReport from "./components/reports/FeedbackReport";
import EmployeeEditCustomerPage from "./pages/EmployeeEditCustomerPage";




import Home from "./customer_website/pages/Home";
import About from "./customer_website/pages/About";
import Contact from "./customer_website/pages/Contact";
import Services from "./customer_website/components/Services";



import HDDRecovery from "./customer_website/pages/HDDRecovery";
import SSDRecovery from "./customer_website/pages/SSDRecovery";
import PenDriveRecovery from "./customer_website/pages/PenDriveRecovery";
import MemoryCardRecovery from "./customer_website/pages/MemoryCardRecovery";
import MobileRecovery from "./customer_website/pages/MobileRecovery";
import RAIDRecovery from "./customer_website/pages/RAIDRecovery";
import DVRRecovery from "./customer_website/pages/DVRRecovery";


import CCTVRecovery from "./customer_website/pages/CCTVRecovery";
import DeviceDiagnosis from "./customer_website/pages/DeviceDiagnosis";


function App() {
    return (
        <BrowserRouter >
            <Routes>

    {/* Login */}
    <Route
        path="/login"
        element={<LoginPage />}
    />

    {/* Redirect Root */}
    <Route
        path="/"
        element={<Navigate to="/home" />}
    />

    {/* Main Dashboard */}
    <Route
        path="/main"
        element={<MainLayout />}
    />

    {/* Customer */}
    <Route
        path="/customers/add"
        element={<CustomerForm />}
    />

    <Route
        path="/customers/list"
        element={<CustomerList />}
    />

    {/* Jobs */}
    <Route
        path="/jobs"
        element={<JobForm />}
    />

    <Route
        path="/jobs/list"
        element={<JobList />}
    />

    {/* Payments */}
    <Route
        path="/payments"
        element={<PaymentPage />}
    />

    <Route
        path="/payments/list"
        element={<PaymentList />}
    />

    {/* Invoice */}
    <Route
        path="/invoice"
        element={<InvoicePage />}
    />

    {/* Reports */}
    <Route
        path="/reports"
        element={<ReportDashboard />}
    />

    <Route
        path="/customer-report"
        element={<CustomerReport />}
    />

    <Route
        path="/job-report"
        element={<JobReport />}
    />

    <Route
        path="/payment-report"
        element={<PaymentReport />}
    />

    <Route
        path="/invoice-report"
        element={<InvoiceReport />}
    />

    <Route
        path="/date-report"
        element={<DateWiseReport />}
    />

    <Route
        path="/monthly-report"
        element={<MonthlyRevenueReport />}
    />

    {/* Edit Pages */}
    <Route
        path="/edit-job/:id"
        element={<EditJobPage />}
    />

    <Route
        path="/edit-customer/:id"
        element={<EditCustomerPage />}
    />

    <Route
    path="/employee-main"
    element={<EmployeeMainLayout />}
/>

<Route
    path="/employee-jobs"
    element={<EmployeeJobList />}
/>

<Route
    path="/login"
    element={<LoginPage />}
/>

<Route
    path="/employee-main"
    element={<EmployeeMainLayout />}
/>

<Route
    path="/main"
    element={<MainLayout />}
/>

<Route
    path="/"
    element={<Navigate to="/login" />}
/>
<Route
    path="/employee-customers"
    element={<EmployeeCustomerList />}
/>
<Route
    path="/employee-edit-job/:id"
    element={<EmployeeEditJobPage />}
/>

<Route
    path="/feedback"
    element={<FeedbackPage />}
/>

<Route
    path="/feedback/:jobId"
    element={<FeedbackPage />}
/>
<Route
    path="/invoice/list"
    element={<InvoiceList />}
/>

<Route
    path="/feedback/list"
    element={<FeedbackList />}
/>
<Route
    path="/feedback-report"
    element={<FeedbackReport />}
/>
<Route
    path="/employee-edit-customer/:id"
    element={<EmployeeEditCustomerPage />}
/>   





  {/* Customer Website API calss */}

      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

         <Route path="/services" element={<Services />} />

        <Route path="/hdd-recovery" element={<HDDRecovery />} />
        <Route path="/ssd-recovery" element={<SSDRecovery />} />
        <Route path="/pen-drive-recovery" element={<PenDriveRecovery />} />
        <Route path="/memory-card-recovery" element={<MemoryCardRecovery />} />
        <Route path="/mobile-recovery" element={<MobileRecovery />} />
        <Route path="/raid-recovery" element={<RAIDRecovery />} />
        <Route path="/dvr-cctv-recovery" element={<DVRRecovery />} />
        <Route path="/device-diagnosis" element={<DeviceDiagnosis />} />
        <Route path="/cctv-recovery" element={<CCTVRecovery />} />


</Routes>

        </BrowserRouter>
    );
}

export default App;