import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const DSSearch = () => {
  const [searchByCode, setSearchByCode] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [searchByMobile, setSearchByMobile] = useState("");

  // Sample data for demonstration
  const sampleData = [
    { sno: 1, code: "DS001", name: "Rajesh Kumar", state: "Jharkhand", city: "Ranchi" },
    { sno: 2, code: "DS002", name: "Priya Singh", state: "Jharkhand", city: "Dhanbad" },
    { sno: 3, code: "DS003", name: "Amit Sharma", state: "Jharkhand", city: "Jamshedpur" },
    { sno: 4, code: "DS004", name: "Sneha Gupta", state: "Bihar", city: "Patna" },
    { sno: 5, code: "DS005", name: "Vikas Yadav", state: "Jharkhand", city: "Bokaro" },
  ];

  const handleSearch = () => {
    // Search functionality would be implemented here
    console.log("Searching with:", { searchByCode, searchByName, searchByMobile });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Search Bar */}
      <section className="relative h-[300px] bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/hero-wellness.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">DS Search</h1>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-accent py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">DS Search</h2>
            <p className="text-muted-foreground">Home / DS Search</p>
          </div>
        </div>
      </div>

      {/* Search Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-6 text-foreground">DS Search</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <Input
                  type="text"
                  placeholder="By Code Search"
                  value={searchByCode}
                  onChange={(e) => setSearchByCode(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold text-muted-foreground">OR</span>
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="By Name Search"
                  value={searchByName}
                  onChange={(e) => setSearchByName(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-start-2 flex items-center justify-center">
                <span className="text-lg font-semibold text-muted-foreground">OR</span>
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="By Mobile Search"
                  value={searchByMobile}
                  onChange={(e) => setSearchByMobile(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="recaptcha" className="w-4 h-4" />
                <label htmlFor="recaptcha" className="text-sm text-muted-foreground">
                  I'm not a robot
                </label>
              </div>
              
              <Button 
                onClick={handleSearch}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                <Search className="mr-2 h-4 w-4" />
                SEARCH
              </Button>
            </div>
          </Card>

          {/* Results Table */}
          <Card className="mt-8 p-6 shadow-soft">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sno</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>City</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleData.map((row) => (
                  <TableRow key={row.sno}>
                    <TableCell>{row.sno}</TableCell>
                    <TableCell className="font-medium">{row.code}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.state}</TableCell>
                    <TableCell>{row.city}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DSSearch;
