const AboutUsCard = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "1260px",
        height: "84px",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "'Kiwi Maru'",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          borderRadius: "50px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.25)",
          width: "1260px",
          height: "84px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "258px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "61px",
        }}
      >
        <a href="#">About Us</a>
      </div>
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "362px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "112px",
          height: "61px",
        }}
      >
        <a href="#">Our Services</a>
      </div>
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "479px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "61px",
        }}
      >
        <a href="#">Products</a>
      </div>
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "574px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "61px",
        }}
      >
        <a href="#">Pet Care</a>
      </div>
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "661px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "61px",
        }}
      >
        <a href="#">Contact</a>
      </div>
      <div
        style={{
          position: "absolute",
          top: "22px",
          left: "885px",
          borderRadius: "50px",
          backgroundColor: "#ffbd89",
          width: "132px",
          height: "47px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "22px",
          right: "94px",
          borderRadius: "50px",
          backgroundColor: "#f19a56",
          width: "132px",
          height: "47px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "1051px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "61px",
        }}
      >
        <a href="#">Book Now</a>
      </div>
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "899px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "61px",
        }}
      >
        <a href="#">Log In</a>
      </div>
      <img
        style={{
          position: "absolute",
          top: "16px",
          left: "63px",
          width: "117px",
          height: "52px",
          objectFit: "cover",
        }}
        alt="Paws"
        src="/sde-project/src/app/public/paws.svg"
      />
    </div>
  );
};

export default AboutUsCard;