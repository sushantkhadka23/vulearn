import Lottie from "lottie-react";
import underConstruction from "../assets/under_construction.json";

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
        केही समयको लागि यो वेबपेज निर्माण भइरहेको छ।
        </h1>
        <p className="text-lg text-gray-600">
    
        त्यसैले केही समय पर्खनुहोस्।
        </p>
        <h2 className="text-2xl">
        धन्यवाद 🙏
        </h2>
      </div>
      <Lottie
        animationData={underConstruction}
        loop={true}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default UnderConstructionPage;
