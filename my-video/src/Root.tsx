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
        durationInFrames={1680}
        fps={60}
        width={1080}
        height={1920}
        schema={projectSchema}
        defaultProps={{
          projectName: "سهم الإنجاز",
          statusTag: "بدأ البيع · جاهز للتسليم",
          district: "حي الشعلة",
          city: "الدمام",
          latinName: "Sahm Al-Injaz",
          latinTag: "Ready To Move In",
          hookLineOne: "بيتــك جاهــز",
          hookLineTwo: "تســكنه من أول يوم",
          tourLineOne: "تشطيــب فاخــر",
          tourLineTwo: "لا يحتــاج منــك ريــالًا",
          ctaLine: "احجــز وحدتــك الآن",

          photoStreet: "exterior-street.jpg",
          photoFront: "exterior-front.jpg",
          photoEntrance: "exterior-entrance.jpg",
          tourShots: [
            "interior-living.jpg",
            "interior-room.jpg",
            "interior-doors.jpg",
            "interior-lobby.jpg",
          ],

          features: [
            "تشطيب فاخر جاهز",
            "خزان مياه مستقل",
            "مصعد لكل دور",
            "مواقف مظللة",
            "أقفال ذكية وإنتركوم",
            "عزل حراري ومائي",
          ],
          places: [
            { name: "مسجد الحي", minutes: 3 },
            { name: "ثانوية أبو سفيان", minutes: 4 },
            { name: "حديقة ليال", minutes: 4 },
            { name: "إثراء", minutes: 5 },
            { name: "مستشفى العيون التخصصي", minutes: 5 },
            { name: "بوابة أرامكو", minutes: 7 },
          ],
          warranties: [
            { years: 10, label: "تأمين على العيوب الخفية" },
            { years: 15, label: "مواسير الصرف والتغذية" },
            { years: 15, label: "خزانات المياه" },
            { years: 10, label: "المصعد" },
            { years: 10, label: "العزل الحراري والمائي" },
          ],

          phonePrimary: "0541882299",
          phoneSecondary: "0534977299",
          website: "EHYA.SA",
          adLicence: "رقم الإعلان 7201112278",
        }}
      />
    </>
  );
};
