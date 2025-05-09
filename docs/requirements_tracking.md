## Navigation
[↩️ Back to Owner TO DO List](./owner_todo.md)
## Legend
- ✅ = Completed
- 🔧 = In Progress
- ⏳ = Planned
- ❌ = Not Started

---

## Feature Tracking Table

| PRD ID      | Description                                               | Linked BRD ID | Status | Notes                                      |
|-------------|-----------------------------------------------------------|---------------|--------|--------------------------------------------|
| FR-WEB-01   | Static home page with brand intro and model grid          | BRD-MKT-01    | ✅     | Core for marketing presence                |
| FR-WEB-02   | Route for /models to display full gallery                 | BRD-MKT-01    | ✅     | Shows available model previews             |
| FR-WEB-03   | Route for /about with company/project info                | BRD-MKT-02    | ✅     | Background and mission statement           |
| FR-WEB-04   | Route for /contact with basic contact details             | BRD-MKT-02    | ✅     | Includes email or contact form             |
| FR-WEB-05   | Responsive mobile-first layout                            | BRD-MKT-01    | ✅     | Tailwind CSS handles responsiveness        |
| FR-WEB-06   | SEO-friendly metadata and structure                       | BRD-MKT-03    | ⏳     | Metadata optimization to come              |
| FR-WEB-07   | Static deployment compatibility (GoDaddy)                 | BRD-HOST-01   | ✅     | Using Next.js static export                |

| FR-MOD-01   | Display 3D model image, name, and description              | BRD-MDL-01    | ✅     | Pulled from models.json                    |
| FR-MOD-02   | Link to Patreon for access to each model                  | BRD-MKT-04    | ✅     | Monetization bridge                        |
| FR-MOD-03   | Optional model detail page by slug                        | BRD-MDL-02    | ⏳     | Optional per-model pages                   |
| FR-MOD-04   | Support future image gallery per model                    | BRD-MDL-03    | ❌     | Future enhancement                         |

| FR-MEM-01   | OAuth login with Google/Microsoft                         | BRD-MEM-01    | ❌     | Deferred 6–12 months                       |
| FR-MEM-02   | Show user dashboard on /account                           | BRD-MEM-02    | ❌     | Requires auth system                       |
| FR-MEM-03   | Stripe/Patreon API integration                            | BRD-MEM-03    | ❌     | Requires account system first              |
| FR-MEM-04   | Gated access to exclusive model downloads                 | BRD-MEM-04    | ❌     | Tied to membership backend                 |
| FR-MEM-05   | Admin upload interface for member-only models             | BRD-ADM-01    | ❌     | Post-authentication feature                |

| FR-MON-01   | Log website access and route usage                        | BRD-MON-01    | ⏳     | Simple client-side logging first           |
| FR-MON-02   | Track referral clicks to Patreon                          | BRD-MKT-04    | ⏳     | Can use event tracking                     |
| FR-MON-03   | Support Google Analytics or Plausible                     | BRD-MON-02    | ❌     | Simple tracking system TBD                 |
| FR-MON-04   | Monitor uptime and page speed                             | BRD-MON-03    | ❌     | Use third-party monitoring (e.g. UptimeRobot) |

| FR-ADM-01   | Admin login via OAuth                                     | BRD-ADM-01    | ❌     | Part of full backend phase                 |
| FR-ADM-02   | Admin panel to create/edit/delete models                  | BRD-ADM-02    | ❌     | Paired with auth and model manager         |
| FR-ADM-03   | Upload images directly from admin UI                      | BRD-ADM-03    | ❌     | Requires storage integration               |
| FR-ADM-04   | Track model engagement statistics                         | BRD-MON-04    | ❌     | Could link with analytics phase            |

| FR-A11Y-01  | Use semantic HTML5 for all content                        | BRD-QUAL-01   | 🔧     | Under evaluation                           |
| FR-A11Y-02  | Screen reader support with alt/labels                     | BRD-QUAL-01   | 🔧     | Some work already done                     |
| FR-A11Y-03  | Pass WCAG 2.1 AA color and navigation                     | BRD-QUAL-01   | ⏳     | Full audit and contrast testing pending    |
