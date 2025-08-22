import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, Shield, Clock, Smartphone, HeadphonesIcon, CheckCircle, Zap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const faqs = [
  {
    question: "É realmente vitalício? Sem pegadinhas?",
    answer: "💎 SIM! Pagamento único de R$ 29,90 e você tem acesso para SEMPRE. Não cobramos mensalidade, não expira, não tem renovação. Uma única vez e pronto!",
    icon: <Crown className="h-4 w-4 text-gold" />
  },
  {
    question: "Funciona sem internet (offline)?",
    answer: "✅ Perfeitamente! Você pode baixar todo o conteúdo: Vade Mecum, petições, livros e estudar mesmo sem conexão. Ideal para quem estuda no transporte público!",
    icon: <Smartphone className="h-4 w-4 text-feature-blue" />
  },
  {
    question: "Tem garantia se eu não gostar?",
    answer: "🛡️ GARANTIA TOTAL de 7 dias! Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas, sem burocracia. Seu risco é ZERO!",
    icon: <Shield className="h-4 w-4 text-feature-green" />
  },
  {
    question: "É seguro? Como funciona o pagamento?",
    answer: "🔒 Totalmente seguro! Pagamento processado pela Google Play Store, a mesma segurança do Gmail e YouTube. Seus dados estão protegidos.",
    icon: <CheckCircle className="h-4 w-4 text-feature-purple" />
  },
  {
    question: "Posso usar em vários celulares/tablets?",
    answer: "📱 Claro! Use na mesma conta Google em quantos dispositivos quiser: celular, tablet, etc. Sem limite de dispositivos!",
    icon: <Zap className="h-4 w-4 text-feature-orange" />
  },
  {
    question: "Tem suporte se precisar de ajuda?",
    answer: "💬 Suporte 24/7 via WhatsApp e email! Nossa equipe está sempre disponível para te ajudar. Você nunca ficará desamparado!",
    icon: <HeadphonesIcon className="h-4 w-4 text-feature-blue" />
  }
];

export const FAQSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Badge className="mb-3 bg-gold/20 text-gold border-gold/30 animate-pulse">
            💡 DÚVIDAS FREQUENTES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-premium bg-clip-text text-transparent">
            Tire suas dúvidas
          </h2>
          <p className="text-lg text-foreground/80">
            As respostas que você precisa antes de garantir seu acesso
          </p>
        </div>

        {/* FAQ Accordion */}
        <div 
          ref={faqRef}
          className={`transition-all duration-700 delay-200 ${
            faqInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border-border/50 rounded-lg px-4 hover:border-gold/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Card */}
        <Card 
          ref={ctaRef}
          className={`mt-12 bg-gradient-card border-gold/30 text-center transition-all duration-700 delay-400 hover-scale ${
            ctaInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <CardHeader>
            <CardTitle className="text-xl text-gold flex items-center justify-center gap-2">
              <Crown className="h-5 w-5" />
              Ainda tem dúvidas?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/80">
              Mais de <strong className="text-gold">50.000 profissionais</strong> já transformaram suas carreiras
            </p>
            
            <div className="bg-background/50 rounded-lg p-4 border border-gold/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg text-muted-foreground line-through">R$ 79,90</span>
                <Badge className="bg-destructive text-destructive-foreground animate-pulse">63% OFF</Badge>
              </div>
              <div className="text-3xl font-bold text-gold mb-1">R$ 29,90</div>
              <p className="text-sm text-gold font-bold">💎 ACESSO VITALÍCIO</p>
              <p className="text-xs text-muted-foreground">Pague uma vez • Use para sempre</p>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-premium hover:bg-gradient-premium/90 text-background font-bold px-10 py-4 text-lg shadow-gold transition-all duration-300 hover:shadow-glow hover:scale-105 w-full max-w-sm"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0&pli=1', '_blank')}
            >
              <Crown className="h-5 w-5 mr-2" />
              Garantir Acesso Agora
            </Button>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-feature-green" />
                <span>7 dias garantia</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-feature-blue" />
                <span>Acesso imediato</span>
              </div>
            </div>

            <p className="text-xs text-destructive font-medium animate-pulse">
              🚨 Promoção por tempo limitado!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};