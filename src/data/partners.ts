export type PartnerCategory = "banking" | "payments";

export type Partner = {
  id: string;
  name: string;
  category: PartnerCategory;
  /**
   * Approved local SVG/PNG path under /public.
   * Leave undefined until an official asset is provided.
   */
  src?: string;
  /** Approximate wordmark width used only for placeholder spacing. */
  slotWidth: number;
};

/**
 * Partner names for the homepage marquee.
 * A listing here is not a verified commercial relationship.
 * Do not add logo `src` values until approved local assets are supplied.
 */
export const partners: Partner[] = [
  { id: "indusind-bank", name: "IndusInd Bank", category: "banking", slotWidth: 140 },
  { id: "axis-bank", name: "Axis Bank", category: "banking", slotWidth: 110 },
  { id: "bank-of-baroda", name: "Bank of Baroda", category: "banking", slotWidth: 148 },
  { id: "idfc-first-bank", name: "IDFC FIRST Bank", category: "banking", slotWidth: 156 },
  { id: "surat-peoples-coop-bank", name: "The Surat People's Co-operative Bank", category: "banking", slotWidth: 240 },
  { id: "razorpay", name: "Razorpay", category: "payments", slotWidth: 118 },
  { id: "cashfree", name: "Cashfree Payments", category: "payments", slotWidth: 158 },
  { id: "phonepe", name: "PhonePe", category: "payments", slotWidth: 108 },
  { id: "payu", name: "PayU", category: "payments", slotWidth: 84 },
  { id: "pine-labs", name: "Pine Labs", category: "payments", slotWidth: 112 },
];

export const partnersMissingAssets = partners.filter((partner) => !partner.src);
