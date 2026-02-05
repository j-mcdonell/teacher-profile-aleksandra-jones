import React from 'react';
import { Award, BookOpen, CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Credentials() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-12">
      
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Credentials & Certifications</h1>
        <p className="text-slate-500">Official documentation of my teaching qualifications and professional development.</p>
      </div>

      {/* Primary Credentials */}
      <section className="grid gap-6">
        <Card className="border-l-4 border-l-indigo-600">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <CardTitle className="text-xl">California Teaching Credential</CardTitle>
                <p className="text-slate-600 mt-1">Secondary Single Subject in English Language Arts</p>
                <p className="text-sm text-slate-400 mt-1">Issued: June 2023</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 pl-[4.5rem]">
            <Badge variant="secondary" className="mr-2">Clear Credential</Badge>
            <Badge variant="outline">ELA Authorization</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <CardTitle className="text-xl">AVID Teacher Certificate</CardTitle>
                <p className="text-slate-600 mt-1">Advancement via Individual Determination</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 pl-[4.5rem]">
             <p className="text-sm text-slate-600">
               Certified in high-engagement instructional strategies including WICOR, focused note-taking, and collaborative study groups.
             </p>
          </CardContent>
        </Card>
      </section>

      {/* Professional Development */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" /> 
          Professional Development & Workshops
        </h2>
        
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900">San Diego Zoo Wildlife Alliance Teacher Workshop</span>
                <p className="text-sm text-slate-600">Conservation Science (June 2025)</p>
              </div>
            </li>
             <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900">IB Curriculum Training</span>
                <p className="text-sm text-slate-600">Inquiry-based learning and international mindedness.</p>
              </div>
            </li>
             <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900">i-Ready Data Analysis</span>
                <p className="text-sm text-slate-600">Using diagnostic data to drive differentiated instruction.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Education Summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Degrees</h2>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border">
                <div className="font-semibold text-slate-900">Master of Arts, English Lit</div>
                <div className="text-sm text-slate-500">Loyola Marymount University</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border">
                <div className="font-semibold text-slate-900">Bachelor of Arts, English Lit</div>
                <div className="text-sm text-slate-500">Loyola Marymount University</div>
            </div>
        </div>
      </section>

    </div>
  );
}