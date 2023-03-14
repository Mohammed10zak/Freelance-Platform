import React from "react";
// import Stars from '../../../../components/Stars/index';
import Stars from '../../../components/JobCard/Stars/index'

const PaymentMethod = ({ detail }) => {
  return (
    <>
      {detail.paymentVerified ? (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="green"
            style={{
              width: "20px",
              verticalAlign: "middle",
              paddingRight: "6px",
            }}
            viewBox="0 0 14 14"
            role="img"
          >
            <path d="M13.72 7.03c.45-.56.34-1.39-.24-1.82l-.55-.41c-.34-.25-.53-.66-.51-1.08l.03-.68c.03-.72-.53-1.32-1.25-1.33h-.68c-.42 0-.81-.22-1.05-.57L9.11.57c-.39-.6-1.2-.75-1.79-.33l-.55.4c-.34.24-.79.3-1.18.15L4.95.55c-.67-.25-1.41.11-1.64.79l-.21.65c-.14.4-.46.71-.87.82l-.65.18C.89 3.19.5 3.92.71 4.6l.21.65c.13.41.04.85-.22 1.18l-.42.54c-.45.56-.34 1.39.24 1.81l.55.41c.34.25.53.66.51 1.08l-.03.68c-.03.72.54 1.32 1.25 1.33h.68c.42 0 .81.22 1.05.57l.37.57c.39.6 1.21.75 1.79.33l.55-.4c.34-.25.78-.31 1.18-.16l.64.24c.67.25 1.41-.1 1.64-.79l.21-.65c.13-.4.45-.71.86-.82l.65-.17c.69-.19 1.09-.92.87-1.61l-.21-.65c-.13-.4-.05-.85.22-1.18l.42-.53zM6.06 9.84L3.5 7.27l1.23-1.23 1.33 1.33 3.21-3.21L10.5 5.4 6.06 9.84z"></path>
          </svg>
          Payment method verified
          <div>

          <Stars filled />
          </div>
        </span>
      ) : (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            role="img"
            fill="grey"
            style={{
              width: "20px",
              verticalAlign: "middle",
              paddingRight: "6px",
            }}
          >
            <path d="M12.6 7.181V1.4c0-.771-.63-1.4-1.4-1.4H1.399C.63 0 0 .629 0 1.4v7c0 .771.63 1.4 1.399 1.4h4.918A3.85 3.85 0 1012.6 7.181zM11.2 1.4v1.401H1.399V1.4H11.2zm-4.477 7H1.399V4.901H11.2v1.548a3.84 3.84 0 00-1.051-.149 3.845 3.845 0 00-3.426 2.1zm5.527 2.917l-.934.933-1.167-1.166-1.167 1.166-.932-.933 1.166-1.167L8.05 8.983l.932-.933 1.167 1.168 1.167-1.168.934.934-1.168 1.167 1.168 1.166z"></path>
          </svg>
          Payment method verified
          <div>

<Stars />
</div>
        </span>
      )}
    </>
  );
};

export default PaymentMethod;
