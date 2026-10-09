export type PartnerLogo = {
  id: string;
  name: string;
  filename: string;
  src: string;
  /** Width of optical placeholder slot when image is not present */
  slotWidth: number;
};

/**
 * Official Partner Logos Configuration
 * References assets under /images/partners/
 */
export const officialPartners: PartnerLogo[] = [
  {
    id: "indusind-bank",
    name: "IndusInd Bank",
    filename: "indusind-bank.svg",
    src: "/images/partners/indusind-bank.svg",
    slotWidth: 140,
  },
  {
    id: "axis-bank",
    name: "Axis Bank",
    filename: "axis-bank.svg",
    src: "/images/partners/axis-bank.svg",
    slotWidth: 120,
  },
  {
    id: "bank-of-baroda",
    name: "Bank of Baroda",
    filename: "bank-of-baroda.svg",
    src: "/images/partners/bank-of-baroda.svg",
    slotWidth: 145,
  },
  {
    id: "idfc-first-bank",
    name: "IDFC FIRST Bank",
    filename: "idfc-first-bank.svg",
    src: "/images/partners/idfc-first-bank.svg",
    slotWidth: 135,
  },
  {
    id: "trexo",
    name: "TREXO",
    filename: "trexo.svg",
    src: "/images/partners/trexo.svg",
    slotWidth: 105,
  },
  {
    id: "razorpay",
    name: "Razorpay",
    filename: "razorpay.svg",
    src: "/images/partners/razorpay.svg",
    slotWidth: 130,
  },
  {
    id: "cashfree",
    name: "Cashfree Payments",
    filename: "cashfree.svg",
    src: "/images/partners/cashfree.svg",
    slotWidth: 135,
  },
  {
    id: "phonepe",
    name: "PhonePe",
    filename: "phonepe.svg",
    src: "/images/partners/phonepe.svg",
    slotWidth: 115,
  },
  {
    id: "payu",
    name: "PayU",
    filename: "payu.svg",
    src: "/images/partners/payu.svg",
    slotWidth: 95,
  },
  {
    id: "pine-labs",
    name: "Pine Labs",
    filename: "pine-labs.svg",
    src: "/images/partners/pine-labs.svg",
    slotWidth: 125,
  },
];

export const partnerLogos = officialPartners;
