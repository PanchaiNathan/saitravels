/**
 * Sai Travel - Centralized Configuration Object
 * Update company contact info, stats, services, and routes here.
 * Changes will reflect across the entire application dynamically.
 */
const SAI_CONFIG = {
  company: {
    name: "Sai Travel",
    tagline: "Your Journey, Our Responsibility",
    subheadline: "Reliable, comfortable, and affordable travel services for local trips, airport transfers, outstation journeys, corporate travel, and family tours.",
    phone: "7904868383",
    phoneDisplay: "+91 7904868383",
    whatsapp: "7904868383",
    whatsappDisplay: "+91 7904868383",
    email: "nachi2480@gmail.com",
    city: "Tiruppur",
    state: "Tamil Nadu",
    country: "India",
    fullAddress: "Old Bus Stand Road, Near Railway Station, Tiruppur, Tamil Nadu 641601, India",
    workingHours: "24/7 Available (Open All 365 Days)",
    bookingNotice: "Instant confirmation via WhatsApp & Call. No hidden charges.",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125287.89240455823!2d77.27986064121545!3d11.108524163456384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0e5bfb3a7%3A0x6b87be2c9e7a8e52!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    serviceAreas: [
      "Tiruppur & Suburbs",
      "Coimbatore Airport (CJB)",
      "Erode & Salem",
      "Bangalore & Chennai",
      "Ooty & Kodaikanal",
      "All South India Routes"
    ]
  },

  // Editable Key Performance Statistics
  stats: [
    { id: "happyCustomers", target: 100, suffix: "+", label: "Happy Customers", icon: "bi-emoji-smile" },
    { id: "successfulTrips", target: 50, suffix: "+", label: "Successful Trips", icon: "bi-geo-alt" },
    { id: "availabilityHours", target: 24, suffix: "/7", label: "Availability", icon: "bi-clock-history" },
    { id: "customerSupport", target: 100, suffix: "%", label: "Customer Support", icon: "bi-headset" }
  ],

  // Trip Types
  tripTypes: [
    { value: "One Way", label: "One-Way Drop" },
    { value: "Round Trip", label: "Round Trip" },
    { value: "Local", label: "Local Taxi" },
    { value: "Airport", label: "Airport Pickup & Drop" },
    { value: "Outstation", label: "Outstation Cab" }
  ],

  // Fleet Categories
  fleet: [
    {
      id: "sedan",
      name: "Sedan Class",
      models: "Swift Dzire / Toyota Etios",
      badge: "Most Popular",
      bestFor: "1 – 4 Passengers",
      passengers: "4 Passengers",
      luggage: "2 Large + 2 Small Bags",
      ac: "Dual Zone Air Conditioning",
      fuel: "CNG / Diesel (Fuel Efficient)",
      image: "assets/images/fleet-sedan.jpg",
      alt: "Sai Travel sedan Dzire Etios taxi service in Tiruppur",
      features: ["Pushback Clean Seats", "Trained Polite Chauffeur", "FastTag Enabled", "Ample Boot Space"]
    },
    {
      id: "suv",
      name: "Family SUV",
      models: "Maruti Ertiga / Innova",
      badge: "Family Favorite",
      bestFor: "4 – 7 Passengers",
      passengers: "6 – 7 Passengers",
      luggage: "3 Large + 2 Small Bags",
      ac: "Dual AC with Rear Vents",
      fuel: "Diesel / Hybrid",
      image: "assets/images/fleet-ertiga-suv.jpg",
      alt: "Sai Travel Maruti Ertiga SUV cab in Tiruppur",
      features: ["Extra Legroom & Recline", "Smooth Highway Suspension", "Roof Carrier on Request", "Music System / USB Charger"]
    },
    {
      id: "premium-suv",
      name: "Premium Luxury SUV",
      models: "Toyota Innova Crysta",
      badge: "Executive & Long Distance",
      bestFor: "6 – 7 Passengers",
      passengers: "7 Passengers",
      luggage: "4 Large Bags",
      ac: "Tri-Zone Automatic Climate Control",
      fuel: "High-Performance Diesel",
      image: "assets/images/fleet-innova-crysta.jpg",
      alt: "Sai Travel Innova Crysta premium cab service Tiruppur",
      features: ["Captain Recliner Seats", "Superior NVH & Quiet Cabin", "Ideal for Outstation & Weddings", "Executive Class Comfort"]
    },
    {
      id: "tempo-traveller",
      name: "Tempo Traveller",
      models: "Force Luxury Traveller (12 - 14 Seater)",
      badge: "Group & Pilgrimage",
      bestFor: "Groups & Family Tours",
      passengers: "12 – 14 Passengers",
      luggage: "Dedicated Huge Luggage Box",
      ac: "Individual AC Louvers & Lights",
      fuel: "Heavy Duty Commercial Engine",
      image: "assets/images/fleet-tempo-traveller.jpg",
      alt: "Tempo Traveller rental service Tiruppur Sai Travel",
      features: ["Pushback Luxury Bucket Seats", "LED TV & Audio Entertainment", "Spacious Aisle Walking Room", "Tour & Marriage Specialist"]
    }
  ],

  // Popular Routes from Operating City (Tiruppur)
  popularRoutes: [
    { from: "Tiruppur", to: "Coimbatore Airport (CJB)", distance: "~45 km", duration: "~1 hr 15 mins", routeType: "Airport Transfer", highlight: "Flight On-Time Drop" },
    { from: "Tiruppur", to: "Ooty (Nilgiris)", distance: "~110 km", duration: "~3.5 hrs", routeType: "Hill Station Outstation", highlight: "Scenic Ghat Road Expert" },
    { from: "Tiruppur", to: "Kodaikanal", distance: "~180 km", duration: "~4.5 hrs", routeType: "Hill Station Outstation", highlight: "Smooth Mountain Driving" },
    { from: "Tiruppur", to: "Chennai", distance: "~460 km", duration: "~7.5 hrs", routeType: "One-Way / Round Trip", highlight: "Doorstep Pickup & Drop" },
    { from: "Tiruppur", to: "Bangalore", distance: "~320 km", duration: "~6 hrs", routeType: "Interstate Highway", highlight: "FastTag Expressway Travel" },
    { from: "Tiruppur", to: "Madurai", distance: "~190 km", duration: "~3.5 hrs", routeType: "Temple / Business Trip", highlight: "Direct Temple Visits" },
    { from: "Tiruppur", to: "Trichy", distance: "~195 km", duration: "~3.5 hrs", routeType: "Airport / City Transfer", highlight: "Comfortable Highway Ride" },
    { from: "Tiruppur", to: "Rameswaram", distance: "~360 km", duration: "~6.5 hrs", routeType: "Pilgrimage Tour", highlight: "Pamban Bridge Special" }
  ],

  // Tour Packages
  tourPackages: [
    {
      title: "Ooty & Coonoor Hill Tour",
      duration: "2 Days / 1 Night or Day Trip",
      image: "assets/images/dest-ooty.jpg",
      alt: "Sai Travel Ooty Nilgiris tour package from Tiruppur",
      points: "Botanical Garden, Doddabetta Peak, Tea Estates, Pykara Falls & Lake",
      packageType: "Customized Family & Honeymoon Package"
    },
    {
      title: "Kodaikanal Princess of Hills",
      duration: "3 Days / 2 Nights or Weekend Trip",
      image: "assets/images/dest-kodaikanal.jpg",
      alt: "Kodaikanal tour package Sai Travel Tiruppur",
      points: "Kodai Lake, Coaker's Walk, Pillar Rocks, Pine Forest & Silver Cascade",
      packageType: "Scenic Mountain Escape"
    },
    {
      title: "Munnar Misty Paradise",
      duration: "3 Days / 2 Nights",
      image: "assets/images/dest-munnar.jpg",
      alt: "Munnar Kerala tour package from Tiruppur Sai Travel",
      points: "Tea Gardens, Mattupetty Dam, Echo Point, Eravikulam National Park",
      packageType: "Nature & Greenery Holiday"
    },
    {
      title: "Rameswaram & Dhanushkodi Darshan",
      duration: "2 Days / 1 Night",
      image: "assets/images/dest-rameswaram.jpg",
      alt: "Rameswaram temple pilgrimage package Sai Travel",
      points: "Ramanathaswamy Temple, Pamban Bridge, Dhanushkodi Point, Agnitheertham",
      packageType: "Sacred Spiritual Pilgrimage"
    },
    {
      title: "Madurai Temple Heritage Tour",
      duration: "1 Day / 2 Days",
      image: "assets/images/dest-madurai.jpg",
      alt: "Madurai Meenakshi temple tour cab Sai Travel",
      points: "Meenakshi Amman Temple, Thirumalai Nayakar Mahal, Alagar Kovil",
      packageType: "Cultural Heritage Tour"
    }
  ]
};

// Expose globally
window.SAI_CONFIG = SAI_CONFIG;
