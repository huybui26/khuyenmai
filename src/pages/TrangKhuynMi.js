import FrameComponent from "../components/FrameComponent";
import GroupComponent1 from "../components/GroupComponent1";
import Footer1 from "../components/Footer1";
import styles from "./TrangKhuynMi.module.css";

const TrangKhuynMi = () => {
  return (
    <div className={styles.trangKhuynMi}>
      <header className={styles.header}>
        <div className={styles.headerChild} />
        <FrameComponent />
        <GroupComponent1 />
      </header>
      <section className={styles.mainImage}>
        <div className={styles.logoFooterParent}>
          <div className={styles.logoFooter}>
            <div className={styles.trangChContainer}>
              <span>{`Trang chủ > `}</span>
              <b>Các chương trình khuyến mại</b>
            </div>
          </div>
          <div className={styles.laptopAccessories}>
            <div className={styles.oldProductsTab}>
              <img
                className={styles.image13Icon}
                loading="lazy"
                alt=""
                src="/image-13@2x.png"
              />
              <img
                className={styles.image14Icon}
                loading="lazy"
                alt=""
                src="/image-14@2x.png"
              />
            </div>
            <div className={styles.image15Parent}>
              <img
                className={styles.image15Icon}
                loading="lazy"
                alt=""
                src="/image-15@2x.png"
              />
              <img
                className={styles.image16Icon}
                loading="lazy"
                alt=""
                src="/image-16@2x.png"
              />
              <img
                className={styles.image17Icon}
                loading="lazy"
                alt=""
                src="/image-17@2x.png"
              />
            </div>
          </div>
        </div>
        <img
          className={styles.image18Icon}
          loading="lazy"
          alt=""
          src="/image-18@2x.png"
        />
        <img
          className={styles.image19Icon}
          loading="lazy"
          alt=""
          src="/image-19@2x.png"
        />
        <img
          className={styles.image20Icon}
          loading="lazy"
          alt=""
          src="/image-20@2x.png"
        />
      </section>
      <Footer1 />
    </div>
  );
};

export default TrangKhuynMi;
