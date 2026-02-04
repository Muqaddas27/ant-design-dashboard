"use client"


import { Column } from '@ant-design/plots';
import Card from 'antd/es/card/Card'
import React from 'react'

export const LastEarnings = () => {


    const data = [
  { data: '1', value: 15 },
  { data: '2', value: 1 },
  { data: '3', value: 10 },
  { data: '4', value: 5 },
  { data: '5', value: 12 },
  { data: '6', value: 8 },
  { data: '7', value: 14 },
  { data: '8', value: 6 },
  { data: '9', value: 9 },
  { data: '10', value: 11 },
  { data: '11', value: 3 },
  { data: '12', value: 7 },
  { data: '13', value: 13 },
  { data: '14', value: 4 },
  { data: '15', value: 15 },
  { data: '16', value: 8 },
  { data: '17', value: 10 },
  { data: '18', value: 5 },
  { data: '19', value: 12 },
  { data: '20', value: 7 },
  { data: '21', value: 11 },
  { data: '22', value: 6 },
  { data: '23', value: 9 },
  { data: '24', value: 13 },
  { data: '25', value: 4 },
  { data: '26', value: 14 },
  { data: '27', value: 2 },
  { data: '28', value: 10 },
  { data: '29', value: 8 },
  { data: '30', value: 12 },
];

     const config = {
    data,
    xField: 'data',
    yField: 'value',
    height:200,

  };
  return (
    <Card title="Earnings of Last Month" style={{marginBottom:0}}>
        <Column   {...config} />
    </Card>
  )
}
