import React from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast.js";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [cooldown, setCooldown] = React.useState(0);
  const formRef = React.useRef();

  // Check for existing cooldown on mount
  React.useEffect(() => {
    const cooldownEnd = localStorage.getItem("contactCooldownEnd");
    if (cooldownEnd) {
      const remainingTime = Math.floor(
        (parseInt(cooldownEnd) - Date.now()) / 1000
      );
      if (remainingTime > 0) {
        setCooldown(remainingTime);
        startCooldownTimer(remainingTime);
      } else {
        localStorage.removeItem("contactCooldownEnd");
      }
    }
  }, []);

  // Format cooldown time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const startCooldownTimer = (duration) => {
    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          localStorage.removeItem("contactCooldownEnd");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is in cooldown period
    if (cooldown > 0) {
      toast({
        title: "Please wait",
        description: `You can send another message in ${formatTime(cooldown)}.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. I'll get back to you as soon as possible.",
      });

      // Reset form after successful submission
      formRef.current.reset();

      // Start 5 minute (300 seconds) cooldown and save to localStorage
      const cooldownDuration = 300;
      const cooldownEnd = Date.now() + cooldownDuration * 1000;
      localStorage.setItem("contactCooldownEnd", cooldownEnd.toString());
      setCooldown(cooldownDuration);
      startCooldownTimer(cooldownDuration);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description:
          "Something went wrong. Please try emailing me directly at abe@abekor.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:abe@abekor.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    abe@abekor.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+17097692471"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (709) 769-2471
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    St. John's, NL, Canada
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/abe-k" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className=" space-y-6">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="First and Last Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || cooldown > 0}
                className={cn(
                  "main-button w-full flex items-center justify-center gap-2",
                  (isSubmitting || cooldown > 0) &&
                    "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting
                  ? "Sending..."
                  : cooldown > 0
                  ? `Cool down ${formatTime(cooldown)}`
                  : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
