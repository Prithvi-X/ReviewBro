/**
 * ReviewBro Brand & Design System Constants
 * NOTE: All review items, metrics, and figures below are ILLUSTRATIVE MOCK DATA ONLY
 * intended solely for Phase 1 design system and component presentation.
 */

export const BRAND = {
  name: 'ReviewBro',
  domain: 'ReviewBro.in',
  tagline: 'More Than Reviews. A Brighter Tomorrow.',
  subtagline: 'Because every piece of feedback is a step towards a better business.',
  eyebrow: 'REPUTATION MANAGEMENT, REIMAGINED',
  heroHeadline: {
    line1: 'Your Reviews.',
    line2: 'Your Reputation.',
    line3: 'One Bro.',
  },
  heroSubtitle:
    'Manage reviews, collect more feedback, reply with AI, understand what customers are saying, and grow your business — all in one simple platform.',
  status: 'ReviewBro is currently in development.',
  version: '1.0.0-phase1.refinement',
  email: 'Yoitspandamon@zohomail.com',
  contact: {
    email: 'Yoitspandamon@zohomail.com',
    earlyAccessSubject: 'ReviewBro Early Access Request - [Business Name]',
    earlyAccessBody: `Hello ReviewBro Team,

I would like to request early access to ReviewBro for my business.

Here are my details:
• Business Name: 
• Business Category / Industry: 
• City & Country: 
• Current Review Platforms (e.g., Google, Trustpilot): 
• Phone / WhatsApp: 
• What is your biggest challenge with customer reviews right now? 

Looking forward to your reply!`,
    inquirySubject: 'ReviewBro General Inquiry',
    inquiryBody: `Hello ReviewBro Team,

I would like to connect regarding ReviewBro:

• Name: 
• Business Name (optional): 
• Contact Phone: 
• Inquiry / Question: 

Thank you!`,
  },
  socials: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    youtube: 'https://youtube.com',
  },
}

/**
 * ILLUSTRATIVE MOCK DATA ONLY - UI Demonstration Data
 */
export const SAMPLE_METRICS = [
  {
    id: 'rating',
    label: 'Average Rating',
    value: '4.7',
    unit: '★',
    change: '+12%',
    changePositive: true,
  },
  {
    id: 'total',
    label: 'Total Reviews',
    value: '1,248',
    unit: '',
    change: '+28%',
    changePositive: true,
  },
  {
    id: 'sentiment',
    label: 'Positive Sentiment',
    value: '68%',
    unit: '',
    change: '+14%',
    changePositive: true,
  },
  {
    id: 'response-rate',
    label: 'Response Rate',
    value: '92%',
    unit: '',
    change: '+20%',
    changePositive: true,
  },
]

/**
 * ILLUSTRATIVE MOCK DATA ONLY - UI Demonstration Data
 */
export const SAMPLE_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Priya Sharma',
    platform: 'google' as const,
    rating: 5,
    timeAgo: '2 hours ago',
    text: 'Great service and amazing experience. Highly recommend!',
    status: 'Replied' as const,
    reply: 'Thank you Priya! We are thrilled you had such a wonderful visit with us. Looking forward to welcoming you back soon!',
  },
  {
    id: 'rev-2',
    author: 'Rahul Mehta',
    platform: 'zomato' as const,
    rating: 4,
    timeAgo: '5 hours ago',
    text: 'Good food, but the waiting time was a bit long.',
    status: 'AI Reply' as const,
    suggestedReply: 'Hi Rahul, thank you for visiting and for the honest feedback! Glad you enjoyed the flavors. We are streamlining kitchen prep during peak hours to serve you much faster next time.',
  },
  {
    id: 'rev-3',
    author: 'Sneha Kapoor',
    platform: 'google' as const,
    rating: 5,
    timeAgo: '1 day ago',
    text: 'Excellent ambience and very friendly staff.',
    status: 'Replied' as const,
    reply: 'Thanks a lot Sneha! Our team works hard to create a warm environment, and your review made our day!',
  },
]

