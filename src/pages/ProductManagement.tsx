
import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DataTable from "../components/ui/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Edit, Trash2, Plus, Search, Filter } from "lucide-react";

const ProductManagement = () => {
  // Mock data for products
  const products = [
    { id: 1, name: "Organic Rice", category: "Grains", price: "₹2,500/quintal", farmer: "Raj Patel", status: "Approved", date: "15 Apr 2023" },
    { id: 2, name: "Fresh Tomatoes", category: "Vegetables", price: "₹35/kg", farmer: "Anita Desai", status: "Pending", date: "14 Apr 2023" },
    { id: 3, name: "Wheat Seeds", category: "Seeds", price: "₹200/kg", farmer: "Mohan Lal", status: "Approved", date: "13 Apr 2023" },
    { id: 4, name: "Mango (Alphonso)", category: "Fruits", price: "₹450/dozen", farmer: "Raj Patel", status: "Rejected", date: "12 Apr 2023" },
    { id: 5, name: "Organic Fertilizer", category: "Supplies", price: "₹850/bag", farmer: "Vikram Singh", status: "Approved", date: "11 Apr 2023" },
    { id: 6, name: "Basmati Rice", category: "Grains", price: "₹3,200/quintal", farmer: "Anita Desai", status: "Approved", date: "10 Apr 2023" },
    { id: 7, name: "Onions", category: "Vegetables", price: "₹28/kg", farmer: "Suresh Kumar", status: "Pending", date: "09 Apr 2023" },
    { id: 8, name: "Cotton Seeds", category: "Seeds", price: "₹180/kg", farmer: "Mohan Lal", status: "Approved", date: "08 Apr 2023" },
  ];

  // Column definitions
  const productColumns = [
    { header: "Product", accessor: "name" },
    { header: "Category", accessor: "category" },
    { header: "Price", accessor: "price" },
    { header: "Farmer", accessor: "farmer" },
    { header: "Status", accessor: "status" },
    { header: "Date", accessor: "date" },
  ];

  // Action buttons for tables
  const renderProductActions = (row: Record<string, any>) => (
    <div className="flex justify-end gap-2">
      <Button variant="ghost" size="sm"><Eye size={16} /></Button>
      <Button variant="ghost" size="sm"><Edit size={16} /></Button>
      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 size={16} /></Button>
    </div>
  );

  return (
    <DashboardLayout title="Product Management">
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="text-lg">Product Management</CardTitle>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  <Input className="pl-10" type="text" placeholder="Search products..." />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span>Filter</span>
                </Button>
                <Button className="flex items-center gap-2">
                  <Plus size={16} />
                  <span>Add Product</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-md overflow-hidden">
              <DataTable 
                columns={productColumns} 
                data={products}
                actions={renderProductActions}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProductManagement;
