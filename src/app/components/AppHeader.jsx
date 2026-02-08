"use client"

import Title from 'antd/es/typography/Title'
import { Header } from 'antd/es/layout/layout'
import React, { useState, useEffect } from 'react'
import Input from 'antd/es/input/Input'
import Search from 'antd/es/input/Search'
import { Avatar, Button, Flex } from 'antd'
import { BellOutlined, SettingOutlined } from '@ant-design/icons'

function AppHeader() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Header style={{ 
      background: 'white', 
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
      position: 'sticky', 
      top: 0, 
      zIndex: 1, 
      width: '100%',
      padding: isMobile ? '0 12px' : '0 24px',
      gap: isMobile ? '8px' : '16px'
    }}>
      <Title level={isMobile ? 5 : 3} style={{ 
        color: '#2288ff', 
        margin: 0,
        whiteSpace: 'nowrap',
        minWidth: isMobile ? 'auto' : '120px'
      }}>
        {isMobile ? 'Wollet' : 'My Wollet'}
      </Title>
      
      {!isMobile && (
        <Search
          placeholder="Search Anything Here..."
          enterButton="Search"
          size="large"
          style={{ 
            width: '100%', 
            maxWidth: '600px',
            flex: 1
          }}
        />
      )}

      <Flex align='center' gap={isMobile ? 4 : 8}>
        <Button  
          shape='circle' 
          type='text' 
          size={isMobile ? 'small' : 'middle'}
          icon={<SettingOutlined />}
        />
        <Button 
          shape='circle' 
          type='text' 
          size={isMobile ? 'small' : 'middle'}
          icon={<BellOutlined />}
        />
        <Avatar 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="Profile" 
          size={isMobile ? 32 : 40}
        />
      </Flex>
    </Header>
  )
}

export default AppHeader
