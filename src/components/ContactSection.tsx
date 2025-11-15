import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/useToast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
        }
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. I will get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again later.",
      });

      console.error("EmailJS Error:", error);

      toast({
        title: "Error",
        description:
          "There was an issue sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative -bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
          I am always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:andyhplau@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    andyhplau@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/andyhplau"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/andyhplau
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/andyhplau"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/andyhplau
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Vancouver, BC, Canada
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-[2px] p-8 rounded-lg shadow-xs relative z-10">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="flex text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="flex text-sm font-medium mb-2"
                >
                  Message Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Inquiry about..."
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello Andy..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
