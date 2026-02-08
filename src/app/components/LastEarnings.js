"use client"

import { Column } from '@ant-design/plots';
import Card from 'antd/es/card/Card';
import React, { useState, useEffect, useRef } from 'react';

export const LastEarnings = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    // Use ResizeObserver for more accurate tracking
    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateWidth);
      resizeObserver.disconnect();
    };
  }, []);

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

  const isMobile = containerWidth < 576;
  const isTablet = containerWidth >= 576 && containerWidth < 992;

  const config = {
    data,
    xField: 'data',
    yField: 'value',
    width: containerWidth,
    height: isMobile ? 200 : isTablet ? 240 : 280,
    padding: isMobile ? [20, 20, 30, 35] : [20, 20, 40, 45],
    color: '#1890ff',
    columnStyle: {
      radius: [2, 2, 0, 0],
    },
    xAxis: {
      label: {
        autoRotate: false,
        autoHide: true,
        autoEllipsis: true,
        style: {
          fontSize: isMobile ? 10 : 12,
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fontSize: isMobile ? 10 : 12,
        },
      },
      grid: {
        line: {
          style: {
            stroke: '#f0f0f0',
            lineWidth: 1,
          },
        },
      },
    },
    tooltip: {
      showTitle: false,
      customContent: (title, items) => {
        if (!items || items.length === 0) return null;
        return `<div style="padding: 8px 12px;">
          <div style="margin-bottom: 4px; font-weight: 500;">Day ${items[0]?.data?.data}</div>
          <div>Earnings: <strong>$${items[0]?.data?.value}</strong></div>
        </div>`;
      },
    },
    meta: {
      data: {
        alias: 'Day',
      },
      value: {
        alias: 'Earnings',
      },
    },
  };

  return (
    <Card 
      title="Earnings of Last Month" 
      style={{
        marginBottom: 0,
        width: '100%',
      }}
      styles={{
        header: {
          fontSize: isMobile ? '14px' : '16px',
          padding: isMobile ? '12px 16px' : '16px 24px',
        },
        body: {
          padding: isMobile ? '12px' : '16px',
        },
      }}
    >
      <div ref={containerRef} style={{ 
        width: '100%',
        minHeight: isMobile ? '200px' : isTablet ? '240px' : '280px',
      }}>
        {containerWidth > 0 && <Column {...config} />}
      </div>
    </Card>
  );
}
