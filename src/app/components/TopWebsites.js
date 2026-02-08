import { Col, Progress, Row } from 'antd'
import Card from 'antd/es/card/Card'
import React from 'react'
import Image from 'next/image'

function TopWebsites() {
  return (
   <Card title="Top Earnings from Website" style={{ height: '100%' }}>
    <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col xs={6} sm={5} md={4} lg={4} xl={4}>
             <Image src="/dashb.2.webp" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px', width: '100%', height: 'auto' }} />
            </Col>
            <Col xs={18} sm={19} md={20} lg={20} xl={20}>
          <p style={{marginBottom:2, fontSize: 'clamp(12px, 2vw, 14px)', lineHeight: '1.4'}}>Next JS + Tailwind CSS card design components</p>
          <Progress percent={75} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
      <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col xs={6} sm={5} md={4} lg={4} xl={4}>
             <Image src="/dashb3.png" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px', width: '100%', height: 'auto' }} />
            </Col>
            <Col xs={18} sm={19} md={20} lg={20} xl={20}>
          <p style={{marginBottom:2, fontSize: 'clamp(12px, 2vw, 14px)', lineHeight: '1.4'}}>How to add background video in HTML website</p>
          <Progress percent={38} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
      <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col xs={6} sm={5} md={4} lg={4} xl={4}>
             <Image src="/dashb4.png" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px', width: '100%', height: 'auto' }} />
            </Col>
            <Col xs={18} sm={19} md={20} lg={20} xl={20}>
          <p style={{marginBottom:2, fontSize: 'clamp(12px, 2vw, 14px)', lineHeight: '1.4'}}>Building Your Personal Website from Scratch with HTML and CSS...</p>
          <Progress percent={24} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
   </Card>
  )
}

export default TopWebsites
