// Central fictional clinic data — replace these values to rebrand the whole site.
export const clinic = {
  name: "YourCompany Dental Studio",
  tagline: "Thoughtful dentistry. Naturally confident smiles.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@yourcompany.example",
  address: "123 Wellness Avenue, Pathanamthitta, Kerala, India",
  city: "Pathanamthitta",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  mapsUrl: "https://maps.google.com/?q=Pathanamthitta,+Kerala,+India",
};

export const marqueeItems = [
  "New patients welcome",
  "Same-day emergencies",
  "Evening & weekend hours",
  "Transparent estimates",
  "Gentle, judgment-free care",
  "Free cosmetic consultations",
];

export type Service = {
  slug: string;
  title: string;
  category: string;
  short: string;
  description: string;
  whoBenefits: string[];
  whatToExpect: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const serviceCategories: {
  title: string;
  description: string;
  services: { slug: string; title: string }[];
}[] = [
  {
    title: "General Dentistry",
    description:
      "Checkups, cleanings, fillings, and screenings — the quiet visits that keep dentistry easy.",
    services: [
      { slug: "general-dentistry", title: "Checkups & Cleanings" },
      { slug: "general-dentistry", title: "Tooth-Coloured Fillings" },
      { slug: "general-dentistry", title: "Nightguards" },
      { slug: "general-dentistry", title: "Oral Health Screening" },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Whitening, veneers, and bonding designed around your face — natural-first, always.",
    services: [
      { slug: "cosmetic-dentistry", title: "Smile Design" },
      { slug: "teeth-whitening", title: "Teeth Whitening" },
      { slug: "cosmetic-dentistry", title: "Porcelain Veneers" },
      { slug: "cosmetic-dentistry", title: "Composite Bonding" },
    ],
  },
  {
    title: "Orthodontics",
    description:
      "Nearly invisible aligners and modern braces, planned with a preview of your finished smile.",
    services: [
      { slug: "clear-aligners", title: "Clear Aligners" },
      { slug: "clear-aligners", title: "Traditional Braces" },
    ],
  },
  {
    title: "Restorative Dentistry",
    description:
      "Permanent, natural-feeling replacement and repair — from one tooth to a full arch.",
    services: [
      { slug: "dental-implants", title: "Dental Implants" },
      { slug: "dental-implants", title: "Crowns & Bridges" },
      { slug: "dental-implants", title: "Dentures" },
    ],
  },
  {
    title: "Gum Care",
    description:
      "Healthy gums are the foundation of every lasting smile — gentle therapy, honest advice.",
    services: [
      { slug: "general-dentistry", title: "Periodontal Care" },
      { slug: "general-dentistry", title: "Scaling & Root Planing" },
    ],
  },
  {
    title: "Children's Dentistry",
    description:
      "Playful, pressure-free visits that build kids who actually like the dentist.",
    services: [
      { slug: "childrens-dentistry", title: "Children's Checkups" },
      { slug: "childrens-dentistry", title: "Preventive Care" },
      { slug: "childrens-dentistry", title: "Fluoride Treatments" },
    ],
  },
  {
    title: "Emergency & Surgical Care",
    description:
      "Same-day relief for toothaches, breaks, and knocked-out teeth. Call first thing; be seen today.",
    services: [
      { slug: "emergency-dentistry", title: "Emergency Dentistry" },
      { slug: "root-canal-treatment", title: "Root Canal Treatment" },
      { slug: "emergency-dentistry", title: "Tooth Extractions" },
      { slug: "emergency-dentistry", title: "Wisdom Teeth Removal" },
    ],
  },
];

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    category: "Everyday care",
    short:
      "Checkups, cleanings, fillings, and screenings — the quiet visits that keep dentistry easy.",
    description:
      "General dentistry is the foundation everything else stands on. Regular checkups catch small problems while they're still small, professional cleanings remove what brushing can't, and honest screenings keep you informed rather than surprised.",
    whoBenefits: [
      "Anyone due (or overdue) for a checkup and cleaning",
      "Families wanting one clinic for every generation",
      "Patients who grind their teeth at night",
      "Anyone who wants a clear, honest picture of their oral health",
    ],
    whatToExpect: [
      "A thorough, unhurried examination with digital X-rays only when needed",
      "A gentle professional cleaning scaled to your comfort",
      "Plain-language findings and a written estimate before any treatment",
    ],
    process: [
      { title: "Examine", text: "We check teeth, gums, bite, and soft tissue, with low-dose digital imaging where it adds value." },
      { title: "Clean", text: "A hygienist removes plaque and tartar gently, polishing to a smooth finish." },
      { title: "Plan", text: "You leave with a clear picture of your health and — only if needed — a prioritised, priced plan." },
    ],
    faqs: [
      { q: "How often should I come in?", a: "Most people do well with a visit every six months. If your gums need closer attention, we'll suggest a rhythm that fits you — and explain why." },
      { q: "Do X-rays happen every visit?", a: "No. We take digital X-rays only when clinically useful, following standard interval guidelines." },
      { q: "Will a cleaning hurt?", a: "It shouldn't. Tell us about sensitive spots and we'll adjust — numbing gel is always available." },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    category: "Smile design",
    short:
      "Whitening, veneers, and bonding designed around your face — natural-first, always.",
    description:
      "Good cosmetic dentistry is invisible. We design around your face, skin tone, and the way you smile — aiming for results that look like you on your best day, never like dental work.",
    whoBenefits: [
      "Anyone self-conscious about stained, chipped, or uneven teeth",
      "People preparing for weddings, photos, or public-facing work",
      "Patients wanting subtle improvement rather than a dramatic overhaul",
    ],
    whatToExpect: [
      "A design consultation with photos and shade analysis",
      "A preview of the planned result before treatment begins",
      "Conservative techniques that preserve healthy tooth structure",
    ],
    process: [
      { title: "Listen", text: "We start with what you see in the mirror and what you'd like to change." },
      { title: "Design", text: "Photos, shades, and proportions are planned together — you approve the design first." },
      { title: "Create", text: "Treatment is carried out conservatively, with temporaries you can test-drive where relevant." },
    ],
    faqs: [
      { q: "Will veneers look fake?", a: "Not the way we do them. We favour natural translucency and texture over the uniform 'piano key' look." },
      { q: "How long do results last?", a: "Bonding typically lasts several years; porcelain veneers often a decade or more with good care." },
      { q: "Is a consultation really free?", a: "Yes — cosmetic consultations are complimentary and carry no obligation." },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic dentistry",
    short:
      "Safe, supervised whitening that lifts years of staining — in-clinic or at home.",
    description:
      "Professional whitening lifts stains that toothpaste can't touch. We offer in-clinic whitening for fast results and custom take-home trays for gradual brightening — always supervised, always safe for your enamel.",
    whoBenefits: [
      "Coffee, tea, or red-wine drinkers with gradual staining",
      "Anyone wanting a brighter smile before a big event",
      "Patients who tried shop-bought kits with disappointing results",
    ],
    whatToExpect: [
      "A check that whitening is suitable for your teeth and gums",
      "Realistic shade expectations set before we begin",
      "Guidance on managing temporary sensitivity",
    ],
    process: [
      { title: "Assess", text: "We confirm your teeth and gums are healthy enough for whitening and record your starting shade." },
      { title: "Whiten", text: "Choose a single in-clinic session or custom trays worn at home over two weeks." },
      { title: "Maintain", text: "We show you how to keep the result bright with simple top-ups." },
    ],
    faqs: [
      { q: "Does whitening damage enamel?", a: "Professional whitening, used as directed, does not damage enamel. Supervision matters — which is why we check first." },
      { q: "How white will I get?", a: "Most patients lift several shades. We'll show you a realistic target before starting." },
      { q: "Will it hurt?", a: "Some temporary sensitivity is common and settles within days. We can adjust the protocol if you're prone to it." },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Restorative dentistry",
    short:
      "Permanent, natural-feeling replacement for missing teeth — from one tooth to a full arch.",
    description:
      "An implant replaces the root of a missing tooth with a small titanium post, then crowns it with a tooth that looks and works like your own. It's the closest thing to getting your tooth back.",
    whoBenefits: [
      "Anyone missing one or more teeth",
      "Denture wearers wanting a stable, fixed alternative",
      "Patients who want to protect neighbouring teeth from a bridge preparation",
    ],
    whatToExpect: [
      "3D imaging and a careful assessment of bone and gum health",
      "A staged plan with clear timelines and costs at each step",
      "A final crown matched to your surrounding teeth",
    ],
    process: [
      { title: "Plan", text: "3D scans map bone and nerves so placement is precise and predictable." },
      { title: "Place", text: "The implant is placed under local anaesthetic — most patients are surprised how easy it is." },
      { title: "Restore", text: "After healing, a custom crown is fitted and your bite is checked carefully." },
    ],
    faqs: [
      { q: "How long do implants last?", a: "With good care, implants routinely last decades. They have the best long-term track record of any tooth replacement." },
      { q: "Is the surgery painful?", a: "Most patients report less discomfort than an extraction, managed well with local anaesthetic." },
      { q: "Am I too old for implants?", a: "Age alone isn't a barrier — bone health and general health matter far more." },
    ],
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    category: "Orthodontics",
    short:
      "Nearly invisible aligners with a 3D preview of your finished smile — consultation free.",
    description:
      "Clear aligners straighten teeth with a series of removable, nearly invisible trays. We plan every case digitally, so you can see your projected result before you commit to anything.",
    whoBenefits: [
      "Adults and teens with crowding, gaps, or mild bite issues",
      "Anyone who wants straightening without visible brackets",
      "People whose teeth shifted after earlier orthodontic treatment",
    ],
    whatToExpect: [
      "A digital scan — no messy impressions",
      "A 3D simulation of your projected result",
      "Reviews every few weeks to keep treatment on track",
    ],
    process: [
      { title: "Scan", text: "A quick digital scan captures your teeth in minutes." },
      { title: "Preview", text: "You see a 3D simulation of the finished smile and approve the plan." },
      { title: "Straighten", text: "Wear each aligner set as directed; we review progress and refine if needed." },
    ],
    faqs: [
      { q: "How long does treatment take?", a: "Simple cases can finish in months; most complete within 6–18 months. Your preview includes an honest estimate." },
      { q: "Can I eat with aligners in?", a: "No — you remove them to eat and drink anything but water, which is why they fit real life so well." },
      { q: "Are aligners as good as braces?", a: "For many cases, yes. For complex movements, braces may still be better — we'll tell you honestly which suits you." },
    ],
  },
  {
    slug: "childrens-dentistry",
    title: "Children's Dentistry",
    category: "Family care",
    short:
      "Playful, pressure-free visits that build kids who actually like the dentist.",
    description:
      "Children's dentistry is mostly about trust. First visits are short and playful, prevention is the focus, and we move at your child's pace — so the dentist becomes a place they feel safe, not scared.",
    whoBenefits: [
      "Toddlers coming for a first visit (we recommend around age one)",
      "School-age children needing checkups, fluoride, or sealants",
      "Nervous kids who've had a difficult experience elsewhere",
    ],
    whatToExpect: [
      "A gentle, unhurried introduction to the chair and instruments",
      "Prevention-first care: fluoride, sealants, and habit coaching",
      "Honest guidance for parents on diet, brushing, and thumb-sucking",
    ],
    process: [
      { title: "Meet", text: "First visits are about familiarity — a ride in the chair, a look around, no pressure." },
      { title: "Prevent", text: "Fluoride and sealants protect young teeth before problems start." },
      { title: "Grow", text: "We monitor development and flag orthodontic concerns early, when they're easiest to guide." },
    ],
    faqs: [
      { q: "When should my child first visit?", a: "Around their first birthday, or when the first tooth appears. Early visits are short, free of treatment, and build comfort." },
      { q: "What if my child cries or won't cooperate?", a: "That's completely normal and we never force it. We go at their pace — sometimes the win is just sitting in the chair." },
      { q: "Are baby teeth really that important?", a: "Yes — they hold space for adult teeth, guide speech and chewing, and infections in them can be serious." },
    ],
  },
  {
    slug: "emergency-dentistry",
    title: "Emergency Dentistry",
    category: "Same-day care",
    short:
      "Same-day relief for toothaches, breaks, and knocked-out teeth. Call first thing; be seen today.",
    description:
      "Toothache at breakfast, chair by afternoon. We reserve emergency time every open day — weekends included — because dental pain doesn't check the calendar.",
    whoBenefits: [
      "Anyone in dental pain right now",
      "Chipped, cracked, or knocked-out teeth",
      "Lost fillings, broken crowns, or swelling that can't wait",
    ],
    whatToExpect: [
      "A same-day appointment whenever humanly possible",
      "Pain relief first, definitive treatment planned calmly after",
      "Clear costs before any procedure begins",
    ],
    process: [
      { title: "Call", text: "Ring us as early as you can — we triage over the phone and reserve the right slot." },
      { title: "Relieve", text: "First priority is getting you comfortable: diagnosis, pain control, stabilisation." },
      { title: "Resolve", text: "Once you're comfortable, we plan the definitive fix with a written estimate." },
    ],
    faqs: [
      { q: "What counts as a dental emergency?", a: "Severe pain, swelling, bleeding that won't stop, a knocked-out tooth, or trauma. When in doubt, call — we'd rather reassure you than have you wait." },
      { q: "A tooth got knocked out. What do I do?", a: "Hold it by the crown, rinse briefly, and keep it in milk or inside your cheek. Get to us within the hour if possible — time matters." },
      { q: "Do you charge extra for emergencies?", a: "You pay for the treatment you need, quoted before we start. No surprise 'emergency fees'." },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Emergency & surgical care",
    short:
      "Modern root canal treatment relieves pain and saves your natural tooth — comfortably.",
    description:
      "A root canal treats infection inside the tooth, relieving pain while keeping your natural tooth in place. With modern anaesthesia and technique, most patients find it no more dramatic than a filling.",
    whoBenefits: [
      "Anyone with a deep ache, lingering sensitivity, or an abscess",
      "Patients told a tooth needs extraction who want a second opinion",
      "People wanting to keep their natural tooth rather than replace it",
    ],
    whatToExpect: [
      "Profound numbing confirmed before we begin",
      "Treatment in one or two visits depending on the infection",
      "A crown recommendation afterwards to protect the treated tooth",
    ],
    process: [
      { title: "Diagnose", text: "Imaging and testing confirm whether the nerve is infected and the tooth is saveable." },
      { title: "Treat", text: "The infected tissue is removed, the canal disinfected and sealed — under full anaesthesia." },
      { title: "Protect", text: "A crown is usually recommended to protect the tooth long-term." },
    ],
    faqs: [
      { q: "Is a root canal painful?", a: "The procedure itself is done under effective anaesthesia — the pain people remember is usually the infection that brought them in, which the treatment relieves." },
      { q: "Why not just pull the tooth?", a: "Keeping your natural tooth is almost always the better option for chewing, bone health, and cost over time." },
      { q: "How long does it take?", a: "Most root canals finish in one or two appointments of about an hour." },
    ],
  },
];

export const teamMembers = [
  { name: "Dr. Ananya Ravi", role: "Lead Dentist", bio: "Demo profile — leads clinical care with a gentle, prevention-first philosophy and a famously light touch." },
  { name: "Dr. Arjun Menon", role: "Associate Dentist", bio: "Demo profile — focuses on restorative and family dentistry, known for plain-language explanations." },
  { name: "Dr. Priya Nair", role: "Orthodontic Provider", bio: "Demo profile — plans clear aligner and braces cases with digital smile previews." },
  { name: "Lakshmi S.", role: "Dental Hygienist", bio: "Demo profile — gentle cleanings and practical prevention coaching for every age." },
  { name: "Rahul K.", role: "Dental Assistant", bio: "Demo profile — keeps appointments running smoothly and patients comfortable in the chair." },
  { name: "Meera T.", role: "Front Desk Coordinator", bio: "Demo profile — the first voice you'll hear; handles scheduling, estimates, and records transfers." },
];

export const testimonials = [
  { quote: "I put off the dentist for six years out of fear. Nobody lectured me — they just made a plan. Two visits in, I actually look forward to going.", name: "Sarah M.", tag: "New patient" },
  { quote: "Seeing my finished smile in 3D before paying a rupee sold me. Months later, the real thing looks exactly like the preview.", name: "Raman K.", tag: "Aligner patient" },
  { quote: "They turned my daughter's first filling into a game. She came out asking if she could come back tomorrow.", name: "Jasleen D.", tag: "Mom of three" },
  { quote: "Cracked a molar Saturday morning, called at 9, sat in the chair by 11:30, pain gone by lunch. Weekend hours are no joke.", name: "Michael T.", tag: "Emergency visit" },
];

export const homeFaqs = [
  { q: "I'm a new patient. How fast can I get in?", a: "Usually within the same week — and same-day for emergencies. Book online or call; bring any previous records if you have them and we handle everything else." },
  { q: "Do you give estimates before treatment?", a: "Always. Every treatment plan comes with a written, itemised estimate before anything begins — no surprises at the front desk." },
  { q: "What if I'm nervous about the dentist?", a: "You're in excellent company — and in the right place. Tell us when you book: we'll schedule extra time, move at your pace, and explain everything before it happens." },
  { q: "Do you see kids?", a: "We love seeing kids. First visits are short and playful, prevention is the focus, and we aim for a first visit around age one." },
  { q: "What payment options do you accept?", a: "We accept UPI, cards, and cash, and can discuss staged payment for larger treatment plans. Costs are always agreed in writing first." },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: { heading?: string; text: string; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-really-see-the-dentist",
    title: "How often should you really see the dentist?",
    category: "Prevention",
    date: "March 12, 2026",
    excerpt: "The six-month rule is a starting point, not a law. Here's how to find the rhythm that actually fits your mouth.",
    body: [
      { text: "Twice a year is the advice almost everyone has heard — and for many people it's right. But the honest answer is that the ideal interval depends on your gums, your history, and your habits." },
      { heading: "Who does well on six months", text: "If your gums are healthy, you get few cavities, and you clean well at home, a checkup and cleaning every six months keeps small things small. It's the rhythm most families settle into." },
      { heading: "Who should come more often", text: "Some mouths need closer attention. You may benefit from visits every three to four months if you:", list: ["Have a history of gum disease", "Get cavities easily", "Smoke or have diabetes", "Are pregnant", "Wear braces or aligners"] },
      { heading: "Who might stretch it — carefully", text: "A small number of low-risk patients can extend to nine or twelve months with their dentist's agreement. That's a decision to make together, based on evidence from your own checkups — not a default." },
      { text: "The right interval is the one that keeps you out of the emergency chair. Ask at your next visit — it's a two-minute conversation." },
    ],
  },
  {
    slug: "whitening-myths-worth-forgetting",
    title: "Five whitening myths worth forgetting",
    category: "Cosmetic Dentistry",
    date: "February 28, 2026",
    excerpt: "Charcoal, lemon juice, and other internet favourites — what actually works, and what quietly damages enamel.",
    body: [
      { text: "Whitening is one of the most asked-about treatments we offer — and one of the most surrounded by myths. A few worth retiring:" },
      { heading: "Myth 1: Charcoal toothpaste whitens safely", text: "Charcoal is abrasive. It can scrub away surface stain — along with a little enamel, which doesn't grow back. Thinner enamel actually looks more yellow over time." },
      { heading: "Myth 2: Lemon juice and baking soda are 'natural' whitening", text: "Acid plus abrasion is a reliable recipe for enamel erosion. Natural doesn't mean gentle." },
      { heading: "Myth 3: Whitening ruins your teeth", text: "Professional whitening, used as directed, does not damage enamel. The key word is professional — a check first confirms your teeth and gums are suitable." },
      { heading: "Myth 4: Results are instant and permanent", text: "Whitening lifts stains gradually and needs occasional top-ups, especially if you love coffee or tea. Realistic expectations make for happy results." },
      { heading: "Myth 5: All gels are the same", text: "Concentration, fit, and supervision matter. Custom trays keep gel on teeth and off gums — which is why supervised whitening outperforms one-size kits." },
    ],
  },
  {
    slug: "clear-aligners-vs-braces",
    title: "Clear aligners vs. braces: an honest comparison",
    category: "Orthodontics",
    date: "February 10, 2026",
    excerpt: "Both straighten teeth well. The right choice depends on your case, your lifestyle, and your discipline.",
    body: [
      { text: "Patients often arrive convinced they need aligners — or convinced aligners can't handle their case. The truth is usually in the middle." },
      { heading: "Where aligners shine", text: "Aligners are nearly invisible, removable for eating and brushing, and comfortable. For crowding, gaps, and mild-to-moderate bite issues in compliant wearers, they're excellent." },
      { heading: "Where braces still win", text: "Complex rotations, significant bite correction, and cases where discipline is a concern (aligners only work when worn 20–22 hours a day) often do better with fixed braces." },
      { heading: "The questions that decide it", text: "At a consultation, we look at:", list: ["How complex the tooth movements are", "Whether you'll realistically wear aligners as directed", "Your timeline and budget", "Whether you mind visible brackets"] },
      { text: "A digital scan and preview makes the choice concrete — you see what each option can achieve before committing to either." },
    ],
  },
  {
    slug: "what-to-do-in-a-dental-emergency",
    title: "What to do in a dental emergency (before you reach us)",
    category: "Emergency Care",
    date: "January 22, 2026",
    excerpt: "A knocked-out tooth, a sudden throb, a broken crown — the first thirty minutes matter more than you think.",
    body: [
      { text: "Dental emergencies are stressful, but a few simple steps in the first minutes can dramatically change the outcome — especially for knocked-out teeth." },
      { heading: "A knocked-out tooth", text: "Time is everything. Pick the tooth up by the crown (never the root), rinse it briefly if dirty, and either place it back in the socket or keep it in milk or inside your cheek. Get to a dentist within the hour if at all possible." },
      { heading: "A severe toothache", text: "Rinse with warm salt water, floss gently to rule out trapped food, and take your usual pain relief. Don't place aspirin against the gum — it burns tissue. Call us; same-day slots are reserved for exactly this." },
      { heading: "A broken tooth or lost crown", text: "Save any fragments. If the edge is sharp, cover it with sugar-free gum or dental wax from a pharmacy. Avoid chewing on that side until you're seen." },
      { heading: "Swelling", text: "Facial swelling, especially with fever or difficulty swallowing, is urgent. Call immediately — or go to emergency care if it's after hours and spreading." },
      { text: "When in doubt, call. We'd always rather reassure you over the phone than have you wait too long." },
    ],
  },
];
