import React from 'react'
import Card from './componet/Card'
const App = () => {
  const data = [
  {
    images: [
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1170&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1669689972847-2cafbf3a6f85?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595277914958-7f384e3d3347?q=80&w=880&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    username: "SakshiGU_pta",
    name: "Sakshi Gupta",
    description: "Frontend Developer",
    description2: "Building beautiful web experiences",
    post: "1.2k",
    follower: "2.4k",
    following: "87"
  },

  {
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
    username: "riya_designs",
    name: "Riya Sharma",
    description: "UI/UX Designer",
    description2: "Creating clean digital experiences",
    post: "856",
    follower: "3.1k",
    following: "124"
  },

  {
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    username: "rahul_dev",
    name: "Rahul Sharma",
    description: "React Developer",
    description2: "Learning and building every day",
    post: "542",
    follower: "1.8k",
    following: "210"
  },

  {
    images: [
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=900&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
    username: "neha_creates",
    name: "Neha Patel",
    description: "Content Creator",
    description2: "Lifestyle | Travel | Fashion",
    post: "2.3k",
    follower: "5.7k",
    following: "342"
  },

  {
    images: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=900&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    username: "arjun_codes",
    name: "Arjun Mehta",
    description: "Full Stack Developer",
    description2: "JavaScript | Node | React",
    post: "734",
    follower: "2.9k",
    following: "156"
  },

  {
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=900&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=500&auto=format&fit=crop",
    username: "priya_style",
    name: "Priya Shah",
    description: "Fashion Blogger",
    description2: "Style • Beauty • Lifestyle",
    post: "1.9k",
    follower: "4.6k",
    following: "298"
  },

  {
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=500&auto=format&fit=crop",
    username: "rohan_travels",
    name: "Rohan Verma",
    description: "Travel Photographer",
    description2: "Exploring the world one place at a time",
    post: "923",
    follower: "6.2k",
    following: "421"
  },

  {
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    username: "dev_akash",
    name: "Akash Kumar",
    description: "Software Engineer",
    description2: "Code • Coffee • Repeat",
    post: "1.5k",
    follower: "3.8k",
    following: "189"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop"
    ],
    profile:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop",
    username: "vikas_business",
    name: "Vikas Singh",
    description: "Entrepreneur",
    description2: "Building ideas into businesses",
    post: "432",
    follower: "7.3k",
    following: "267"
  }
];
  return (
    data.map((elemt)=>
      <Card  data={elemt }  />   
    )
  
  )
}

export default App
