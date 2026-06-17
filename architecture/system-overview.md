# System Overview

```mermaid
flowchart TD
    Visitor[Visitor] --> Portfolio[Developer Portfolio 2.0]
    Portfolio --> Home[Home Page]
    Portfolio --> ProjectsPage[Projects Page]
    Portfolio --> ProjectDetail[Project Detail Page]
    Portfolio --> AboutPage[About Page]
    Portfolio --> BlogPage[Blog Page]
    Portfolio --> ContactPage[Contact Page]

    Home --> Hero[Hero]
    Home --> Skills[Skills]
    Home --> FeaturedProjects[Featured Projects]
    Home --> Services[Services]
    Home --> ArchShowcase[Architecture Showcase]
    Home --> Experience[Experience]
    Home --> Testimonials[Testimonials]
    Home --> BlogPreview[Blog Preview]
    Home --> CTA[Contact CTA]

    ProjectsPage --> ProjectCards[Project Cards]
    ProjectCards --> ProjectDetail

    ContactPage --> LeadForm[Lead Form]
    LeadForm --> FutureEmail[Future Email Notification]
    LeadForm --> FutureCRM[Future CRM Integration]
```

## Explanation

Developer Portfolio 2.0 is a multi-page Next.js application. Visitors typically land on the home page, review skills and featured projects, explore services and architecture thinking, then move to project detail pages or the contact form.

The contact form is currently UI-only. Future integrations can connect it to email services or a CRM for lead management.

Data for all pages is sourced from typed static files in the `data/` directory, keeping content editable without a database or CMS.
