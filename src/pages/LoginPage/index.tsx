import Title from "antd/es/typography/Title";
import BackgroundSpeaking from "../../components/base/BackgroundSpeaking";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSuccess = async (credentialResponse: any) => {
    const token = credentialResponse.credential;

    try {
      const response = await axios.post(
        "https://20.37.113.32:8443/api/users/google",
        { token }
      );
      const jwt = response.data.jwtToken;

      localStorage.setItem("jwt", jwt);
      toast.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
    }
  };
  return (
    <BackgroundSpeaking>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f8f9fa",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "90%",
            maxWidth: 1000,
            background: "#fff",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1607746882042-944635dfe10e)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              padding: 24,
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Title style={{ color: "white", fontSize: 32 }}>
              Chào mừng đến với FlashcardApp
            </Title>
            <p style={{ fontSize: 16, maxWidth: 300 }}>
              Học nhanh hơn, ghi nhớ tốt hơn – quản lý flashcard của bạn dễ
              dàng.
            </p>
          </div>

          {/* Right - Form */}
          <div style={{ flex: 1, padding: 32 }}>
            <div style={{ marginTop: 50, textAlign: "center" }}>
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => console.log("Login Failed")}
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundSpeaking>
  );
};

export default LoginPage;
