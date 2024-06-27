import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const Quota = () => {
    const [quota, setQuota] = useState({ usedSpace: 0, quota: 0 });
 
    useEffect(() => {
        const fetchQuota = async () => {
            try {
                const res = await axios.get('/api/users/quota', {
                    headers: { 'x-auth-token': localStorage.getItem('token') },
                });
                setQuota(res.data);
            } catch (err) {
                console.error(err);
            }
        };
 
        fetchQuota();
    }, []);
 
    return (
<div>
<h3>Quota Usage</h3>
<p>Used: {quota.usedSpace / (1024 * 1024)} MB / {quota.quota / (1024 * 1024)} MB</p>
</div>
    );
};
 
export default Quota;