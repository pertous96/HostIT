import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const ActivityLog = () => {
    const [logs, setLogs] = useState([]);
 
    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const res = await axios.get('/api/users/activity-log', {
                    headers: { 'x-auth-token': localStorage.getItem('token') },
                });
                setLogs(res.data);
            } catch (err) {
                console.error(err);
            }
        };
 
        fetchLogs();
    }, []);
 
    return (
<div>
<h3>Activity Log</h3>
<ul>
                {logs.map((log, index) => (
<li key={index}>{log}</li>
                ))}
</ul>
</div>
    );
};
 
export default ActivityLog;