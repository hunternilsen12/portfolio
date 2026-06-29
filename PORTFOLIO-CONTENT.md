# Hunter Nilsen — Portfolio Content

> **How to use this file:** Edit content here first, then propagate changes to the React source files.
> - About text → `src/components/About.tsx`
> - Experience bullets → `src/components/Experience.tsx` + `src/pages/ResumePage.tsx`
> - Skills → `src/components/Skills.tsx` + `src/pages/ResumePage.tsx`
> - Projects → `src/data/projects.ts`
> - Sidebar/resume header → `src/components/Sidebar.tsx` + `src/pages/ResumePage.tsx`

---

## Identity

**Name:** Hunter Nilsen
**Title:** Revenue Operations & AI Engineering at Domo
**Location:** Sandy, UT 84092
**Email:** hunternilsen12@gmail.com (personal) · hunter.nilsen@domo.com (work)
**LinkedIn:** linkedin.com/in/hunternilsen
**Phone:** (801) 995-8442
**Portfolio:** hunternilsen12.github.io/portfolio/

---

## About Section

### Subtitle
Revenue Operations & AI Engineering at Domo

### Paragraph 1
I run revenue operations at Domo — owning pipeline reporting, funnel analytics, and GTM systems for the CRO and CMO while engineering the internal tools that make those workflows possible. My focus is on the full sales motion: MQL→SAL lifecycle definitions, attribution modeling, pipeline hygiene, and conversion optimization.

### Paragraph 2
Beyond the analytics work, I've led 3 Forward Deployed Engineering onsites with Feld Entertainment, ESPN, and Ocean Partners — delivering AI-powered solutions that generated $1.2M+ in measurable revenue impact. I also own and maintain the RevenueSuite, a set of internal GTM tools that replaced $350K+ in enterprise SaaS spend.

### Stats
| Stat | Label |
|------|-------|
| $1.2M+ | Revenue Impact |
| 3 | FDE Onsites |
| $350K | Gong Replacement |
| Weekly | CRO/CMO Reports |

---

## Experience

### RevOps Analyst & AI Engineer
**Company:** Domo — American Fork, UT
**Dates:** Dec 2025 – Present

**Bullets:**
- Led 3 Forward Deployed Engineering onsites with Feld Entertainment, ESPN, and Ocean Partners, delivering AI-powered Domo solutions that generated $1.2M in upsell value
- Own weekly pipeline reporting to the CRO and CMO — MQL→SAL conversion trends, rep efficiency, velocity metrics, and funnel attribution — driving operational decisions across Sales and Marketing
- Own and maintain the RevenueSuite — internal GTM tools (RevReplay, RevRadar, RevRoutine) built to replace $350K+ in enterprise SaaS spend, used daily by the revenue org

### Account Development Operations Analyst
**Company:** Domo — American Fork, UT
**Dates:** Feb 2025 – Dec 2025

**Bullets:**
- Built automated workflow to surface lapsed opportunities and historical account context for ADMs, generating $500K in new revenue within 3 months
- Conducted root-cause analysis into a persistent decline in marketing-sourced SALs, identifying an unmapped structural attribution gap that reframed the team's pipeline strategy
- Built Clay and Apollo.io-powered research workflows with custom prompt engineering to surface prospect pain points and generate personalized outreach at scale

### Account Development Manager
**Company:** Domo — American Fork, UT
**Dates:** Apr 2024 – Jan 2025

**Bullets:**
- Sourced 16+ qualified opportunities over 8 months, contributing net new ARR pipeline through proactive discovery and cross-functional account coordination

---

## Education

| Degree | School | Date |
|--------|--------|------|
| Master of Science in Business Analytics | University of Utah, David Eccles School of Business | Dec 2024 |
| Bachelor of Science in Information Systems | University of Utah, David Eccles School of Business | May 2023 |

---

## Certifications

| Certification | Date |
|---------------|------|
| Domo MajorDomo Certified | May 2024 |
| Snowflake SnowPro Core Certified | Sept 2024 |
| HubSpot Operations Hub *(planned)* | Jul 2026 |

---

## Skills

### Core Strengths

**RevOps**
Pipeline Reporting · Attribution Modeling · Funnel Analytics · MQL/SQL Lifecycle · SLA Design

