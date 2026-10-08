export type PartnerLogo = {
  id: string;
  name: string;
  /** Replace with a real asset path (e.g. "/logos/acme.svg") when logos are provided. */
  src?: string;
  /** Width of the placeholder slot, to mimic varied wordmark widths. */
  slotWidth: number;
};

/**
 * PLACEHOLDER SLOTS ONLY. These are not real partners, customers or institutions.
 * Replace entries with real logos once confirmed.
 */
export const partnerLogos: PartnerLogo[] = [
  { id: "slot-1", name: "Logo placeholder 1", slotWidth: 120 },
  { id: "slot-2", name: "Logo placeholder 2", slotWidth: 96 },
  { id: "slot-3", name: "Logo placeholder 3", slotWidth: 140 },
  { id: "slot-4", name: "Logo placeholder 4", slotWidth: 108 },
  { id: "slot-5", name: "Logo placeholder 5", slotWidth: 128 },
  { id: "slot-6", name: "Logo placeholder 6", slotWidth: 100 },
  { id: "slot-7", name: "Logo placeholder 7", slotWidth: 136 },
  { id: "slot-8", name: "Logo placeholder 8", slotWidth: 112 },
];
