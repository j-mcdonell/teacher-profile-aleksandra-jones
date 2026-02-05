import React from 'react';
import { Quote, Mail, User, ShieldCheck, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Recommendations() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Words of Support</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Excerpts from professional evaluations and letters of recommendation.
        </p>
      </div>

      {/* Featured Testimonial (Hero Style) */}
      <Card className="bg-indigo-600 text-white border-none shadow-xl">
        <CardContent className="p-8 md:p-12 space-y-6">
          <Quote className="w-12 h-12 text-indigo-300 opacity-60" />
          <blockquote className="text-xl md:text-2xl font-serif leading-relaxed opacity-90">
            "Aleksandra is a rare educator who combines rigorous academic standards with genuine emotional care. 
            Her ability to increase reading levels by 150% in a single year stands as a testament to her 
            data-driven yet student-centered approach."
          </blockquote>
          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-xl font-bold">
              <User className="w-6 h-6 text-indigo-100" />
            </div>
            <div>
              <div className="font-bold text-lg">Principal / Administrator Name</div>
              <div className="text-indigo-200">Richard Henry Dana Middle School</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid of Recommendations */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <Quote className="w-8 h-8 text-indigo-100" />
              <Badge variant="outline">Mentorship</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <p className="text-slate-700 italic leading-relaxed">
              "During her time as a student teacher at Narbonne High, Aleksandra demonstrated a maturity far beyond her years. 
              She effortlessly managed inclusive classroom discussions and connected with students who had previously been disengaged."
            </p>
            <div className="pt-4 mt-auto border-t border-slate-100">
              <div className="font-semibold text-slate-900">Mentor Teacher Name</div>
              <div className="text-sm text-slate-500">Narbonne High School</div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <Quote className="w-8 h-8 text-indigo-100" />
              <Badge variant="outline">Colleague</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <p className="text-slate-700 italic leading-relaxed">
              "As the founder of the Creative Writing Club, Aleksandra created a safe haven for student expression. 
              Her background in Waldorf philosophy shines through in how she encourages creativity alongside critical thinking."
            </p>
            <div className="pt-4 mt-auto border-t border-slate-100">
              <div className="font-semibold text-slate-900">Department Head Name</div>
              <div className="text-sm text-slate-500">Ocean Charter School</div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Request Access Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-6">
        <ShieldCheck className="w-12 h-12 text-indigo-600 mx-auto" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Request Official References</h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            To protect the privacy of my colleagues, full contact information and official letters of recommendation are available upon request.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:jones.aleksandra@gmail.com?subject=Request for References&body=Hi Aleksandra, I would like to request a copy of your professional references.">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" /> Request via Email
            </Button>
          </a>
        </div>
      </div>

    </div>
  );
}