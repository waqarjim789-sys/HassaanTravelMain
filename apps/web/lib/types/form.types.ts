// ─── Types ───────────────────────────────────────────────────────────────────

export type FormType =
  | "contact"
  | "feedback"
  | "quote"
  | "support"
  | "register"
  | "ticket"
  | "travelQuote"
  | "booking"
  | "flightSearch";

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface FeedbackData {
  name: string;
  rating: number;
  comments: string;
}

export interface QuoteData {
  company: string;
  name: string;
  email: string;
  service: string;
  details: string;
}

export interface SupportData {
  name: string;
  email: string;
  issue: string;
  description: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
}

export interface TicketData {
  tripType: string;
  from: string;
  to: string;
  nextCity?: string;
  departure: string;
  return?: string;
  travelClass: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  nationality: string;
  dob: string;
  passport: string;
  issueDate: string;
  expiryDate: string;
  email: string;
  phone: string;
}

export interface TravelQuoteData {
  country: string;
  airport: string;
  timeSpan: string;
  travelType: string;
  duration: string;
  adults: number;
  children: number;
  preferences: string;
  specialRequests?: string;
}

export interface BookingData {
  name: string;
  email: string;
  telephone: string;
  employ?: string;
  travelDate: string;
  additionalWishes?: string;
}

export interface EmailTemplate {
  subject: string;
  text: string;
  html: string;
}

export interface FlightSearchData {
  from: string;
  to: string;
  depart: string;
  returnDate: string;
  travellers: string;
  departRaw?: string;
  returnDateRaw?: string;
  contactNumber: string;
}

export type FormDataMap = {
  contact: ContactData;
  feedback: FeedbackData;
  quote: QuoteData;
  support: SupportData;
  register: RegisterData;
  ticket: TicketData;
  travelQuote: TravelQuoteData;
  booking: BookingData;
  flightSearch: FlightSearchData;
};