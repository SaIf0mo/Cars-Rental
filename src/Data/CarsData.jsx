import bmw from "../assets/bmw.jpg"
import tesla from "../assets/tesla.jpg"
import audi from "../assets/audi.jpg"
import toyota from "../assets/toyota.jpg"
import kia from "../assets/kia.jpg"
import ford from "../assets/ford.jpg"
import {
  Zap,
  Clock4,
  CreditCard,
  MapPin,
  Headphones,
  Users,
  Shield,
  FileBadge,
} from "lucide-react";

export const navLinks = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Cars", path: "/Cars" },
  { id: 3, label: "About", path: "/About" },
  { id: 4, label: "Contact Us", path: "/ContactUs" },
];

export const stats = [
  { id: 1, value: "500+", label: "Premium Cars" },
  { id: 2, value: "50+", label: "Locations" },
  { id: 3, value: "24/7", label: "Support" },
  { id: 4, value: "97%", label: "Satisfaction" },
];

export const features = [
  {
    title: 'Fully Insured',
    description: 'All our vehicles come with comprehensive insurance coverage for your peace of mind.',
    icon: <Shield className='w-8 h-8' />,
  },
  {
    title: '24/7 Service',
    description: 'Round-the-clock customer support and roadside assistance whenever you need it.',
    icon: <Clock4 className='w-8 h-8' />,
  },
  {
    title: 'Easy Payment',
    description: 'Secure online payments with multiple payment options and instant confirmation.',
    icon: <CreditCard className='w-8 h-8' />,
  },
  {
    title: 'Multiple Locations',
    description: 'Pick up and drop off at any of our 50+ convenient locations across the country.',
    icon: <MapPin className='w-8 h-8' />,
  },
  {
    title: 'Expert Support',
    description: 'Our dedicated team is here to help you find the perfect vehicle for your needs.',
    icon: <Headphones className='w-8 h-8' />,
  },
  {
    title: 'Premium Quality',
    description: 'All vehicles are regularly maintained and meet our high-quality standards.',
    icon: <FileBadge className='w-8 h-8' />,
  },
  {
    title: 'Trusted by Thousands',
    description: 'Join over 100,000 satisfied customers who trust us with their transportation needs.',
    icon: <Users className='w-8 h-8' />,
  },
  {
    title: 'Instant Booking',
    description: 'Book your car in just a few clicks and get instant confirmation via email.',
    icon: <Zap className='w-8 h-8' />,
  },
];

// THe car data Array ::-
export const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    year: 2023,
    location: "San Francisco",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    price: 89,
    rating: 4.8,
    badges: ["Autopilot", "Premium Audio", "+2 more"],
    type: "Electric",
    status: "Available",
    image: tesla,
  },
  {
    id: 2,
    name: "BMW X5",
    year: 2023,
    location: "New York",
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 149,
    rating: 4.7,
    badges: ["Leather Seats", "Navigation", "+2 more"],
    type: "Luxury SUV",
    status: "Available",
    image: bmw,
  },
  {
    id: 3,
    name: "Audi A4",
    year: 2023,
    location: "Los Angeles",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 79,
    rating: 4.6,
    badges: ["Virtual Cockpit", "Heated Seats", "+2 more"],
    type: "Sedan",
    status: "Available",
    image: audi,
  },
  {
    id: 4,
    name: "Toyota Auris",
    year: 2022,
    location: "New York",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 49,
    rating: 4.4,
    badges: ["Reliable", "Fuel Efficient", "+1 more"],
    type: "Sedan",
    status: "Available",
    image: toyota,
  },
  {
    id: 5,
    name: "Ford Explorer",
    year: 2021,
    location: "Phoenix",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 69,
    rating: 4.5,
    badges: ["Spacious", "All-wheel drive"],
    type: "SUV",
    status: "Available",
    image: ford,
  },
  {
    id: 6,
    name: "Kia Sportage",
    year: 2022,
    location: "London",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    price: 65,
    rating: 4.3,
    badges: ["Hybrid", "Modern Interior"],
    type: "Crossover",
    status: "Available",
    image: kia,
  },
];
