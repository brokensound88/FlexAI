"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Flex has transformed how our team collaborates. The AI-powered features save us hours every week.",
    author: "Sarah Chen",
    role: "Product Manager at Dropbox",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    quote: "The integration capabilities are incredible. Everything we need is now in one place.",
    author: "Michael Park",
    role: "CTO at TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    quote: "Flex's automation features have revolutionized our workflow. It's like having an extra team member.",
    author: "Elena Rodriguez",
    role: "Design Director at Creative Co",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        
        <div className="relative">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 z-10"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Card className="mx-auto px-8 py-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl mb-8">"{testimonials[currentIndex].quote}"</p>
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
                    <AvatarFallback>{testimonials[currentIndex].author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-semibold">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 z-10"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}