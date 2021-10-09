import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Products = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="products">
            <div className="products_title">
              <h3>스몰 토크 헬퍼(small talk helper)</h3>
            </div>

            <div className="products_desc">
              <div className="products_appLogo">
                <Link to="/info/small-talk-helper">
                  <img src="/images/smallTalkHelperIcon.png"></img>
                </Link>
              </div>
              <div>
                <p>대화 주제 생성기입니다.</p>
                <p>
                  어색한 사람과 억지로 대화를 이어나가야 할 때 쓰면 좋습니다.
                  권태기 온 절친들과 모여 할 이야기 없을 때 써도 좋습니다.
                </p>
              </div>
            </div>
            <div className="products_links">
              <a href="https://play.google.com/store/apps/details?id=com.wonmonae.small_talk_helper">
                <div className="products_storeLogo">
                  <img src="/images/playstoreLogo2.png"></img>
                </div>
              </a>
              <a href="https://apps.apple.com/us/app/small-talk-helper/id1588030019">
                <div className="products_storeLogo">
                  <img src="/images/apple.png"></img>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="products">
            <h1>끝(end)</h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
