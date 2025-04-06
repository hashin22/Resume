import React from 'react';
import './App.css'; // ✨ 스타일 연결
import profile from './profile.jpg'; 
import linux from './linux.png';
import oracle from './oracle.jpg';
import js from './javascipt.png';

function App() {
  return (
    <div className="resume-container">
      {/* ✅ 사이드 메뉴 */}
      <nav className="side-nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#license">License</a>
      </nav>

      <header className="header">
        <img src={profile} alt="증명사진" className="profile-photo" />
        <div>
          <h1>서비스 운영자에 지원한 👨‍💻 신하란입니다.</h1>
        </div>
      </header>

      {/* 📍 ABOUT ME */}
      <section id="about" className="section">
        <h2>👤 About Me</h2>
        <p>
          안녕하세요. 새로운 기술들을 배우는 것을 즐기며, 피드백과 커뮤니케이션을 통해 실력 있는 시스템 운영자가 되고 싶습니다. DB 엔지니어로 근무했을 당시, 현업과 소통하며 시스템 안정성과 성능을 고민해온 경험을 바탕으로, 사용자 중심의 운영과 기술을 연결하는 역할을 잘 수행하도록 노력할 것입니다!
        </p>
        <h2>📞 연락처</h2>
        <ul>
          <li>이메일: hashin22@naver.com</li>
          <li>전화번호: 010-1234-3456</li>
          <li>GitHub: <a href="https://hashin22.github.io/Resume" target="_blank" rel="noreferrer">github.com/hashin22</a></li>
        </ul>
      </section>

      {/* 📍 EDUCATION */}
      <section className="section">
        <h2>🎓 학력</h2>
        <p>덕문여자고등학교 이공계 졸업 (2017.02 ~ 2020.02)</p>
        <p>동의과학대학교 컴퓨터정보과 졸업 (2020.02 ~ 2022.03)</p>
      </section>

      {/* 📍 EXPERIENCE */}
      <section className="section">
        <h2>🏢 경력요약</h2>
        <ul>
          <li>GTPlus – Oracle DB 엔지니어 (2023.10.23 ~ 현재 재직, 약 1년 7개월)</li>
        </ul>
      </section>

      {/* 📍 SKILLS */}
      <section id="skills" className="section">
        <h2>🧰 Skills</h2>

        <div className="skill-group">
          <h3>🖥 Tool & Server</h3>
          <div className="skill-item">
            <img src={linux} alt="Linux" />
            <p>리눅스 및 AIX 기반 OS환경에서 Oracle DB 운영 경험 및 유지보수, 백업 및 복구 경험</p>
          </div>
        </div>

        <div className="skill-group">
          <h3>🎨 Front-End</h3>
          <div className="skill-item">
            <img src={js} alt="JavaScript" />
            <p>HTML/CSS/JavaScript로 간단한 UI 구현 가능</p>
          </div>
        </div>

        <div className="skill-group">
          <h3>🗄 Database</h3>
          <div className="skill-item">
            <img src={oracle} alt="Oracle" />
            <p>Oracle SQL, AWR 리포트 분석, RAC 환경 운영 경험</p>
          </div>
        </div>
      </section>

      {/* 📍 PROJECTS */}
      <section id="projects" className="section">
        <h2>💼 Projects</h2>

        <div className="project-item">
          <h3>⚙️ 건강보험공단 디지털 환경 확대 구축 (2024.01 ~ 2024. 04)</h3>
          <ul>
            <li>Oracle RAC 기반 시스템 구축 (8EA)</li>
            <li>AWR 기반 성능 분석 및 튜닝</li>
            <li>Sherpa 솔루션 도입 및 실시간 DB 모니터링 체계 구축</li>
          </ul>
        </div>

        <div className="project-item">
          <h3>⚙️ 한국 언론 진흥 재단 차세대 HR 시스템 구축 (2024.06 ~ 2024. 07)</h3>
          <ul>
            <li>Oracle 11g 설치 및 운영 DB와 구조 통일</li>
            <li>1차 개발 DB → 운영 DB 데이터 이관</li>
            <li>정합성 검증 및 안정적 운영환경 확보</li>
          </ul>
        </div>

        <div className="project-item">
          <h3>⚙️ 나라장터 DB 성능 테스트(2024.07 ~ 2024. 09) </h3>
          <ul>
            <li>TPC-DS 기준 부하 테스트 수행</li>
            <li>AWR 리포트 분석을 통해 병목 구간 도출</li>
            <li>성능 개선을 위한 제안서 작성</li>
          </ul>
        </div>
      </section>

      {/* 📍 LICENSE */}
      <section id="license" className="section">
        <h2>📜 Licenses & Certifications</h2>

        <div className="license-item">
          <p>📌 정보처리기사 (Engineer Information Processing)</p>
        </div>
        <div className="license-item">
          <p>📌 리눅스 마스터 2급 (Linux Master Level 2)</p>
        </div>
        <div className="license-item">
          <p>📌 컴퓨터활용능력 2급 (Computer Utilization Level 2)</p>
        </div>
        <div className="license-item">
          <p>📌 운전면허 2종 보통 (Driver’s License – Type 2, Manual)</p>
        </div>
      </section>
    </div>
  );
}

export default App;