
import React from "react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  increasedBy?: number;
}

const StatsCard = ({ title, value, icon: Icon, color, increasedBy }: StatsCardProps) => {
  return (
    <div className="dashboard-card">
      <div className={`dashboard-icon ${color}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="stats-value">{value}</p>
        <p className="stats-label">{title}</p>
        {increasedBy !== undefined && (
          <div className="flex items-center mt-1 text-xs">
            <span className={increasedBy >= 0 ? "text-green-500" : "text-red-500"}>
              {increasedBy >= 0 ? "+" : ""}{increasedBy}%
            </span>
            <span className="ml-1 text-gray-500">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
