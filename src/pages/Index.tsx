import { useEffect, useState } from "react";
import { Phone, MessageCircle, MapPin, GraduationCap, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ownerPortrait from "@/assets/owner-portrait.jpg";
import promoBanner from "@/assets/promo-banner.jpg";

const Index = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const phoneNumber = "8879797777";
  const whatsappNumber = "918879797777";
  const mapsLink = "https://maps.app.goo.gl/coFa2GZ4AfMARrzMA";

  useEffect(() => {
    // Simple visitor counter using localStorage
    const count = localStorage.getItem("visitorCount");
    const newCount = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("visitorCount", newCount.toString());
    setVisitorCount(newCount);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in learning more about Siva Tuitions.`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-alert text-alert-foreground py-3 text-center font-semibold sticky top-0 z-50">
        <p className="text-sm md:text-base">🎓 Admissions Open • Personalized Coaching • Limited Seats Available</p>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-[46px] z-40 backdrop-blur-md bg-background/80 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-xl md:text-2xl font-bold text-primary">SIVA TUITIONS</h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="whatsapp" size="sm" onClick={handleWhatsApp} aria-label="Contact via WhatsApp">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
            <Button variant="action" size="sm" onClick={handleCall} aria-label="Call now">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            {/* Left: Owner Portrait */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={ownerPortrait}
                  alt="Yadlapalli Naga Murali Krishna - Educational Expert"
                  className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Hero Content */}
            <div className="text-center md:text-left">
              <Badge className="bg-accent text-accent-foreground mb-4 text-sm px-4 py-1">
                Trusted Educational Coaching
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                🚀 SIVA TUITIONS<br />Your Path to Academic Success
              </h2>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                  Yadlapalli Naga Murali Krishna
                </h3>
                <p className="text-muted-foreground font-medium">
                  M.Tech., M.C.A., M.B.A., M.Sc.
                </p>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Expert coaching for EAMCET, EAPCET, Intermediate & 10th Standard students. Get good marks in Betterment & Supplementary Examinations. Foundation classes for students between 6th and 10th.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                <Button variant="action" size="lg" onClick={handleCall}>
                  <Phone className="h-5 w-5" />
                  Call {phoneNumber}
                </Button>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="mt-12">
            <img
              src={promoBanner}
              alt="Siva Tuitions - EAMCET, EAPCET, Intermediate coaching programs"
              className="w-full rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Siva Tuitions?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* What We Offer */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                What We Offer
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-2 mt-1">
                    <TrendingUp className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Short Term EAMCET & EAPCET Preparation</h4>
                    <p className="text-muted-foreground">Intensive coaching programs designed to help you excel in competitive exams</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-2 mt-1">
                    <GraduationCap className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Intermediate & 10th Standard Coaching</h4>
                    <p className="text-muted-foreground">Comprehensive support for CBSE, STATE, and ICSE curriculum students</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-2 mt-1">
                    <Award className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Betterment & Supplementary Exam Support</h4>
                    <p className="text-muted-foreground">Focused coaching to help you achieve better grades in supplementary exams</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-2 mt-1">
                    <Users className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Foundation Classes (6th - 10th)</h4>
                    <p className="text-muted-foreground">Building strong academic foundations for long-term success</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-foreground"><strong>Expert Faculty:</strong> Taught by highly qualified educators with M.Tech, M.C.A., M.B.A., and M.Sc. degrees</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-foreground"><strong>Personalized Attention:</strong> Small batch sizes ensuring individual focus for every student</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-foreground"><strong>Proven Track Record:</strong> Consistent results with students achieving top marks</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-foreground"><strong>Flexible Timings:</strong> Classes scheduled to accommodate student convenience</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-foreground"><strong>All Boards Welcome:</strong> CBSE, STATE, and ICSE curriculum expertise</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to take your education to the next level?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                Enroll via WhatsApp
              </Button>
              <Button variant="action" size="lg" onClick={handleCall}>
                <Phone className="h-5 w-5" />
                Call to Enroll
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Find Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160399725!2d78.24323059453124!3d17.412608600658098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Siva Tuitions and Coaching Center Location"
              ></iframe>
            </div>
            <div className="text-center">
              <Button
                variant="action"
                size="lg"
                onClick={() => window.open(mapsLink, "_blank")}
                aria-label="Get directions to Siva Tuitions"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Siva Tuitions and Coaching Center. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Visitors: <span className="font-semibold text-foreground">{visitorCount.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
