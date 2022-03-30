
const ImageCtaSpecial = () => {
  return (
    <div>
      <div
        className="banner-cta space-mb--r130 bg-img d-block d-lg-none"
        style={{
          height: "650px", backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/yonatan-images/special_mb_1.png"
            }")`
        }}
      >
      </div>
      <div
        className="banner-cta space-mb--r130 bg-img d-none d-lg-block"
        style={{
          height: "650px", backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/yonatan-images/special_1.png"
            }")`
        }}
      >
      </div>
    </div>
  );
};

export default ImageCtaSpecial;
