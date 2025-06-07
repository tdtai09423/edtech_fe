import { Col, Input, Row, Select, Typography } from "antd";
import Background from "../../components/base/Background";
import Container from "../../components/base/Container";
import CardClass from "../../components/base/CardClass";
import Search from "antd/es/input/Search";
import { useState } from "react";
import ModalCustom from "../../components/base/Modal";
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";

const Classes = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const [openModal, setOpenMdal] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Background style={{ height: 150 }}>
        <Container>
          <Row
            style={{
              padding: "48px 0",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
            }}
          >
            <Col span={24}>
              <Typography className="body-md-white">Resources</Typography>
            </Col>
          </Row>
        </Container>
      </Background>
      <Container>
        <Row
          justify={"space-between"}
          style={{ marginTop: "24px", width: "100%" }}
        >
          <Col span={6}>
            <Select
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select season"
            />
          </Col>
          <Col span={6} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Search placeholder="input search text" style={{ width: 200 }} />
          </Col>
        </Row>
        <Row gutter={[24, 24]} style={{ marginTop: 24, marginBottom: 50 }}>
          {/* <Col
            span={6}
            style={{
              width: "100%",
              height: "auto",
              border: "1px dashed gray",
              borderRadius: 12,
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <PlusCircleOutlined />
            <span>Add a class...</span>
          </Col> */}
          {data.map((item) => (
            <Col span={6} onClick={() => setOpenMdal(true)}>
              <CardClass />
            </Col>
          ))}
        </Row>
      </Container>
      <ModalCustom
        isOpen={openModal}
        onClose={() => setOpenMdal(false)}
        onOk={() => navigate("/enroll")}
        title="Enroll"
      >
        <div style={{ textAlign: "center" }}>
          <Typography className="title-lg-black">
            JPD102 - GD1901
          </Typography>
          <Typography className="body-sm-black">
            Lecturer: Tran Van Hung
          </Typography>
        </div>
        {/* <Input
          placeholder="Enter class code"
          style={{ height: 40, marginTop: 24, textAlign: "center" }}
        /> */}
      </ModalCustom>
    </div>
  );
};

export default Classes;
