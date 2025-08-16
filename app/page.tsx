"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, TrendingUp, BarChart3, DollarSign, Users, Instagram, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function WealthNetworkLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const pricingPlans = [
    {
      name: "Learner",
      price: "$5",
      period: "/month",
      description: "Perfect for beginners starting their investment journey",
      features: [
        "Stock + ETF recommendations",
        "Graphs and visuals",
        "Calculate your growth",
        "Access to learners community"
      ],
      whopLink: "https://whop.com/the-wealth-network-777/?productId=prod_ucx3uikBge36Z&a=smigo",
      popular: false,
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      name: "Investing",
      price: "$19",
      period: "/month",
      description: "Advanced tools for serious investors",
      features: [
        "How to open an investment account",
        "Risk assessment tools",
        "Portfolio planning",
        "Roth IRA + High Yield Savings",
        "Investing games"
      ],
      whopLink: "https://whop.com/the-wealth-network-777/?productId=prod_lgVNWELjgDIxd&a=smigo",
      popular: true,
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      name: "Mastering",
      price: "$39",
      period: "/month",
      description: "Professional-grade analysis and strategies",
      features: [
        "Weekly market updates",
        "Build your first 100k",
        "Maximize your streams of income",
        "High risk high reward stocks (>+100%)",
        "Library of free resources–books, podcasts, articles, videos, research",
        "Access to networking opportunities",
      ],
      whopLink: "https://whop.com/the-wealth-network-777/?productId=prod_BRUYsr7BYGhJN&a=smigo",
      popular: false,
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      name: "1-on-1 Mentorship",
      price: "$1,049.99",
      period: "/ 3 months",
      description: "Personalized mentorship and exclusive access",
      features: [
        "Private meetings",
        "Weekly lesson and action plans",
        "Build your own business",
        "Reduce your taxes",
        "Private connections and networking",
      ],
      whopLink: "https://whop.com/the-wealth-network-777/?a=investwithserenity&productId=prod_LpsPY0QGRhlYG",
      popular: false,
      icon: <Users className="h-6 w-6" />,
    },
  ]

  const testimonials = [
    {
      name: "Marcus Thompson",
      role: "Software Engineer & Part-time Trader",
      content:
        "Started with the Learner plan 6 months ago, now I'm consistently making 15-20% monthly returns. The daily alerts are game-changers!",
      avatar: "/young-black-male-professional-headshot.png",
      rating: 5,
    },
    {
      name: "Jessica Park",
      role: "Marketing Manager",
      content:
        "I was skeptical about investing, but the educational resources made everything click. Made my first $5K profit last month!",
      avatar: "/asian-woman-professional-headshot-smiling.png",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Small Business Owner",
      content:
        "The 1-on-1 mentorship is worth every penny. My mentor helped me turn $10K into $28K in just 4 months. Life-changing!",
      avatar: "/hispanic-businessman-professional.png",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "What makes you different from other investment services?",
      answer:
        "I remember what it was like to not understand a thing about finance, and my goal is to help you comprehend these topics in a way that serves you, not confuses you more. I want you to succeed, I want you to be able to pay for college or even your kids' college. I want you to retire comfortably, have money for emergencies, pay for medical expenses with stocks, learn to budget so you can enjoy the little things too, and take control of money instead of letting it control you.",
    },
    {
      question: "Is this suitable for complete beginners?",
      answer:
        "Absolutely. I have designed it to provide every single thing a beginner needs to understand and execute. If you are ready to start investing, you will immediately be given access to all the content in the learners plan, so you have all the knowledge you need to set yourself up for life.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Immediately. Once you comprehend life-changing knowledge, results will take effect as soon as you process the information. In regards to monetary success–it is dependent on your initial deposit, but the markets are always increasing, therefore so are your investments. But remember: Compound interest is where the magic is.",
    },
    {
      question: "Do you choose and build my investment portfolio?",
      answer:
        "No, you build your own portfolio based on the condensed quality information I present. I am not a financial advisor, I am an educator. We provide non-bias, clear and common investment options to help you make informed and thought out decisions.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, all our plans are month-to-month (except the 3-month mentorship program) and you can cancel anytime. No long-term contracts or hidden fees.",
    },
    {
      question: "Why do you teach this, and where did you learn?",
      answer:
        "I want to bring financial literacy to the low-and-middle class because this type of education is systematically denied to keep them relying on a system of consumerism and debt. Honestly, it makes me really angry. I want to help people learn and adopt the strategies of the privileged, because knowledge isn't something that should be kept for one group of people. It is my mission to make financial intelligence affordable and achievable. One side of my family came from poverty in rural China, and the other came from the suburban working class. I watched my dad learn and build himself into a successful man in adulthood, and he is the one that sparked my passion with investing. I genuinely love this topic so much and money is so incredibly fascinating to me. I have read book after book, watched a million videos, researched it for hours, and learned through my own experiences. Now it is time for me to help you!",
    },
  ]

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Stock Ticker */}
      <div className="bg-card/20 border-b border-border overflow-hidden">
        <div className="ticker-animation whitespace-nowrap py-2 text-sm">
          <span className="text-accent mr-8">AAPL +2.45%</span>
          <span className="text-muted mr-8">GOOGL -0.87%</span>
          <span className="text-accent mr-8">TSLA +5.23%</span>
          <span className="text-muted mr-8">MSFT +1.12%</span>
          <span className="text-accent mr-8">NVDA +3.78%</span>
          <span className="text-muted mr-8">AMZN -1.45%</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/10 to-transparent"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full blur-lg animate-pulse"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent animate-fade-in-up">
            The Wealth Network
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Start your investing journey fully equipped with the knowledge to succeed.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Don’t guess success–choose it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 animate-pulse-glow"
              onClick={() => window.open(pricingPlans.find((plan) => plan.popular)?.whopLink, "_blank")}
            >
              <span className="relative z-10">Start Your Journey</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-accent hover:text-base text-accent transform transition-all duration-300 hover:bg-primary/90 hover:border-accent/80 hover:scale-105 hover:shadow-lg hover:text-yellow-500 animate-pulse-glow"
              onClick={scrollToPricing}
            >
              View Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Choose Your Level of Wealth</h2>
            <p className="text-lg sm:text-md text-muted-foreground max-w-2xl mx-auto">
            We believe investing should be something you actually understand and enjoy. That is why we teach in a way that feels human to human, not like a boring econ textbook. Whether you’re an absolute beginner, or someone looking to further scale their wealth, there is a place for everyone here
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "border-accent shadow-lg shadow-accent/20" : "border-border hover:border-accent/50"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 text-accent">{plan.icon}</div>
                  <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-accent">{plan.price}</span>
                    <span className="text-muted-foreground text-sm sm:text-base">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full transition-all duration-200 ${
                      plan.popular
                        ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                        : "bg-primary/90 text-primary-foreground hover:bg-primary border border-accent/20 hover:border-accent/50"
                    }`}
                    onClick={() => window.open(plan.whopLink, "_blank")}
                  >
                    Subscribe Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Get answers to common questions about The Wealth Network
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-card/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-accent transition-transform flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 bg-card/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Real Results from Real Members</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Join thousands who've transformed their financial future with The Wealth Network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10 group"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-accent/20 group-hover:border-accent/50 transition-colors"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Social Media Bar */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <div className="flex flex-col gap-2 sm:gap-3 bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-2 sm:p-3 shadow-lg">
          <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10 sm:w-12 sm:h-12 p-0 hover:bg-accent/20 hover:text-accent transition-all duration-200"
            onClick={() => window.open("https://www.instagram.com/serenityinvests", "_blank")}
            title="Follow us on Instagram"
          >
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10 sm:w-12 sm:h-12 p-0 hover:bg-accent/20 hover:text-accent transition-all duration-200"
            onClick={() => window.open("https://www.tiktok.com/@serenityinvests", "_blank")}
            title="Follow us on TikTok"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10 sm:w-12 sm:h-12 p-0 hover:bg-accent/20 hover:text-accent transition-all duration-200"
            onClick={() => window.open("https://beacons.ai/capitalism_disliker", "_blank")}
            title="Visit our beacons.ai"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
