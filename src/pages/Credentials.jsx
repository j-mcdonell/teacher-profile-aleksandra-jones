import React from 'react';
import { Award, BookOpen, CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Credentials() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-12">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Credentials & Certifications</h1>
        <p className="text-slate-500">Official documentation of my teaching qualifications.</p>
      </div>

      <section className="grid gap-6">
        <Card className="border-l-4 border-l-purple-950">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <FileText className="w-6 h-6 text-purple-950" />
              </div>
              <div>
                <CardTitle className="text-xl">California Teaching Credential</CardTitle>
                <p className="text-slate-600 mt-1">Secondary Single Subject in English Language Arts</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 pl-[4.5rem]">
            <Badge variant="secondary" className="mr-2">Clear Credential</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Award className="w-6 h-6 text-purple-950" />
              </div>
              <div>
                <CardTitle className="text-xl">AVID Teacher Certificate</CardTitle>
                <p className="text-slate-600 mt-1">Advancement via Individual Determination</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 pl-[4.5rem]">
             <p className="text-sm text-slate-600">Certified in WICOR strategies.</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-950" /> 
          Professional Development
        </h2>
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-slate-700">San Diego Zoo Wildlife Alliance Teacher Workshop</span>
            </li>
             <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-slate-700">IB Curriculum Training</span>
            </li>
             <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-slate-700">i-Ready Data Analysis</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}