import "./index.css";
import { Composition } from "remotion";
import { SahmAlInjaz } from "./SahmAlInjaz/SahmAlInjaz";
import { projectSchema } from "./SahmAlInjaz/schema";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SahmAlInjaz"
        component={SahmAlInjaz}
        durationInFrames={1800}
        fps={60}
        width={1080}
        height={1920}
        schema={projectSchema}
        defaultProps={{
          projectName: "سهم الإنجاز",
          statusTag: "جاهز للتسليم",
          headline: "شقق تمليك جاهزة للسكن",
          subline: "بدأ البيع",
          district: "حي الشعلة",
          city: "الدمام",
          photo: "property-placeholder.svg",
          places: [
            { name: "مسجد الحي", minutes: 3 },
            { name: "إثراء", minutes: 5 },
            { name: "بوابة أرامكو", minutes: 7 },
            { name: "جامعة الإمام عبدالرحمن بن فيصل", minutes: 15 },
          ],
          models: [
            {
              letter: "B",
              name: "الدور الأول والثاني",
              area: 201,
              price: 630000,
              rooms: "3 غرف نوم",
              baths: "4 دورات مياه",
              note: "بلكونة",
            },
            {
              letter: "A",
              name: "الدور الأرضي",
              area: 193,
              price: 640000,
              rooms: "3 غرف نوم",
              baths: "3 دورات مياه",
              note: "مدخل مستقل",
            },
            {
              letter: "C",
              name: "الملحق العلوي",
              area: 201,
              price: 730000,
              rooms: "3 غرف نوم",
              baths: "3 دورات مياه",
              note: "3 أسطح خاصة",
            },
          ],
          warranties: [
            { years: 10, label: "تأمين على العيوب الخفية" },
            { years: 15, label: "مواسير الصرف والتغذية" },
            { years: 10, label: "المصعد والعزل" },
          ],
          ctaLine: "احجز بيتك الآن",
          phonePrimary: "0541882299",
          phoneSecondary: "0534977299",
          website: "EHYA.SA",
          unifiedNumber: "920033936",
          adLicence: "رقم الإعلان: 7201112278",
          logo: "",
        }}
      />
    </>
  );
};
