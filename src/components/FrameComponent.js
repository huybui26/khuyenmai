import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.discountTagWrapper}>
      <div className={styles.discountTag}>
        <h1 className={styles.logo}>LOGO</h1>
        <div className={styles.thanhTmKimWrapper}>
          <div className={styles.thanhTmKim}>
            <div className={styles.homePage} />
            <input
              className={styles.laptopTaiNghe}
              placeholder="Laptop, tai nghe..."
              type="text"
            />
            <div className={styles.shoppingCart}>
              <img
                className={styles.claritysearchLineIcon}
                alt=""
                src="/claritysearchline.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footerContainerInner}>
            <div className={styles.cartParent}>
              <img
                className={styles.cartIcon}
                loading="lazy"
                alt=""
                src="/cart.svg"
              />
              <div className={styles.productCard}>
                <div className={styles.giHng}>Giỏ hàng</div>
              </div>
            </div>
          </div>
          <div className={styles.phcircleThinParent}>
            <img
              className={styles.phcircleThinIcon}
              loading="lazy"
              alt=""
              src="/phcirclethin.svg"
            />
            <div className={styles.tiKhonWrapper}>
              <div className={styles.tiKhon}>Tài khoản</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
