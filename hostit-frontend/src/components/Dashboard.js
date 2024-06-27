import React, { useEffect } from 'react';
import styled from 'styled-components';
import FileUpload from './FileUpload';
import Quota from './Quota';
import ActivityLog from './ActivityLog';
 
const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f0f2f5;
    min-height: 100vh;
`;
 
const Title = styled.h1`
    margin-bottom: 20px;
    color: #333;
`;
 
const Section = styled.div`
    width: 80%;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;
 
const Dashboard = () => {
    useEffect(() => {
        console.log('Dashboard component mounted');
    }, []);
 
    return (
<DashboardContainer>
<Title>Dashboard</Title>
<Section>
<Quota />
</Section>
<Section>
<FileUpload />
</Section>
<Section>
<ActivityLog />
</Section>
</DashboardContainer>
    );
};
 
export default Dashboard;