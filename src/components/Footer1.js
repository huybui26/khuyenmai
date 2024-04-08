import styles from "./Footer1.module.css";

const Footer1 = () => {
  return (
    <section className={styles.footer}>
      <footer className={styles.bottomFooter} />
      <div className={styles.copyrightSymbol}>
        <div className={styles.corporateIdentity}>
          <div className={styles.supportLink}>
            <h1 className={styles.logo}>LOGO</h1>
          </div>
          <div className={styles.laptopPC}>
            <div className={styles.assistanceHeader}>
              <div className={styles.shop}>
                <b className={styles.shop1}>Shop</b>
                <div className={styles.buyNowCallToAction}>
                  <div className={styles.laptopPcPhContainer}>
                    <p className={styles.laptop}>Laptop</p>
                    <p className={styles.pc}>PC</p>
                    <p className={styles.phKin}>Phụ kiện</p>
                    <p className={styles.linhLin}>Linh liện</p>
                    <p className={styles.snPhmC}>Sản phẩm cũ</p>
                  </div>
                </div>
              </div>
              <div className={styles.hTrKhchHngWrapper}>
                <div className={styles.hTrKhchHng}>
                  <b className={styles.hTrKhch}>Hỗ trợ khách hàng</b>
                  <div className={styles.hngDnMuaContainer}>
                    <p className={styles.hngDnMua}>Hướng dẫn mua hàng</p>
                    <p className={styles.ccCuHi}>Các câu hỏi thường gặp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logoArea}>
            <div className={styles.mainContent}>
              <div className={styles.vCngTy}>
                <b className={styles.vCngTy1}>Về công ty</b>
                <div className={styles.giiThiuCngContainer}>
                  <p className={styles.giiThiuCng}>Giới thiệu công ty</p>
                  <p className={styles.quyChHot}>Quy chế hoạt động</p>
                  <p className={styles.chnhSchCng}>Chính sách công ty</p>
                  <p className={styles.tuynDng}>Tuyển dụng</p>
                </div>
              </div>
              <div className={styles.bottomFooter1}>
                <div className={styles.linHViChngTi}>
                  <div className={styles.productListing}>
                    <div className={styles.linHVi}>Liên hệ với chúng tôi:</div>
                  </div>
                  <div className={styles.searchBar}>
                    <img
                      className={styles.icbaselineFacebookIcon}
                      loading="lazy"
                      alt=""
                      src="/icbaselinefacebook.svg"
                    />
                    <div className={styles.homePage}>
                      <img
                        className={styles.simpleIconszalo}
                        loading="lazy"
                        alt=""
                        src="/simpleiconszalo.svg"
                      />
                    </div>
                    <div className={styles.newsAndSupport}>
                      <img
                        className={styles.mdiyoutubeIcon}
                        loading="lazy"
                        alt=""
                        src="/mdiyoutube.svg"
                      />
                    </div>
                    <div className={styles.contentContainer}>
                      <img
                        className={styles.mdiinstagramIcon}
                        loading="lazy"
                        alt=""
                        src="/mdiinstagram.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter2}>
        <div className={styles.copyrightSymbol1} />
        <img
          className={styles.icoutlineCopyrightIcon}
          loading="lazy"
          alt=""
          src="/icoutlinecopyright.svg"
        />
        <div className={styles.contactInfo}>
          <div className={styles.cngTy2024}>Công ty 2024</div>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
