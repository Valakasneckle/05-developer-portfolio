# Component Structure

```mermaid
flowchart TD
    AppLayout[App Layout] --> Navbar[Navbar]
    AppLayout --> PageContent[Page Content]
    AppLayout --> Footer[Footer]

    PageContent --> Hero[Hero]
    PageContent --> Skills[Skills]
    PageContent --> FeaturedProjects[FeaturedProjects]
    PageContent --> Services[Services]
    PageContent --> ArchShowcase[ArchitectureShowcase]
    PageContent --> Experience[Experience]
    PageContent --> Testimonials[Testimonials]
    PageContent --> BlogPreview[BlogPreview]
    PageContent --> ContactCTA[ContactCTA]

    FeaturedProjects --> ProjectCard[ProjectCard]
    ProjectsPage[Projects Page] --> ProjectCard
    ProjectDetailPage[Project Detail Page] --> ProjectDetail[ProjectDetail]
    Skills --> SkillBadge[SkillBadge]
    Experience --> ExperienceItem[ExperienceItem]
    Services --> ServiceCard[ServiceCard]
    ArchShowcase --> ArchitectureCard[ArchitectureCard]
    BlogPreview --> BlogCard[BlogCard]
    ContactPage[Contact Page] --> ContactForm[ContactForm]

    SharedUI[Shared UI] --> Button[Button]
    SharedUI --> Card[Card]
    SharedUI --> Badge[Badge]
    SharedUI --> Section[Section]
    SharedUI --> Input[Input]
    SharedUI --> Textarea[Textarea]
    SharedUI --> Tabs[Tabs]
```

## Explanation

The root layout wraps every page with `Navbar` and `Footer`. Page content is composed from section components on the home page, or dedicated page components on routes like `/projects` and `/contact`.

Portfolio-specific components (`ProjectCard`, `ServiceCard`, etc.) consume data from `data/` files. Shared UI primitives provide consistent styling and behavior across the site.
