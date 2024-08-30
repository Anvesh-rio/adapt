import React from 'react'
import Dashboardtwo from './Dashboardtwo.jsx'
import 
 { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';



function Dashboard () {

    const data = [
        {
          name: '6/30/2024 - 07/06/2024',
          uv: 4000,
          pv: 3600,
          amt: 2400,
        },
        {
          name: '8/30/2024 - 15/06/2024',
          uv: 1900,
          pv: 1900,
          amt: 2210,
        },
        {
          name: '7/22/2024 - 27/06/2024',
          uv: 2000,
          pv: 1397,
          amt: 2210,
        },
      ];
     
      

  return (
    <main className='main-container'>
        <div className='main-title-head'>
            <h3>DASHBOARD</h3>
        </div>

        
        <div className='orders'>
        <div className='sales'>
          <h1 className='sales-orders'>Sales vs Orders</h1>
        </div>
        <div className='charts'>
      
      <ResponsiveContainer width="100%" height="100%">
          <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
      </ResponsiveContainer>    
      
       
  
            <Dashboardtwo />
        </div>
        </div>
    </main>
  )
}

export default Dashboard;