import { useEffect, useState } from "react";

export const TodoDate = () => {
    const [dateTime, setDateTime] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const formatedDate = date.toLocaleDateString();
            const formatedTime = date.toLocaleTimeString();
            setDateTime(`${formatedDate} - ${formatedTime}`);
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return <h2 className="date-time text-white">{dateTime}</h2>
}; 