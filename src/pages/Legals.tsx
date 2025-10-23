import { FileText, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Legals = () => {
  const certificates = [
    {
      id: 1,
      title: "ISO 10002:2018 Certificate",
      image: "/placeholder.svg",
      alt: "ISO 10002:2018 Certificate of Registration"
    },
    {
      id: 2,
      title: "ISO 22000:2018 Certificate",
      image: "/placeholder.svg",
      alt: "ISO 22000:2018 Certificate of Registration"
    },
    {
      id: 3,
      title: "HACCP Certificate",
      image: "/placeholder.svg",
      alt: "HACCP Certificate of Compliance"
    },
    {
      id: 4,
      title: "ADSEI Membership",
      image: "/placeholder.svg",
      alt: "Association of Direct Selling Entities of India Membership"
    }
  ];

  const documents = [
    { name: "Basic Documents", icon: FileText },
    { name: "FSSAI Certificate - State Wise", icon: FileText },
    { name: "GST Certificates - State Wise", icon: FileText },
    { name: "Eurofins Analytical Report", icon: FileText },
    { name: "Trademark Certificates", icon: FileText },
    { name: "Company Registration Certificate", icon: FileText }
  ];

  const handleDownload = (docName: string) => {
    // Placeholder for download functionality
    console.log(`Downloading: ${docName}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="hover:text-secondary transition-colors">
              Home
            </a>
            <span>/</span>
            <span>Legal Certificates</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-12 text-foreground">
          Legal Certificates
        </h1>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificates.map((cert) => (
            <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-[3/4] relative bg-muted">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Downloadable Documents */}
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Download Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start h-auto py-4 px-6 text-left hover:bg-accent"
                onClick={() => handleDownload(doc.name)}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <doc.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="flex-1 font-medium">{doc.name}</span>
                  <Download className="h-5 w-5 text-muted-foreground" />
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Note Section */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> All certificates and documents are regularly updated and verified. 
            For any queries regarding our legal compliance, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legals;
