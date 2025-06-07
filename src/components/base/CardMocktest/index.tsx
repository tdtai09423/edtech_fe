import { Card, Typography } from "antd";

const { Title, Text } = Typography;

interface CardMocktestProps {
  onClick?: () => void;
  item: any;
}
const CardMocktest = ({ onClick, item }: CardMocktestProps) => {
  return (
    <Card
      onClick={onClick}
      className="course-card"
      cover={
        <div className="course-image-placeholder">
          <img
            src={
              item?.language?.name === "English"
                ? "https://www.euroschoolindia.com/blogs/wp-content/uploads/2024/01/importance-of-learning-english-jpg.webp"
                : "https://a.storyblok.com/f/55469/1176x732/3070577851/jp_-_2022.png/m/645x0/filters:format(webp)"
            }
            alt="course"
            className="course-image"
          />
        </div>
      }
    >
      <div className="course-content">
        <Text type="secondary" style={{ marginBottom: 4 }}>
          {item?.language?.name}
        </Text>

        <div className="course-title-row">
          <Title level={5} style={{ margin: "8px 0 0" }}>
            {item?.title}
          </Title>
        </div>

        <Text type="secondary">{item?.mocktests?.length} quiz</Text>
      </div>
    </Card>
  );
};

export default CardMocktest;
