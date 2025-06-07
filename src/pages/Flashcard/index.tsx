import { useState, useCallback } from "react";
import { Col, Row, Select, Typography, Pagination, Input } from "antd";
import Background from "../../components/base/Background";
import Container from "../../components/base/Container";
import CardCourse from "../../components/base/CardCourse";
import { useNavigate } from "react-router-dom";
import { useGetFlashCards } from "../../hooks/useFlashCard";
import { useGetLanguages } from "../../hooks/useLanguage";

const { Search } = Input;
const { Option } = Select;

const purposeOptions = [
  { label: "Học từ vựng", value: "Learn" },
  { label: "Ôn tập", value: "Review" },
  // Thêm option tương ứng backend
];

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const Flashcard = () => {
  const navigate = useNavigate();
  const { data: languages } = useGetLanguages();
  const [params, setParams] = useState({
    language: [],
    purpose: [],
    search: "",
    currentPage: 1,
    size: 10,
  });

  const { data: flashcards, isLoading } = useGetFlashCards({
    languageId: params.language.join(","),
    purpose: params.purpose.join(","),
    page: params.currentPage,
    size: params.size,
    search: params.search,
  });

  const handleSearchChange = useCallback(
    debounce((value) => {
      setParams((prev) => ({ ...prev, search: value, currentPage: 1 }));
    }, 500),
    []
  );

  const handleLanguageChange = (values) => {
    setParams((prev) => ({ ...prev, language: values, currentPage: 1 }));
  };

  const handlePurposeChange = (values) => {
    setParams((prev) => ({ ...prev, purpose: values, currentPage: 1 }));
  };

  const onPageChange = (page) => {
    setParams((prev) => ({ ...prev, currentPage: page }));
  };

  return (
    <div>
      <Background style={{ height: 300 }}>
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
              <Typography className="body-md-white">FLASHCARD</Typography>
            </Col>
            <Col span={24}>
              <Typography className="body-des-white">
                Flashcards to increase your vocabulary
              </Typography>
            </Col>
          </Row>
        </Container>
      </Background>

      <Container>
        <Row justify="space-between" style={{ marginTop: 24, width: "100%" }}>
          <Col span={12}>
            <Row gutter={[12, 12]}>
              <Col span={12}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select language"
                  onChange={handleLanguageChange}
                  value={params.language}
                  options={languages?.map((item) => ({
                    label: item.name,
                    value: String(item.id),
                  }))}
                />
              </Col>
              <Col span={12}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select purpose"
                  onChange={handlePurposeChange}
                  value={params.purpose}
                  options={purposeOptions}
                />
              </Col>
            </Row>
          </Col>
          <Col span={6} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Search
              placeholder="Input search text"
              style={{ width: 200 }}
              allowClear
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          {isLoading ? (
            <div>Loading...</div>
          ) : flashcards?.data?.length ? (
            flashcards.data.map((item) => (
              <Col key={item.title} span={6}>
                <CardCourse
                  item={item}
                  onClick={() => navigate(`/flashcard/${item.title}`)}
                />
              </Col>
            ))
          ) : (
            <div>No data</div>
          )}
        </Row>

        <Row justify="center" style={{ marginTop: 24, marginBottom: 60 }}>
          <Pagination
            current={params.currentPage}
            pageSize={params.size}
            total={flashcards?.attribute?.totalPage * params.size || 0}
            onChange={onPageChange}
            showSizeChanger={false}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Flashcard;
