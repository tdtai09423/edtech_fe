import { Card, Tag, Rate, Typography } from "antd";
import "./style.css"; // CSS riêng nếu cần thêm style tùy chỉnh

const { Title, Text } = Typography;

interface CardCourseProps {
  onClick?: () => void;
  item: any;
}
const CardCourse = ({ onClick, item }: CardCourseProps) => {
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
      bordered={false}
    >
      <Tag color="orange" className="recommended-tag">
        Recommended
      </Tag>

      <div className="course-content">
        <Text type="secondary" style={{ marginBottom: 4 }}>
          {item?.language?.name}
        </Text>
        <Rate disabled defaultValue={4} style={{ fontSize: 16 }} />

        <div className="course-title-row">
          <Title level={5} style={{ margin: "8px 0 0" }}>
            {item?.title}
          </Title>
          <img
            src="https://flagcdn.com/gb.svg"
            alt="English"
            width={24}
            height={16}
            style={{ marginLeft: 8, borderRadius: 2 }}
          />
        </div>

        <Text type="secondary">{item?.flashcards.length} card</Text>
      </div>
    </Card>
  );
};

export default CardCourse;
