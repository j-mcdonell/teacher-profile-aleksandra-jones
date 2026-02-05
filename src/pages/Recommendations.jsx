import React from 'react';
import { Quote, Mail, User, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Recommendations() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Words of Support</h1>
      </div>

      <Card className="bg-purple-950 text-white border-none shadow-xl">
        <CardContent className="p-8 md:p-12 space-y-6">
          <Quote className="w-12 h-12 text-purple-300 opacity-50" />
          <blockquote className="text-xl md:text-2xl font-serif leading-relaxed opacity-90">
            "Aleksandra is a rad good ass human, what more could you ask for?"
          </blockquote>
          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-xl font-bold">
              <User className="w-6 h-6 text-purple-100" />
            </div>
            <div>
              <div className="font-bold text-lg">Fancy Man / Jbaby</div>
              <div className="text-purple-200">This would be a school name</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <Quote className="w-8 h-8 text-purple-100" />
              <Badge variant="outline">Mentorship</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <p className="text-slate-700 italic leading-relaxed">
              "During her time as a student teacher at Narbonne High, Aleksandra demonstrated a maturity far beyond her years."
            </p>
            <div className="pt-4 mt-auto border-t border-slate-100">
              <div className="font-semibold text-slate-900">Mentor Teacher Name</div>
              <div className="text-sm text-slate-500">Narbonne High School</div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <Quote className="w-8 h-8 text-purple-100" />
              <Badge variant="outline">Colleague</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <p className="text-slate-700 italic leading-relaxed">
              "As the founder of the Creative Writing Club, Aleksandra created a safe haven for student expression."
            </p>
            <div className="pt-4 mt-auto border-t border-slate-100">
              <div className="font-semibold text-slate-900">Department Head Name</div>
              <div className="text-sm text-slate-500">Ocean Charter School</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-6">
        <ShieldCheck className="w-12 h-12 text-purple-950 mx-auto" />
        <h2 className="text-2xl font-bold text-slate-900">Request Official References</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:jones.aleksandra@gmail.com?subject=Request for References">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" /> Request via Email
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}