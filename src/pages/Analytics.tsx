
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart as BarChartIcon } from "lucide-react";

const Analytics = () => {
  // Sample data for demonstration
  const monthlyData = [
    { month: "Jan", users: 40, products: 24, consultations: 18 },
    { month: "Feb", users: 45, products: 28, consultations: 22 },
    { month: "Mar", users: 55, products: 32, consultations: 28 },
    { month: "Apr", users: 65, products: 45, consultations: 35 },
    { month: "May", users: 70, products: 52, consultations: 42 },
    { month: "Jun", users: 80, products: 58, consultations: 48 },
  ];
  
  const userTypeData = [
    { name: "Farmers", value: 55 },
    { name: "Buyers", value: 30 },
    { name: "Consultants", value: 15 },
  ];
  
  const productCategoryData = [
    { name: "Seeds", value: 35 },
    { name: "Fertilizers", value: 25 },
    { name: "Pesticides", value: 20 },
    { name: "Equipment", value: 15 },
    { name: "Others", value: 5 },
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  return (
    <DashboardLayout title="Analytics Dashboard">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Platform Performance Analytics</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="bg-blue-50 pb-2">
              <CardTitle className="text-lg text-blue-700 flex items-center gap-2">
                <div className="p-2 bg-blue-100 rounded-md">
                  <BarChartIcon className="text-blue-700" size={18} />
                </div>
                <span>Total Users</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">1,285</p>
              <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-green-50 pb-2">
              <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-md">
                  <BarChartIcon className="text-green-700" size={18} />
                </div>
                <span>Total Products</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">456</p>
              <p className="text-sm text-green-600 mt-1">↑ 8% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-purple-50 pb-2">
              <CardTitle className="text-lg text-purple-700 flex items-center gap-2">
                <div className="p-2 bg-purple-100 rounded-md">
                  <BarChartIcon className="text-purple-700" size={18} />
                </div>
                <span>Consultations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-3xl font-bold">325</p>
              <p className="text-sm text-green-600 mt-1">↑ 15% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" name="New Users" fill="#8884d8" />
                  <Bar dataKey="products" name="New Products" fill="#82ca9d" />
                  <Bar dataKey="consultations" name="Consultations" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {userTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={productCategoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {productCategoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
