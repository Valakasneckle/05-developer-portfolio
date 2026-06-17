import { BlogCard } from "@/components/portfolio/BlogCard";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
  return (
    <Section>
      <SectionHeader
        label="Writing"
        title="Engineering notes"
        subtitle="Articles on portfolio architecture, SaaS dashboards, and frontend patterns for modern product websites."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/blog" variant="outline">
          <span className="flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </span>
        </Button>
      </div>
    </Section>
  );
}
