"use client";

import React from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Card, Col, Flex, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function EarningCards() {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card variant="borderless">
          <Paragraph type="secondary">Youtube</Paragraph>

          <Flex justify="space-between" align="center">
            <Title level={3} style={{ marginBottom: 0, fontWeight: "bold" }}>
              $ 1257.65
            </Title>

            <ArrowUpOutlined style={{ fontSize: 24, color: "green" }} />
          </Flex>
        </Card>
      </Col>
       <Col span={6}>
        <Card variant="borderless">
          <Paragraph type="secondary">Facebook</Paragraph>

          <Flex justify="space-between" align="center">
            <Title level={3} style={{ marginBottom: 0, fontWeight: "bold" }}>
              $ 224.98
            </Title>

            <ArrowDownOutlined style={{ fontSize: 24, color: "red" }} />
          </Flex>
        </Card>
      </Col>
       <Col span={6}>
        <Card variant="borderless">
          <Paragraph type="secondary">Website</Paragraph>

          <Flex justify="space-between" align="center">
            <Title level={3} style={{ marginBottom: 0, fontWeight: "bold" }}>
              $ 674.43
            </Title>

            <ArrowUpOutlined style={{ fontSize: 24, color: "green" }} />
          </Flex>
        </Card>
      </Col>
       <Col span={6}>
        <Card variant="borderless">
          <Paragraph type="secondary">Buy me a coffee</Paragraph>

          <Flex justify="space-between" align="center">
            <Title level={3} style={{ marginBottom: 0, fontWeight: "bold" }}>
              $ 453.67
            </Title>

            <ArrowDownOutlined style={{ fontSize: 24, color: "red" }} />
          </Flex>
        </Card>
      </Col>
    </Row>
  );
}
