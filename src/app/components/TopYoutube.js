import { Col, Progress, Row } from 'antd'
import Card from 'antd/es/card/Card'
import React from 'react'
import Image from 'next/image'

function TopYoutube() {
  return (
   <Card title="Top Earnings from Youtube">
    <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col span={4}>
             <Image src="/admb5.avif" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px'}} />
            </Col>
            <Col span={20}>
          <p style={{marginBottom:2}}>Dashboard using HTML and CSS</p>
          <Progress percent={67} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
      <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col span={4}>
             <Image src="/dashb.2.webp" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px'}} />
            </Col>
            <Col span={20}>
          <p style={{marginBottom:2}}>Create a Modern Website with HTML and CSS | Step-by-Step Guide</p>
          <Progress percent={55} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
      <Row gutter={[3, 16]}>
        <Col span={24}> 
         <Row gutter={16} align="middle">
            <Col span={4}>
             <Image src="/dashb6.png" alt="Dashboard" width={100} height={40} style={{ objectFit: 'cover', border: '1px solid #d9d9d9', borderRadius: '4px'}} />
            </Col>
            <Col span={20}>
          <p style={{marginBottom:2}}>How to add background image in Next JS with image optimization</p>
          <Progress percent={28} size="small" /> 
        </Col>
         </Row>
        </Col> 
    </Row>
   </Card>
  )
}

export default TopYoutube