/**
 * ILLUSTRATIVE MOCK DATA ONLY - Reusable Recommendation Cards
 */
export const SAMPLE_RECOMMENDATIONS = [
  {
    id: 'rec-1',
    title: 'Automate WhatsApp Feedback on Weekends',
    description: 'Customer footfall peaks between Friday and Sunday. Activating automated WhatsApp review requests within 2 hours of visits is estimated to lift your monthly 5-star volume.',
    impact: '+18% expected review volume',
    category: 'growth' as const,
    actionLabel: 'Enable Auto-Request',
  },
  {
    id: 'rec-2',
    title: 'Resolve Peak Wait Time Mentions',
    description: '14 recent reviews cited longer wait times on Friday 8–10 PM. Consider updating front-of-house table readiness alerts to protect your 4.7★ average.',
    impact: 'Protects 4.7★ rating score',
    category: 'retention' as const,
    actionLabel: 'View Topic Breakdown',
  },
]

/**
 * ILLUSTRATIVE MOCK DATA ONLY - 5-Step Platform Capability Flow
 */
export const PLATFORM_STEPS = [
  {
    id: 'manage',
    title: 'Manage Reviews',
    description: 'All your reviews from Google and other platforms, in one place.',
    icon: 'message-square',
    badgeColor: 'emerald',
  },
  {
    id: 'get',
    title: 'Get More Reviews',
    description: 'QR, WhatsApp, campaigns and automated requests.',
    icon: 'users',
    badgeColor: 'blue',
  },
  {
    id: 'ai',
    title: 'AI Replies',
    description: 'Respond faster. Sound human. Save hours.',
    icon: 'sparkles',
    badgeColor: 'amber',
  },
  {
    id: 'understand',
    title: 'Understand',
    description: 'Sentiment, topics, trends and customer patterns.',
    icon: 'bar-chart-3',
    badgeColor: 'indigo',
  },
  {
    id: 'grow',
    title: 'Grow',
    description: 'Turn your reputation into real business growth with insights and recommendations.',
    icon: 'arrow-up-right',
    badgeColor: 'teal',
  },
]

/**
 * ILLUSTRATIVE MOCK DATA ONLY - Comparison Points
 */
export const COMPARISON_POINTS = {
  traditional: [
    'Fragmented platforms',
    'Manual follow-ups',
    'Generic AI replies',
    'Basic analytics',
    'Reactive, not proactive',
  ],
  reviewBro: [
    'Everything in one place',
    'Automated review collection',
    'Smarter, contextual AI replies',
    'Deeper insights and trends',
    'Actionable recommendations',
    'Built for business growth',
  ],
}

/**
 * The People Behind ReviewBro - Founding Team
 */
export const PRIMARY_FOUNDER = {
  id: 'prithvi',
  name: 'Prithvi',
  title: 'Founder & CEO',
  focus: 'Product · Technology · Strategy',
  description: 'Building the product, technology, and direction behind ReviewBro.',
  initials: 'PR',
  imageSrc: '/Founder.png',
}

export const CO_FOUNDERS = [
  {
    id: 'roshan',
    name: 'Roshan',
    title: 'Co-Founder · Finance & Social',
    focus: 'Finance · Operations · Social',
    description: 'Helping build the business and operations behind ReviewBro.',
    initials: 'RO',
    imageSrc: undefined as string | undefined,
  },
  {
    id: 'ayush',
    name: 'Ayush',
    title: 'Co-Founder · UI/UX & Social',
    focus: 'Product Design · Social',
    description: 'Making ReviewBro simple to use and easy to recognize.',
    initials: 'AY',
    imageSrc: undefined as string | undefined,
  },
  {
    id: 'rahul',
    name: 'Rahul',
    title: 'Co-Founder · Backend',
    focus: 'Backend · Engineering',
    description: 'Building the systems that power ReviewBro.',
    initials: 'RA',
    imageSrc: undefined as string | undefined,
  },
]

export const FOUNDING_TEAM = [PRIMARY_FOUNDER, ...CO_FOUNDERS]
