import { z } from "zod";

export const projectSchema = z.object({
  projectName: z.string(),
  statusTag: z.string(),
  headline: z.string(),
  subline: z.string(),
  district: z.string(),
  city: z.string(),
  photo: z.string(),
  latinName: z.string(),
  latinTag: z.string(),
  hookLineOne: z.string(),
  hookLineTwo: z.string(),
  priceThousands: z.number(),
  chips: z.array(z.string()).length(4),
  specRows: z
    .array(z.object({ labelAr: z.string(), labelEn: z.string(), value: z.string() }))
    .length(5),
  galleryOne: z.string(),
  galleryTwo: z.string(),
  galleryThree: z.string(),
  priceFrom: z.number(),
  currencyGlyph: z.string(),
  areaMax: z.number(),
  modelsCount: z.number(),
  roomsCount: z.number(),
  places: z
    .array(z.object({ name: z.string(), minutes: z.number() }))
    .length(4),
  models: z
    .array(
      z.object({
        letter: z.string(),
        name: z.string(),
        area: z.number(),
        price: z.number(),
        rooms: z.string(),
        baths: z.string(),
        note: z.string(),
      }),
    )
    .length(3),
  warranties: z
    .array(z.object({ years: z.number(), label: z.string() }))
    .length(3),
  ctaLine: z.string(),
  phonePrimary: z.string(),
  phoneSecondary: z.string(),
  website: z.string(),
  adLicence: z.string(),
  logo: z.string(),
});

export type Project = z.infer<typeof projectSchema>;
