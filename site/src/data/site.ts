/**
 * Sources, all checked 27 Aug 2026:
 *  - facebook.com/ampcleaningservice (contact block, posts, reviews tab)
 *  - Google Business Profile (Warwick RI listing, rating, reviews)
 *  - Yelp listing (Warwick, hours)
 * Nothing in this file is invented. Anything still needing Belinda's
 * sign-off is listed in docs/client-questions.md.
 */

export const business = {
  name: 'AMP Cleaning Services',
  legalName: 'AMP Cleaning Services, LLC',
  tagline: 'Attention to Detail',
  city: 'Warwick',
  state: 'Rhode Island',
  stateShort: 'RI',
  yearsInBusiness: '3+', // Google Business Profile
  email: 'ampcleaningservicellc@gmail.com',
  facebook: 'https://www.facebook.com/ampcleaningservice/',
} as const

/** Both numbers are published by AMP on their own page. */
export const people = [
  { name: 'Amber', role: 'Partner', phone: '(401) 965-8565', phoneHref: 'tel:+14019658565' },
  { name: 'Belinda', role: 'Owner', phone: '(401) 441-4874', phoneHref: 'tel:+14014414874' },
] as const

export const primaryPhone = people[0]

/** Two independent public ratings — cited separately, never merged into one number. */
export const ratings = [
  { source: 'Google', value: '5.0', count: 19 },
  { source: 'Facebook', value: '98%', count: 28, unit: 'recommend' },
] as const

/**
 * Straight from AMP's own Facebook bio:
 * "Deep cleanings / Standard cleanings / Post construction / Offices & Commercial"
 * plus move-out work evidenced in reviews.
 */
export const services = [
  {
    slug: 'deep-clean',
    name: 'Deep Cleaning',
    summary: 'The big first clean that resets the whole house.',
    detail:
      'Most homes start here. It takes the longest, it costs the most, and it is the one people write reviews about. After this, keeping up is easy.',
    // audit trail, not shown on the site: Nate Byrnes, Alice Pacheco, Janella Watson, nabin giri
  },
  {
    slug: 'standard',
    name: 'Standard & Recurring',
    summary: 'Weekly, every other week, or once a month.',
    detail:
      'Pick a rhythm and we hold the slot. You will not have to explain your house twice.',
    // audit trail: frequencies listed by Alice Pacheco
  },
  {
    slug: 'real-estate',
    name: 'Listings & Closings',
    summary: 'Before the photos. Before the walk-through. Before the keys change hands.',
    detail:
      'Agents book us when a house has to look right on a deadline. One called us the morning of a closing after a walk-through went badly. We got it done.',
    // audit trail: Christina Martinez (agent, final walk-through), Jill Pelletier (pre-listing)
  },
  {
    slug: 'move',
    name: 'Move-In & Move-Out',
    summary: 'Empty rooms, tight deadlines, security deposits.',
    detail:
      'Moving is already enough. We take the cleaning off the list, and we can usually work at short notice.',
    // audit trail: Joe Ponte, nabin giri
  },
  {
    slug: 'post-construction',
    name: 'Post-Construction',
    summary: 'After the trades finish and before anyone moves in.',
    detail:
      'Construction dust gets into everything and keeps reappearing for weeks. Getting it out properly takes a particular kind of patience.',
    // audit trail: listed in AMP's own Facebook bio
  },
  {
    slug: 'commercial',
    name: 'Offices & Commercial',
    summary: 'Offices and small commercial spaces.',
    detail:
      'Same standard we hold in a home. We work around your hours so nobody is vacuuming past your desk at eleven in the morning.',
    // audit trail: listed in AMP's own Facebook bio
  },
] as const

