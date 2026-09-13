import { z } from "zod";

export const projectSchema = z.object({
  projectName: z.string(),
  statusTag: z.string(),
  district: z.string(),
  city: z.string(),
  latinName: z.string(),
  latinTag: z.string(),
  hookLineOne: z.string(),
  hookLineTwo: z.string(),
  tourLineOne: z.string(),
  tourLineTwo: z.string(),
  ctaLine: z.string(),

  photoStreet: z.string(),
  photoFront: z.string(),
  photoEntrance: z.string(),
  tourShots: z.array(z.string()).length(4),

  features: z.array(z.string()).length(6),
  places: z.array(z.object({ name: z.string(), minutes: z.number() })).length(6),
  warranties: z.array(z.object({ years: z.number(), label: z.string() })).length(5),

  phonePrimary: z.string(),
  phoneSecondary: z.string(),
  website: z.string(),
  adLicence: z.string(),
});

export type Project = z.infer<typeof projectSchema>;
