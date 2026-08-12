import React from "react";
import { generateReceipt }
from "../../services/receiptService";

function ReceiptButton({ jobId }) {

    const printReceipt =
      async () => {

        try {

            const pdfBlob =
              await generateReceipt(jobId);

            const pdfUrl =
              window.URL.createObjectURL(
                pdfBlob
              );

            window.open(
              pdfUrl,
              "_blank"
            );

        } catch(error) {

            alert(
              "Unable to Generate Receipt"
            );

            console.log(error);
        }
    };

    return (

        <button
            onClick={printReceipt}
        >
            Print Receipt
        </button>

    );
}

export default ReceiptButton;