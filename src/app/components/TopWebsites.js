import { Col, Progress, Row } from 'antd'
import Card from 'antd/es/card/Card'
import React from 'react'
import Image from 'next/image'

function TopWebsites() {
  return (
   <Card title="Top Earnings from Website">
    <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col span={4}>
             <Image src="/dashb.2.webp" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px'}} />
            </Col>
            <Col span={20}>
          <p style={{marginBottom:2}}>Next JS + Tailwind CSS card design components</p>
          <Progress percent={75} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
      <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col span={4}>
             <Image src="/dashb3.png" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px'}} />
            </Col>
            <Col span={20}>
          <p style={{marginBottom:2}}>How to add background video in HTML website</p>
          <Progress percent={38} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
      <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col span={4}>
             <Image src="/dashb4.png" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px'}} />
            </Col>
            <Col span={20}>
          <p style={{marginBottom:2}}>Building Your Personal Website from Scratch with HTML and CSS...</p>
          <Progress percent={24} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
   </Card>
  )
}

export default TopWebsites