**Outbound**
Clay · Apollo.io · Enrichment Workflows · Outreach Automation

**AI & Code**
Claude API · Agentic Workflows · Python · TypeScript · SQL · React

**Data**
Snowflake · Domo · Salesforce

### Building Toward

**Commission Design**
Quota Modeling · Attainment Tiers · CSM Commission

**Forecasting**
Forecast vs. Actuals · Pipeline Coverage Ratios

**CRM Admin**
HubSpot Operations Hub · Lifecycle Automation · Lead Scoring

**Territory**
Territory Model Design · Account Routing Rules

---

## Projects

> Sorted newest first. `status` field: `complete` (default) · `building` (In Progress badge) · `planned` (Coming Soon badge)

### RevSuite

| Field | Value |
|-------|-------|
| **slug** | rev-replay |
| **title** | RevReplay — Gong Replacement |
| **date** | 2026-05 |
| **status** | complete |
| **cardStats** | $350K Saved · Teams Recording · AI Transcript Analysis |
| **summary** | Microsoft Teams-based call recorder and AI analysis platform replacing a $350K/year Gong spend — with live AI chat, sentiment analysis, talk/listen metrics, and action item extraction. |
| **solution** | Built RevReplay using React 18, Vite 6, shadcn/ui, and Microsoft Graph API. Records and transcribes Teams calls, provides live AI chat grounded in the transcript, and delivers automated analysis: summary, sentiment, key moments, action items, and deterministic talk/listen ratios. |
| **results** | Eliminated $350K/year in Gong licensing. Revenue team gets call recording, AI coaching, and analytics without the enterprise SaaS spend. |

| Field | Value |
|-------|-------|
| **slug** | rev-radar-expand |
| **title** | RevRadar — AI Account Intelligence |
| **date** | 2026-03 |
| **status** | complete |
| **cardStats** | 12 Jupyter Notebooks · Overnight Pre-Compute · L2b/L2e/L2a Tiers |
| **summary** | AI-powered account intelligence for AEs, CSMs, and SEs — surfaces renewal urgency, expansion recommendations, battle cards, Gong call signals, and AI expansion guidance, all pre-computed overnight. |
| **solution** | Built RevRadar with React 18, Vite 5, Tailwind 4, Zustand, and D3. A 12-notebook Jupyter pipeline pre-computes pipeline coverage and forecasting intelligence overnight — ARR pacing vs. quota, renewal urgency scoring, Gong call signals, expansion recommendations. |
| **results** | AEs, CSMs, and SEs get instant-load account intelligence on demand — no manual research, no chasing Salesforce. |

| Field | Value |
|-------|-------|
| **slug** | rev-routine |
| **title** | RevRoutine — Enablement Platform |
| **date** | 2026-04 |
| **status** | complete |
| **cardStats** | AI Co-Pilot · RFP Automation · Learning Pathways |
| **summary** | Revenue enablement platform combining a searchable knowledge base, AI co-pilot, RFP automation, structured learning modules, and asset generation — replacing scattered docs and static wikis. |
| **solution** | Built RevRoutine with React 18, Vite 5, Tailwind 4, Zustand, and @dnd-kit. Features: PDF/Word/markdown upload with full-text search, AI chat grounded in the knowledge base, RFP question extraction and answer drafting, drag-and-drop learning modules. |
| **results** | Central hub for revenue team knowledge — reduces time-to-answer on product questions, automates RFP drafting, and standardizes new-hire ramp. |

| Field | Value |
|-------|-------|
| **slug** | call-review-coaching-app |
| **title** | RevRadio — STC Call Coaching |
| **date** | 2026-02 |
| **status** | complete |
| **cardStats** | STC Framework · AI Overnight Scoring · 9-Category Rubric |
| **summary** | STC call scoring platform — every Gong call scored against a 9-category rubric by AI overnight, with peer and leader reviews layered on top for targeted coaching. |
| **solution** | Built RevRadio (Vite 5 + React 18 + TypeScript + Tailwind + Zustand) — a call scoring platform where a Jupyter AI pipeline scores every Gong discovery call against the 9-category STC rubric overnight, with human peer and leader reviews layered on top. |
| **results** | Every discovery call now gets scored. Coaching is targeted to actual gap categories rather than gut feel. |

