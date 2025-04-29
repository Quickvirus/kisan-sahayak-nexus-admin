
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DataTable from "../components/ui/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Edit, Trash2, UserPlus, Search } from "lucide-react";

const UserManagement = () => {
  // Mock data for users
  const users = [
    { id: 1, name: "Raj Patel", email: "raj.patel@example.com", role: "Farmer", status: "Active", location: "Gujarat", joinDate: "15 Apr 2023" },
    { id: 2, name: "Priya Sharma", email: "priya.sharma@example.com", role: "Buyer", status: "Active", location: "Delhi", joinDate: "14 Apr 2023" },
    { id: 3, name: "Vikram Singh", email: "vikram.singh@example.com", role: "Consultant", status: "Pending", location: "Punjab", joinDate: "12 Apr 2023" },
    { id: 4, name: "Anita Desai", email: "anita.desai@example.com", role: "Farmer", status: "Active", location: "Maharashtra", joinDate: "10 Apr 2023" },
    { id: 5, name: "Suresh Kumar", email: "suresh.kumar@example.com", role: "Buyer", status: "Inactive", location: "Tamil Nadu", joinDate: "08 Apr 2023" },
    { id: 6, name: "Meena Joshi", email: "meena.joshi@example.com", role: "Farmer", status: "Active", location: "Karnataka", joinDate: "05 Apr 2023" },
    { id: 7, name: "Ajay Verma", email: "ajay.verma@example.com", role: "Consultant", status: "Active", location: "Uttar Pradesh", joinDate: "03 Apr 2023" },
    { id: 8, name: "Neha Gupta", email: "neha.gupta@example.com", role: "Buyer", status: "Pending", location: "Rajasthan", joinDate: "01 Apr 2023" },
  ];

  // Column definitions
  const userColumns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Status", accessor: "status" },
    { header: "Location", accessor: "location" },
    { header: "Join Date", accessor: "joinDate" },
  ];

  // Action buttons for tables
  const renderUserActions = (row: Record<string, any>) => (
    <div className="flex justify-end gap-2">
      <Button variant="ghost" size="sm"><Eye size={16} /></Button>
      <Button variant="ghost" size="sm"><Edit size={16} /></Button>
      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 size={16} /></Button>
    </div>
  );

  return (
    <DashboardLayout title="User Management">
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="text-lg">User Management</CardTitle>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  <Input className="pl-10" type="text" placeholder="Search users..." />
                </div>
                <Button className="flex items-center gap-2">
                  <UserPlus size={16} />
                  <span>Add User</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-md overflow-hidden">
              <DataTable 
                columns={userColumns} 
                data={users}
                actions={renderUserActions}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;
