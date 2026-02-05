import React, { useState } from 'react';
import { Download, Briefcase, GraduationCap, Award, Eye, FileText, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Aleksandra Jones</h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-2 text-slate-600 text-sm">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Los Angeles, California</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> +1 (301) 283-8648</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> jones.aleksandra@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowPdf(!showPdf)}>
            {showPdf ? <><FileText className="mr-2 h-4 w-4"/> View Web Format</> : <><Eye className="mr-2 h-4 w-4"/> View Original PDF</>}
          </Button>
          <a href="/resume.pdf" download="Jones_Personal_Resume.pdf">
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </a>
        </div>
      </div>

      {showPdf ? (
        /* UPDATED: Changed h-[800px] to h-[85vh], and overflow-hidden to overflow-y-auto */
        <div className="w-full h-[85vh] md:h-[800px] border border-slate-200 rounded-xl shadow-sm overflow-y-auto">
          <iframe 
            src="/resume.pdf" 
            className="w-full min-h-full block" 
            title="Resume PDF" 
          />
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in duration-500">
          
          <section className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
             <h2 className="text-lg font-semibold text-purple-950 mb-2">Summary</h2>
             <p className="text-slate-700 leading-relaxed text-sm md:text-base">
               English Language Arts teacher with experience in U.S. public schools and a background as an international school student. 
               Educated in IB-aligned, multicultural environments, I create inquiry-driven literacy classrooms that prioritize student voice, 
               choice, and reflection.
             </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-slate-900 border-b pb-2">
              <Briefcase className="w-5 h-5 text-purple-950" />
              <h2>Work Experience</h2>
            </div>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-lg font-bold">Teacher, Richard Henry Dana Middle School</CardTitle>
                    <div className="text-slate-600 font-medium mt-1">English Language Arts Teacher 7th & 8th Grade, AVID Program</div>
                  </div>
                  <Badge variant="secondary" className="shrink-0">Aug 2023 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2 text-sm">Main Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm pl-2">
                    <li>Design and deliver standards-based instruction aligned with CCSS and AVID methodologies.</li>
                    <li>Differentiate instruction to support multilingual learners and students with IEPs.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2 text-sm">Significant Student Data Assessment Results</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm pl-2">
                    <li><strong className="text-green-700">150% Increase:</strong> Student reading levels increased by 150% from mid-year to year-end (2024-2025).</li>
                    <li><strong className="text-green-700">172% Increase:</strong> Reading levels increased by 172% from beginning to mid-year (2025-2026).</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-lg font-bold">Educational Therapist, Illuminate Education</CardTitle>
                  </div>
                  <Badge variant="outline" className="shrink-0">Jan 2024 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
                  <li>Provide individualized academic intervention for students with diverse learning profiles.</li>
                  <li>Support literacy development through explicit instruction in reading comprehension.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-slate-900 border-b pb-2">
              <GraduationCap className="w-5 h-5 text-purple-950" />
              <h2>Education</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-bold">Teaching Credential</CardTitle>
                  <div className="text-sm text-slate-500">CSU Long Beach • 2022 - 2023</div>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-slate-700">Secondary Single Subject (ELA)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-bold">Master of Arts</CardTitle>
                  <div className="text-sm text-slate-500">Loyola Marymount University • 2019 - 2021</div>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-slate-700">MA in English Literature</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-slate-900 border-b pb-2">
              <Globe className="w-5 h-5 text-purple-950" />
              <h2>Additional Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">International Schools</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>International School Kuala Lumpur, Malaysia</li>
                    <li>International School Manila, Philippines</li>
                    <li>American International School Vienna, Austria</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Awards & Activities</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>San Diego Zoo Wildlife Alliance Teacher Workshop</li>
                    <li>Published author: "Milam Bardo" & "Having Just Met"</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}