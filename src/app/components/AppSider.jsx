"use client"

import { useState, useEffect } from 'react'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { DollarOutlined, WalletOutlined, LikeOutlined, ShoppingOutlined, LineChartOutlined, SaveOutlined, FileTextOutlined } from '@ant-design/icons'

function AppSider() {
  const pathname = usePathname()
  const [selectedKey, setSelectedKey] = React.useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setCollapsed(mobile)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(()=>{
    items.forEach((item)=>{
      if(pathname.startsWith(item.path)){
        setSelectedKey(item.key)
      }
  },[pathname])

  })
      const items=[

  {
    key:'1',
    icon: <DollarOutlined />,
    label: <Link href="/">Earnings</Link>,
    path:'/'
  },
  {
    key:'2',
    icon: <WalletOutlined />,
    label: <Link href="/wallets">Wallet</Link>,
    path:"/wallets"
  },
  {    
    key:'3',
    icon: <LikeOutlined />,
    label: <Link href="/loans">Loans</Link>,  
    path:"/loans"
  },
  
  {    
    key:'4',
    icon: <ShoppingOutlined />,
    label: <Link href="/expenses">Expenses</Link>,  
    path:"/expenses"
  },
  
  {    
    key:'5',
    icon: <LineChartOutlined />,
    label: <Link href="/tradings">Tradings</Link>,  
    path:"/tradings"
  },
  
  {    
    key:'6',
    icon: <SaveOutlined />,
    label: <Link href="/vaults">Vaults</Link>,  
    path:"/vaults"
  },
  
  {    
    key:'7',
    icon: <FileTextOutlined />,
    label: <Link href="/reports">Reports</Link>,  
    path:"/reports"
  }, 
]

  return (
    
   
   <Sider 
     width={200} 
     collapsedWidth={isMobile ? 0 : 80}
     collapsed={collapsed}
     onCollapse={(value) => setCollapsed(value)}
     breakpoint="lg"
     style={{ 
       background: 'white', 
       height: '100%', 
       overflowY: 'auto',
       transition: 'all 0.2s'
     }} 
   >
   <Menu items={items} selectedKeys={[selectedKey]} mode="inline" />

   </Sider>
  )
}

export default AppSider
