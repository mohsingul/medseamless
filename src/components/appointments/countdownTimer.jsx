import React, { useState, useEffect } from 'react';
import { Tag } from 'antd';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor(difference / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            // Countdown finished
            timeLeft = { hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div>
            <p style={{ fontSize: "medium" }}><b>{timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s</b></p>

            {timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                <Tag color={"red"} key={"red"} className="custom-badge">
                    {"overdue"}
                </Tag>
            ) : <Tag color={"green"} key={"active"} className="custom-badge">
                {"active"}
            </Tag>}
        </div>
    );
};

export default CountdownTimer;
