// import { useRef } from "react";
import logoDark from "../../assets/images/logo 4.svg";
import styles from "./Footer.module.scss";
// import { useIntersection } from "../../hooks";
// import classNames from "classnames";
import { Routes } from "../../constants";
import { Link } from "react-router-dom";

export const Footer = () => {
  // const footerRef = useRef();
  // const isFooterInView = useIntersection(footerRef);

  return (
    <footer className={styles.footer} /*ref={footerRef}*/>
      <div className={styles["footer-logo"]}>
        <Link to={Routes.Home}>
          <img src={logoDark} alt="logo dark" />
        </Link>
      </div>
      <div className={styles["footer-content"]}>
        <nav className={styles.nav}>
          <ul>
            <li>회사소개</li>
            <li>이용약관</li>
            <li className={styles.selected}>개인정보처리방침</li>
            <li>도움말</li>
            <li>문의하기</li>
          </ul>
        </nav>
        <div className={styles.desc}>
          <p>대표전화 : +82 02 598-3373</p>
          <p>
            서울 서초구 반포대로21길 39 (서초동, 산해빌딩) 402호 (대표자:박형준)
            사업자등록번호 : 132-87-02761
          </p>
          <p>전화번호 : +82 010-4787-3373 ㅣ 이메일 : jun@hoca.dev</p>
          <p>Copyright 2024. HOCA Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
