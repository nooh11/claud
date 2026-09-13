import "./index.css";
import { Composition } from "remotion";
import { RealEstateAd } from "./RealEstateAd/RealEstateAd";
import { listingSchema } from "./RealEstateAd/schema";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="RealEstateAd"
        component={RealEstateAd}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
        schema={listingSchema}
        defaultProps={{
          propertyType: "فيلا",
          district: "حي الياسمين",
          city: "الرياض",
          price: "1,850,000",
          currency: "ريال",
          area: "400 م²",
          rooms: "5",
          bathrooms: "6",
          parking: "2",
          readinessTag: "إفراغ فوري",
          features: [
            "تشطيب سوبر لوكس بالكامل",
            "صك إلكتروني · جاهزة للإفراغ",
            "قريبة من المدارس والخدمات",
            "شقة ملحق مستقلة بمدخل خاص",
          ],
          phonePrimary: "0534977299",
          phoneSecondary: "0541882299",
          brandName: "إحياء",
          adLicence: "الرقم الإعلاني: [أدخل الرقم]",
          photo: "property-placeholder.svg",
        }}
      />
    </>
  );
};
