import type { Project } from '../types/project'

export const PROJECT_DATA: Project[] = [
  // ── Dashboards & Data Infrastructure ──
  {
    slug: "pipeline-management-dashboard",
    title: "Pipeline Management Dashboard",
    date: "2025-04",
    dateLabel: "Apr 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Analysis", "Executive Dashboard"],
    impactAreas: ["Leadership Decision-Making", "Pipeline Health Monitoring"],
    summary: "Executive dashboard used by CMO, CRO, and RevOps leadership to monitor pipeline health and identify stalled deals.",
    company: "Domo",
    featured: false,
    detail: {
      tagline: "Executive visibility into pipeline health and deal velocity.",
      metrics: [
        { value: "C-Suite", label: "Used By" },
        { value: "Real-Time", label: "Pipeline Monitoring" },
        { value: "Stalled Deals", label: "Identifies" },
        { value: "Velocity", label: "Tracks Deal" }
      ],
      problem: "Leadership lacked a centralized view of pipeline health, making it difficult to identify stalled deals and track velocity across teams.",
      solution: "Built an executive dashboard providing real-time pipeline visibility, stalled deal identification, and velocity tracking for CMO, CRO, and RevOps leadership.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Adopted by C-suite leadership for daily pipeline reviews, improving deal velocity tracking and enabling faster intervention on stalled opportunities."
    }
  },
  {
    slug: "ae-inbound-conversion-dashboard",
    title: "AE Inbound Conversion Dashboard",
    date: "2025-06",
    dateLabel: "Jun 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Analysis", "Executive Dashboard"],
    impactAreas: ["Sales Performance Management", "Marketing Attribution"],
    summary: "Tracks how marketing leads are worked by individual reps, showing lead progression through pipeline stages for CMO and RVPs.",
    company: "Domo",
    featured: false,
    detail: {
      tagline: "Rep-level visibility into how marketing leads are worked and converted.",
      metrics: [
        { value: "CMO & RVPs", label: "Used By" },
        { value: "Per-Rep", label: "Performance Tracking" },
        { value: "Full Funnel", label: "Lead Progression" },
        { value: "Attribution", label: "Marketing" }
      ],
      problem: "Sales leadership had no visibility into how individual reps were working inbound marketing leads, making it impossible to identify coaching opportunities or attribution gaps.",
      solution: "Created a leadership dashboard that tracks how marketing leads are worked by individual reps, showing lead progression through every pipeline stage.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Used by CMO and RVPs for rep performance visibility, enabling targeted coaching and improved marketing-to-sales handoff accountability."
    }
  },
  {
    slug: "marketing-sal-creation-dashboard",
    title: "Marketing SAL Creation Dashboard",
    date: "2025-11",
    dateLabel: "Nov 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Analysis", "Executive Dashboard"],
    impactAreas: ["Funnel Analysis", "Gap Identification", "Executive Reporting"],
    summary: "High-visibility dashboard for CMO, CRO, and CEO that identified a critical gap in the Marketing SAL creation pipeline.",
    company: "Domo",
    featured: false,
    cardStats: ["CEO/CMO/CRO Users", "Critical Gap Found"],
    detail: {
      tagline: "Executive funnel analysis that uncovered a critical pipeline gap.",
      metrics: [
        { value: "CEO, CMO, CRO", label: "Used By" },
        { value: "Critical Gap", label: "Identified" },
        { value: "SAL Pipeline", label: "Monitors" },
        { value: "Executive", label: "Reporting Level" }
      ],
      problem: "Executive leadership needed clearer visibility into the Marketing SAL creation funnel to identify where leads were dropping off and why.",
      solution: "Built a high-visibility dashboard for the C-suite that tracks the entire SAL creation pipeline, enabling funnel analysis and gap identification at the executive level.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Identified a critical gap in the Marketing SAL creation pipeline, directly informing executive-level strategy and resource allocation decisions."
    }
  },
  {
    slug: "consolidated-team-leadership-app",
    title: "ADM Team App",
    date: "2025-09",
    dateLabel: "Sep 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Enablement"],
    impactAreas: ["Performance Management", "Coaching", "Analytics"],
    summary: "Consolidated dozens of disparate dashboards into a single cohesive analytics platform for the team.",
    company: "Domo",
    featured: false,
    cardStats: ["Dozens Consolidated", "Unified Platform"],
    detail: {
      tagline: "One platform replacing dozens of dashboards for team performance management.",
      metrics: [
        { value: "Dozens", label: "Dashboards Consolidated" },
        { value: "Unified", label: "Analytics Platform" },
        { value: "Quota", label: "Tracking" },
        { value: "Coaching", label: "Enabled" }
      ],
      problem: "Team leadership was juggling dozens of disparate dashboards across multiple tools, creating inefficiency and inconsistent data interpretation.",
      solution: "Consolidated all team analytics into a single cohesive app covering quota tracking, production monitoring, and coaching insights.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Replaced dozens of fragmented dashboards with a unified analytics platform, streamlining leadership workflows and enabling data-driven coaching."
    }
  },

  // ── Automation & Workflows ──
  {
    slug: "ai-outbound-engine",
    title: "AI Outbound Engine",
    date: "2026-02",
    dateLabel: "Feb 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "automation",
    section: "Automation & Workflows",
    tags: ["Automation", "GTM"],
    impactAreas: ["Pipeline Generation", "Prospecting Automation"],
    summary: "Automated prospecting engine built in Apollo.io with ICP targeting, daily contact sourcing, and AI-powered personalized email cadences.",
    company: "Domo",
    featured: false,
    detail: {
      tagline: "AI-powered prospecting that runs on autopilot.",
      metrics: [
        { value: "Apollo.io", label: "Platform" },
        { value: "Daily", label: "Contact Sourcing" },
        { value: "AI-Powered", label: "Email Cadences" },
        { value: "ICP-Based", label: "Targeting" }
      ],
      problem: "Manual prospecting was time-consuming and inconsistent, with reps spending hours sourcing contacts instead of selling.",
      solution: "Built an automated outbound engine in Apollo.io with ICP definition, TAM building, daily contact sourcing, and AI-powered personalized email cadences.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Automated daily prospecting pipeline, freeing reps to focus on selling while maintaining consistent, personalized outreach at scale."
    }
  },
  {
    slug: "clay-old-opportunity-workflow",
    title: "Old Opportunity Workflow",
    date: "2025-10",
    dateLabel: "Oct 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "automation",
    section: "Automation & Workflows",
    tags: ["Automation", "GTM"],
    impactAreas: ["Pipeline Creation", "Sales Acceleration"],
    summary: "Analyzes old opportunities using Gong call summaries to extract use cases and auto-generate templated outreach for reps.",
    company: "Domo",
    featured: false,
    cardStats: ["14 SALs", "$90k ACV", "$500k TCV"],
    detail: {
      tagline: "Reviving old opportunities with AI-powered account intelligence.",
      metrics: [
        { value: "14", label: "SALs Generated" },
        { value: "$500k", label: "TCV Closed-Won" },
        { value: "$90k", label: "ACV Closed-Won" },
        { value: "Automated", label: "Account Intel" }
      ],
      problem: "Old opportunities with valuable context were sitting untouched because reps lacked easy access to the original conversation insights.",
      solution: "Built a workflow using Gong and Clay that automatically analyzes old opportunities, extracts use cases and pain points from call summaries, and sends reps templated emails with account intelligence.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Generated 14 SALs and $500k TCV in closed-won revenue within 3 months by systematically re-engaging dormant opportunities with contextual outreach."
    }
  },
  {
    slug: "sgl-bulk-upload-process",
    title: "SGL Bulk Upload Process",
    date: "2025-05",
    dateLabel: "May 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "automation",
    section: "Automation & Workflows",
    tags: ["Automation", "GTM"],
    impactAreas: ["Operational Efficiency", "Sales Ops"],
    summary: "Streamlined process that saves ADMs and Sales Ops hours of manual work weekly while improving campaign attribution accuracy.",
    company: "Domo",
    featured: false,
    detail: {
      tagline: "Eliminating hours of manual data entry every week.",
      metrics: [
        { value: "Hours", label: "Saved Weekly" },
        { value: "Improved", label: "Attribution Accuracy" },
        { value: "ADMs + Sales Ops", label: "Users" },
        { value: "Automated", label: "Bulk Processing" }
      ],
      problem: "ADMs and Sales Ops were spending hours each week on manual SGL uploads, leading to errors and poor campaign attribution.",
      solution: "Designed a streamlined bulk upload process that automates the manual work and ensures consistent campaign attribution.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Saved ADMs and Sales Ops hours of manual work weekly and improved campaign attribution accuracy across the organization."
    }
  },

  // ── Team Enablement Tools & Processes ──
  {
    slug: "call-review-coaching-app",
    title: "STC Call Coaching",
    date: "2026-02",
    dateLabel: "Feb 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "revsuite",
    section: "RevSuite",
    tags: ["Enablement", "Sales Coaching", "AI"],
    impactAreas: ["Sales Coaching", "Rep Performance", "Methodology Enforcement"],
    summary: "STC call scoring platform for the revenue team: every Gong call scored against a 9-category rubric by AI overnight, with peer and leader reviews layered on top for targeted coaching.",
    company: "Domo",
    featured: false,
    cardStats: ["STC Framework", "AI Overnight Scoring", "9-Category Rubric"],
    detail: {
      tagline: "AI-scored every call so coaching is driven by data, not who a manager happened to listen to.",
      metrics: [
        { value: "Every Call", label: "AI-Scored Overnight" },
        { value: "9 Categories", label: "STC Rubric" },
        { value: "3 Review Types", label: "AI + Peer + Leader" },
        { value: "Team Benchmarks", label: "Score Overlay" }
      ],
      problem: "Sales coaching was inconsistent: managers manually reviewed a small sample of calls, leaving most reps without regular structured feedback and no visibility into where the team was weakest.",
      solution: "Built RevRadio (Vite 5 + React 18 + TypeScript + Tailwind + Zustand): a call scoring platform where a Jupyter AI pipeline scores every Gong discovery call against the 9-category STC rubric overnight, with human peer and leader reviews layered on top. Dashboard shows rep-level and team-level score trends with benchmark overlays.",
      building: "",
      results: "Every discovery call now gets scored. Coaching is targeted to actual gap categories rather than gut feel, and reps can study top-performing calls across each STC dimension to self-correct."
    },
    richDetail: {
      subtitle: "Call Review app to score, track, and improve sales team\u2019s performance with the STC framework.",
      heroStats: [
        { value: "196", label: "Commits" },
        { value: "7,800", label: "Lines of Code" },
        { value: "8", label: "Modular Components" }
      ],
      sections: [
        {
          type: "features",
          overline: "Overview",
          title: "Why COMINT?",
          subtitle: "Gives leaders and reps visibility into skill gaps and coaching opportunities.",
          cards: [
            { icon: "\uD83D\uDD0D", title: "Standardized Scoring", description: "Every call scored on the same 9-category STC framework. No more subjective, inconsistent feedback across reviewers." },
            { icon: "\uD83D\uDCCA", title: "Aggregated Dashboards", description: "See rep-level and team-level score trends over time. Identify who needs coaching and where the gaps are." },
            { icon: "\uD83C\uDFC6", title: "Top Performers", description: "Surface the best calls and highest-scoring reps so new hires can learn from real examples of excellence." },
            { icon: "\uD83E\uDD16", title: "AI + Human Reviews", description: "Three review types work together: Leadership, Peer, and automated AI scoring for complete coverage." },
            { icon: "\uD83D\uDD12", title: "Role-Based Access", description: "Leaders see all reps and full reviewer names. Reps see their own calls with anonymized peer feedback." },
            { icon: "\u26A1", title: "Built on Domo", description: "Runs natively in Domo with AppDB storage and dataset syncing. No external tools or infrastructure needed." }
          ]
        },
        {
          type: "three-col",
          overline: "Review Types",
          title: "Three Types of Reviews",
          subtitle: "Each review type provides a unique perspective on call quality.",
          cards: [
            { icon: "\uD83D\uDC64", title: "Leadership", description: "Managers and directors review calls to set standards and identify coaching opportunities." },
            { icon: "\uD83D\uDC65", title: "Peer", description: "Reps review each other\u2019s calls. Anonymized in the dashboard to encourage honest feedback." },
            { icon: "\uD83E\uDD16", title: "AI-Generated", description: "Automated daily scoring via LLM analysis of call transcripts. Ensures every call gets baseline coverage." }
          ]
        },
        {
          type: "compare",
          overline: "Impact",
          title: "Before & After COMINT",
          headers: ["Capability", "Before COMINT", "With COMINT"],
          rows: [
            ["Call review consistency", "Ad hoc, varies by manager", "Standardized 9-category STC scoring"],
            ["Skill gap identification", "Gut feel, quarterly", "Real-time dashboard with category breakdowns"],
            ["Peer learning", "Informal shadowing", "Top Performers section, anonymized peer reviews"],
            ["Review coverage", "~5% of calls reviewed", "AI scores every call, humans review strategically"],
            ["New hire ramp time", "Learn by trial and error", "Study top-rated calls across every STC category"]
          ]
        },
        {
          type: "workflow",
          overline: "Workflow",
          title: "How COMINT Works",
          subtitle: "From opening the app to submitting your first review in under 5 minutes.",
          steps: [
            { label: "Open COMINT", sublabel: "in Domo" },
            { label: "Pick a Call", sublabel: "from the queue" },
            { label: "Listen & Score", sublabel: "9 STC categories" },
            { label: "Submit Review", sublabel: "scores + comments" },
            { label: "View Dashboard", sublabel: "track progress" }
          ]
        },
        {
          type: "steps",
          overline: "Guide",
          title: "Getting Started",
          subtitle: "Five steps from queue to dashboard.",
          items: [
            { title: "Open the Review Queue", description: "The queue shows all available calls filtered by your role. Leaders see all reps; reps see their own calls for peer review. Use column filters to narrow by account, rep, stage, date, or duration." },
            { title: "Select a Call to Review", description: "Click any row to open the call workspace with the Gong player on the left and the review form on the right. The Gong player requires Okta SSO \u2014 if it shows a login prompt, click the login button and the app will automatically reload the player when you return." },
            { title: "Listen and Score", description: "Play the Gong recording while filling out the review form. Score each of the 9 STC categories from 0\u20135 and optionally add comments. The overall score calculates automatically as the average." },
            { title: "Submit Your Review", description: "Hit submit. Your review is saved to the AppDB collection and automatically synced to the dashboard dataset. A success toast confirms the submission and you return to the queue." },
            { title: "Check the Dashboard", description: "Switch to the User Dashboard to see aggregated scores, KPI cards for each STC category, score trends over time, and the Top Performers section. Filter by rep, account, date range, or review type." }
          ]
        },
        {
          type: "rubric",
          overline: "Scoring Framework",
          title: "The STC Rubric",
          subtitle: "Each category is scored 0\u20135. Click any category to see the scoring criteria.",
          scoreNote: "The overall score is the average of all 9 categories. Scores below 3.0 are flagged for coaching, 3.0\u20133.9 indicate solid performance, and 4.0+ represents excellence.",
          categories: [
            {
              title: "Current Situation",
              description: "Did the rep explore where the prospect is today with genuine curiosity?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Genuine curiosity with broad, open-ended questions that let the prospect describe their world.", example: "Could you walk me through a typical day or week in your role?" },
                { level: "mid", scores: "2\u20133", content: "Decent but surface-level questions \u2014 gets the \u201Cwhat\u201D but not the \u201Chow\u201D or \u201Cwhy.\u201D", example: "What are your top 3 priorities this quarter?" },
                { level: "low", scores: "0\u20131", content: "Closed-ended or leading questions, or jumps directly to problems without exploration.", example: "So, are you struggling with lead generation?" }
              ]
            },
            {
              title: "Call Preparedness",
              description: "Did the rep\u2019s questions show specific research into the customer\u2019s company or industry?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Questions show specific research into the customer\u2019s company, industry, or recent news.", example: "I saw your CEO\u2019s recent article on sustainability \u2014 how does that initiative impact your team\u2019s goals?" },
                { level: "mid", scores: "2\u20133", content: "Basic research (knows company name/product) but lacks deeper insights into their specific situation.", example: "Since you\u2019re in the software industry, are you seeing X trend?" },
                { level: "low", scores: "0\u20131", content: "The call felt generic with no evidence of any research or preparation.", example: "So, tell me what your company does." }
              ]
            },
            {
              title: "Problem Defined",
              description: "Did the rep co-create the problem definition and guide the prospect to an \u201Caha\u201D moment?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Rep co-creates the problem definition, guiding the prospect to articulate the root cause themselves.", example: "That\u2019s a good point \u2014 I guess the real problem isn\u2019t just the slow reports, it\u2019s that we don\u2019t trust the data." },
                { level: "mid", scores: "2\u20133", content: "A problem is identified, but stays at surface level without exploring the root cause.", example: "Customer: \u201COur reporting is a mess.\u201D Rep: \u201COkay, so messy reporting is the main issue.\u201D" },
                { level: "low", scores: "0\u20131", content: "Rep accepts a vague symptom or immediately pitches a solution without defining the real problem.", example: "Customer: \u201COur reporting is slow.\u201D Rep: \u201CGreat, our product is super fast!\u201D" }
              ]
            },
            {
              title: "Impact",
              description: "Did the rep guide the customer to articulate the quantifiable business impact of the problem?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Rep successfully guides the customer to articulate quantifiable negative consequences in business terms.", example: "What\u2019s the cost in man-hours per week when your team has to manually fix those data errors?" },
                { level: "mid", scores: "2\u20133", content: "Discusses qualitative impact (\u201Cthat must be frustrating\u201D) but fails to quantify in business terms.", example: "How does that frustration affect team morale?" },
                { level: "low", scores: "0\u20131", content: "Rep ignores the impact or minimizes the pain, moving on without exploring consequences.", example: "Customer: \u201CIt\u2019s a huge headache.\u201D Rep: \u201COkay. Anyway\u2026\u201D" }
              ]
            },
            {
              title: "Ideal",
              description: "Did the rep get the prospect to describe their own ideal future state?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Uses \u201Cmagic wand\u201D or vision-oriented questions to get the prospect to describe their own desired outcomes.", example: "If you could wave a magic wand and design the perfect process from scratch, what would it look like?" },
                { level: "mid", scores: "2\u20133", content: "Leads the witness by framing the ideal state around their own product instead of the prospect\u2019s vision.", example: "What if you had a dashboard that showed you all these metrics in real-time?" },
                { level: "low", scores: "0\u20131", content: "Pitches their own product as the ideal solution instead of asking, or skips this step entirely.", example: "Let me show you what the future could look like with our platform." }
              ]
            },
            {
              title: "Benefit",
              description: "Did the rep connect discovery findings to outcomes the prospect can internalize?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Reframes features into outcome-oriented questions, forcing the prospect to internalize the value.", example: "You mentioned your team spends 20 hours a week on this. What would they do with that extra time?" },
                { level: "mid", scores: "2\u20133", content: "States a logical benefit but fails to explicitly connect it back to a pain the customer mentioned.", example: "This will help your team be more efficient." },
                { level: "low", scores: "0\u20131", content: "Feature-dumps or states generic benefits disconnected from the conversation.", example: "Our platform has 500+ connectors, AI-powered analytics, and real-time dashboards." }
              ]
            },
            {
              title: "Layering",
              description: "Did the rep use follow-up questions to peel back layers from operational to strategic?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Uses simple follow-up questions to peel back multiple layers, moving from operational to strategic impact.", example: "Tell me more about that.\u201D \u2026 \u201CWhat\u2019s the consequence of that when it happens?" },
                { level: "mid", scores: "2\u20133", content: "Asks one level of follow-up but stops there instead of continuing to dig deeper.", example: "Customer: \u201CThe report is slow.\u201D Rep: \u201CWhy is that an issue?\u201D Customer: \u201CIt delays our meetings.\u201D Rep: \u201COkay.\u201D" },
                { level: "low", scores: "0\u20131", content: "Accepts the first answer at face value and moves on without probing deeper at all.", example: "Customer: \u201CIt\u2019s slow.\u201D Rep: \u201CGot it. Next question\u2026\u201D" }
              ]
            },
            {
              title: "Demo Preparedness",
              description: "Was the discovery rich enough to deliver a customized, compelling demo?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Discovery was so rich the rep can deliver a highly customized demo framed as a compelling story.", example: "Based on what you told me about X, I\u2019m going to show you exactly how we can solve that." },
                { level: "mid", scores: "2\u20133", content: "Gathered enough info for a partially customized demo, but it lacks deep context from the conversation.", example: "I\u2019ll show you our reporting module since you mentioned reports." },
                { level: "low", scores: "0\u20131", content: "Discovery was poor, forcing any demo to be a generic \u201Cspray and pray\u201D presentation.", example: "Let me walk you through all of our features\u2026" }
              ]
            },
            {
              title: "Quantified Value",
              description: "Did the rep tie Domo\u2019s value to measurable business outcomes?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Rep ties Domo\u2019s value to specific, measurable outcomes using numbers from the conversation.", example: "If we cut that 20-hour weekly process to 2 hours, that\u2019s $180K in annual savings for your team alone." },
                { level: "mid", scores: "2\u20133", content: "References value in general terms but doesn\u2019t anchor to specific numbers from discovery.", example: "Customers typically see significant time savings with Domo." },
                { level: "low", scores: "0\u20131", content: "No attempt to quantify value, or uses only generic ROI claims disconnected from the prospect\u2019s situation.", example: "Domo delivers 10x ROI for our customers." }
              ]
            }
          ]
        },
        {
          type: "features",
          overline: "Platform",
          title: "Built on Domo Pro-Code",
          subtitle: "Custom HTML/JS/CSS applications that run inside Domo\u2019s environment with direct access to platform APIs.",
          cards: [
            { icon: "\uD83D\uDDA5\uFE0F", title: "Client-Side App", description: "Runs entirely client-side inside Domo\u2019s environment. No server, no SSR, no build step \u2014 just static HTML, JS, and CSS files." },
            { icon: "\uD83D\uDDC3\uFE0F", title: "AppDB Collections", description: "A NoSQL document store built into Domo. Reviews stored with a 21-field schema. Collections auto-sync to datasets." },
            { icon: "\uD83D\uDCCA", title: "Datasets & SQL", description: "SQL-queryable reads from a pre-joined dataset. Filters across thousands of records efficiently." },
            { icon: "\uD83D\uDE80", title: "Deploy Pipeline", description: "Development uses domo dev with a local proxy. Production deploys via domo publish \u2014 no CI/CD pipeline needed." }
          ]
        },
        {
          type: "tech",
          overline: "Tech Stack",
          title: "Zero Dependencies, Maximum Simplicity",
          subtitle: "No build step, no bundler, no node_modules. Just vanilla JavaScript served through Domo\u2019s CDN.",
          items: [
            { icon: "\u26A1", title: "Vanilla JavaScript", description: "ES Modules, no framework" },
            { icon: "\uD83C\uDFA8", title: "TailwindCSS v4", description: "Utility classes via CDN" },
            { icon: "\uD83D\uDCC8", title: "Chart.js", description: "Scores Over Time visualization" },
            { icon: "\uD83D\uDDC3\uFE0F", title: "Domo AppDB", description: "NoSQL write storage + sync" },
            { icon: "\uD83D\uDCCA", title: "Domo Datasets", description: "SQL reads, pre-joined data" },
            { icon: "\uD83C\uDF99\uFE0F", title: "Gong Embedded", description: "iframe call player + Okta SSO" },
            { icon: "\uD83E\uDD16", title: "Domo Jupyter", description: "LLM-powered AI review pipeline" },
            { icon: "\uD83D\uDE80", title: "Domo Pro-Code", description: "Platform hosting + deployment" }
          ]
        },
        {
          type: "timeline",
          overline: "Build Process",
          title: "From Concept to Production",
          subtitle: "Six phases of iterative development \u2014 from blank repo to production app.",
          items: [
            { phase: "Phase 1", title: "Prototype & Core Features", description: "Built the initial single-page app with review queue, Gong integration, 9-category scoring form, and AppDB persistence.", pills: ["SPA Architecture", "Gong iframe", "AppDB CRUD", "Scoring Form"] },
            { phase: "Phase 2", title: "Dashboard & Analytics", description: "Added the User Dashboard with STC KPI cards, Scores Over Time chart (Chart.js), Top Performers section, and role-based access control. Introduced team benchmark overlays from a separate dataset.", pills: ["Chart.js", "KPI Cards", "RBAC", "Team Benchmarks"] },
            { phase: "Phase 3", title: "AI Review Pipeline", description: "Created a Domo Jupyter notebook that uses an LLM to score every Gong call against the STC rubric automatically. Runs daily, writes AI reviews to the same AppDB collection as human reviews.", pills: ["Domo Jupyter", "LLM Scoring", "Prompt Engineering", "Automation"] },
            { phase: "Phase 4", title: "Reviewed Calls & Polish", description: "Built the Reviewed Calls tab with sortable columns, review carousel navigation, inline filters, and context-aware form behavior.", pills: ["Sortable Tables", "Filter Cache", "Context Awareness", "Subtab Toggle"] },
            { phase: "Phase 5", title: "Architecture Refactor", description: "The monolithic 3,445-line app.js was split into 8 focused ES modules with dependency injection. Zero regressions during the split.", pills: ["ES Modules", "Dependency Injection", "Zero Regressions"] },
            { phase: "Phase 6", title: "Documentation & Landing Page", description: "Created comprehensive CLAUDE.md project context, README, and a landing page \u2014 all through the same conversational workflow.", pills: ["CLAUDE.md", "Events Template", "Domo Design Language"] }
          ]
        },
        {
          type: "modules",
          overline: "Architecture",
          title: "Application Architecture",
          subtitle: "8 focused modules, each owning one concern. app.js orchestrates initialization and view switching.",
          items: [
            { name: "state.js", lines: "70", description: "Centralized application state" },
            { name: "config.js", lines: "99", description: "Constants, dataset IDs, STC names" },
            { name: "utils.js", lines: "246", description: "Formatting, toasts, colors, dates" },
            { name: "api.js", lines: "189", description: "Domo API data loading functions" },
            { name: "queue.js", lines: "410", description: "Call list, filters, cache" },
            { name: "reviewed.js", lines: "640", description: "Reviewed calls table, sort, subtabs" },
            { name: "workspace.js", lines: "918", description: "Gong player, review form, submission" },
            { name: "dashboard.js", lines: "616", description: "Scores, charts, Top Performers" }
          ],
          depFlow: [
            { from: "app.js", to: "initWorkspace(showView, renderQueue, invalidateCache)" },
            { from: "app.js", to: "initQueue(openCallReview)" },
            { from: "app.js", to: "initReviewed(openCallReview)" }
          ]
        },
        {
          type: "callout",
          title: "No Circular Dependencies",
          content: "Modules that need functions from the orchestrator (like showView()) receive them through dependency injection at startup. Each module exports an init() function that stores injected references in a module-level variable \u2014 keeping the import graph clean and acyclic."
        },
        {
          type: "data-architecture",
          overline: "Data Design",
          title: "Dual Read Architecture",
          subtitle: "Writes go to AppDB for speed; reads come from a pre-joined dataset for efficiency. The two stay in sync automatically.",
          tiers: [
            { label: "Write", color: "accent", items: [{ title: "Review Form", detail: "9 STC scores + comments" }, { title: "AppDB Collection", detail: "21 fields, snake_case" }] },
            { label: "Sync", color: "muted", items: [{ title: "Auto-Sync", detail: "syncEnabled: true" }] },
            { label: "Read", color: "green", items: [{ title: "AppDB Direct", detail: "Queue: myReviews (user-scoped)" }, { title: "Pre-Joined Dataset", detail: "Dashboard: callReviews (all, camelCase)" }] }
          ],
          metrics: [
            { value: "21", label: "Schema Fields" },
            { value: "3", label: "Datasets" },
            { value: "1", label: "Collection" }
          ]
        },
        {
          type: "pipeline",
          overline: "AI Pipeline",
          title: "How AI Reviews Work",
          subtitle: "Every call gets scored automatically by an LLM running on a daily schedule inside Domo\u2019s Jupyter environment.",
          stages: [
            { icon: "\uD83C\uDF99\uFE0F", title: "Gong Records", description: "Call audio & transcript captured automatically" },
            { icon: "\uD83D\uDCC4", title: "Domo Connector", description: "Syncs call metadata & transcripts to dataset" },
            { icon: "\uD83E\uDD16", title: "Jupyter + LLM", description: "Scores each category 0\u20135 with reasoning" },
            { icon: "\uD83D\uDCBE", title: "AppDB Write", description: "Saves review with scores & comments" },
            { icon: "\uD83D\uDCCA", title: "Dashboard", description: "AI reviews appear alongside human reviews" }
          ]
        },
        {
          type: "image-gallery",
          overline: "Screenshots",
          title: "App Walkthrough",
          subtitle: "Screenshots of the COMINT call review platform in action.",
          images: [
            { src: "screenshots/comint-queue.jpg", alt: "Call review queue showing available Gong calls with filters and metadata", caption: "Review Queue" },
            { src: "screenshots/comint-scoring.jpg", alt: "9-category STC scoring form alongside the Gong call player", caption: "Scoring Interface" },
            { src: "screenshots/comint-dashboard.jpg", alt: "Aggregated score dashboard with rep trends and KPI cards", caption: "Analytics Dashboard" }
          ]
        }
      ]
    }
  },
  {
    slug: "account-mapping-app",
    title: "Account Mapping App",
    date: "2099-01",
    dateLabel: "WIP",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "intelligence",
    section: "Team Enablement Tools & Processes",
    tags: ["GTM", "Intelligence"],
    impactAreas: ["Org Chart Navigation", "Account Intelligence", "Buying Committee Mapping"],
    summary: "Maps internal and external org hierarchies, engagement history, and buying committees to identify champions and decision-makers.",
    company: "Domo",
    featured: false,
    cardStats: ["Account Hierarchy", "Buying Committees", "Revenue Alignment"],
    detail: {
      tagline: "Visual account intelligence for navigating complex organizations.",
      metrics: [
        { value: "Org Charts", label: "Internal & External" },
        { value: "Buying Committees", label: "Mapped" },
        { value: "Champions", label: "Identified" },
        { value: "Engagement", label: "History Tracked" }
      ],
      problem: "Reps struggled to navigate complex account hierarchies and identify the right stakeholders, leading to missed opportunities and longer sales cycles.",
      solution: "Created an account mapping app that visualizes internal team hierarchies, external account org charts, engagement history, and buying committee structures.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Enabled reps to quickly identify champions and decision-makers, improving account navigation and reducing time to engage the right stakeholders."
    },
    richDetail: {
      subtitle: "Visualize organizational hierarchies and team relationships within Domo.",
      heroStats: [
        { value: "2,100", label: "Lines of Code" },
        { value: "6", label: "Modules" },
        { value: "3", label: "Datasets" },
        { value: "25", label: "Data Fields" }
      ],
      sections: [
        {
          type: "features",
          overline: "Overview",
          title: "Why Command Structure?",
          subtitle: "Instant clarity on who owns what \u2014 across accounts, teams, and the full revenue org.",
          cards: [
            { icon: "\uD83C\uDFE2", title: "Account Hierarchy", description: "Search any customer account and instantly see the assigned AE, ADM, CSM, and SC in a clean org chart layout." },
            { icon: "\uD83D\uDC65", title: "Revenue Alignment", description: "Look up any team member and view their position in the full revenue hierarchy \u2014 AE, ADM, and SC chains rendered side by side." },
            { icon: "\uD83D\uDD0D", title: "Multi-Role Detection", description: "Automatically detects all roles a person holds across 22 columns \u2014 IC roles, leadership, or both \u2014 with perspective switching." },
            { icon: "\uD83D\uDCCA", title: "Interactive D3.js Charts", description: "Org charts built with D3.js v7 featuring hover tooltips, color-coded nodes, and responsive layouts that adapt to any screen." },
            { icon: "\uD83D\uDCC5", title: "Contact Recency Badges", description: "Each contact node shows days since last interaction. Color-coded: green for recent, red for 14+ days, gray for no data." },
            { icon: "\u26A1", title: "Built on Domo", description: "Runs natively in Domo with no external infrastructure. Vanilla JavaScript, no build step, no server \u2014 just publish and go." }
          ]
        },
        {
          type: "three-col",
          overline: "Views",
          title: "Two Focused Pages",
          subtitle: "Each page is purpose-built for a different lookup pattern.",
          cards: [
            { icon: "\uD83C\uDFE2", title: "Account Hierarchy", description: "Start from an account and see the full Domo support team assigned to it. Filter by AE to browse account portfolios." },
            { icon: "\uD83D\uDC65", title: "Revenue Alignment", description: "Start from a person and see their management chain, peers, and direct reports across the AE, ADM, and SC organizations." },
            { icon: "\uD83D\uDD04", title: "AE Filter + Grid", description: "Select an AE to see all their accounts in a card grid. Click any account card to jump straight to its org chart." }
          ]
        },
        {
          type: "compare",
          overline: "Impact",
          title: "Before & After",
          headers: ["Task", "Before", "After"],
          rows: [
            ["Find who owns an account", "Slack someone, wait for a reply", "Search by account name, instant org chart"],
            ["See a rep\u2019s full team", "Dig through spreadsheets or SFDC", "Search by name, view full hierarchy"],
            ["Browse an AE\u2019s book of business", "Run a report, export, filter", "Type AE name, see account grid instantly"],
            ["Check contact recency", "Cross-reference multiple tools", "Color-coded badges on every contact node"],
            ["Understand org structure", "Ask around, piece it together", "Visual D3.js hierarchy with role labels"]
          ]
        },
        {
          type: "workflow",
          overline: "Workflow",
          title: "How to Use Command Structure",
          subtitle: "From opening the app to viewing a full org chart in under 30 seconds.",
          steps: [
            { label: "Open App", sublabel: "in Domo" },
            { label: "Pick a Tab", sublabel: "Account or Revenue" },
            { label: "Search", sublabel: "account or person" },
            { label: "View Chart", sublabel: "interactive D3.js" }
          ]
        },
        {
          type: "steps",
          overline: "Guide",
          title: "Getting Started",
          subtitle: "Five steps to explore org structures.",
          items: [
            { title: "Open Command Structure", description: "Launch the app from your Domo dashboard. It automatically detects your user identity and displays your name in the header." },
            { title: "Choose Your View", description: "Account Hierarchy is the default tab. Click Revenue Alignment to switch views. Data is fetched lazily on first visit to each tab." },
            { title: "Search for an Account or Person", description: "Start typing in the search bar. Autocomplete suggests matches as you type, limited to 50 results for performance. Click a result to select it." },
            { title: "Explore the Org Chart", description: "A D3.js org chart renders instantly. On Account Hierarchy, see the account at center with the support team below. On Revenue Alignment, see three parallel chains: AE (center), ADM (left), SC (right)." },
            { title: "Use AE Filter for Bulk Browsing", description: "On the Account Hierarchy tab, use the AE filter search bar at the top to select an AE. Their accounts appear as a responsive card grid. Click any card to view its org chart." }
          ]
        },
        {
          type: "callout",
          title: "Role Detection on Revenue Alignment",
          content: "When you search for a person, the system scans 22 role columns to detect all roles they hold. If a person appears as both an IC (AE, ADM, SC) and a leader, the IC perspective is shown by default. Role pills let you switch perspectives."
        },
        {
          type: "features",
          overline: "Platform",
          title: "Built on Domo Pro-Code",
          subtitle: "A vanilla JavaScript app that runs entirely client-side inside Domo\u2019s environment with direct access to platform APIs.",
          cards: [
            { icon: "\uD83D\uDDA5\uFE0F", title: "No Build Step", description: "Pure HTML, JS, and CSS served directly by Domo. No frameworks, no bundlers, no SSR \u2014 just <script defer> tags sharing global scope." },
            { icon: "\uD83C\uDF10", title: "D3.js Visualization", description: "Interactive org charts built with D3.js v7. Account Hierarchy uses a radial layout with support team below; Revenue Alignment renders three parallel chains." },
            { icon: "\uD83D\uDDC3\uFE0F", title: "Domo Datasets", description: "Three datasets mapped via manifest.json aliases. Queried via ryuu.js SDK: domo.get() with lazy loading per tab." },
            { icon: "\uD83D\uDE80", title: "Deploy Pipeline", description: "Development uses domo dev with a local proxy. Production via domo publish \u2014 no CI/CD pipeline needed." }
          ]
        },
        {
          type: "tech",
          overline: "Tech Stack",
          title: "Simple, Focused Stack",
          subtitle: "Client-side vanilla JavaScript with D3.js for visualization and Tailwind for styling.",
          items: [
            { icon: "\u26A1", title: "Vanilla JavaScript", description: "ES5, no framework, defer loading" },
            { icon: "\uD83C\uDFA8", title: "TailwindCSS v4", description: "Utility classes via CDN" },
            { icon: "\uD83D\uDCC8", title: "D3.js v7", description: "Interactive org chart rendering" },
            { icon: "\uD83D\uDDC3\uFE0F", title: "Domo Datasets", description: "3 datasets via ryuu.js SDK" },
            { icon: "\uD83D\uDE80", title: "Domo Pro-Code", description: "Platform hosting + deployment" }
          ]
        },
        {
          type: "timeline",
          overline: "Build Process",
          title: "The Build Process",
          subtitle: "Six versions from initial release to modular architecture.",
          items: [
            { phase: "Phase 1", title: "Initial Multi-Page Architecture", description: "Rebranded to \u201CCommand Structure\u201D with COMINT-style tab navigation. Single monolithic app.js serving multiple pages.", pills: ["Tab Navigation", "Vanilla JS", "Tailwind CSS 4"] },
            { phase: "Phase 2", title: "Account Hierarchy + D3.js", description: "Added the Account Hierarchy page with customer account search and D3.js org chart visualization showing the Domo support team.", pills: ["D3.js v7", "Account Search", "Org Chart"] },
            { phase: "Phase 3", title: "Revenue Alignment", description: "Built the Revenue Alignment page with three-chain D3.js visualization: AE chain center, ADM chain left, SC chain right.", pills: ["Three-Chain Layout", "25-Field Dataset", "Person Search"] },
            { phase: "Phase 4", title: "Multi-Role Detection + AE Filter", description: "Extended Revenue Alignment with automatic role detection across 22 columns. Added AE filter with responsive account grid to Account Hierarchy. Contact recency badges.", pills: ["22-Column Scan", "IC > Leader Priority", "AE Account Grid", "Contact Badges"] },
            { phase: "Phase 5", title: "Architecture Refactor", description: "Split the monolithic 3,155-line app.js into 6 focused modules in js/. Removed ~910 lines of dead code. Zero regressions.", pills: ["6 Modules", "910 Lines Removed", "Global Scope", "Script Defer"] },
            { phase: "Phase 6", title: "Documentation & Landing Page", description: "Created comprehensive CLAUDE.md project context, README, and a landing page \u2014 all through the same conversational workflow.", pills: ["CLAUDE.md", "Product Page Template", "Domo Design Language"] }
          ]
        },
        {
          type: "modules",
          overline: "Architecture",
          title: "Application Architecture",
          subtitle: "6 focused modules loaded via <script defer> in dependency order. All share global scope.",
          depTitle: "Script Loading Order \u2014 defer ensures sequential execution",
          items: [
            { name: "state.js", lines: "39", description: "Global state, colors, page routing config" },
            { name: "utils.js", lines: "42", description: "Shared utilities (validation, formatting, tooltips)" },
            { name: "navigation.js", lines: "127", description: "Tab switching, user detection, init()" },
            { name: "account-hierarchy.js", lines: "813", description: "Account Hierarchy: data, search, D3 rendering" },
            { name: "revenue-alignment.js", lines: "1,115", description: "Revenue Alignment: roles, hierarchy, D3 charts" },
            { name: "main.js", lines: "3", description: "Entry point \u2014 calls init()" }
          ],
          depFlow: [
            { from: "state.js \u2192 utils.js \u2192 navigation.js", to: "account-hierarchy.js" },
            { from: "state.js \u2192 utils.js \u2192 navigation.js", to: "revenue-alignment.js" },
            { from: "main.js", to: "init()" }
          ]
        },
        {
          type: "data-architecture",
          overline: "Data Design",
          title: "Three Dataset Architecture",
          subtitle: "Each dataset is mapped to an alias in manifest.json and queried via the ryuu.js SDK.",
          tiers: [
            { label: "Source", color: "accent", items: [{ title: "hierarchyHub", detail: "8 fields \u00B7 Legacy org data" }, { title: "accountHierarchy", detail: "6 fields \u00B7 Account + team" }, { title: "revenueAlignment", detail: "25 fields \u00B7 AE/ADM/SC chains" }] },
            { label: "Query", color: "muted", items: [{ title: "ryuu.js SDK", detail: "domo.get('/data/v1/{alias}')" }] },
            { label: "Render", color: "green", items: [{ title: "Account Hierarchy", detail: "D3.js org chart" }, { title: "Revenue Alignment", detail: "D3.js three-chain chart" }] }
          ],
          metrics: [
            { value: "3", label: "Datasets" },
            { value: "39", label: "Total Fields" },
            { value: "2", label: "D3.js Charts" }
          ]
        },
        {
          type: "image-gallery",
          overline: "Screenshots",
          title: "App Walkthrough",
          subtitle: "Command Structure in action \u2014 interactive D3.js org charts for account and revenue navigation.",
          images: [
            { src: "screenshots/command-account.jpg", alt: "Account hierarchy D3.js org chart showing the support team assigned to an account", caption: "Account Hierarchy View" },
            { src: "screenshots/command-revenue.jpg", alt: "Revenue alignment showing three parallel chains: AE center, ADM left, SC right", caption: "Revenue Alignment View" }
          ]
        }
      ]
    }
  },
  {
    slug: "new-adm-comp-plan",
    title: "ADM Commission Plan Design",
    date: "2026-02",
    dateLabel: "Feb 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "strategic",
    section: "Strategic Initiatives",
    tags: ["Compensation", "RevOps", "Commission Design"],
    impactAreas: ["Team Motivation", "Financial Modeling", "Sales Incentives"],
    summary: "Designed and implemented the inbound ADM compensation plan: financial modeling and scenario analysis to increase rep incentives while keeping the program cost-neutral for the business.",
    company: "Domo",
    featured: false,
    status: 'complete',
    cardStats: ["Comp Plan Design", "Quota Modeling", "Cost-Neutral"],
    detail: {
      tagline: "Better incentives, same cost: a win-win comp redesign.",
      metrics: [
        { value: "Same Cost %", label: "For Business" },
        { value: "Increased", label: "ADM Incentives" },
        { value: "Financial", label: "Modeling" },
        { value: "Scenario", label: "Analysis" }
      ],
      problem: "The existing ADM compensation plan wasn't effectively motivating the team, but leadership needed any changes to remain cost-neutral for the business.",
      solution: "Redesigned the compensation structure using financial modeling and scenario analysis: defining quota targets, attainment tiers, and incentive thresholds that increased ADM earning potential without increasing cost percentage.",
      building: "",
      results: "Delivered a cost-neutral compensation redesign that increased ADM motivation and earning potential. Expanded ownership to the CSM commission structure in Q2 2026."
    }
  },
  {
    slug: "market-intelligence-app",
    title: "Market Intelligence App",
    date: "2099-01",
    dateLabel: "WIP",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "intelligence",
    section: "Team Enablement Tools & Processes",
    tags: ["Analysis", "Intelligence"],
    impactAreas: ["C-Suite Decision-Making", "Strategic Planning"],
    summary: "Jupyter-based application aggregating AI updates, brand health, competitive positioning, customer intelligence, market share, market updates, and win/loss analysis for executive decision-making.",
    company: "Domo",
    featured: false,
    cardStats: ["8 Intelligence Types", "7 Notebooks", "C-Suite Audience"],
    detail: {
      tagline: "Executive-grade market intelligence in one place.",
      metrics: [
        { value: "C-Suite", label: "Audience" },
        { value: "AI + Brand", label: "Health Tracked" },
        { value: "Competitive", label: "Positioning" },
        { value: "Win/Loss", label: "Analysis" }
      ],
      problem: "Executives lacked a unified source for market intelligence, forcing them to piece together insights from multiple disconnected tools and reports.",
      solution: "Built a Jupyter-based application that aggregates AI updates, brand health metrics, competitive positioning, customer intelligence, industry trends, market share data, and win/loss analysis.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Provided C-suite with a single source of market intelligence, enabling faster strategic decisions backed by comprehensive, up-to-date competitive and market data."
    },
    richDetail: {
      subtitle: "Executive market intelligence dashboard \u2014 8 live reports covering AI updates, brand health, competitive positioning, customer intelligence, and more.",
      heroStats: [
        { value: "3,900", label: "Lines of JS" },
        { value: "5,600", label: "Lines of CSS" },
        { value: "8", label: "Datasets" },
        { value: "7", label: "Jupyter Notebooks" }
      ],
      sections: [
        {
          type: "features",
          overline: "Overview",
          title: "Why roosterIQ?",
          subtitle: "Eight live intelligence reports \u2014 all in one dashboard, always current, fully sourced.",
          cards: [
            { icon: "\uD83C\uDF0D", title: "8 Intelligence Types", description: "AI Updates, Brand Health, Competitive Positioning, Customer Intelligence, Industry Trends, Loss Reporting, Market Share, and Market Updates \u2014 all in one unified dashboard." },
            { icon: "\uD83E\uDD16", title: "AI-Powered Analysis", description: "Jupyter notebooks scrape primary sources, synthesize insights with an LLM, and write structured HTML reports directly to Domo datasets on a scheduled cadence." },
            { icon: "\uD83D\uDCCB", title: "Clickable Citations", description: "Every insight links back to its primary source. Numbered citation bubbles in report text scroll to detailed source cards \u2014 analyst reports, news articles, and regulatory filings." },
            { icon: "\uD83D\uDD0D", title: "Global + Modal Search", description: "Search across all 8 report types from the dashboard. A second search engine lives inside each modal \u2014 with match counters, keyboard navigation, and live highlight indicators." },
            { icon: "\uD83C\uDF19", title: "Dark Mode", description: "Full dark/light theme with a CSS variable design system. One-click toggle persisted to localStorage. All 8 modals, cards, badges, and dropdowns adapt automatically." },
            { icon: "\u26A1", title: "Native Domo Integration", description: "No server, no build pipeline, no external infrastructure. Runs inside Domo using ryuu.js. Datasets update when notebooks run \u2014 the app reads the latest data on every page load." }
          ]
        },
        {
          type: "three-col",
          overline: "Intelligence Categories",
          title: "Three Lenses on Your Market",
          subtitle: "Internal customer signals, external competitive moves, and macro market forces \u2014 all synthesized weekly.",
          cards: [
            { icon: "\uD83D\uDC64", title: "Internal Intelligence", description: "Customer Intelligence analyzes Gong call recordings for renewal risks and expansion signals. Loss Reporting tracks deal outcomes, churn patterns, and competitive displacement." },
            { icon: "\uD83D\uDCCA", title: "Competitive & Market", description: "Competitive Positioning tracks competitor moves with NEW badges and impact ratings. Market Share monitors analyst coverage of the BI landscape. Market Updates surfaces macro business signals." },
            { icon: "\uD83C\uDF10", title: "Ecosystem & Brand", description: "Industry Trends identifies regulatory shifts and technology movements. AI Updates covers model releases and analytics impact. Brand Health monitors sentiment across reviews and analyst coverage." }
          ]
        },
        {
          type: "compare",
          overline: "Impact",
          title: "Before & After",
          headers: ["Capability", "Before", "After"],
          rows: [
            ["Intelligence access", "Manual research, scattered across inboxes", "8 live reports, always current, one dashboard"],
            ["Competitive awareness", "Quarterly briefings, often stale", "Weekly tracking with NEW badges and impact ratings"],
            ["Customer risk visibility", "Buried in CRM fields and call notes", "Health scores with week-over-week delta badges"],
            ["Source credibility", "No citations, hard to verify claims", "Clickable citations linked to primary sources"],
            ["Report freshness", "No indicator of when data was last updated", "Color-coded freshness badges (Fresh / Recent / Stale)"],
            ["Report navigation", "Scroll through long documents", "Collapsible sections, expand all, modal search"]
          ]
        },
        {
          type: "workflow",
          overline: "Workflow",
          title: "Using roosterIQ",
          subtitle: "From dashboard to deep-dive in under a minute.",
          steps: [
            { label: "Open Dashboard", sublabel: "in Domo" },
            { label: "Browse Cards", sublabel: "check freshness badges" },
            { label: "Search or Click", sublabel: "find specific topics" },
            { label: "Read Report", sublabel: "executive summary + details" },
            { label: "Check Sources", sublabel: "click citation bubbles" }
          ]
        },
        {
          type: "steps",
          overline: "Guide",
          title: "Getting Started",
          subtitle: "From dashboard to deep-dive in five steps.",
          items: [
            { title: "Open the Dashboard", description: "Launch roosterIQ from your Domo app catalog. The dashboard loads 8 intelligence cards sorted alphabetically \u2014 AI Updates through Market Updates. Each card shows a freshness badge (green = fresh this week, yellow = 1\u20132 weeks, gray = older)." },
            { title: "Use the Date Filter", description: "A date selector in the top navigation lets you switch between report generations. If notebooks have run multiple times, you can compare this week\u2019s intelligence to last week\u2019s without re-fetching data." },
            { title: "Search Across All Reports", description: "Type in the global search bar to filter cards by title, summary, or tag. When exactly one result matches, pressing Enter opens that card\u2019s modal automatically. Match location hints show you where each result was found." },
            { title: "Open a Report Modal", description: "Click any card to open the full report. The modal header shows an analysis metadata line (period, sources analyzed, date). Use the navigation buttons or arrow keys to move between reports without closing the modal." },
            { title: "Review Citations & Export", description: "Click any citation bubble to jump to the source card at the bottom of the report. Use the export dropdown to copy the full report, copy just the executive summary, email it, or save as PDF." }
          ]
        },
        {
          type: "accordion",
          overline: "Intelligence Types",
          title: "The 8 Report Types",
          subtitle: "Click any type to see what data it surfaces and how it\u2019s generated.",
          items: [
            { title: "AI Updates", description: "Weekly synthesis of AI model releases and analytics impact for Domo", content: "Tracks top-10 AI developments from analyst firms, tech news, vendor blogs, and policy sources. Each item includes a relevance assessment for Domo (Opportunity / Risk / Watch) with 2-sentence rationale. Delivered as pre-rendered HTML with embedded citations linked to scraped source articles." },
            { title: "Brand Health", description: "Domo brand perception across analyst coverage, reviews, and media", content: "Monitors 4 brand health themes: overall sentiment, competitive perception, product reputation, and analyst positioning. Pulls from G2/TrustRadius reviews, analyst reports, and media mentions. Uses standardized citation format with numbered source cards." },
            { title: "Competitive Positioning", description: "Latest moves from key competitors in the BI and analytics market", content: "Tracks up to 8 competitors (Tableau, Power BI, Looker, Sigma, Mode, Qlik, MicroStrategy, ThoughtSpot). Each competitor theme includes a Domo impact badge (High / Medium / Low with rationale), a NEW badge for announcements < 7 days old, and sorted display (High impact first)." },
            { title: "Customer Intelligence", description: "Renewal risk and expansion signals from Gong call recordings", content: "Analyzes recent customer call transcripts from Gong. Segments accounts into High / Medium / Low renewal risk with week-over-week delta badges showing trend direction. Surfaces dominant risk themes as clickable tag pills." },
            { title: "Industry Trends", description: "Technology shifts and regulatory movements affecting enterprise software", content: "8 themes covering technology shifts (AI adoption, cloud migration, data governance) and regulatory developments (EU AI Act, CCPA, FTC enforcement). Each strategic implication names a specific Domo product or capability that is directly affected." },
            { title: "Loss Reporting", description: "Deal outcome analysis, competitive displacement, and churn patterns", content: "Quarterly analysis of closed-lost deals from CRM and Gong data. Seven HTML sections: executive overview, win analysis, loss analysis with top reasons, competitive displacement, churn patterns, strategic recommendations, and a deal-level appendix." },
            { title: "Market Share", description: "Analyst-sourced BI market share trends and Domo positioning evidence", content: "4 themes synthesizing analyst reports from Gartner, Forrester, IDC, and G2. Each Domo positioning section includes 2\u20133 specific evidence points (analyst quotes, benchmark data, review site scores) rather than general assertions." },
            { title: "Market Updates", description: "Latest business news, M&A activity, and regulatory shifts", content: "Weekly top-10 market developments covering economic conditions, M&A/funding activity, regulatory shifts, and enterprise software trends. Sources span WSJ Markets, Reuters, Bloomberg, SEC/FTC newsrooms, and Crunchbase." }
          ]
        },
        {
          type: "callout",
          title: "Keyboard Shortcuts",
          content: "Cmd/Ctrl + F \u2014 Focus global search \u00B7 \u2191 / \u2193 \u2014 Navigate search results \u00B7 Enter \u2014 Open modal when 1 result \u00B7 \u2190 / \u2192 \u2014 Navigate between modals \u00B7 ESC \u2014 Clear modal search / close modal \u00B7 Cmd + Shift + D \u2014 Toggle dark mode"
        },
        {
          type: "features",
          overline: "Stack",
          title: "Built on Domo Pro-Code",
          subtitle: "A vanilla JS SPA inside Domo with LLM-powered Jupyter notebooks doing the intelligence work.",
          cards: [
            { icon: "\uD83D\uDDA5\uFE0F", title: "Vanilla JS SPA", description: "ES5-compatible JavaScript \u2014 no framework, no TypeScript, no build step. Everything lives in app.js, app.css, and index.html. Domo serves the static files directly." },
            { icon: "\uD83D\uDDC3\uFE0F", title: "Domo SDK (ryuu.js)", description: "8 datasets fetched in parallel via Promise.all() at page load. All dataset IDs and field mappings defined in manifest.json. No API keys \u2014 authentication via Domo session." },
            { icon: "\uD83E\uDD16", title: "Jupyter + LLM Pipeline", description: "7 notebooks run on schedule inside Domo Jupyter. Each scrapes primary sources, chunks the content, calls an LLM for synthesis and citation tagging, and writes a structured HTML row to its dataset." },
            { icon: "\uD83C\uDFA8", title: "CSS Variable Design System", description: "All brand colors, spacing, z-index, shadows, and dark mode surfaces defined as CSS variables in :root. One toggle class (body.dark-mode) switches the entire UI." }
          ]
        },
        {
          type: "timeline",
          overline: "Development",
          title: "How It Was Built",
          subtitle: "Four phases across the app and pipeline.",
          items: [
            { phase: "Phase 1", title: "Core Dashboard", description: "Built the 8-card unified dashboard with alphabetical sorting, freshness badges, skeleton loading states, dark mode, date filter, and modal navigation system (prev/next with keyboard shortcuts).", pills: ["SPA Architecture", "8 Modals", "Dark Mode", "Skeleton Loading", "Date Filter"] },
            { phase: "Phase 2", title: "Jupyter Pipeline", description: "Created 7 Jupyter notebooks for all intelligence types. Each follows a 3-stage pattern: scrape sources \u2192 LLM synthesis with {{cite:N}} citations \u2192 convert to HTML with source cards.", pills: ["7 Notebooks", "LLM Synthesis", "Citation System", "Web Scraping"] },
            { phase: "Phase 3", title: "Modal UX Improvements", description: "Added modal metadata line, Expand All / Collapse All button, CI delta badges, Competitive Positioning NEW badges and impact sorting, 4-option export dropdown, and search UX with Enter-to-open and match location hints.", pills: ["Delta Badges", "NEW Badges", "Export Dropdown", "Search Hints", "Metadata Line"] },
            { phase: "Phase 4", title: "CSS Polish", description: "Consolidated dark mode to 3 surface variables, added missing CSS variables, added tablet breakpoint at 900px, and rewrote the Styling Guide to document the actual vanilla CSS system.", pills: ["CSS Variables", "Dark Mode Consolidation", "Tablet Breakpoint", "Styling Guide"] }
          ]
        },
        {
          type: "modules",
          overline: "Architecture",
          title: "File Structure",
          subtitle: "A flat project \u2014 no subdirectories, no bundler, everything served directly by Domo.",
          items: [
            { name: "app.js", lines: "3,900", description: "Main application \u2014 data loading, card rendering, all 8 modals, search, dark mode, export" },
            { name: "app.css", lines: "5,600", description: "Complete styling system \u2014 CSS variables, 17+ sections, dark mode, responsive breakpoints" },
            { name: "index.html", lines: "Static", description: "Static structure with empty containers \u2014 all content injected by JavaScript at runtime" },
            { name: "manifest.json", lines: "8 datasets", description: "Domo app config \u2014 dataset IDs, field aliases, app version, size constraints" },
            { name: "jupyter/", lines: "7 notebooks", description: "Intelligence pipelines \u2014 customer_intelligence, competitive_positioning, ai_updates, market_updates, brand_health, industry_trends, market_share" },
            { name: "*Light.png / *Dark.png", lines: "16 files", description: "Theme-aware logos for each intelligence card \u2014 automatically switch on dark mode toggle" }
          ]
        },
        {
          type: "pipeline",
          overline: "Intelligence Pipeline",
          title: "How Reports Are Generated",
          subtitle: "Every notebook follows the same 3-stage pattern from web sources to rendered HTML.",
          stages: [
            { icon: "\uD83C\uDF10", title: "Scrape Sources", description: "LLM extracts article URLs from homepages; each article is scraped and chunked" },
            { icon: "\uD83E\uDD16", title: "LLM Synthesis", description: "Top developments ranked and written with {{cite:N}} citation tags" },
            { icon: "\uD83D\uDCBB", title: "Citation Conversion", description: "Tags converted to HTML bubbles; source cards generated with title, URL, date" },
            { icon: "\uD83D\uDCBE", title: "Write to Domo", description: "data.replace() overwrites the dataset with the latest report row" },
            { icon: "\uD83D\uDCCA", title: "App Renders", description: "Card appears with fresh badge; modal displays pre-rendered HTML with live citations" }
          ]
        },
        {
          type: "data-architecture",
          overline: "Data Design",
          title: "Data Architecture",
          subtitle: "Notebooks write HTML; the app reads it. No transformation layer, no API.",
          tiers: [
            { label: "Write", color: "accent", items: [{ title: "Jupyter Notebook", detail: "LLM synthesis + HTML generation" }, { title: "Domo Dataset", detail: "1 row \u2014 latest report" }] },
            { label: "Fetch", color: "muted", items: [{ title: "Promise.all()", detail: "8 datasets in parallel on page load" }] },
            { label: "Render", color: "green", items: [{ title: "Dashboard Cards", detail: "title, summary, tag, freshness badge" }, { title: "Modal Detail View", detail: "pre-rendered HTML with live citations" }] }
          ],
          metrics: [
            { value: "8", label: "Datasets" },
            { value: "7", label: "Notebooks" },
            { value: "8", label: "Modal Types" }
          ]
        },
        {
          type: "image-gallery",
          overline: "Screenshots",
          title: "App Walkthrough",
          subtitle: "roosterIQ executive market intelligence \u2014 8 live reports, always current.",
          images: [
            { src: "screenshots/rooster-dashboard.jpg", alt: "8-card market intelligence dashboard with freshness badges and global search", caption: "Intelligence Dashboard" },
            { src: "screenshots/rooster-modal.jpg", alt: "Report modal showing competitive positioning with clickable citations", caption: "Report Detail View" }
          ]
        }
      ]
    }
  },
  {
    slug: "commission-calculator",
    title: "ADM Commission Calculator",
    date: "2026-05",
    dateLabel: "May 2026",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Enablement", "Compensation"],
    impactAreas: ["Compensation Transparency", "Rep Motivation", "Comp Plan Modeling"],
    summary: "Tier-based commission calculator for ADM and Inbound sales teams: ADM mode models S1/S2 payout tiers with configurable accelerators; Inbound mode provides progressive per-SQO rate ladders with role-based visibility.",
    company: "Domo",
    featured: false,
    cardStats: ["S1/S2 Payout Tiers", "Inbound Mode", "Accelerator Modeling"],
    detail: {
      tagline: "Reps should always know exactly what they'll earn for the next deal they close.",
      metrics: [
        { value: "S1/S2", label: "Payout Tiers" },
        { value: "Inbound Mode", label: "SQO Rate Ladders" },
        { value: "Configurable", label: "Accelerator Rates" },
        { value: "localStorage", label: "Persisted Settings" }
      ],
      problem: "ADMs and Inbound reps had no easy way to model their commission earnings: understanding how accelerators kicked in or what a given month's quota attainment would pay required manual spreadsheet math.",
      solution: "Built a Vite + React + TypeScript commission calculator with two modes: ADM mode handles S1/S2 payout tier calculations with user-supplied accelerator rates (persisted to localStorage); Inbound mode provides per-SQO progressive rate ladders with role-based visibility controls.",
      building: "",
      results: "Reps can model any payout scenario in seconds. Reduced confusion around accelerator thresholds and improved transparency into how comp plan mechanics work across both inbound and ADM motions."
    }
  },
  {
    slug: "account-research-agent",
    title: "Account Research Agent",
    date: "2025-07",
    dateLabel: "Jul 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "intelligence",
    section: "Team Enablement Tools & Processes",
    tags: ["GTM", "Intelligence"],
    impactAreas: ["Sales Efficiency", "Meeting Readiness"],
    summary: "Pre-discovery account intelligence that improves meeting readiness for ADMs and Sales.",
    company: "Domo",
    featured: false,
    detail: {
      tagline: "Automated account research so reps come prepared.",
      metrics: [
        { value: "Automated", label: "Pre-Discovery Intel" },
        { value: "Meeting Ready", label: "Reps" },
        { value: "ADMs + Sales", label: "Users" },
        { value: "Time Saved", label: "Per Meeting" }
      ],
      problem: "Reps were spending significant time manually researching accounts before discovery calls, or worse, going in unprepared.",
      solution: "Created an automated account research agent that compiles pre-discovery intelligence, giving reps comprehensive account context before every meeting.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Improved meeting readiness across ADMs and Sales by automating the account research process and delivering actionable intelligence before every call."
    }
  },
  {
    slug: "next-best-use-case-tool",
    title: "Next Best Use Case App",
    date: "2025-09",
    dateLabel: "Sep 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "intelligence",
    section: "Team Enablement Tools & Processes",
    tags: ["GTM", "Intelligence"],
    impactAreas: ["Upsell & Cross-sell Acceleration"],
    summary: "Data-backed use case prioritization tool leveraged by the upsell team for expansion conversations.",
    company: "Domo",
    featured: false,
    detail: {
      tagline: "Data-driven expansion recommendations for every account.",
      metrics: [
        { value: "Upsell Team", label: "Primary Users" },
        { value: "Data-Backed", label: "Prioritization" },
        { value: "Use Cases", label: "Recommended" },
        { value: "Expansion", label: "Accelerated" }
      ],
      problem: "The upsell team lacked a systematic way to identify which use cases to recommend for each account, relying on gut instinct rather than data.",
      solution: "Built a tool that uses data-backed prioritization to recommend the next best use case for each account, giving the upsell team a clear expansion playbook.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Equipped the upsell team with data-driven expansion recommendations, accelerating cross-sell and upsell conversations with clear, prioritized use cases."
    }
  },

  // ── FDE Customer Onsites ──
  {
    slug: "feld-entertainment-monster-jam",
    title: "Monster Jam Jumbotron App",
    date: "2026-03",
    dateLabel: "Mar 2026",
    role: "revops",
    roleLabel: "FDE Onsite",
    category: "fde",
    section: "FDE Customer Onsites",
    tags: ["FDE", "Live Events", "App Build"],
    impactAreas: ["Live Event Operations", "Cost Elimination", "Customer Engagement"],
    summary: "Live event scoring app for Feld Entertainment replacing Excel workbooks and 33 PowerPoint decks with a synchronized multi-view web app deployed at feldinc.domo.com.",
    company: "Feld Entertainment",
    featured: false,
    cardStats: ["Live Event Scoring", "33 PPT Decks Replaced", "v0.4.6"],
    detail: {
      tagline: "One web app replacing Excel + 33 PowerPoint decks for live Monster Jam scoring.",
      metrics: [
        { value: "33", label: "Decks Replaced" },
        { value: "~2s", label: "Score Sync" },
        { value: "v0.4.6", label: "Production" },
        { value: "Multi-View", label: "Architecture" }
      ],
      problem: "Feld Entertainment's Monster Jam scoring relied on coordinating Excel workbooks and 33 individual PowerPoint decks across multiple operators during live events: a fragile, error-prone system.",
      building: '',
      solution: "Built a multi-view live event scoring app using React 18, Vite, and Domo AppDB. Scorers enter results in real-time; the operator picks jumbotron screens with live previews; the in-arena display renders a chrome-free output. All views share AppDB collections with ~2 second sync.",
      results: "Shipped to production at feldinc.domo.com. Eliminated event-day coordination complexity across 33 PowerPoint decks and multiple operators, replacing it with a single synchronized web app."
    }
  },
  {
    slug: "espn-contact-intelligence",
    title: "ESPN Contact Intelligence",
    date: "2026-04",
    dateLabel: "Apr 2026",
    role: "revops",
    roleLabel: "FDE Onsite",
    category: "fde",
    section: "FDE Customer Onsites",
    tags: ["FDE", "AI", "App Build"],
    impactAreas: ["Contact Analytics", "Live Event Operations", "AI Decision Support"],
    summary: "AI chat interface over ESPN's Zendesk contact dispositions and case notes, enabling support teams to query behavioral patterns and surface insights during live broadcasts.",
    company: "ESPN",
    featured: false,
    status: 'building',
    cardStats: ["AI Q&A", "Zendesk Data", "Live Event Alerting"],
    detail: {
      tagline: "Conversational AI over ESPN's Zendesk contact data for real-time support intelligence.",
      metrics: [
        { value: "AI Q&A", label: "Zendesk Contacts" },
        { value: "15-min", label: "Event Alert Cadence" },
        { value: "React 18", label: "Stack" },
        { value: "Domo AI", label: "Endpoint" }
      ],
      problem: "ESPN support teams had no fast way to query contact disposition data and case notes for behavioral patterns: especially during live events when speed matters most.",
      building: '',
      solution: "Built a Domo AI-powered chat interface over ESPN's Zendesk contact and case-note data. Phase 2 adds a 15-minute alerting cadence during live events to surface spikes in contact volume by category.",
      results: "FDE onsite delivering AI-powered contact intelligence to ESPN's support operations: enabling context-aware, data-backed decisions during live event broadcasts."
    }
  },
  {
    slug: "ocean-partners-trading-dashboard",
    title: "Ocean Partners Trading Dashboard",
    date: "2026-01",
    dateLabel: "Jan 2026",
    role: "revops",
    roleLabel: "FDE Onsite",
    category: "fde",
    section: "FDE Customer Onsites",
    tags: ["FDE", "Dashboard", "Finance"],
    impactAreas: ["Trading Operations", "Counterparty Risk", "Executive Visibility"],
    summary: "Executive commodities trading dashboard for Ocean Partners with three linked views covering metals, contracts, and counterparty exposure across five joined datasets.",
    company: "Ocean Partners",
    featured: false,
    cardStats: ["5 Joined Datasets", "3 Linked Views", "Metals + Contracts"],
    detail: {
      tagline: "Traders see counterparty exposure across all metals on one screen.",
      metrics: [
        { value: "5", label: "Joined Datasets" },
        { value: "3", label: "Linked Views" },
        { value: "Metals + Contracts", label: "Coverage" },
        { value: "LC Risk", label: "Tracked" }
      ],
      problem: "Ocean Partners traders were manually cross-referencing multiple spreadsheets to understand counterparty exposure across metals and contracts: a slow, error-prone process.",
      building: '',
      solution: "Built three linked dashboard views: a metals periodic-table grid with drill-down, a contracts list with per-contract detail and shipments, and a counterparties view showing M2M exposure, Sum of Finals, and LC risk: all over five joined datasets.",
      results: "Replaced multi-sheet manual lookups with a unified trading dashboard, giving traders instant counterparty exposure visibility across all metals and contracts."
    }
  },

  // ── RevSuite ──
  {
    slug: "rev-replay",
    title: "RevReplay: Gong Replacement",
    date: "2026-05",
    dateLabel: "May 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "revsuite",
    section: "RevSuite",
    tags: ["AI", "Enablement", "Cost Savings"],
    impactAreas: ["Cost Elimination", "Sales Coaching", "Call Intelligence"],
    summary: "Microsoft Teams-based call recorder and AI analysis platform replacing a $350K/year Gong spend: with live AI chat, sentiment analysis, talk/listen metrics, and action item extraction.",
    company: "Domo",
    featured: false,
    cardStats: ["$350K Saved", "Teams Recording", "AI Transcript Analysis"],
    detail: {
      tagline: "Full Gong replacement built in-house at a fraction of the cost.",
      metrics: [
        { value: "$350K", label: "Annual Savings" },
        { value: "Teams", label: "Recording Platform" },
        { value: "AI Analysis", label: "Every Call" },
        { value: "Live Chat", label: "Transcript-Grounded" }
      ],
      problem: "The revenue team's $350K/year Gong subscription was up for renewal: and a full-featured replacement could be built in-house on Microsoft Teams infrastructure that was already licensed.",
      building: '',
      solution: "Built RevReplay using React 18, Vite 6, shadcn/ui, and Microsoft Graph API. Records and transcribes Teams calls, provides live AI chat grounded in the transcript, and delivers automated analysis: summary, sentiment, key moments, action items, and deterministic talk/listen ratios.",
      results: "Eliminated $350K/year in Gong licensing while keeping the RevenueSuite ecosystem intact. Revenue team gets call recording, AI coaching, and analytics without the enterprise SaaS spend."
    }
  },
  {
    slug: "rev-radar-expand",
    title: "AI Account Intelligence",
    date: "2026-03",
    dateLabel: "Mar 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "revsuite",
    section: "RevSuite",
    tags: ["AI", "Intelligence", "Enablement"],
    impactAreas: ["Account Expansion", "Renewal Intelligence", "Rep Efficiency"],
    summary: "AI-powered account intelligence for AEs, CSMs, and SEs: surfaces renewal urgency, expansion recommendations, battle cards, Gong call signals, and AI expansion guidance, all pre-computed overnight.",
    company: "Domo",
    featured: false,
    cardStats: ["12 Jupyter Notebooks", "Overnight Pre-Compute", "L2b/L2e/L2a Tiers"],
    detail: {
      tagline: "Pre-computed overnight intelligence so reps walk into every call ready to expand.",
      metrics: [
        { value: "12", label: "Jupyter Notebooks" },
        { value: "Overnight", label: "Pre-Computed" },
        { value: "L2b/L2e/L2a", label: "Expansion Tiers" },
        { value: "Instant Load", label: "On-Demand" }
      ],
      problem: "AEs, CSMs, and SEs were spending significant time manually researching accounts before expansion and renewal conversations: or worse, going in unprepared.",
      building: '',
      solution: "Built RevRadar with React 18, Vite 5, Tailwind 4, Zustand, and D3. A 12-notebook Jupyter pipeline (L0a→L2f) pre-computes pipeline coverage and forecasting intelligence overnight: ARR pacing vs. quota, renewal urgency scoring, Gong call signals, expansion recommendations, and battle cards grounded in consumption and engagement data.",
      results: "AEs, CSMs, and SEs get instant-load account intelligence on demand: no manual research, no chasing Salesforce. Renewal urgency and expansion opportunities surface automatically every morning."
    }
  },
  {
    slug: "rev-routine",
    title: "Enablement Platform",
    date: "2026-04",
    dateLabel: "Apr 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "revsuite",
    section: "RevSuite",
    tags: ["AI", "Enablement", "Knowledge Base"],
    impactAreas: ["Sales Enablement", "RFP Automation", "Ramp Acceleration"],
    summary: "Revenue enablement platform combining a searchable knowledge base, AI co-pilot, RFP automation, structured learning modules, and asset generation: replacing scattered docs and static wikis.",
    company: "Domo",
    featured: false,
    cardStats: ["AI Co-Pilot", "RFP Automation", "Learning Pathways"],
    detail: {
      tagline: "The knowledge hub the revenue team actually uses.",
      metrics: [
        { value: "AI Co-Pilot", label: "KB-Grounded" },
        { value: "RFP", label: "Automation" },
        { value: "Learning Pathways", label: "Coaching" },
        { value: "Asset Gen", label: "One-Pagers & Battle Cards" }
      ],
      problem: "Revenue team knowledge lived in scattered Confluence pages, stale PDFs, and individual Slack threads: creating inconsistent answers, slow RFP responses, and long new-hire ramp times.",
      building: '',
      solution: "Built RevRoutine with React 18, Vite 5, Tailwind 4, Zustand, and @dnd-kit. Features: PDF/Word/markdown upload with full-text search, AI chat grounded in the knowledge base, RFP question extraction and answer drafting, drag-and-drop learning modules, learning pathways with coaching and rendered docs, and one-pager/battle card/FAQ asset generation.",
      results: "Central hub for revenue team knowledge: reduces time-to-answer on product questions, automates RFP drafting, and standardizes new-hire ramp through structured learning pathways."
    }
  },

  {
    slug: "rev-suite-catalog",
    title: "RevSuite: Tool Catalog & Org Hub",
    date: "2026-04",
    dateLabel: "Apr 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "revsuite",
    section: "RevSuite",
    tags: ["Enablement", "GTM", "Org Intelligence"],
    impactAreas: ["Tool Discovery", "Org Navigation", "Revenue Enablement"],
    summary: "The RevSuite home page: a catalog of every app and integration the revenue org uses, plus a D3.js Revenue Alignment org chart for instant account and rep lookup.",
    company: "Domo",
    featured: false,
    cardStats: ["23 Tools Cataloged", "D3 Org Chart", "ServiceNow Access Requests"],
    detail: {
      tagline: "Every tool, every team member: one place.",
      metrics: [
        { value: "23", label: "Tools Cataloged" },
        { value: "D3 Org Chart", label: "Revenue Alignment" },
        { value: "v1.0.6", label: "Production" },
        { value: "ServiceNow", label: "Access Request Links" }
      ],
      problem: "The revenue org had no single source of truth for which tools existed, how to get access, or who owned what accounts and roles.",
      solution: "Built the RevSuite home (Vite 8 + React 19 + Tailwind 4 + D3): a tool catalog listing 4 App Pages, 12 Internal Tools, and 7 External Tools with per-tool ServiceNow access-request tooltips, plus a Revenue Alignment modal with typeahead search and D3 org chart showing AE/ADM/SC chains.",
      building: "",
      results: "Replaced ad-hoc Slack pings for tool access with a self-serve catalog. The org chart eliminated the 'who owns this account?' lookup from manager escalation queues."
    }
  },
  {
    slug: "revops-report-library",
    title: "RevOps Report Library",
    date: "2026-05",
    dateLabel: "May 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Analysis", "RevOps", "Reporting"],
    impactAreas: ["Pipeline Reporting", "Analytical Output", "Institutional Knowledge"],
    summary: "Production report browser for the full RevOps analytical output: pipeline reports, deep dives, and rolling analyses stored in Domo FileSet and searchable across every document.",
    company: "Domo",
    featured: false,
    cardStats: ["Full-Text Search", "FileSet Storage", "Pipeline + Deep Dive Reports"],
    detail: {
      tagline: "Every RevOps report, searchable from one place.",
      metrics: [
        { value: "Full-Text", label: "Search Across Reports" },
        { value: "FileSet", label: "Domo Storage" },
        { value: "Weekly + Rolling", label: "Report Types" },
        { value: "CLI Upload", label: "push-report.mjs" }
      ],
      problem: "RevOps analytical output (weekly pipeline reports, 12-month deep dives, root-cause analyses) was scattered across Slack threads and Confluence pages with no unified search or browsable index.",
      solution: "Built a production report library (Vite + React + TypeScript + Redux Toolkit + TanStack Query) backed by Domo FileSet storage: folder-tree navigation, full-text search with Control-F across all reports, GFM markdown rendering with per-document find bar and auto table-of-contents.",
      building: "",
      results: "All RevOps analytical output is now indexed and searchable. Leadership can find any historical pipeline report or deep dive without Slack archaeology."
    }
  },

  // ── Additional Enablement ──
  {
    slug: "adm-daily-command-center",
    title: "ADM Daily Command Center",
    date: "2025-12",
    dateLabel: "Dec 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Enablement", "Dashboards"],
    impactAreas: ["Daily Operations", "Pipeline Hygiene", "Rep Efficiency"],
    summary: "RevOps operations hub for ADMs: pipeline hygiene at a glance, lead queue management, rep efficiency tracking, and prospecting funnel visibility across 5 connected datasets.",
    company: "Domo",
    featured: false,
    cardStats: ["Pipeline Hygiene", "Rep Efficiency", "Daily RevOps Hub"],
    detail: {
      tagline: "One daily hub replacing two legacy tools for the ADM team.",
      metrics: [
        { value: "5", label: "Wired Datasets" },
        { value: "2", label: "Legacy Pages Replaced" },
        { value: "Daily", label: "Ops Hub" },
        { value: "Real-Time", label: "Pipeline Hygiene" }
      ],
      problem: "ADMs were context-switching between multiple legacy Domo pages every morning: no single place to see today's queue, activity, prospecting status, and data health.",
      building: '',
      solution: "Built with Vite, React 18, Tailwind, TypeScript, and ryuu.js. Surfaces today's lead queue, weekly activity, prospecting bucket status (leads in cadence, at-risk leads, stalled deals, old MQLs, old opps), and data diagnostics: all from 5 connected datasets on one page.",
      results: "Consolidated ADM daily workflow into a single page, eliminating context switching across legacy tools and giving managers instant visibility into rep activity and pipeline hygiene."
    }
  },
  {
    slug: "no-lead-left-behind",
    title: "No Lead Left Behind",
    date: "2026-06",
    dateLabel: "Jun 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "automation",
    section: "Automation & Workflows",
    tags: ["Automation", "Operations", "GTM"],
    impactAreas: ["Lead Hygiene", "Pipeline Recovery", "Revenue Operations"],
    summary: "Automated system to surface and re-route 'limbo leads': leads with blank status, system-user owners, or inactive owners: before they fall through the funnel unworked.",
    company: "Domo",
    featured: false,
    status: 'building',
    cardStats: ["Lead SLA Design", "4-hr Alert Threshold", "Funnel Recovery"],
    detail: {
      tagline: "Rescuing qualified leads before they disappear from the funnel.",
      metrics: [
        { value: "3", label: "Limbo Conditions" },
        { value: "4-hr SLA", label: "Alert Threshold" },
        { value: "Salesforce + Domo", label: "Stack" },
        { value: "Auto-Alerts", label: "Slack & Email" }
      ],
      problem: "A meaningful number of qualified leads were sitting unworked in 'limbo' states: owned by system users, missing statuses, or assigned to inactive reps: invisible to the team until it was too late.",
      building: '',
      solution: "Building a Salesforce report surfacing leads meeting 3 limbo conditions (system-user owner, blank status, inactive owner), feeding into a Domo monitoring app with automated Slack/email alerts, SLA thresholds, and a re-routing workflow for ops.",
      results: "In progress: active initiative to ensure no qualified lead sits unworked. Phase 1 complete; phase 2 (automated re-routing + Domo monitoring app) in build."
    }
  },

  {
    slug: "rev-research",
    title: "RevResearch: Pre-Call AI Briefs",
    date: "2026-06",
    dateLabel: "Jun 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "automation",
    section: "Automation & Workflows",
    tags: ["AI", "Automation", "Enablement"],
    impactAreas: ["Rep Preparation", "Meeting Effectiveness", "Pipeline Intelligence"],
    summary: "Daily AI research briefs delivered to AEs before every meeting: reads Outlook calendar, pulls Gong + Salesforce context, and emails a tailored brief before the call starts.",
    company: "Domo",
    featured: false,
    status: 'building',
    cardStats: ["Daily AI Briefs", "Calendar-Triggered", "Gong + Salesforce Context"],
    detail: {
      tagline: "Every rep walks into every call prepared.",
      metrics: [
        { value: "Daily 7am MT", label: "Automation Trigger" },
        { value: "Per-Meeting", label: "AI Brief" },
        { value: "Gong + Salesforce", label: "Context Sources" },
        { value: "Email Delivery", label: "To Rep Before Start" }
      ],
      problem: "Reps either spent 15–20 minutes manually researching accounts before calls or went in cold: both outcomes hurt conversion and coaching.",
      solution: "Building a Domo Automation → Code Engine pipeline that reads Outlook calendars daily at 7am MT, generates AI research briefs per meeting (Gong call history + Salesforce opportunity + ADM connect notes), and emails each rep their brief before their first call.",
      building: "",
      results: "In progress: end-to-end pipeline built, pending dataset wiring and Domo Automation workflow creation."
    }
  },
  {
    slug: "brother-bear",
    title: "AE Results-vs-Effort Quadrant",
    date: "2026-04",
    dateLabel: "Apr 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Analysis", "RevOps", "Performance"],
    impactAreas: ["Rep Performance Management", "Coaching Prioritization", "Resource Allocation"],
    summary: "AE performance quadrant mapping results (pipeline contribution, wins) against effort (activity volume, meeting counts): surfaces which reps are high-effort/low-output for targeted coaching intervention.",
    company: "Domo",
    featured: false,
    status: 'building',
    cardStats: ["Results vs. Effort", "AE Quadrant View", "Coaching Prioritization"],
    detail: {
      tagline: "Not all reps are struggling for the same reason: this shows the difference.",
      metrics: [
        { value: "4-Quadrant", label: "AE Segmentation" },
        { value: "Results + Effort", label: "Dual-Axis View" },
        { value: "Coaching", label: "Prioritization" },
        { value: "React + Vite", label: "Domo App" }
      ],
      problem: "Sales leadership was applying the same coaching approach to all underperforming reps: not distinguishing between reps who aren't working enough vs. reps working hard but converting poorly.",
      solution: "Building a React/Vite Domo app that plots AEs on a 2x2 quadrant: results (pipeline sourced, SALs, wins) on one axis, effort (activities, meetings, outbound volume) on the other: so leadership can direct coaching resources where each rep actually needs it.",
      building: "",
      results: "In progress: quadrant model defined, app in development."
    }
  },

  // ── Skills in Progress ──
  {
    slug: "csm-commission-framework",
    title: "CSM Commission Framework",
    date: "2026-06",
    dateLabel: "Jun 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "strategic",
    section: "Strategic Initiatives",
    tags: ["Compensation", "RevOps", "CSM"],
    impactAreas: ["Comp Design", "NRR Alignment", "CS Operations"],
    summary: "Designing the commission plan structure for the Customer Success team: aligning payout mechanics to retention, expansion, and NRR targets.",
    company: "Domo",
    featured: false,
    status: 'building',
    cardStats: ["CSM Team", "NRR-Linked", "Retention + Expansion"],
    detail: {
      tagline: "Extending commission design ownership from ADM to Customer Success.",
      metrics: [
        { value: "CSM Team", label: "Scope" },
        { value: "NRR", label: "Primary KPI" },
        { value: "Retention + Expansion", label: "Mechanics" },
        { value: "In Progress", label: "Status" }
      ],
      problem: "The CS team's compensation wasn't tightly aligned to the renewal and expansion outcomes the business needed, creating misaligned incentives.",
      solution: "Building the compensation framework for the CS team: defining quota targets, attainment tiers, and payout mechanics tied to retention rates, expansion ARR, and NRR.",
      building: "",
      results: "In progress: expanding commission design ownership built with the ADM comp plan into the Customer Success organization."
    }
  },
  {
    slug: "forecasting-accuracy-framework",
    title: "Forecasting Accuracy Framework",
    date: "2026-06",
    dateLabel: "Jun 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Forecasting", "Pipeline", "RevOps"],
    impactAreas: ["Revenue Forecasting", "Pipeline Accuracy", "Executive Reporting"],
    summary: "Adding a forecast vs. actuals variance layer to the weekly CRO/CMO pipeline report: tracking closed-won against what was in late-stage pipeline 4 weeks prior to own forecast accuracy as a KPI.",
    company: "Domo",
    featured: false,
    status: 'building',
    cardStats: ["Forecast vs. Actuals", "4-Week Lookback", "CRO/CMO"],
    detail: {
      tagline: "Owning the forecast number, not just the pipeline report.",
      metrics: [
        { value: "Forecast vs. Actuals", label: "KPI Owned" },
        { value: "4-Week", label: "Lookback Window" },
        { value: "Weekly", label: "Cadence" },
        { value: "CRO + CMO", label: "Stakeholders" }
      ],
      problem: "The weekly pipeline report surfaces the data the CRO and CMO use to forecast: but forecast accuracy itself wasn't tracked as a personal KPI, leaving variance analysis to gut feel.",
      solution: "Extending the weekly pipeline report to pull closed-won revenue against what was in late-stage pipeline 4 weeks prior: surfacing forecast variance each week and building a methodology for accuracy ownership over time.",
      building: "",
      results: "In progress: first forecast vs. actuals comparison layer targeted for Q3 2026. Will establish a documented accuracy baseline and methodology."
    }
  },
  {
    slug: "hubspot-certification-track",
    title: "HubSpot Platform Certification",
    date: "2026-07",
    dateLabel: "Jul 2026",
    role: "revops",
    roleLabel: "RevOps",
    category: "enablement",
    section: "Skills in Progress",
    tags: ["HubSpot", "CRM Admin", "Certification"],
    impactAreas: ["CRM Administration", "Lifecycle Automation", "GTM Stack Depth"],
    summary: "Earning HubSpot Operations Hub, CRM, and Marketing Hub certifications to build hands-on admin depth alongside existing Salesforce and Domo experience.",
    company: "Domo",
    featured: false,
    status: 'planned',
    cardStats: ["Operations Hub", "CRM + Marketing Hub", "HubSpot Academy"],
    detail: {
      tagline: "Building the CRM admin depth modern RevOps roles require.",
      metrics: [
        { value: "Operations Hub", label: "Starting With" },
        { value: "CRM + Marketing", label: "Next Certs" },
        { value: "Free", label: "HubSpot Academy" },
        { value: "3–4 hrs", label: "Per Cert" }
      ],
      problem: "Most RevOps Manager roles require HubSpot admin experience: custom objects, lifecycle stages, workflow automation, and lead scoring. Current stack is Salesforce + Domo.",
      solution: "Completing HubSpot Academy certifications starting with Operations Hub (most relevant for RevOps workflow and lifecycle automation), then CRM Admin, then Marketing Hub.",
      building: "",
      results: "Not yet started: beginning July 2026. Certifications appear on LinkedIn and are directly cited in RevOps job descriptions."
    }
  },

  // ── Strategic Initiatives ──
  {
    slug: "free-trial-growth-initiative",
    title: "Free Trial Improvements",
    date: "2025-11",
    dateLabel: "Nov 2025",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "strategic",
    section: "Strategic Initiatives",
    tags: ["Strategic Initiative"],
    impactAreas: ["Funnel Optimization", "Revenue Growth", "Product Intelligence"],
    summary: "Led funnel optimization initiative improving MQL→SAL conversion 27–32%: redesigned the trial lifecycle end-to-end, cutting time-to-onboarding from 14 to 4 days and doubling attendance rates.",
    company: "Domo",
    featured: false,
    cardStats: ["↑89% Scheduling", "2× Attendance", "27-32% MQL→SAL", "14→4 Days"],
    detail: {
      tagline: "Cross-functional transformation of the free trial experience.",
      metrics: [
        { value: "\u219189%", label: "Onboarding Scheduling" },
        { value: "2\u00d7", label: "Attendance Rate" },
        { value: "27-32%", label: "MQL\u2192SAL Conversion" },
        { value: "14\u21924 Days", label: "Time to Onboarding" }
      ],
      problem: "The free trial experience had low onboarding scheduling rates, poor attendance, and a lengthy time-to-onboarding: limiting conversion and revenue potential.",
      solution: "Led a cross-functional initiative to transform the entire trial lifecycle, creating end-to-end visibility and automating Gong transcript analysis to surface recurring objections.",
      building: "Details coming soon: describe the technology stack, tools used, and your specific contributions.",
      results: "Onboarding scheduling improved 89% (8.2% to 15.5%), attendance doubled to 11-12%, MQL-to-SAL conversion sustained at 27-32%, and time-to-onboarding dropped from 14 to 4 days. Two of the best months since the Freemium drop occurred after these changes."
    }
  },
  {
    slug: "hubspot-revops-build",
    title: "HubSpot RevOps Build",
    date: "2026-07",
    dateLabel: "Jul 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["HubSpot", "CRM Admin", "Lifecycle Automation"],
    impactAreas: ["CRM Architecture", "Lead Routing", "Funnel Automation"],
    summary: "End-to-end HubSpot RevOps build in a sandbox environment: pipeline stage design, MQL→SQL→SAL lifecycle automation, round-robin lead routing workflow, and an executive funnel metrics dashboard.",
    company: "Domo",
    featured: false,
    status: 'building',
    cardStats: ["Pipeline Stages", "Lifecycle Automation", "Lead Routing"],
    detail: {
      tagline: "Building the HubSpot foundation I'd deploy in any RevOps role.",
      metrics: [
        { value: "4 Stages", label: "Pipeline Design" },
        { value: "MQL→SAL", label: "Lifecycle Logic" },
        { value: "Round-Robin", label: "Lead Routing" },
        { value: "Funnel", label: "Dashboard" }
      ],
      problem: "HubSpot is the CRM of choice at several target companies. Rather than learn it on the job, I'm building a production-quality RevOps setup in a sandbox to validate and demonstrate my implementation approach.",
      solution: "Configuring a full HubSpot instance: deal pipeline stages, contact lifecycle stages (MQL→SQL→SAL→Customer), lead routing workflows with round-robin assignment, property-based enrollment triggers, and a funnel analytics dashboard tracking conversion rates at each stage.",
      building: "In progress: completing alongside HubSpot Revenue Operations certification.",
      results: "In progress: screenshots and configuration details will be documented on completion."
    }
  },
  {
    slug: "territory-framework",
    title: "Territory Planning Framework",
    date: "2026-07",
    dateLabel: "Jul 2026",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "strategic",
    section: "Strategic Initiatives",
    tags: ["Territory Planning", "RevOps", "Account Segmentation"],
    impactAreas: ["Territory Design", "Rep Assignment", "Pipeline Coverage"],
    summary: "Account segmentation and rep assignment framework for a SaaS GTM motion: ICP definition, three-tier account model, rep capacity modeling, and a quarterly rebalance cadence built around real Domo ADM context.",
    company: "Domo",
    featured: false,
    status: 'planned',
    cardStats: ["ICP Tiering", "Rep Assignment Logic", "Quarterly Rebalance"],
    detail: {
      tagline: "Territory design as a system, not a spreadsheet.",
      metrics: [
        { value: "3 Tiers", label: "Account Model" },
        { value: "ICP-Based", label: "Segmentation" },
        { value: "Quarterly", label: "Rebalance Cadence" },
        { value: "Capacity", label: "Modeling" }
      ],
      problem: "Territory planning is a core RevOps competency that most analysts never formally document: accounts get assigned without a clear methodology, leading to imbalanced workloads and missed whitespace.",
      solution: "Building a territory framework grounded in Domo's ADM motion: ICP definition by vertical + size band, Tier 1/2/3 account model by revenue potential × urgency, rep assignment logic (specialization vs. round-robin), capacity modeling, and quarterly rebalance triggers.",
      building: "In progress: framework document and Domo dashboard companion in development.",
      results: "Not yet complete: framework methodology and tooling will be documented on completion."
    }
  }
];