| Field | Value |
|-------|-------|
| **slug** | rev-suite-catalog |
| **title** | RevSuite — Tool Catalog & Org Hub |
| **date** | 2026-04 |
| **status** | complete |
| **cardStats** | 23 Tools Cataloged · D3 Org Chart · ServiceNow Access Requests |
| **summary** | The RevSuite home page — a catalog of every app and integration the revenue org uses, plus a D3.js Revenue Alignment org chart for instant account and rep lookup. |
| **solution** | Built with Vite 8 + React 19 + Tailwind 4 + D3. Tool catalog listing 4 App Pages, 12 Internal Tools, and 7 External Tools with per-tool ServiceNow access-request tooltips, plus a Revenue Alignment modal with D3 org chart. |
| **results** | Self-serve tool discovery replaced ad-hoc Slack pings. Org chart eliminated the "who owns this account?" escalation. |

---

### FDE Customer Onsites

| Field | Value |
|-------|-------|
| **slug** | feld-entertainment-monster-jam |
| **title** | Monster Jam Jumbotron App |
| **date** | 2026-03 |
| **status** | complete |
| **cardStats** | Live Event Scoring · 33 PPT Decks Replaced · v0.4.6 |
| **summary** | Live event scoring app for Feld Entertainment replacing Excel workbooks and 33 PowerPoint decks with a synchronized multi-view web app deployed at feldinc.domo.com. |
| **results** | Shipped to production at feldinc.domo.com. Eliminated event-day coordination complexity across 33 PowerPoint decks and multiple operators. |

| Field | Value |
|-------|-------|
| **slug** | espn-contact-intelligence |
| **title** | ESPN Contact Intelligence |
| **date** | 2026-04 |
| **status** | building |
| **cardStats** | AI Q&A · Zendesk Data · Live Event Alerting |
| **summary** | AI chat interface over ESPN's Zendesk contact dispositions and case notes, enabling support teams to query behavioral patterns and surface insights during live broadcasts. |

| Field | Value |
|-------|-------|
| **slug** | ocean-partners-trading-dashboard |
| **title** | Ocean Partners Trading Dashboard |
| **date** | 2026-01 |
| **status** | complete |
| **cardStats** | 5 Joined Datasets · 3 Linked Views · Metals + Contracts |
| **summary** | Executive commodities trading dashboard with three linked views covering metals, contracts, and counterparty exposure across five joined datasets. |
| **results** | Replaced multi-sheet manual lookups with a unified trading dashboard, giving traders instant counterparty exposure visibility. |

---

### Dashboards & Data Infrastructure

| Field | Value |
|-------|-------|
| **slug** | revops-report-library |
| **title** | RevOps Report Library |
| **date** | 2026-05 |
| **status** | complete |
| **cardStats** | Full-Text Search · FileSet Storage · Pipeline + Deep Dive Reports |
| **summary** | Production report browser for the full RevOps analytical output — pipeline reports, deep dives, and rolling analyses stored in Domo FileSet and searchable across every document. |
| **results** | All RevOps analytical output is now indexed and searchable. Leadership can find any historical pipeline report or deep dive without Slack archaeology. |

| Field | Value |
|-------|-------|
| **slug** | forecasting-accuracy-framework |
| **title** | Forecasting Accuracy Framework |
| **date** | 2026-06 |
| **status** | building |
| **cardStats** | Forecast vs. Actuals · 4-Week Lookback · CRO/CMO |
| **summary** | Adding a forecast vs. actuals variance layer to the weekly CRO/CMO pipeline report — tracking closed-won against what was in late-stage pipeline 4 weeks prior. |

| Field | Value |
|-------|-------|
| **slug** | brother-bear |
| **title** | AE Results-vs-Effort Quadrant |
| **date** | 2026-04 |
| **status** | building |
| **cardStats** | Results vs. Effort · AE Quadrant View · Coaching Prioritization |
| **summary** | AE performance quadrant mapping results against effort — surfaces which reps are high-effort/low-output for targeted coaching intervention. |

| Field | Value |
|-------|-------|
| **slug** | pipeline-management-dashboard |
| **title** | Pipeline Management Dashboard |
| **date** | 2025-04 |
| **status** | complete |
| **cardStats** | *(none)* |
| **summary** | Executive dashboard used by CMO, CRO, and RevOps leadership to monitor pipeline health and identify stalled deals. |

