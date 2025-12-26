
import { Folder, Layers, CreditCard, Gem } from 'lucide-react';
import Link from 'next/link';

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    count: number;
    color: string;
    link: string;
    linkText: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description, count, color, link, linkText }) => {
    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[140px]">
            <div className="flex justify-between items-start">
                <div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3`} style={{ backgroundColor: `${color}20` }}>
                        {icon}
                    </div>
                    <h3 className="font-bold text-gray-900">{title}</h3>
                    <p className="text-xs text-gray-400">{description}</p>
                </div>
                <span className="text-3xl font-bold text-purple-700">{count}</span>
            </div>
            <Link href={link} className="text-purple-600 text-sm font-medium mt-4 hover:underline">{linkText} &rarr;</Link>
        </div>
    );
}

export function StatCards() {
    const stats = [
        {
            icon: <Folder className="w-5 h-5 text-purple-600" />,
            title: "My Tools",
            description: "All tools in your personal library",
            count: 5,
            color: "#8b31ff",
            link: "#",
            linkText: "View tools"
        },
        {
            icon: <Layers className="w-5 h-5 text-orange-400" />,
            title: "My Tech Stack",
            description: "Your curated tool collections",
            count: 0,
            color: "#fb923c",
            link: "#",
            linkText: "View stacks"
        },
        {
            icon: <CreditCard className="w-5 h-5 text-green-500" />,
            title: "Subscriptions",
            description: "Your tool subscriptions",
            count: 0,
            color: "#22c55e",
            link: "#",
            linkText: "View subscriptions"
        },
        {
            icon: <Gem className="w-5 h-5 text-purple-500" />,
            title: "Rewards",
            description: "Your available reward points",
            count: 0,
            color: "#a855f7",
            link: "#",
            linkText: "View rewards"
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    )
}
