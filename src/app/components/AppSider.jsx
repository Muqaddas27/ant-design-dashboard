"use client"

import { useState } from 'react'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { DollarOutlined, WalletOutlined, LikeOutlined, ShoppingOutlined, LineChartOutlined, SaveOutlined, FileTextOutlined } from '@ant-design/icons'

function AppSider() {

  const pathname = usePathname()
  const [selectedKey, setSelectedKey] = React.useState('')
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
    
   
   <Sider width={200} style={{ background: 'white', height: '100%', overflowY: 'auto' }} >
   <Menu items={items} ></Menu>

   </Sider>
  )
}

export default AppSider
