import {
  CarFront,
  Settings,
  Headphones,
  AlarmClockCheck,
  Wallet2,
  SearchCheck,
  Wallet,
} from 'lucide-react'

import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter, FaFacebookF } from 'react-icons/fa6'
import GooglePlaySVG from '../assets/google-original.svg'
import AppStoreSVG from '../assets/apple-original.svg'
import CarRectangle from '../assets/car-rectangle-1.png'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { TbRoad } from 'react-icons/tb'
import { TfiHeart } from 'react-icons/tfi'
import { HiOutlineUser } from 'react-icons/hi2'

export const AuthenticatedUpperNavbarDropdownItems = [
  { icon: <TfiHeart size={24} />, label: 'Favorites', path: '/favorites' },
  { icon: <TbRoad size={24} />, label: 'Trips', path: '/trips' },
  {
    icon: <IoChatboxEllipsesOutline size={24} />,
    label: 'Inbox',
    path: '/inbox',
  },
]

export const AuthenticatedMiddleNavbarDropdownItems = [
  { icon: <HiOutlineUser size={24} />, label: 'Profile', path: '/profile' },
  {
    icon: <Settings size={24} />,
    label: 'Account settings',
    path: '/account-settings',
  },
  {
    icon: <CarFront size={24} />,
    label: 'Become a host',
    path: '/become-host',
  },
  {
    icon: <Wallet size={24} />,
    label: 'Boggle wallet',
    path: '/boggle-wallet',
  },
]


export const AuthenticatedBottomNavbarDropdownItems = [
  {
    label: 'How Boggle works',
    path: '/how-boggle-works',
  },
  { icon: <Headphones />, label: 'Contact support', path: '/contact-support' },
  {
    label: 'Legal Matters',
    path: '/legalmatters',
  },
]

export const UpperNavbarDropdownItems = [
  {
    label: 'Log In',
    path: '/log-in',
  },
  {
    label: 'Sign Up',
    path: '/register',
  },
  { icon: <CarFront />, label: 'Become a host', path: '/become-host' },
]

export const BottomNavbarDropdownItems = [
  {
    icon: <Settings />,
    label: 'Account settings',
    path: '/account-settings',
  },
  {
    label: 'How Boggle works',
    path: '/how-boggle-works',
  },
  { icon: <Headphones />, label: 'Contact support', path: '/contact-support' },
  {
    label: 'Legal Matters',
    path: '/legalmatters',
  },
]

export const HeroButtonData = [
  {
    image: GooglePlaySVG,
    title: 'Google Play',
    description: 'GET IT ON',
  },
  {
    image: AppStoreSVG,
    title: 'App Store ',
    description: 'Download on the',
  },
]

export const BrowseByMakeData = [
  {
    image: CarRectangle,
    title: 'Tesla',
    description: 'GET IT TESLA',
  },
  {
    image: CarRectangle,
    title: 'Ferrari ',
    description: 'Download on the ferrari',
  },
  {
    image: CarRectangle,
    title: 'Porsche ',
    description: 'Porsche all the way',
  },
  {
    image: CarRectangle,
    title: 'Porsche ',
    description: 'Porsche all the way',
  },
  {
    image: CarRectangle,
    title: 'Porsche  hhhhh',
    description: 'Porsche all the way',
  },
  {
    image: CarRectangle,
    title: 'Porscheyrfdyrjr ',
    description: 'Porsche all the way',
  },
  {
    image: CarRectangle,
    title: 'Porscheiiuuuu ',
    description: 'Porsche all the way',
  },
]

export const WhyChooseBoggleData = [
  {
    icon: (
      <AlarmClockCheck className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" />
    ),
    title: 'Flexibility',
    description:
      'Boggle puts you in control. Choose the ownership duration that aligns with your lifestyle, offering unparalleled flexibility.',
  },
  {
    icon: <Wallet2 className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" />,
    title: 'Savings ',
    description:
      'Enjoy cost-effective pricing that eliminates hefty down payments and ongoing maintenance expenses.',
  },
  {
    icon: (
      <SearchCheck className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" />
    ),
    title: 'Transparency',
    description:
      'Boggle is all about transparency. There are no hidden charges; everything is included in the upfront pricing',
  },
]

export const HowBoggleWorksData = [
  {
    title: 'Discover Your Ideal Ride',
    description:
      'Explore a wide range of cars, trucks, vans, and more. Instantly book your vehicle through the app, with hourly rates ensuring you only pay for the time you reserve.',
  },
  {
    title: 'Start Your Journey',
    description:
      'Unlock your car right from the Boggle app. No need for in-person meetups or key exchanges.',
  },
]

export const footerLinks = [
  {
    title: 'Boggle',
    links: [
      { title: 'About', url: '/' },
      { title: 'Teams', url: '/' },
      { title: 'Policies', url: '/' },
      { title: 'Careers', url: '/' },
    ],
  },
  {
    title: 'Car Sharing Cities',
    links: [
      { title: 'Lagos', url: '/' },
      { title: 'Abuja', url: '/' },
      { title: 'Port Harcourt', url: '/' },
      { title: 'Asaba', url: '/' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { title: 'Rent a car', url: '/' },
      { title: 'List your car', url: '/' },
      { title: 'Trust & Safety', url: '/' },
      { title: 'Help Center', url: '/' },
      { title: 'Insurance & Protection', url: '/' },
    ],
  },
]

export const FooterData = [
  [
    {
      heading: 'Boggle',
    },
    {
      label: 'About',
    },
    {
      label: 'Team',
    },
    {
      label: 'Policies',
    },
    {
      label: 'Career',
    },
  ],
  [
    { heading: 'Car sharing cities' },
    {
      label: 'Lagos',
    },
    {
      label: 'Abuja',
    },
    {
      label: 'Porthacourt',
    },
    {
      label: 'Enugu',
    },
    {
      label: 'Owerri',
    },
    {
      label: 'Uyo',
    },
    {
      label: 'Calabar',
    },
    {
      label: 'Awka',
    },
    {
      label: 'Asaba',
    },
    {
      label: 'Onitsha',
    },
  ],
  [
    {
      heading: 'Explore',
    },
    {
      label: 'Book a car',
    },
    {
      label: 'Rent a car',
    },
    {
      label: 'Trust & Safety',
    },
    {
      label: 'Help Center',
    },
    {
      label: 'List your car',
    },
    {
      label: 'Insurance & Protections',
    },
  ],
]

export const SocialsData = [
  {
    icon: <FiInstagram />,
  },
  {
    icon: <FaXTwitter />,
  },
  {
    icon: <FaFacebookF />,
  },
]
