import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  return (
    <section id="contact" className="px-4 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Let's get in touch!</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name *
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name *
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none text-white"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={submitContactForm.isPending}
              className="w-full bg-purple-gradient hover:bg-purple-gradient-hover py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white border-0"
            >
              {submitContactForm.isPending ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
