import { EmailTemplate, FormDataMap, FormType } from "../types/form.types";

export const templates: {
  [K in FormType]: (data: FormDataMap[K]) => EmailTemplate;
} = {
  flightSearch: (data) => ({
    subject: `🔍 Flight Search: ${data.from} → ${data.to}`,
    text: `From: ${data.from}\nTo: ${data.to}\nDepart: ${data.depart}\nReturn: ${data.returnDate}\nTravellers: ${data.travellers}\nContact Number: ${data.contactNumber}`,
    html: `
    <h2>🔍 Flight Search Request</h2>

    <h3>✈️ Route</h3>
    <p><b>From:</b> ${data.from}</p>
    <p><b>To:</b> ${data.to}</p>

    <h3>📅 Dates</h3>
    <p><b>Depart:</b> ${data.depart}</p>
    <p><b>Return:</b> ${data.returnDate}</p>

    <h3>👥 Travellers</h3>
    <p>${data.travellers}</p>
<p><b>Contact Number:</b> <code>${data.contactNumber}</code></p>
    ${
      data.departRaw
        ? `
    <h3>🗂️ Raw Date Data</h3>
    <p><b>Depart:</b> <code>${data.departRaw}</code></p>
    <p><b>Return:</b> <code>${data.returnDateRaw}</code></p>
    
    `
        : ""
    }
  `,
  }),

  contact: (data) => ({
    subject: `New Contact Message from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    html: `<h2>Contact Form</h2><p><b>Name:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Message:</b> ${data.message}</p>`,
  }),

  feedback: (data) => ({
    subject: `Feedback Received - Rating: ${data.rating}/5`,
    text: `From: ${data.name}\nRating: ${data.rating}/5\nComments: ${data.comments}`,
    html: `<h2>Feedback Form</h2><p><b>From:</b> ${data.name}</p><p><b>Rating:</b> ${data.rating}/5</p><p><b>Comments:</b> ${data.comments}</p>`,
  }),

  quote: (data) => ({
    subject: `Quote Request from ${data.company}`,
    text: `Company: ${data.company}\nContact: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\nDetails: ${data.details}`,
    html: `<h2>Quote Request</h2><p><b>Company:</b> ${data.company}</p><p><b>Contact:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Service:</b> ${data.service}</p><p><b>Details:</b> ${data.details}</p>`,
  }),

  support: (data) => ({
    subject: `Support Ticket: ${data.issue}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nIssue: ${data.issue}\nDescription: ${data.description}`,
    html: `<h2>Support Request</h2><p><b>Name:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Issue:</b> ${data.issue}</p><p><b>Description:</b> ${data.description}</p>`,
  }),

  register: (data) => ({
    subject: `New Registration: ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}`,
    html: `<h2>Registration</h2><p><b>Name:</b> ${data.name}</p><p><b>Email:</b> ${data.email}</p><p><b>Phone:</b> ${data.phone}</p>`,
  }),

  ticket: (data) => ({
    subject: `✈️ Ticket Request: ${data.from} → ${data.to} (${data.tripType})`,
    text: `Trip: ${data.tripType}\nFrom: ${data.from}\nTo: ${data.to}${data.nextCity ? `\nNext City: ${data.nextCity}` : ""}\nDeparture: ${data.departure}\nReturn: ${data.return || "N/A"}\nClass: ${data.travelClass}\nName: ${data.firstName} ${data.middleName ?? ""} ${data.lastName}\nNationality: ${data.nationality}\nDOB: ${data.dob}\nPassport: ${data.passport}\nIssue: ${data.issueDate}\nExpiry: ${data.expiryDate}\nEmail: ${data.email}\nPhone: ${data.phone}`,
    html: `
      <h2>✈️ Air Ticket Request</h2>
      <h3>Flight Details</h3>
      <p><b>Trip Type:</b> ${data.tripType}</p>
      <p><b>From:</b> ${data.from}</p>
      <p><b>To:</b> ${data.to}</p>
      ${data.nextCity ? `<p><b>Next City:</b> ${data.nextCity}</p>` : ""}
      <p><b>Departure:</b> ${data.departure}</p>
      ${data.return ? `<p><b>Return:</b> ${data.return}</p>` : ""}
      <p><b>Class:</b> ${data.travelClass}</p>
      <h3>Passenger</h3>
      <p><b>Name:</b> ${data.firstName} ${data.middleName ?? ""} ${data.lastName}</p>
      <p><b>Nationality:</b> ${data.nationality}</p>
      <p><b>DOB:</b> ${data.dob}</p>
      <h3>Passport</h3>
      <p><b>Number:</b> ${data.passport}</p>
      <p><b>Issue Date:</b> ${data.issueDate}</p>
      <p><b>Expiry Date:</b> ${data.expiryDate}</p>
      <h3>Contact</h3>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
    `,
  }),

  travelQuote: (data) => ({
    subject: `🌍 Travel Quote — ${data.country} (${data.travelType})`,
    text: `Country: ${data.country}\nAirport: ${data.airport}\nTime Span: ${data.timeSpan}\nTravel Type: ${data.travelType}\nDuration: ${data.duration}\nAdults: ${data.adults}\nChildren: ${data.children}\nPreferences: ${data.preferences}\nSpecial Requests: ${data.specialRequests || "None"}`,
    html: `
      <h2>🌍 Custom Travel Quote</h2>
      <h3>Destination</h3>
      <p><b>Country:</b> ${data.country}</p>
      <p><b>Airport:</b> ${data.airport}</p>
      <p><b>Time Span:</b> ${data.timeSpan || "Not specified"}</p>
      <h3>Trip Details</h3>
      <p><b>Travel Type:</b> ${data.travelType}</p>
      <p><b>Duration:</b> ${data.duration}</p>
      <h3>Travelers</h3>
      <p><b>Adults:</b> ${data.adults}</p>
      <p><b>Children:</b> ${data.children}</p>
      <h3>Preferences</h3>
      <p>${data.preferences || "None"}</p>
      <h3>Special Requests</h3>
      <p>${data.specialRequests || "None"}</p>
    `,
  }),

  booking: (data) => ({
    subject: `📅 Booking Request from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nTelephone: ${data.telephone}\nEmploy: ${data.employ || "N/A"}\nTravel Date: ${data.travelDate}\nWishes: ${data.additionalWishes || "None"}`,
    html: `
      <h2>📅 Booking Request</h2>
      <h3>Personal Info</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Telephone:</b> ${data.telephone}</p>
      ${data.employ ? `<p><b>Employment:</b> ${data.employ}</p>` : ""}
      <h3>Trip Details</h3>
      <p><b>Travel Date:</b> ${data.travelDate}</p>
      <h3>Additional Wishes</h3>
      <p>${data.additionalWishes || "None"}</p>
    `,
  }),
};
