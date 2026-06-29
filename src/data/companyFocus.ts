export interface CompanyFocus {
  companyName: string
  role: string
  coverLetter: {
    greeting: string
    paragraphs: string[]
    closing: string
  }
  projectSlugs: string[]
}

export const COMPANY_FOCUS: Record<string, CompanyFocus> = {
  workstream: {
    companyName: 'Workstream',
    role: 'Revenue Operations Manager',
    coverLetter: {
      greeting: 'Dear Workstream Team,',
      paragraphs: [
        "Workstream is solving a genuinely hard problem — bringing modern HR, payroll, and compliance infrastructure to the businesses that run on hourly workers. 46 of the top 50 QSR brands trust you with their people operations, and I think the RevOps function that supports that kind of growth deserves the same level of engineering rigor the product itself gets. That's what drew me to this role.",
        "Your posting asks for 4+ years in RevOps. I have two — but those two years look different from most candidates you'll meet. I own the CRO and CMO pipeline reporting relationship at Domo, designed the ADM commission plan from scratch, and built $350K worth of internal GTM tools that the revenue org uses daily. I didn't support a RevOps function — I was it. What I lack in title tenure, I more than make up for in scope and depth.",
        "The requirement that stands out most in your posting is daily Claude Code use. That's not aspirational for me — it's how I work. I've shipped a pre-call AI research agent that reads Outlook calendars and emails personalized briefs before every meeting, an account intelligence platform that pre-computes overnight across 12 Jupyter notebooks, and a call coaching system that scores discovery calls against a 9-category rubric using the Claude API. These aren't side projects — they're tools the Domo revenue org relies on every day. I'd bring the same builder mentality to Workstream's RevOps infrastructure.",
        "I'd love to walk through how these systems work and discuss what the first 90 days in this role could look like. Thank you for your time.",
      ],
      closing: 'Hunter Nilsen',
    },
    projectSlugs: [
      'rev-research',
      'rev-radar-expand',
      'no-lead-left-behind',
      'free-trial-growth-initiative',
      'commission-calculator',
      'clay-old-opportunity-workflow',
    ],
  },

  revver: {
    companyName: 'Revver',
    role: 'Director of GTM Systems & Automations',
    coverLetter: {
      greeting: 'Dear Revver Team,',
      paragraphs: [
        "The opportunity to architect the full GTM systems layer at a company actively reinventing its revenue motion is exactly the kind of role I'm looking for. Revver has a 25-year customer base, a new CRO, and a product roadmap built around AI — that combination is a rare foundation for someone who wants to build something that actually sticks.",
        "I'll be direct about tenure: the Director title typically implies more years than I have. What I'd offer instead is scope. At Domo, I've held the full GTM systems function — not as an analyst supporting a manager, but as the person the CRO and CMO come to for pipeline visibility, attribution decisions, and tooling tradeoffs. I've built the commission plan, the call coaching platform, the account intelligence layer, and the outbound enrichment workflows. Two years of full ownership is different from two years of supporting someone who owns it.",
        "Your requirements list Clay, Python, JavaScript, SQL, LLM APIs, prompt orchestration, and agentic workflows. I use all of these in production. The RevSuite — a set of internal GTM tools I built to replace $350K in SaaS spend — is built on the same stack: Vite, React, TypeScript, Python pipelines, and the Claude API as the AI layer. I've connected systems via APIs and webhooks, built enrichment pipelines in Clay, and deployed AI agents that automate work across the revenue org. The technical bar you're describing is the work I'm already doing.",
        "I'd welcome the chance to share specific examples and discuss what full GTM systems ownership at Revver looks like in practice. Thank you for your consideration.",
      ],
      closing: 'Hunter Nilsen',
    },
    projectSlugs: [
      'rev-suite-catalog',
      'rev-replay',
      'rev-routine',
      'rev-research',
      'adm-daily-command-center',
      'revops-report-library',
    ],
  },

  broccoli: {
    companyName: 'Broccoli AI',
    role: 'Revenue Operations Manager',
    coverLetter: {
      greeting: 'Dear Broccoli AI Team,',
      paragraphs: [
        "What you're building matters — trades contractors have been underserved by technology for decades, and the fact that you're getting 85% booking rates with AI voice agents while integrating directly into ServiceTitan is a real, durable product advantage. I want to be part of building the RevOps infrastructure that scales that traction.",
        "Your posting asks for 3+ years of RevOps experience. I'm at two — but I've spent those two years building RevOps from the ground up at a fast-moving SaaS company, which is precisely what you need right now at $1.8M ARR. The most valuable thing I can offer isn't tenure; it's that I've already built the systems you're about to need and I know which ones actually get used and which ones collect dust. I've driven a 27-32% improvement in MQL→SAL conversion, cut time-to-onboarding from 14 to 4 days, and automated the lead recovery process that was letting opportunities fall through the funnel unworked.",
        "On HubSpot: I'm completing the HubSpot Revenue Operations certification this week. I have deep experience designing and operating RevOps systems — lifecycle stages, lead routing, funnel reporting, attribution — and I'm bringing that same depth to HubSpot's specific implementation. Beyond the cert, I've built Clay and Apollo outbound workflows with custom prompt engineering that generated $500K from a single campaign. I'll bring both the operational fundamentals and the AI-native automation angle to your RevOps build.",
        "I'd love to learn more about the current GTM infrastructure and what the first 90 days in this role looks like. Looking forward to connecting.",
      ],
      closing: 'Hunter Nilsen',
    },
    projectSlugs: [
      'free-trial-growth-initiative',
      'no-lead-left-behind',
      'clay-old-opportunity-workflow',
      'marketing-sal-creation-dashboard',
      'commission-calculator',
      'revops-report-library',
    ],
  },

  sameday: {
    companyName: 'Sameday AI',
    role: 'Revenue Operations Manager',
    coverLetter: {
      greeting: 'Dear Sameday AI Team,',
      paragraphs: [
        "The home services market has been waiting for this — an AI that answers the phone, qualifies the lead, and books the job without a human in the loop. $3.5M ARR bootstrapped is a strong signal of real product-market fit, not just VC-funded growth. I want to build the RevOps foundation that takes that traction to $10M and beyond.",
        "Your posting lists Clay and Apollo as core requirements. I've built outbound workflows in both at scale — custom enrichment tables, multi-step waterfall enrichment, persona-specific prompt engineering for personalization, and AI-generated first-lines that meaningfully lift reply rates. A single Clay-powered campaign I built at Domo surfaced $500K in pipeline from lapsed opportunities within 3 months. That's the specific operational DNA your stage needs. And while I'm two years into my RevOps career rather than three, those two years have included owning the CRO/CMO reporting relationship, designing the commission plan, and driving a 27-32% MQL→SAL conversion improvement — not analyst support work.",
        "On HubSpot: I'm completing the Revenue Operations certification this week and bringing that alongside deep operational experience in lifecycle stage design, lead routing, funnel attribution, and data hygiene — the things that matter most when you're building RevOps from scratch. I'm also fluent in the AI tools layer (Claude API, agentic workflows, Python) which means I can automate the RevOps function itself, not just operate it.",
        "I'd love to hear more about the current HubSpot setup and where you see the biggest RevOps gaps today. Thank you for your time.",
      ],
      closing: 'Hunter Nilsen',
    },
    projectSlugs: [
      'clay-old-opportunity-workflow',
      'ai-outbound-engine',
      'free-trial-growth-initiative',
      'no-lead-left-behind',
      'marketing-sal-creation-dashboard',
      'adm-daily-command-center',
    ],
  },
}
