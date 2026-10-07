export const profile = {
  name: "Kiều Trung Thành",
  title: "Sinh viên AIoT - PTIT",
  email: "thanhkt.b25tv068@stu.ptit.edu.vn",
  phone: "0962267916",
};

export const skills = [
  { id: 1, name: "HTML & CSS", level: 85 },
  { id: 2, name: "JavaScript", level: 70 },
  { id: 3, name: "React", level: 50 },
  { id: 4, name: "Git & GitHub", level: 60 },
];

export const projects = [
  {
    id: 1,
    name: "Trang CV cá nhân (HTML/CSS)",
    description: "Trang CV tĩnh làm ở Buổi 2-3, có bố cục nhiều cột và responsive.",
    tech: ["HTML", "CSS"],
  },
  {
    id: 3,
    name: "Virtual Calculator",
    description: "Máy tính chia component Display, Button, dùng useState lưu biểu thức.",
    tech: ["React", "useState"],
  },
];

function Header({ name, title, email, phone }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{title}</p>
      <p>
        Email: {email} | Điện thoại: {phone}
      </p>
    </header>
  );
}

export default Header;

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default Section;

function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li key={skill.id}>
          <span className="skill-name">{skill.name}</span>
          <div className="bar">
            <div className="bar-fill" style={{ width: skill.level + "%" }}></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SkillList;
