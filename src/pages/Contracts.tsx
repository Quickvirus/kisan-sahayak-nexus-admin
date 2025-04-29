
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Download, CheckCircle } from "lucide-react";

const Contracts = () => {
  // Sample contract data for demonstration
  const contracts = [
    {
      id: "CTR001",
      title: "Wheat Supply Agreement",
      parties: "Raj Kumar & Punjab Agro Ltd",
      value: "₹245,000",
      status: "Active",
      date: "2025-04-15",
      expiry: "2026-04-15"
    },
    {
      id: "CTR002",
      title: "Rice Procurement Contract",
      parties: "Meena Devi & Haryana Food Corp",
      value: "₹325,000",
      status: "Pending Signature",
      date: "2025-04-18",
      expiry: "2026-04-18"
    },
    {
      id: "CTR003",
      title: "Vegetable Supply Agreement",
      parties: "Ganesh Patel & Fresh Foods Ltd",
      value: "₹180,000",
      status: "Expired",
      date: "2024-01-10",
      expiry: "2025-01-10"
    },
    {
      id: "CTR004",
      title: "Organic Certification Agreement",
      parties: "Lata Singh & Organic India",
      value: "₹75,000",
      status: "Active",
      date: "2025-02-20",
      expiry: "2026-02-20"
    }
  ];

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Title", accessor: "title" },
    { header: "Parties", accessor: "parties" },
    { header: "Value", accessor: "value" },
    { header: "Status", accessor: "status" },
    { header: "Date", accessor: "date" },
    { header: "Expiry", accessor: "expiry" }
  ];

  const renderActions = (contract: any) => (
    <div className="flex gap-2 justify-end">
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <Eye size={16} />
        <span>View</span>
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <Download size={16} />
        <span>Download</span>
      </Button>
      {contract.status === "Pending Signature" && (
        <Button variant="outline" size="sm" className="flex items-center gap-1 text-green-600 hover:text-green-700 hover:bg-green-50">
          <CheckCircle size={16} />
          <span>Sign</span>
        </Button>
      )}
    </div>
  );

  return (
    <DashboardLayout title="Contract Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Manage Contracts</h2>
          <Button className="flex items-center gap-2">
            <FileText size={18} />
            <span>New Contract</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="bg-green-50 pb-2">
              <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-md">
                  <FileText className="text-green-700" size={18} />
                </div>
                <span>Active Contracts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">
                {contracts.filter(c => c.status === "Active").length}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-yellow-50 pb-2">
              <CardTitle className="text-lg text-yellow-700 flex items-center gap-2">
                <div className="p-2 bg-yellow-100 rounded-md">
                  <FileText className="text-yellow-700" size={18} />
                </div>
                <span>Pending Signature</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">
                {contracts.filter(c => c.status === "Pending Signature").length}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-red-50 pb-2">
              <CardTitle className="text-lg text-red-700 flex items-center gap-2">
                <div className="p-2 bg-red-100 rounded-md">
                  <FileText className="text-red-700" size={18} />
                </div>
                <span>Expired</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">
                {contracts.filter(c => c.status === "Expired").length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Contracts</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable 
              columns={columns} 
              data={contracts}
              actions={renderActions}
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Contracts;
