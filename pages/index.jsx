import { Card, Col, Row } from 'antd'

export default function Home() {
  return (
    <>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Card title">Card content</Card>
        </Col>
      </Row>
    </>
  )
}