| Field | Value |
|-------|-------|
| **slug** | ae-inbound-conversion-dashboard |
| **title** | AE Inbound Conversion Dashboard |
| **date** | 2025-06 |
| **status** | complete |
| **cardStats** | *(none)* |
| **summary** | Tracks how marketing leads are worked by individual reps, showing lead progression through pipeline stages for CMO and RVPs. |

| Field | Value |
|-------|-------|
| **slug** | marketing-sal-creation-dashboard |
| **title** | Marketing SAL Creation Dashboard |
| **date** | 2025-11 |
| **status** | complete |
| **cardStats** | CEO/CMO/CRO Users · Critical Gap Found |
| **summary** | High-visibility dashboard for CMO, CRO, and CEO that identified a critical gap in the Marketing SAL creation pipeline. |

---

### Automation & Workflows

| Field | Value |
|-------|-------|
| **slug** | no-lead-left-behind |
| **title** | No Lead Left Behind |
| **date** | 2026-06 |
| **status** | building |
| **cardStats** | Lead SLA Design · 4-hr Alert Threshold · Funnel Recovery |
| **summary** | Automated system to surface and re-route 'limbo leads' — leads with blank status, system-user owners, or inactive owners — before they fall through the funnel unworked. |

| Field | Value |
|-------|-------|
| **slug** | rev-research |
| **title** | RevResearch — Pre-Call AI Briefs |
| **date** | 2026-06 |
| **status** | building |
| **cardStats** | Daily AI Briefs · Calendar-Triggered · Gong + Salesforce Context |
| **summary** | Daily AI research briefs delivered to AEs before every meeting — reads Outlook calendar, pulls Gong + Salesforce context, and emails a tailored brief before the call starts. |

| Field | Value |
|-------|-------|
| **slug** | ai-outbound-engine |
| **title** | AI Outbound Engine |
| **date** | 2026-02 |
| **status** | complete |
| **cardStats** | *(none)* |
| **summary** | Automated prospecting engine built in Apollo.io with ICP targeting, daily contact sourcing, and AI-powered personalized email cadences. |

| Field | Value |
|-------|-------|
| **slug** | clay-old-opportunity-workflow |
| **title** | Old Opportunity Workflow |
| **date** | 2025-10 |
| **status** | complete |
| **cardStats** | 14 SALs · $90k ACV · $400k TCV |
| **summary** | Analyzes old opportunities using Gong call summaries to extract use cases and auto-generate templated outreach for reps. |

| Field | Value |
|-------|-------|
| **slug** | sgl-bulk-upload-process |
| **title** | SGL Bulk Upload Process |
| **date** | 2025-05 |
| **status** | complete |
| **cardStats** | *(none)* |
| **summary** | Streamlined process that saves ADMs and Sales Ops hours of manual work weekly while improving campaign attribution accuracy. |

---

### Team Enablement Tools & Processes

| Field | Value |
|-------|-------|
| **slug** | adm-daily-command-center |
| **title** | ADM Daily Command Center |
| **date** | 2025-12 |
| **status** | complete |
| **cardStats** | Pipeline Hygiene · Rep Efficiency · Daily RevOps Hub |
| **summary** | RevOps operations hub for ADMs — pipeline hygiene at a glance, lead queue management, rep efficiency tracking, and prospecting funnel visibility across 5 connected datasets. |

| Field | Value |
|-------|-------|
| **slug** | commission-calculator |
| **title** | ADM Commission Calculator |
| **date** | 2026-05 |
| **status** | complete |
| **cardStats** | S1/S2 Payout Tiers · Inbound Mode · Accelerator Modeling |
| **summary** | Tier-based commission calculator for ADM and Inbound sales teams — ADM mode models S1/S2 payout tiers with configurable accelerators; Inbound mode provides progressive per-SQO rate ladders with role-based visibility. |

| Field | Value |
|-------|-------|
| **slug** | consolidated-team-leadership-app |
| **title** | ADM Team App |
| **date** | 2025-09 |
| **status** | complete |
| **cardStats** | Dozens Consolidated · Unified Platform |
| **summary** | Consolidated dozens of disparate dashboards into a single cohesive analytics platform for the team. |

