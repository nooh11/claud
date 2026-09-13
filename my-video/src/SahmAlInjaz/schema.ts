import { z } from "zod";

export const projectSchema = z.object({
  projectName: z.string(),
  statusTag: z.string(),
  headline: z.string(),
  subline: z.string(),
  district: z.string(),
  city: z.string(),
  photo: z.string(),
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
  unifiedNumber: z.string(),
  adLicence: z.string(),
  logo: z.string(),
});

export type Project = z.infer<typeof projectSchema>;
