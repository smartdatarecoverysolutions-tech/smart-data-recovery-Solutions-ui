import React,
{
    useRef
}
from "react";

import {
    useReactToPrint
}
from "react-to-print";

import InvoiceView
from "./InvoiceView";

function PrintInvoice({ job }) {

    const componentRef =
      useRef();

    const handlePrint =
      useReactToPrint({

        content: () =>
          componentRef.current

      });

    return (

        <div>

            <div
              ref={componentRef}
            >

                <InvoiceView
                    job={job}
                />

            </div>

            <button
              onClick={handlePrint}
            >
                Print Invoice
            </button>

        </div>

    );
}

export default PrintInvoice;