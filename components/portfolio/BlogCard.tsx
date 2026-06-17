import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { type BlogPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href="/blog" className="group block h-full">
      <Card hover className="p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="accent">{post.category}</Badge>
          <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
          {post.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </Card>
    </Link>
  );
}
