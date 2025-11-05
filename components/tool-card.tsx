import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  category: 'image' | 'video';
}

export function ToolCard({ title, description, href, icon: Icon, category }: ToolCardProps) {
  const categoryColors = {
    image: 'from-blue-500 to-cyan-500',
    video: 'from-purple-500 to-pink-500'
  };

  return (
    <Link href={href} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/50">
        <CardHeader>
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryColors[category]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl mb-2">{title}</CardTitle>
          <CardDescription className="text-base">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
