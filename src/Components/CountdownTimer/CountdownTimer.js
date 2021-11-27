import { useState, useEffect } from 'react';
import './CountdownTimer.css';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
};

const CountdownTimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainigTime(countdownTimestampMs);
        }, 1000);
        return () => clearTimeout(intervalId);
    }, [countdownTimestampMs])

    function updateRemainigTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className='countdown-timer'>
            <span>{remainingTime.days}</span>
            <span>日</span>
            <span className='two-numbers'>{remainingTime.hours}</span>
            <span>時間</span>
            <span className='two-numbers'>{remainingTime.minutes}</span>
            <span>分</span>
            <span className='two-numbers'>{remainingTime.seconds}</span>
            <span>秒</span>
        </div>
    );

}
export default CountdownTimer;