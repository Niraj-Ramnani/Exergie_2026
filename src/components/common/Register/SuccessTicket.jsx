import React, { useRef } from 'react';
import classes from './Register.module.css';

const SuccessTicket = ({ data }) => {
    const ticketRef = useRef(null);

    const {
        fullName,
        selectedEvents,
        totalAmount,
        registrationId
    } = data;

    return (
        <div className={classes.ticketContainer}>
            <div className={classes.ticketWrapper} ref={ticketRef}>
                <div className={classes.ticketHeader}>
                    <div className={classes.ticketCircles}>
                        <span></span>
                        <span></span>
                    </div>
                    <h1 style={{ fontSize: '1.8rem', marginBottom: '5px', background: 'linear-gradient(135deg, #a88bff, #2fc2ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ARYA EXERGIE 2026</h1>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '500', color: 'rgba(255,255,255,0.8)' }}>🎉 Thank You For Registering</h2>
                </div>

                <div className={classes.ticketBody}>
                    <div className={classes.ticketSection}>
                        <span className={classes.ticketLabel}>Participant Name</span>
                        <span className={classes.ticketValue}>{fullName}</span>
                    </div>

                    <div className={classes.ticketRow}>
                        <div className={classes.ticketSection}>
                            <span className={classes.ticketLabel}>Events Selected</span>
                            <span className={classes.ticketValue}>{selectedEvents.length}</span>
                        </div>

                        <div className={classes.ticketSection}>
                            <span className={classes.ticketLabel}>Total Paid</span>
                            <span className={classes.ticketValueHighlight}>₹{totalAmount}</span>
                        </div>
                    </div>

                    <div className={classes.ticketBadge}>
                        <span className={classes.ticketLabel}>Registration ID</span>
                        <span className={classes.ticketId}>{registrationId}</span>
                    </div>
                </div>

                <div className={classes.ticketFooter}>
                    <div className={classes.festDetails}>
                        <h3>Exergie 2026</h3>
                        <p>13–15 March</p>
                    </div>
                </div>
            </div>

            <p className={classes.ticketHelpText}>Take a screenshot of this digital ticket for your records.</p>
        </div>
    );
};

export default SuccessTicket;