/** Verbatim, from public Google and Facebook reviews. Names are public. */
export const testimonials = [
  {
    quote:
      'My buyer closed on her house today and when we did final walk through we were horrified at how disgustingly dirty the house was. I would never deliver a home to a client like that. Belinda and her daughter were truly amazing.',
    name: 'Christina Martinez',
    context: 'Real estate agent · Google',
  },
  {
    quote:
      'Belinda and Amber were personable, flexible, and made quick work of our deep clean. I appreciate the care they took in their work, especially with our vintage, glass tiled bathroom. They even tackled our basement and made our paint splattered drop sink sparkle.',
    name: 'Janella Watson',
    context: 'Facebook',
  },
  {
    quote:
      'We used AMP for a deep clean before we put our house on the market. They were prompt and stayed late to get the job done. I was impressed with the pride they took in their work. They even went as far as rearranging my son’s room so it looked more spacious for pictures.',
    name: 'Jill Pelletier',
    context: 'Google',
  },
  {
    quote:
      'I was looking for a move out cleaning on short notice and a friend did a referral to AMP. My apartment was a hot mess and AMP did such a fantastic job on such a short timeline. Professional, personable, kind and honestly one of the best cleaning services I have ever come across!',
    name: 'Joe Ponte',
    context: 'Facebook',
  },
  {
    quote:
      'I was moving into a new home and really needed a deep clean before settling in. They were recommended by a friend, and now I know why.',
    name: 'nabin giri',
    context: 'Google',
  },
  {
    quote:
      'Your house won’t look the same after they leave. The cleaning products they use leaves your house smelling wonderful.',
    name: 'Alice Pacheco',
    context: 'Facebook',
  },
] as const

/**
 * The detail grid — AMP's own photographs. What they chose to
 * photograph is the entire argument of this brand.
 */
export const details = [
  {
    src: '/media/detail/range.webp',
    alt: 'Gas range with the burner grates cleaned and refitted after a deep clean.',
    label: 'Burner grates',
    note: 'Lifted off, cleaned underneath, put back straight.',
  },
  {
    src: '/media/detail/faucet.webp',
    alt: 'Bathroom faucet and basin cleaned around the fittings.',
    label: 'Around the fittings',
    note: 'The ring at the base of the tap, where it collects.',
  },
  {
    src: '/media/detail/fan.webp',
    alt: 'Ceiling fan blades cleaned on the upper surface.',
    label: 'Fan blades',
    note: 'The side you only see from the stairs.',
  },
  {
    src: '/media/detail/cooktop.webp',
    alt: 'Cooktop and oven front cleaned after service.',
    label: 'Oven front',
    note: 'The handle, the glass, the seam under the door.',
  },
  {
    src: '/media/detail/basin.webp',
    alt: 'Bathroom basin and surround cleaned, including the counter seam.',
    label: 'Basin surround',
    note: 'Where the counter meets the wall.',
  },
] as const

/** Rooms after service. Evidence, deliberately not full-bleed. */
export const work = [
  { src: '/media/work/kitchen.webp', alt: 'Kitchen with island and hardwood floor after a deep clean.', room: 'Kitchen' },
  { src: '/media/work/hearth.webp', alt: 'Living room with stone fireplace and vaulted ceiling after service.', room: 'Living room' },
  { src: '/media/work/bath.webp', alt: 'Bathroom with freestanding tub after a deep clean.', room: 'Bath' },
  { src: '/media/work/bedroom.webp', alt: 'Bedroom made up after service.', room: 'Bedroom' },
  { src: '/media/work/living.webp', alt: 'Sitting room with sectional after service.', room: 'Sitting room' },
  { src: '/media/work/sunroom.webp', alt: 'Sunroom with plants and windows after service.', room: 'Sunroom' },
] as const

/**
 * AMP's own words, posted publicly to their Facebook page. This is the
 * positioning line the whole site is built on, so it lives here with every
 * other sourced claim rather than hardcoded in a component.
 */
export const manifesto = {
  quote: 'Expecting perfection while paying bargain rates is wild behavior.',
  tail: 'You can’t ask for premium results while shopping in the discount aisle.',
  attribution: 'AMP, on their own Facebook page',
} as const

/**
 * Verbatim from a summer post asking clients to put the AC on. It is the
 * single most human thing on their page and it says more about how they
 * work than any amount of marketing copy could.
 */
export const houseRule = {
  quote:
    'Cleaning is hard physical work, and when there’s no airflow and the temperature keeps rising, it can become exhausting very quickly. A little cool air makes a huge difference for your cleaning girls and helps us do our best work for you.',
  attribution: 'AMP, asking clients to turn the AC on, summer 2026',
} as const

export const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#detail', label: 'Attention to detail' },
  { href: '/#reviews', label: 'Reviews' },
] as const
