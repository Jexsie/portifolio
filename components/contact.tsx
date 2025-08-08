import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations.
              Let's discuss your project!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">
                    jessiessebuliba@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">+256 754 544 829</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">Kampala, Uganda</span>
                </div>
              </div>
            </div>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Send a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="border-gray-300"
                    />
                    <Input
                      placeholder="Last Name"
                      className="border-gray-300"
                    />
                  </div>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="border-gray-300"
                  />
                  <Input placeholder="Subject" className="border-gray-300" />
                  <Textarea
                    placeholder="Your message..."
                    rows={4}
                    className="border-gray-300 resize-none"
                  />
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
