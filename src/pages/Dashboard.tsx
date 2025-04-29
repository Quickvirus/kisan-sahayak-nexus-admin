
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsCard from "../components/ui/stats-card";
import DataTable from "../components/ui/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShoppingBag, MessageSquare, FileText, HelpCircle, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  // Mock data for stats
  const statsData = [
    { title: "Total Users", value: "1,248", icon: Users, color: "bg-primary-500", increasedBy: 12 },
    { title: "Products Listed", value: "452", icon: ShoppingBag, color: "bg-secondary-500", increasedBy: 8 },
    { title: "Consultations", value: "78", icon: MessageSquare, color: "bg-accent-500", increasedBy: -3 },
    { title: "Contracts", value: "35", icon: FileText, color: "bg-indigo-500", increasedBy: 24 },
  ];

  // Mock data for recent users
  const recentUsers = [
    { id: 1, name: "Raj Patel", email: "raj.patel@example.com", role: "Farmer", status: "Active", createdAt: "2023-04-15" },
    { id: 2, name: "Priya Sharma", email: "priya.sharma@example.com", role: "Buyer", status: "Active", createdAt: "2023-04-14" },
    { id: 3, name: "Vikram Singh", email: "vikram.singh@example.com", role: "Consultant", status: "Pending", createdAt: "2023-04-12" },
    { id: 4, name: "Anita Desai", email: "anita.desai@example.com", role: "Farmer", status: "Active", createdAt: "2023-04-10" },
    { id: 5, name: "Suresh Kumar", email: "suresh.kumar@example.com", role: "Buyer", status: "Inactive", createdAt: "2023-04-08" },
  ];

  // Mock data for recent products
  const recentProducts = [
    { id: 1, name: "Organic Rice", category: "Grains", price: "₹2,500/quintal", farmer: "Raj Patel", status: "Approved" },
    { id: 2, name: "Fresh Tomatoes", category: "Vegetables", price: "₹35/kg", farmer: "Anita Desai", status: "Pending" },
    { id: 3, name: "Wheat Seeds", category: "Seeds", price: "₹200/kg", farmer: "Mohan Lal", status: "Approved" },
    { id: 4, name: "Mango (Alphonso)", category: "Fruits", price: "₹450/dozen", farmer: "Raj Patel", status: "Rejected" },
    { id: 5, name: "Organic Fertilizer", category: "Supplies", price: "₹850/bag", farmer: "Vikram Singh", status: "Approved" },
  ];

  // Column definitions
  const userColumns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Status", accessor: "status" },
    { header: "Created At", accessor: "createdAt" },
  ];

  const productColumns = [
    { header: "Product", accessor: "name" },
    { header: "Category", accessor: "category" },
    { header: "Price", accessor: "price" },
    { header: "Farmer", accessor: "farmer" },
    { header: "Status", accessor: "status" },
  ];

  // Action buttons for tables
  const renderUserActions = (row: Record<string, any>) => (
    <div className="flex justify-end gap-2">
      <Button variant="ghost" size="sm"><Eye size={16} /></Button>
      <Button variant="ghost" size="sm"><Edit size={16} /></Button>
      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 size={16} /></Button>
    </div>
  );

  const renderProductActions = (row: Record<string, any>) => (
    <div className="flex justify-end gap-2">
      <Button variant="ghost" size="sm"><Eye size={16} /></Button>
      <Button variant="ghost" size="sm"><Edit size={16} /></Button>
      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 size={16} /></Button>
    </div>
  );

  // Main queries count
  const queriesCount = 24;

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              increasedBy={stat.increasedBy}
            />
          ))}
        </div>

        {/* Queries Overview */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <HelpCircle size={18} className="text-accent-500" />
              Pending Queries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold">{queriesCount}</p>
                <p className="text-sm text-muted-foreground">Requires your attention</p>
              </div>
              <Button>View All Queries</Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable 
              columns={userColumns} 
              data={recentUsers}
              actions={renderUserActions}
            />
          </CardContent>
        </Card>

        {/* Recent Products */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Products</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable 
              columns={productColumns} 
              data={recentProducts}
              actions={renderProductActions}
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
