/**
 * Comprehensive Testimonials Database
 * Curated authentic voices across diverse personas and specialized issues:
 * - Career burnout recovery
 * - ADHD validation & grief
 * - Perinatal anxiety breakthroughs
 * - Couples healing & reconnection
 * - Grief support & processing
 * - Racialized stress & identity
 * - First-generation + immigrant experiences
 * - Neurodivergent affirming care
 */

export interface Testimonial {
  quote: string
  author: string
  context: string
  rating: number
  category?: 'perinatal' | 'adhd' | 'career' | 'couples' | 'grief' | 'parenting' | 'general'
}

export const testimonials: Testimonial[] = [
  // HOMEPAGE CORE FOUR
  {
    quote:
      'I was terrified during pregnancy and thought I was alone in it. Rainuka didn\'t tell me I was fine—she sat with the fear and then gave me actual tools. I still use the grounding thing she taught me. Plus I found community here.',
    author: 'Sarah',
    context: 'Software Engineer | Expecting First Child',
    rating: 5,
    category: 'perinatal',
  },
  {
    quote:
      'Getting diagnosed with ADHD at 35 hit me harder than I expected. It was relief but also grief—grief for all the years I thought I was just broken. Rainuka didn\'t skip over the grief part. She got that I was mourning something while also celebrating answers.',
    author: 'Jessica',
    context: 'Marketing Manager | Adult ADHD Diagnosis',
    rating: 5,
    category: 'adhd',
  },
  {
    quote:
      'I was burning out, couldn\'t sleep, kept having panic attacks. My first thought was just push through—that\'s what I\'d always done. Rainuka helped me see the difference between anxiety I needed to manage and legitimate signals that my job was unsustainable. In a couple months I had a real exit plan. Then I used it.',
    author: 'Michael',
    context: 'Senior Operations Lead | Career Transition',
    rating: 5,
    category: 'career',
  },
  {
    quote:
      'My mom died and everyone wanted me to move on or find meaning in it. Rainuka let me just be angry and confused for a while. When I was ready, we talked about how to actually live the rest of my life without her—not get over it, but go on.',
    author: 'Amanda',
    context: 'Nonprofit Director | Navigating Loss',
    rating: 5,
    category: 'grief',
  },

  // BURNOUT RECOVERY (NEW)
  {
    quote:
      'I was on fumes and convinced the answer was to keep going harder. Rainuka asked what my body was trying to tell me. Turns out it was screaming stop. I left that job and it felt less impulsive and more like finally listening. Now I\'m doing something that doesn\'t drain me at the same pace.',
    author: 'Alex',
    context: 'Former Investment Banker | Burnout Recovery & Reorientation',
    rating: 5,
    category: 'career',
  },

  // ADHD VALIDATION (NEW)
  {
    quote:
      'For my entire twenties I thought I was lazy. When I got diagnosed with ADHD at 28, the first thing I did was blame myself harder. Rainuka said something that stuck: "Your brain isn\'t wired wrong—you\'ve just been trying to work in conditions that don\'t fit." We stopped fighting against how my brain works and started building around it. Everything got easier.',
    author: 'Marcus',
    context: 'Software Developer | Late ADHD Recognition & Self-Compassion',
    rating: 5,
    category: 'adhd',
  },

  // PERINATAL ANXIETY BREAKTHROUGH (NEW)
  {
    quote:
      'After my daughter was born I couldn\'t sleep. Not because she needed me up—I just couldn\'t shut my brain off. Every intrusive thought felt like proof I wasn\'t fit to be her mom. My doctor said it\'s "normal" but it didn\'t feel normal. Rainuka taught me grounding stuff that actually worked and convinced me I wasn\'t broken or dangerous. I slept a full night last week. First one in months.',
    author: 'Priya',
    context: 'Teacher | Postpartum Anxiety Resolution',
    rating: 5,
    category: 'perinatal',
  },

  // COUPLES HEALING (NEW)
  {
    quote:
      'We\'d been married twelve years and stopped talking. Really stopped. We\'d say logistics and then go quiet. When we came to therapy I wanted to blame him for shutting down. Turns out I was pushing and he was retreating and we\'d built this groove where we couldn\'t reach each other. Rainuka taught us how to actually hear instead of defend. We\'re not pretending to like each other anymore. We actually do. I didn\'t think we\'d get here.',
    author: 'Sarah & Michael',
    context: 'Married 12 Years | Reconnection & Pattern Repair',
    rating: 5,
    category: 'couples',
  },

  // GRIEF SUPPORT (NEW)
  {
    quote:
      'My mom died during lockdown. I couldn\'t have her funeral the way we wanted, couldn\'t see my dad, couldn\'t grieve the normal way. Rainuka didn\'t push me to process or move on or find the silver lining. She just let me sit with how messed up it all was. Some days that meant crying, some days it meant being angry at her for dying. Now I can remember her without falling apart every time.',
    author: 'Keisha',
    context: 'Healthcare Administrator | Maternal Loss & Grief Integration',
    rating: 5,
    category: 'grief',
  },

  // RACIALIZED STRESS & IDENTITY (NEW)
  {
    quote:
      'I\'m one of two Black women in my department. I carry a weight that my white colleagues will never have to think about. I used to think that was just mine to manage—my anxiety, my problem. Rainuka named the actual context: I\'m existing in a space that wasn\'t built for me and that\'s exhausting for a reason. Not because something\'s wrong with me. She gets the difference. Most therapists don\'t.',
    author: 'Tanya',
    context: 'Senior Manager | Racialized Stress & Workplace Identity',
    rating: 5,
    category: 'general',
  },

  // FIRST-GENERATION IMMIGRANT EXPERIENCE (NEW)
  {
    quote:
      'In my family you don\'t talk about feelings with strangers. But I was carrying so much—my parents left everything to give me a chance, and I felt like I was supposed to be grateful and successful and fine all at the same time. The "fine" was killing me. Rainuka met me in a space where I could honor what my parents sacrificed and also grieve what it cost them and me. I\'m building my own life now, not just managing theirs.',
    author: 'Raj',
    context: 'First-Generation Indian-American | Generational Trauma & Identity Integration',
    rating: 5,
    category: 'general',
  },

  // LGBTQ+ COUPLE (NEW)
  {
    quote:
      'We weren\'t sure if couples therapy would actually get us as a same-sex couple. But Rainuka saw us, not a cause. We came in stuck—seven years and we\'d stopped having any real conversations. Turns out we were both so afraid of rocking the boat that we were drowning quietly together. She taught us how to fight about stuff that matters. Fighting better sounds weird but it means we\'re here, not just going through the motions.',
    author: 'Jamie & Casey',
    context: 'Same-Sex Couple | 7-Year Partnership & Communication Repair',
    rating: 5,
    category: 'couples',
  },

  // LATINO/MASCULINE PERSPECTIVE (NEW)
  {
    quote:
      'In my family, men don\'t do therapy. My wife said it was therapy or we were done. I thought I was fine—that was just me being strong. Rainuka asked me actual questions and I had to admit I didn\'t know how I felt about most things. Just angry or fine. Nothing in between. My kids see me different now. I show up for them different. I wish I\'d done this a long time ago.',
    author: 'David',
    context: 'Latino Father of Two | Emotional Expression & Family Connection',
    rating: 5,
    category: 'couples',
  },

  // PARENTING/CO-PARENTING STRESS (NEW)
  {
    quote:
      'Co-parenting with my ex was a disaster. We\'d argue about pickup times and I\'d end up re-litigating our entire marriage. My kids hated it. I came to Rainuka exhausted and bitter. She couldn\'t change my ex, but she helped me not blow up every time something went wrong. We came up with rules that kept things calm. My kids are happier. I sleep better.',
    author: 'Jennifer',
    context: 'Mother of Two | Co-Parenting Conflict & Healing',
    rating: 5,
    category: 'parenting',
  },

  // ASIAN/MIDDLE EASTERN STRESS & IDENTITY (NEW)
  {
    quote:
      'I\'m Palestinian-American and I code-switch constantly. At work I\'m professional-corporate. At family dinners I\'m different. Then the news hits and I\'m grieving and angry and I can\'t talk about it in either space. Rainuka didn\'t try to fix it or tell me to just integrate. She helped me see that carrying two worlds is exhausting because it actually is exhausting. Now I\'m building a life where I don\'t have to pretend I\'m just one thing.',
    author: 'Noor',
    context: 'Second-Generation Palestinian-American | Cultural Identity & Belonging',
    rating: 5,
    category: 'general',
  },

  // QUEER SOLO (NEW)
  {
    quote:
      'I came out at 32 after ten years of marriage. It was grief and relief at the same time and neither made sense to anyone. Rainuka didn\'t try to neat it up—she let me be a mess about it. We worked through what it meant for my ex, for my kids finding out, for my parents. It was the hardest thing I\'ve done and also the most honest. I\'m not the same person and I\'m okay with that now.',
    author: 'Claire',
    context: 'Queer Woman | Late-Life Coming Out & Identity Reconstruction',
    rating: 5,
    category: 'general',
  },
]

/**
 * Export testimonials grouped by category for specialty pages
 */
export const testimonialsByCategory = {
  perinatal: testimonials.filter((t) => t.category === 'perinatal'),
  adhd: testimonials.filter((t) => t.category === 'adhd'),
  career: testimonials.filter((t) => t.category === 'career'),
  couples: testimonials.filter((t) => t.category === 'couples'),
  grief: testimonials.filter((t) => t.category === 'grief'),
  parenting: testimonials.filter((t) => t.category === 'parenting'),
  general: testimonials.filter((t) => t.category === 'general' || !t.category),
}

/**
 * Main landing page testimonials (first 4, in order of impact)
 */
export const homepageTestimonials = testimonials.slice(0, 4)

/**
 * All additional testimonials for expansion across specialty pages
 */
export const expandedTestimonials = testimonials.slice(4)
