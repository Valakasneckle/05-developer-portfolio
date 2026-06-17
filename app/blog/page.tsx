import { BlogCard } from "@/components/portfolio/BlogCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing on portfolio architecture, SaaS dashboards, AI product websites, and frontend engineering.",
};

export default function BlogPage() {
  return (
    <Section>
      <SectionHeader
        label="Writing"
        title="Technical articles & notes"
        subtitle="Engineering notes on systems design, product websites, and frontend architecture."
        className="text-left mx-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Section>
  );
}
