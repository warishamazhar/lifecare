import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DEList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for demonstration
  const sampleData = [
    { sno: 1, code: "21B3B4" },
    { sno: 2, code: "F733FF" },
    { sno: 3, code: "BEF877" },
    { sno: 4, code: "266047" },
    { sno: 5, code: "E54CB3" },
    { sno: 6, code: "536641" },
    { sno: 7, code: "0A6782" },
    { sno: 8, code: "D66EC6" },
    { sno: 9, code: "18B5B6" },
    { sno: 10, code: "15727E" },
    { sno: 11, code: "94B793" },
    { sno: 12, code: "8D7316" },
    { sno: 13, code: "F78FF6" },
    { sno: 14, code: "42AD72" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/hero-wellness.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">DE List</h1>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-accent py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">DE List</h2>
            <p className="text-muted-foreground">Home / DE List</p>
          </div>
        </div>
      </div>

      {/* List Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="p-6 shadow-soft">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">S.No</TableHead>
                  <TableHead>Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleData.map((row) => (
                  <TableRow key={row.sno}>
                    <TableCell className="font-medium">{row.sno}</TableCell>
                    <TableCell>{row.code}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex justify-start gap-2 mt-6">
              <Button
                variant={currentPage === 1 ? "default" : "outline"}
                onClick={() => setCurrentPage(1)}
                className={currentPage === 1 ? "bg-accent hover:bg-accent/90" : ""}
              >
                1
              </Button>
              <Button
                variant={currentPage === 2 ? "default" : "outline"}
                onClick={() => setCurrentPage(2)}
                className={currentPage === 2 ? "bg-accent hover:bg-accent/90" : ""}
              >
                2
              </Button>
              <Button
                variant={currentPage === 3 ? "default" : "outline"}
                onClick={() => setCurrentPage(3)}
                className={currentPage === 3 ? "bg-accent hover:bg-accent/90" : ""}
              >
                3
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DEList;
