import Title from 'antd/es/typography/Title'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import Input from 'antd/es/input/Input'
import Search from 'antd/es/input/Search'
import { Avatar, Button, Flex } from 'antd'
import { BellOutlined, SettingOutlined } from '@ant-design/icons'

function AppHeader() {
  return (
    <Header style={{ background: 'white', justifyContent: 'space-between' ,display: 'flex',alignItems: 'center',position: 'sticky', top: 0, zIndex: 1, width: '100%'  }} >
      <Title level={3} style={{ color: '#2288ff', margin: 0 }}>
      My Wollet
      </Title>
      <Search
      placeholder="Search Anything Here..."
      enterButton="Search"
      size="large"
style={ {width:600}}
    
    />
    <Flex align='center' gap={3}><Button  shape='circle' type='text' icon={<SettingOutlined></SettingOutlined>}></Button>
    <Button shape='circle' type='text' icon={<BellOutlined></BellOutlined>}></Button>
    <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" size={40}></Avatar></Flex>
    </Header>
  )
}

export default AppHeader
