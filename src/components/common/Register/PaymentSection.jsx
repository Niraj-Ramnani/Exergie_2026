import React from 'react';
import classes from './Register.module.css';
import qrCodeImage from '../../../assets/qrcode/qrcode.png';

const PaymentSection = ({ totalAmount }) => {
    const upiId = "ARYACOLLEGE@icici";
    const eventName = "Exergie 2026";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(eventName)}&am=${totalAmount}`;

    return (
        <div className={classes.paymentWrapper}>
            <h2 className={classes.sectionTitle}>
                Complete Your Payment
                <span className={classes.titleUnderline}></span>
            </h2>

            <div className={classes.paymentDisplay}>
                <p className={classes.paymentLabel}>Total Amount to Pay:</p>
                <p className={classes.paymentAmount}>₹{totalAmount}</p>
            </div>

            <div className={classes.qrContainer}>
                <div className={classes.qrPlaceholder}>
                    <img
                        src={qrCodeImage}
                        alt="UPI QR Code"
                        className={classes.qrImage}
                    />
                </div>
                <p className={classes.upiId}>UPI ID: <span>{upiId}</span></p>
                <p className={classes.payInstruction}>Pay the exact amount shown above</p>
            </div>

            <div className={classes.upiButtonContainer}>
                <a
                    href={upiLink}
                    className={classes.upiButton}
                >
                    Pay Using UPI App
                </a>
            </div>
        </div>
    );
};

export default PaymentSection;