| Field | Value |
|-------|-------|
| **slug** | account-mapping-app |
| **title** | Account Mapping App |
| **date** | 2099-01 *(WIP — sorts last)* |
| **status** | building |
| **cardStats** | Account Hierarchy · Buying Committees · Revenue Alignment |
| **summary** | Maps internal and external org hierarchies, engagement history, and buying committees to identify champions and decision-makers. |

| Field | Value |
|-------|-------|
| **slug** | account-research-agent |
| **title** | Account Research Agent |
| **date** | 2025-07 |
| **status** | complete |
| **cardStats** | *(none)* |
| **summary** | Pre-discovery account intelligence that improves meeting readiness for ADMs and Sales. |

| Field | Value |
|-------|-------|
| **slug** | next-best-use-case-tool |
| **title** | Next Best Use Case App |
| **date** | 2025-09 |
| **status** | complete |
| **cardStats** | *(none)* |
| **summary** | Data-backed use case prioritization tool leveraged by the upsell team for expansion conversations. |

---

### Strategic Initiatives

| Field | Value |
|-------|-------|
| **slug** | new-adm-comp-plan |
| **title** | ADM Commission Plan Design |
| **date** | 2026-02 |
| **status** | complete |
| **cardStats** | Comp Plan Design · Quota Modeling · Cost-Neutral |
| **summary** | Designed and implemented the inbound ADM compensation plan — financial modeling and scenario analysis to increase rep incentives while keeping the program cost-neutral for the business. |

| Field | Value |
|-------|-------|
| **slug** | csm-commission-framework |
| **title** | CSM Commission Framework |
| **date** | 2026-06 |
| **status** | building |
| **cardStats** | CSM Team · NRR-Linked · Retention + Expansion |
| **summary** | Designing the commission plan structure for the Customer Success team — aligning payout mechanics to retention, expansion, and NRR targets. |

| Field | Value |
|-------|-------|
| **slug** | free-trial-growth-initiative |
| **title** | Free Trial Improvements |
| **date** | 2025-11 |
| **status** | complete |
| **cardStats** | ↑89% Scheduling · 2× Attendance · 27-32% MQL→SAL · 14→4 Days |
| **summary** | Led funnel optimization initiative improving MQL→SAL conversion 27–32% — redesigned the trial lifecycle end-to-end, cutting time-to-onboarding from 14 to 4 days and doubling attendance rates. |

| Field | Value |
|-------|-------|
| **slug** | market-intelligence-app |
| **title** | Market Intelligence App (roosterIQ) |
| **date** | 2099-01 *(WIP — sorts last)* |
| **status** | building |
| **cardStats** | 8 Intelligence Types · 7 Notebooks · C-Suite Audience |
| **summary** | Jupyter-based application aggregating AI updates, brand health, competitive positioning, customer intelligence, market share, and win/loss analysis for executive decision-making. |

---

### Skills in Progress

| Field | Value |
|-------|-------|
| **slug** | hubspot-certification-track |
| **title** | HubSpot Platform Certification |
| **date** | 2026-07 |
| **status** | planned |
| **cardStats** | Operations Hub · CRM + Marketing Hub · HubSpot Academy |
| **summary** | Earning HubSpot Operations Hub, CRM, and Marketing Hub certifications to build hands-on admin depth alongside existing Salesforce and Domo experience. |

---

## Resume Summary

Revenue Operations professional at Domo owning pipeline reporting, funnel analytics, and GTM systems for the CRO and CMO. Drives $1.2M+ in measurable revenue impact through FDE onsites and internal RevenueSuite tools — combining RevOps analytical depth with full-stack engineering to replace enterprise SaaS spend and automate the entire sales motion.

---

## Edit Log

> Track changes here before pushing to source files.

| Date | Change | Files Affected |
|------|--------|----------------|
| 2026-06-28 | Initial portfolio tracker build — added status field, 7 new projects, Skills two-tier layout | types/project.ts, projects.ts, Skills.tsx, ProjectCard.tsx, Filters.tsx, styles.css |
| 2026-06-29 | ~/work sync — added rev-suite-catalog, revops-report-library, rev-research, brother-bear; updated COMINT→RevRadio, commission calculator | projects.ts |
