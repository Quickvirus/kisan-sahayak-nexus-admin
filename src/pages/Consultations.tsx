
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { MessageSquare, Eye, XCircle, CheckCircle } from "lucide-react";

const Consultations = () => {
  // Sample consultation data for demonstration
  const consultations = [
    {
      id: "CON001",
      farmer: "Raj Kumar",
      topic: "Pest Control for Wheat",
      status: "Pending",
      date: "2025-04-20",
      consultant: "Dr. Anand Singh"
    },
    {
      id: "CON002",
      farmer: "Meena Devi",
      topic: "Soil Health Management",
      status: "Active",
      date: "2025-04-22",
      consultant: "Dr. Priya Sharma"
    },
    {
      id: "CON003",
      farmer: "Ganesh Patel",
      topic: "Irrigation Techniques",
      status: "Completed",
      date: "2025-04-18",
      consultant: "Dr. Rajiv Verma"
    },
    {
      id: "CON004",
      farmer: "Lata Singh",
      topic: "Crop Rotation Strategy",
      status: "Pending",
      date: "2025-04-24",
      consultant: "Dr. Anand Singh"
    }
  ];

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Farmer", accessor: "farmer" },
    { header: "Topic", accessor: "topic" },
    { header: "Status", accessor: "status" },
    { header: "Date", accessor: "date" },
    { header: "Consultant", accessor: "consultant" }
  ];

  const renderActions = (consultation: any) => (
    <div className="flex gap-2 justify-end">
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <Eye size={16} />
        <span>View</span>
      </Button>
      {consultation.status === "Pending" && (
        <>
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-green-600 hover:text-green-700 hover:bg-green-50">
            <CheckCircle size={16} />
            <span>Approve</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50">
            <XCircle size={16} />
            <span>Reject</span>
          </Button>
        </>
      )}
    </div>
  );

  return (
    <DashboardLayout title="Consultation Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Manage Consultations</h2>
          <Button className="flex items-center gap-2">
            <MessageSquare size={18} />
            <span>New Consultation</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="bg-blue-50 pb-2">
              <CardTitle className="text-lg text-blue-700 flex items-center gap-2">
                <div className="p-2 bg-blue-100 rounded-md">
                  <MessageSquare className="text-blue-700" size={18} />
                </div>
                <span>Total Consultations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">{consultations.length}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-yellow-50 pb-2">
              <CardTitle className="text-lg text-yellow-700 flex items-center gap-2">
                <div className="p-2 bg-yellow-100 rounded-md">
                  <MessageSquare className="text-yellow-700" size={18} />
                </div>
                <span>Pending</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">
                {consultations.filter(c => c.status === "Pending").length}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-green-50 pb-2">
              <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-md">
                  <MessageSquare className="text-green-700" size={18} />
                </div>
                <span>Completed</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">
                {consultations.filter(c => c.status === "Completed").length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable 
              columns={columns} 
              data={consultations}
              actions={renderActions}
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Consultations;
