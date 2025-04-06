// src/App.js
import React from 'react';
import profile from './profile.jpg'; // 바로 이 줄!

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>배움의 즐거움을 아는 서비스 운영자에 지원한 👨‍💻신하란입니다. </h1>
      
      <section>
        <h2>📞 연락처</h2>
        <ul>
          <li>이메일: hong@example.com</li>
          <li>전화번호: 010-1234-5678</li>
          <li>GitHub: <a href="https://github.com/yourID" target="_blank" rel="noreferrer">github.com/yourID</a></li>
        </ul>
      </section>

      <section>
        <h2>🎓 학력</h2>
        <p>서울대학교 컴퓨터공학과 졸업 (2018~2022)</p>
      </section>
      
      <h2>🏢 경력요약</h2>
      <ul>
        <li>GTPlus – DB 엔지니어 (2023.10.23 ~ 현재재직 1년 7개월 근무)</li>
        
      </ul>

      <h2>💼 주요 프로젝트</h2>
      <h3>🔧건강보험공단 디지털 환경 확대 구축 프로젝트</h3>
      <p>Oracle RAC(8EA) 기반 환경을 구축, AWR 리포트를 활용한 성능 분석, Sherpa DB 모니터링 솔루션을 활용하여 실시간 성능 모니터링 및 장애 예방 체계를 구축. 이를 통해 DBMS의 성능 최적화, Oracle DB 운영 모니터링</p>

      <h3>🔧 한국 언론 진흥 재단 차세대 HR 시스템 구축</h3>
      <p>차세대 HR 시스템 구축을 위해 Oracle Standard 11.2.0.4 PSU 11.2.0.4.7 버전의 DB를 기존 운영 DB와 동일하게 설치하고, 개발 DB에서 차세대 운영 DB로의 1차 데이터 이관을 수행하였습니다. 이관 과정에서 데이터 정합성을 유지하고, 안정적인 운영 환경을 확보하기 위해 사전 검증 및 테스트를 진행하였으며, 시스템 안정성을 극대화하는 데 기여하였습니다.
</p>
      <h3>🔧 차세대 나라장터 DB 서버 성능테스트</h3>
      <p>조달청 차세대 나라장터의 DB 서버 성능 평가를 위해 TPC-DS 기준의 부하 테스트를 수행.
테스트 결과 각 쿼리가 실행되는 총 시간을 측정하여, DB 성능을 평가하는 주요 기준으로 활용하였습니다. 이를 통해 DB의 처리 속도를 분석하였습니다. 추가적으로 AWR리포트를 활용하여 동시 사용자 세션 증가에 따른 CPU 및 메모리 사용량 변화, 응답 시간 차이 등의 데이터를 분석하여 성능 개선 참고로 활용.
</p>


      <h2>🧰 기술 스택</h2>
      <ul>
        <li>Linux, AIX, Oracle</li>
        <li>React, GitHub</li>
        <li>Word, Excel 문서작성 능력 上</li>
      </ul>
    </div>
  );
}

export default App;