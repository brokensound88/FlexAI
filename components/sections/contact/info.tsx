import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground">support@flex.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Office</h3>
              <p className="text-muted-foreground">
                123 Innovation Drive<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}