import Header from "./components/Header";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import { profile, skills, projects } from "./data";
import "./App.css";

export default function App() {
  return (
    <div className="cv">
      <Header
        name={profile.name}
        title={profile.title}
        email={profile.email}
        phone={profile.phone}
      />
      <main>
        <Section title="Giới thiệu">
          <p>
            Sinh viên năm cuối ngành AIoT, yêu thích lập trình web.
            Đang học React để xây dựng các ứng dụng đơn trang (SPA).
          </p>
        </Section>

        <Section title="Kỹ năng">
          <SkillList skills={skills} />
        </Section>

        <Section title="Dự án">
          <ProjectList items={projects} />
        </Section>

        <Section title="Học vấn">
          <p>
            <strong>Học viện Công nghệ Bưu chính Viễn thông (PTIT)</strong>
            <br />
            Ngành AIoT, 2025 - nay
          </p>
        </Section>
      </main>
      <Footer name={profile.name} />
    </div>
  );
}
