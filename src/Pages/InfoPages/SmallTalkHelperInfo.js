import React from "react";
import "../../styles/home.css";

const SmallTalkHelperInfo = () => {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="products">
            <div className="products_title">
              <h3>스몰 토크 헬퍼(small talk helper) 개인정보 처리방침</h3>
            </div>
            <div className="products_desc">
              <div>
                <p style={{ lineHeight: "2rem" }}>
                  wonmonae는 <br />
                  스몰 토크 헬퍼
                  <br />
                  <a href="https://play.google.com/store/apps/details?id=com.wonmonae.small_talk_helper">
                    어플리케이션
                  </a>
                  으로 사용자들의 개인정보를 수집하여 저장하지 않습니다.
                  <br />
                  그래서 개인정보 처리에대한 방침이 없어요!
                  <br />
                  IOS의 경우 광고제거 효과를 불러올 때 사용되는 비밀번호는
                  암호화되며 HTTPS로 보안을 보장받습니다!
                  <br />
                  앱스토어에 앱 등록 하려고 하니까 개인정보 처리방침을 알리는
                  URL이 필요하다고 해서 만들었습니다! <br />
                  감사합니다!
                </p>
                <p>wonmonae contact : wonmonae@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallTalkHelperInfo;
