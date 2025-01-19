interface DashboardStatsProps {
    label: string;
    value: number;
}

export function DashboardStats({ label, value }: DashboardStatsProps) {
    return (
        <div className="w-72 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg p-6 border border-gray-200 transition-all hover:scale-105 hover:shadow-xl hover:from-secondary hover:to-primary">
            <p className="text-xl font-medium opacity-80 mb-2">{label}</p>
            <p className="text-3xl font-semibold">{value}</p>
            <div className="mt-4 border-t-2 border-accent opacity-30 pt-2">
                <p className="text-sm text-background">Updated recently</p>
            </div>
        </div>
    );
}