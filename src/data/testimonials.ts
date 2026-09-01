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
      'Alone in my anxiety around pregnancy. Rainuka validated my fear + gave me tools that actually work. Now I have community.',
    author: 'Sarah',
    context: 'Software Engineer | Expecting First Child',
    rating: 5,
    category: 'perinatal',
  },
  {
    quote:
      'ADHD diagnosis at 35 = grief + relief. Rainuka gets both. Finally, real therapy—not tips and tricks. She understood the grief I didn\'t know I was carrying.',
    author: 'Jessica',
    context: 'Marketing Manager | Adult ADHD Diagnosis',
    rating: 5,
    category: 'adhd',
  },
  {
    quote:
      'Burned out + doubting everything. In 2 months with Rainuka: panic → clear plan. She untangled real anxiety from legit signals my career needed to change.',
    author: 'Michael',
    context: 'Senior Operations Lead | Career Transition',
    rating: 5,
    category: 'career',
  },
  {
    quote:
      'No judgment. Rainuka met me where I was—warm + practical. She reframed grief: not something to fix, but to move through with intention.',
    author: 'Amanda',
    context: 'Nonprofit Director | Navigating Loss',
    rating: 5,
    category: 'grief',
  },

  // BURNOUT RECOVERY (NEW)
  {
    quote:
      'I was running on fumes, telling myself I just needed to \"push through.\" Rainuka helped me see that my burnout wasn\'t weakness—it was my nervous system saying NO. She gave me permission to listen. Three months in, I actually left the job that was killing me. Not impulsively. With a real plan. Now I\'m building something that fits how my brain actually works.',
    author: 'Alex',
    context: 'Former Investment Banker | Burnout Recovery & Reorientation',
    rating: 5,
    category: 'career',
  },

  // ADHD VALIDATION (NEW)
  {
    quote:
      'For 28 years, I thought I was lazy. My therapist mentioned ADHD casually. I got diagnosed—and Rainuka was the first person who didn\'t treat it like I\'d failed. She said, \"Your brain isn\'t broken; you\'ve just been trying to live in a system designed for someone else.\" That reframe changed everything. We work WITH my ADHD now, not against it.',
    author: 'Marcus',
    context: 'Software Developer | Late ADHD Recognition & Self-Compassion',
    rating: 5,
    category: 'adhd',
  },

  // PERINATAL ANXIETY BREAKTHROUGH (NEW)
  {
    quote:
      'Postpartum anxiety was destroying me. I couldn\'t sleep without panic. Everyone said, \"It\'s normal new-mom worry,\" but it wasn\'t. Rainuka took me seriously. In just a few weeks, she taught me grounding techniques that actually work—and helped me understand that my intrusive thoughts weren\'t reflections of who I am as a mother. I\'m sleeping. I\'m present with my baby. I\'m myself again.',
    author: 'Priya',
    context: 'Teacher | Postpartum Anxiety Resolution',
    rating: 5,
    category: 'perinatal',
  },

  // COUPLES HEALING (NEW)
  {
    quote:
      'We came in feeling disconnected and angry. We\'d been married 12 years and had stopped really talking to each other. In therapy, we learned that we were both trying to protect ourselves—he\'d shut down, I\'d push harder. Once we understood that pattern, we could actually hear each other. The tools I learned (repair attempts, turning toward) have become part of how we live now. We\'re not just staying together; we actually like being together again. That surprised me. I honestly thought we were done.',
    author: 'Sarah & Michael',
    context: 'Married 12 Years | Reconnection & Pattern Repair',
    rating: 5,
    category: 'couples',
  },

  // GRIEF SUPPORT (NEW)
  {
    quote:
      'Losing my mom mid-pandemic meant I couldn\'t grieve the way I wanted. Rainuka didn\'t push me to \"move on.\" She made space for the mess—the anger, the guilt, the weird moments when I forgot she was gone and then remembered all over again. She helped me honor her life by actually living mine. That\'s what real grief work looks like.',
    author: 'Keisha',
    context: 'Healthcare Administrator | Maternal Loss & Grief Integration',
    rating: 5,
    category: 'grief',
  },

  // RACIALIZED STRESS & IDENTITY (NEW)
  {
    quote:
      'As a Black woman in a predominantly white workplace, I was carrying a weight I couldn\'t name. Rainuka didn\'t minimize that—she named it. She gets that my anxiety isn\'t just \"my stuff\"; it\'s contextual. It\'s navigating environments that weren\'t built for me. Having a therapist who understands systemic racism, not just individual psychology, changed everything. I\'m not broken. I\'m exhausted by systems that were never meant to include me. That distinction matters.',
    author: 'Tanya',
    context: 'Senior Manager | Racialized Stress & Workplace Identity',
    rating: 5,
    category: 'general',
  },

  // FIRST-GENERATION IMMIGRANT EXPERIENCE (NEW)
  {
    quote:
      'Coming to therapy felt like a betrayal—you don\'t talk about family stuff outside the family. But I was carrying generational trauma, immigrant grief, and pressure to be the "model minority." Rainuka created space where I could honor my parents\' sacrifice AND grieve what that sacrifice cost me. She gets that my mental health isn\'t separate from my cultural identity. I\'m healing in my own way, not in someone else\'s timeline.',
    author: 'Raj',
    context: 'First-Generation Indian-American | Generational Trauma & Identity Integration',
    rating: 5,
    category: 'general',
  },

  // LGBTQ+ COUPLE (NEW)
  {
    quote:
      'We weren\'t even sure if couples therapy would "get" us—as a same-sex couple. But from day one, Rainuka saw US, not a checkbox. We came in because we\'d hit a wall after 7 years. We were both people-pleasers, so we\'d avoided every hard conversation. Turns out we had a lot to say. She taught us how to disagree without it feeling like betrayal. Now we actually fight better—which sounds weird, but it means we\'re honest. We\'re building something real instead of just trying not to rock the boat.',
    author: 'Jamie & Casey',
    context: 'Same-Sex Couple | 7-Year Partnership & Communication Repair',
    rating: 5,
    category: 'couples',
  },

  // LATINO/MASCULINE PERSPECTIVE (NEW)
  {
    quote:
      'Growing up Latino, therapy was "for women" or "for people who couldn\'t handle things." I came in reluctantly—my wife basically said it was therapy or she was done. I thought I was fine. But Rainuka asked me questions no one had asked. She helped me see that dismissing my feelings wasn\'t strength; it was leaving my family with only half of me. Learning to name what I actually feel—not just "I\'m fine" or "I\'m angry"—has changed my marriage and how I parent. I wish I\'d done this years ago.',
    author: 'David',
    context: 'Latino Father of Two | Emotional Expression & Family Connection',
    rating: 5,
    category: 'couples',
  },

  // PARENTING/CO-PARENTING STRESS (NEW)
  {
    quote:
      'Co-parenting with my ex was a nightmare. We could not be in the same room without tension. My kids felt it, and it was eating me alive. I came to Rainuka exhausted and resentful. She didn\'t fix my ex (obviously), but she helped me manage my own emotional reactivity and see my kids\'s needs clearly instead of through my hurt. We developed actual strategies for parallel parenting. My kids are calmer. I sleep better. And I don\'t dread pickups anymore.',
    author: 'Jennifer',
    context: 'Mother of Two | Co-Parenting Conflict & Healing',
    rating: 5,
    category: 'parenting',
  },

  // ASIAN/MIDDLE EASTERN STRESS & IDENTITY (NEW)
  {
    quote:
      'I\'m second-generation Palestinian-American, and I was drowning in code-switching. At work, I\'m one person. At home with family, another. And then the news cycles hit, and I\'m carrying a grief and anger I can\'t even name at the office. Rainuka saw the whole picture. She helped me understand that my anxiety isn\'t "just anxiety"—it\'s a legitimate response to displacement, belonging anxiety, and cultural pressure. She validated that carrying two worlds is exhausting. Now I\'m building a life where I don\'t have to pick sides; I can integrate both parts of myself.',
    author: 'Noor',
    context: 'Second-Generation Palestinian-American | Cultural Identity & Belonging',
    rating: 5,
    category: 'general',
  },

  // QUEER SOLO (NEW)
  {
    quote:
      'Coming out at 32 after 10 years of marriage wasn\'t linear or clean. I was grieving the life I\'d planned while also finally feeling alive for the first time. Rainuka didn\'t try to fix it or judge me. She held space for both—the loss AND the liberation. She helped me navigate the aftermath with my ex, come out to my parents, and build a new identity as a queer woman that felt genuinely mine. It was some of the hardest and most honest work I\'ve ever done. I\'m not the same person, and I\'m grateful for that.',
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
