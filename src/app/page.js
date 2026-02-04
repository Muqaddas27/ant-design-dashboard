import { Button, Col, Row } from "antd";
import Image from "next/image";
import EarningCards from "./components/EarningCards";
import TopYoutube from "./components/TopYoutube";
import TopWebsites from "./components/TopWebsites";
import { LastEarnings } from "./components/LastEarnings";

export default function Home() {
  return (
    <>
   <EarningCards/>
   <Row gutter={16} style={{marginBottom:16 , marginTop:16}}>
      <Col span={12}><TopYoutube /></Col>
        <Col span={12}><TopWebsites /></Col>
   </Row>
   <LastEarnings/>
 
    </>
  );
}
