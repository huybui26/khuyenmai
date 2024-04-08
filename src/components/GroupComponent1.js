import styles from "./GroupComponent1.module.css";

const GroupComponent1 = () => {
  return (
    <div className={styles.newsAndSupportParent}>
      <div className={styles.newsAndSupport} />
      <div className={styles.newsAndSupport1} />
      <div className={styles.newsAndSupport2}>
        <h2 className={styles.snPhm}>Sản phẩm</h2>
      </div>
      <div className={styles.newsAndSupport3}>
        <h2 className={styles.khuynMi}>Khuyến mãi</h2>
      </div>
      <h2 className={styles.tinTc}>Tin tức</h2>
      <h2 className={styles.hTr}>Hỗ trợ</h2>
      <img
        className={styles.bichevronDownIcon}
        loading="lazy"
        alt=""
        src="/bichevrondown.svg"
      />
    </div>
  );
};

export default GroupComponent1;
