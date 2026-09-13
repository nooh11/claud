import { z } from "zod";

export const listingSchema = z.object({
  propertyType: z.string(),
  district: z.string(),
  city: z.string(),
  price: z.string(),
  currency: z.string(),
  area: z.string(),
  rooms: z.string(),
  bathrooms: z.string(),
  parking: z.string(),
  readinessTag: z.string(),
  features: z.array(z.string()).length(4),
  phonePrimary: z.string(),
  phoneSecondary: z.string(),
  brandName: z.string(),
  adLicence: z.string(),
  photo: z.string(),
});

export type Listing = z.infer<typeof listingSchema>;
