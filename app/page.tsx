"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, TrendingUp, BarChart3, DollarSign, Users, Instagram, ChevronDown, MessageSquare, BookOpen, PlayCircle, TrendingUp as Growth, Shield, Heart, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function WealthNetworkLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Custom hook for scroll animations
  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isHydrated, setIsHydrated] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      // Mark as hydrated to prevent SSR mismatch
      setIsHydrated(true)
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        }
      )

      const currentRef = ref.current
      if (currentRef) {
        observer.observe(currentRef)
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef)
        }
      }
    }, [])

    return [ref, isHydrated && isVisible] as const
  }

  // Initialize scroll animations for different sections
  const [discordRef, discordVisible] = useScrollAnimation()
  const [pricingRef, pricingVisible] = useScrollAnimation()
  const [faqRef, faqVisible] = useScrollAnimation()
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation()

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
      name: "Sarah Chen",
      role: "College Graduate",
      content:
        "When I first joined The Wealth Network, I was living paycheck to paycheck with no clue how to make money work for me. I had tried reading blogs and watching YouTube videos, but I always ended up confused and overwhelmed. Serenity broke everything down in such a simple, human way that I finally understood what steps to take. Within a few weeks, I created my first budget that actually worked and started saving consistently. Three days later, I opened an investment account and now I watch my money grow every single month. It's such a relief to know I'm not guessing anymore. I finally feel like I have control over my future.",
      avatar: "/asian-woman-professional-headshot-smiling.png",
      rating: 5,
    },
    {
      name: "Jordan Kim",
      role: "Recent Graduate",
      content:
        "I joined because I wanted to stop stressing about money all the time. I didn't know where to start, and honestly, I was embarrassed by how little I knew. The server gave me not just knowledge but also the confidence to use it. Serenity's guidance made me realize that wealth isn't about being lucky or born into money, its about learning how to manage it. Now I've built up an emergency fund, invested in ETFs, and even have a plan to pay off my debt faster. The best part is I feel proud of myself for taking action instead of just wishing things would change. I never thought I'd say this, but money is something I actually feel good about now.",
      avatar: "/young-black-male-professional-headshot.png",
      rating: 5,
    },
    {
      name: "Marcus Thompson",
      role: "Software Engineer",
      content:
        "She made investing feel so much less scary. I finally feel like I know what I'm doing with my money.",
      avatar: "/hispanic-businessman-professional.png",
      rating: 5,
    },
    {
      name: "Maya Patel",
      role: "Administrative Assistant",
      content:
        "I had always dreamed of financial freedom but didn't know how to get there. Before this, I was constantly stressed about bills, never had savings, and avoided checking my bank account like the plague lol. Serenity's way of teaching felt so real and approachable and it didn't sound like a textbook, it's like a friend showing me the ropes. I started small, but those small steps added up fast. Now I have an emergency fund, I'm investing every month, and I even helped my younger brother start his first savings account because I wanted him to learn early too.",
      avatar: "/professional-woman-diverse.png",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      content:
        "I used to think wealth building was something only rich or super smart people could do. Serenity explained it in a way that actually made sense to me. Now I'm saving consistently, investing monthly, and for the first time in my life, I feel financially secure.",
      avatar: "/professional-man.png",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Retail Manager",
      content:
        "In just a few months I went from having no savings to building a portfolio I'm proud of. It is crazy to be making the extra money on the side, and I don't even have to do any work.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Taylor Johnson",
      role: "Nursing Student",
      content:
        "I always thought budgeting and investing were boring and too hard to understand, but the way Serenity teaches it actually makes me excited to learn. I've paid off credit card debt, started saving, and even set up my first investment account. This has been life changing for me. I know what to do when I have kids haha! I can make them millionaires.",
      avatar: "/asian-woman-professional-headshot-smiling.png",
      rating: 5,
    },
    {
      name: "Jasmine Williams",
      role: "Marketing Coordinator",
      content:
        "I joined because I was tired of being broke and confused. Her system gave me a clear plan I could actually stick to. I started with the Learner plan and it got me interested, so I joined the investors. Within weeks, I was already making profit and I set up my Roth IRA and my brokerage!",
      avatar: "/professional-woman-diverse.png",
      rating: 5,
    },
    {
      name: "Alex Foster",
      role: "Freelance Designer",
      content:
        "What I love most is that Serenity doesn't overcomplicate anything. It's straightforward, practical, and easy to follow. It is actually fun to read and I like her templates and designs.",
      avatar: "/professional-man.png",
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
      <section className="relative py-8 sm:py-12 lg:py-20 px-3 sm:px-4 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-card/10 to-transparent"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full blur-lg animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 pl-5">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent animate-fade-in-up">
                  Know your investments.<br />
                  <span className="text-accent">Money grows where knowledge flows.</span>
                </h1>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
                    You don't have to figure it out alone. The Wealth Network connects you with the knowledge, tools, guidance, and community to grow your money.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center animate-fade-in-up animation-delay-400">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 font-semibold rounded-xl"
                  onClick={() => window.open(pricingPlans.find((plan) => plan.popular)?.whopLink, "_blank")}
                >
                  <span className="relative z-10">Get Started</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-accent/20 text-foreground hover:bg-accent/5 hover:border-accent/40 transform transition-all duration-300 hover:scale-105 font-semibold rounded-xl"
                  onClick={scrollToPricing}
                >
                  View Plans
                </Button>
              </div>
            </div>

            {/* Right side - Image/Visual */}
            <div className="relative lg:order-last order-first">
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-accent/10 rounded-3xl blur-2xl transform -rotate-2"></div>
                
                {/* Main image container */}
                <div className="relative bg-card/20 backdrop-blur-sm border border-border/20 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                  {/* Owner Image */}
                  <div className="aspect-[4/3] lg:aspect-[3/4] rounded-xl lg:rounded-2xl relative overflow-hidden">
                    <img
                      src="/owner.webp"
                      alt="The Wealth Network Founder"
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Floating elements to simulate app UI */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-card/80 backdrop-blur-sm border border-border/20 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-medium text-foreground">+12.5%</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-card/80 backdrop-blur-sm border border-border/20 rounded-lg p-2 sm:p-3">
                      <div className="text-xs text-muted-foreground">Portfolio Value</div>
                      <div className="text-sm sm:text-base font-bold text-accent">$24,870</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section 
        ref={discordRef}
        className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          discordVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-sm sm:text-base px-3 py-1">
              FREE TO JOIN
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Start Your Journey in Our Discord Community
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get started with essential investing knowledge. Perfect for complete beginners!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left side - Features */}
            <div className="space-y-4 sm:space-y-6">
              <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card/20 border border-border/50 transition-all duration-700 ease-out delay-200 ${
                discordVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4'
              }`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    What is investing and why should you start?
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Learn the fundamentals of investing and understand why it's crucial for building wealth over time.
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card/20 border border-border/50 transition-all duration-700 ease-out delay-300 ${
                discordVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4'
              }`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    Key terms and definitions
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Master essential investing vocabulary with clear, easy-to-understand explanations.
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card/20 border border-border/50 transition-all duration-700 ease-out delay-500 ${
                discordVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4'
              }`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Growth className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    Growth examples
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    See real examples of how compound interest and smart investing can grow your money.
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card/20 border border-border/50 transition-all duration-700 ease-out delay-700 ${
                discordVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4'
              }`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    Videos and visuals
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Engaging video content and visual guides that make complex concepts simple to understand.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - CTA Card */}
            <div className={`relative transition-all duration-1000 ease-out delay-300 ${
              discordVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl transform rotate-2"></div>
              <Card className="relative border-accent/20 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                      Join Our Discord
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      Connect with like-minded investors and get started with free educational content
                    </p>
                    <div className="flex items-center justify-center gap-2 text-accent font-semibold text-lg sm:text-xl">
                      <span>FREE</span>
                      <Badge variant="outline" className="border-accent/20 text-accent bg-accent/5">
                        $0/month
                      </Badge>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg px-6 py-3 sm:py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                    onClick={() => window.open("https://discord.gg/TkWgtyQADg", "_blank")}
                  >
                    Join Discord Community
                  </Button>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-4 leading-relaxed">
                    No payment required • Instant access • Beginner-friendly
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        id="pricing" 
        ref={pricingRef}
        className="py-12 sm:py-20 px-4"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
          pricingVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
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
                className={`relative transition-all duration-700 ease-out hover:scale-105 ${
                  plan.popular ? "border-accent shadow-lg shadow-accent/20" : "border-border hover:border-accent/50"
                } ${
                  pricingVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } ${
                  index === 0 ? 'delay-100' : 
                  index === 1 ? 'delay-200' : 
                  index === 2 ? 'delay-300' : 'delay-500'
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

      <section 
        ref={faqRef}
        className="py-12 sm:py-20 px-4"
      >
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          faqVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Get answers to common questions about The Wealth Network
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className={`border-border hover:border-accent/50 transition-all duration-700 ease-out ${
                  faqVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                } ${
                  index === 0 ? 'delay-200' : 
                  index === 1 ? 'delay-300' : 
                  index === 2 ? 'delay-500' : 
                  index === 3 ? 'delay-700' : 
                  index === 4 ? 'delay-1000' : 'delay-1000'
                }`}
              >
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
      <section 
        ref={testimonialsRef}
        className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 bg-card/5"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          testimonialsVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Real Results from Real Members
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands who've transformed their financial future with The Wealth Network
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border-border sm:hover:border-accent/50 transition-all duration-700 ease-out sm:hover:scale-105 sm:hover:shadow-lg sm:hover:shadow-accent/10 group touch-manipulation ${
                  testimonialsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } ${
                  index === 0 ? 'delay-200' : 
                  index === 1 ? 'delay-300' : 
                  index === 2 ? 'delay-500' : 
                  index === 3 ? 'delay-700' : 
                  index === 4 ? 'delay-1000' : 
                  index === 5 ? 'delay-1000' :
                  index === 6 ? 'delay-1000' :
                  index === 7 ? 'delay-1000' : 'delay-1000'
                }`}
              >
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground mb-4 sm:mb-5 lg:mb-6 leading-relaxed text-sm sm:text-base lg:text-base font-normal">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-accent/20 sm:group-hover:border-accent/50 transition-colors"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm sm:text-base truncate">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-3 sm:px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-primary/10 text-primary border-primary/20 text-sm sm:text-base px-4 py-2">
              Trusted & Verified
            </Badge>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
              Trusted by Industry Leaders
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building financial literacy through education, transparency, and community support
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Featured Partner Card */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl mb-4 sm:mb-6">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3 font-medium">Trusted by</p>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                      DLAfinance
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">Industry Partnership</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {/* Transparent Approach */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-primary/30">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2 sm:mb-3">Transparent</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Teaching Approach</p>
                  <div className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Educational Focus */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-primary/30">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-accent mb-2 sm:mb-3">Educational</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Content Focus</p>
                  <div className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-accent/20 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Community Learning */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-primary/30">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2 sm:mb-3">Community</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Based Learning</p>
                  <div className="mt-4 sm:mt-6 h-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-6 sm:py-8 px-3 sm:px-4 bg-secondary/30 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-semibold text-foreground">Important Disclaimer</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              I am not a licensed financial advisor. The Wealth Network and all related content are for educational 
              and informational purposes only and should not be considered professional financial advice. My goal is 
              to spread financial literacy and empower people to make informed decisions about their money. Please do 
              your own research or consult with a licensed financial advisor before making financial decisions.
            </p>
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
