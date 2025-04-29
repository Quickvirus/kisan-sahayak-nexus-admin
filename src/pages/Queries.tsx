
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { HelpCircle, Eye, CheckCircle, XCircle } from "lucide-react";

const Queries = () => {
  // Sample queries data for demonstration
  const queries = [
    {
      id: "QRY001",
      farmer: "Anita Desai",
      subject: "App Navigation Issue",
      status: "Open",
      date: "2025-04-26",
      priority: "Medium"
    },
    {
      id: "QRY002",
      farmer: "Vikram Patel",
      subject: "Payment Not Processed",
      status: "In Progress",
      date: "2025-04-25",
      priority: "High"
    },
    {
      id: "QRY003",
      farmer: "Sanjay Kumar",
      subject: "Product Listing Problem",
      status: "Resolved",
      date: "2025-04-23",
      priority: "Low"
    },
    {
      id: "QRY004",
      farmer: "Priya Sharma",
      subject: "Account Access Issue",
      status: "Open",
      date: "2025-04-27",
      priority: "High"
    }
  ];

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Farmer", accessor: "farmer" },
    { header: "Subject", accessor: "subject" },
    { header: "Status", accessor: "status" },
    { header: "Date", accessor: "date" },
    { header: "Priority", accessor: "priority" }
  ];

  const renderActions = (query: any) => (
    <div className="flex gap-2 justify-end">
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <Eye size={16} />
        <span>View</span>
      </Button>
      {query.status !== "Resolved" && (
        <>
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-green-600 hover:text-green-700 hover:bg-green-50">
            <CheckCircle size={16} />
            <span>Resolve</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50">
            <XCircle size={16} />
            <span>Close</span>
          </Button>
        </>
      )}
    </div>
  );

  return (
    <DashboardLayout title="Query Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Manage User Queries</h2>
          <Button className="flex items-center gap-2">
            <HelpCircle size={18} />
            <span>New Query</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="bg-yellow-50 pb-2">
              <CardTitle className="text-lg text-yellow-700 flex items-center gap-2">
                <div className="p-2 bg-yellow-100 rounded-md">
                  <HelpCircle className="text-yellow-700" size={18} />
                </div>
                <span>Total Queries</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">{queries.length}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-red-50 pb-2">
              <CardTitle className="text-lg text-red-700 flex items-center gap-2">
                <div className="p-2 bg-red-100 rounded-md">
                  <HelpCircle className="text-red-700" size={18} />
                </div>
                <span>Open</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">
                {queries.filter(q => q.status === "Open").length}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-green-50 pb-2">
              <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-md">
                  <HelpCircle className="text-green-700" size={18} />
                </div>
                <span>Resolved</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">
                {queries.filter(q => q.status === "Resolved").length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Queries</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable 
              columns={columns} 
              data={queries}
              actions={renderActions}
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Queries;
