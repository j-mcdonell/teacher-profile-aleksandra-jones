import React, { useState } from 'react';
import { Download, Briefcase, GraduationCap, Award, Eye, FileText, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Actions */}
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
        <div className="w-full h-[800px] border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <iframe src="/resume.pdf" className="w-full h-full" title="Resume PDF" />
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in duration-500">
          
          {/* Summary */}
          <section className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
             <h2 className="text-lg font-semibold text-indigo-900 mb-2">Summary</h2>
             <p className="text-slate-700 leading-relaxed text-sm md:text-base">
               English Language Arts teacher with experience in U.S. public schools and a background as an international school student. 
               Educated in IB-aligned, multicultural environments, I create inquiry-driven literacy classrooms that prioritize student voice, 
               choice, and reflection, encouraging students to engage deeply with texts and articulate their ideas with confidence. I value 
               learning as a shared experience and always encourage students to bring their authentic selves to my classroom. I am experienced 
               in supporting multilingual learners through inclusive, culturally responsive practices and purposeful use of data to guide instruction. 
               Grounded in collaboration and care, I cultivate classroom communities where students feel seen, confident, and empowered to engage 
               thoughtfully with the world around them.
             </p>
          </section>

          {/* Work Experience */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-slate-900 border-b pb-2">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <h2>Work Experience</h2>
            </div>

            {/* Experience 1: Dana Middle School */}
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
                  <h4 className="font-semibold text-indigo-700 mb-2 text-sm">Main Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm pl-2">
                    <li>Design and deliver standards-based, culturally responsive instruction aligned with Common Core State Standards (CCSS) and AVID methodologies (WICOR).</li>
                    <li>Differentiate instruction to support multilingual learners, students with IEPs, and diverse academic needs.</li>
                    <li>Integrate AVID strategies across content (focused note taking, Socratic seminar, philosophical chairs, tutorial process, etc.).</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2 text-sm">Major Achievements</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm pl-2">
                    <li className="marker:text-indigo-500 font-medium">Team lead for the 8th grade English Department (current)</li>
                    <ul className="list-[circle] list-inside pl-6 space-y-1 text-slate-600">
                      <li>Co-develop and refine 8th grade English curriculum, including units on literature, writing, and critical analysis.</li>
                      <li>Design common assessments, rubrics, and instructional materials to ensure consistency and rigor.</li>
                      <li>Select diverse, globally relevant texts to promote cultural awareness and student engagement.</li>
                      <li>Facilitate collaborative planning meetings focused on instructional strategies and data analysis.</li>
                      <li>Mentor and support colleagues through shared lesson planning and instructional alignment.</li>
                      <li>Promote a collaborative, supportive team culture focused on continuous improvement.</li>
                    </ul>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2 text-sm">Significant Student Data Assessment Results</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm pl-2">
                    <li>Expertise in the i-Ready platform, an adaptive reading diagnostic that measures student reading levels across core literacy skills.</li>
                    <li><strong className="text-green-700">150% Increase:</strong> During the 2024-2025 academic year, student reading levels increased by 150% from mid-year to year-end.</li>
                    <li><strong className="text-green-700">172% Increase:</strong> During the 2025-2026 academic year, student reading levels increased by 172% from beginning to mid-year.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Experience 2: Illuminate Education */}
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
                  <li>Provide individualized academic intervention for students with diverse learning profiles (ADHD/ADD, dyslexia, executive functioning challenges).</li>
                  <li>Design and implement personalized learning plans aligned with students' cognitive strengths and goals.</li>
                  <li>Support literacy development through explicit instruction in reading comprehension, writing, and organization.</li>
                  <li>Teach executive functioning strategies, including time management, task initiation, self-advocacy, and goal-setting.</li>
                  <li>Collaborate closely with families, classroom teachers, and specialists to ensure continuity.</li>
                  <li>Foster student agency by helping learners understand their own learning profiles.</li>
                  <li>Maintain detailed documentation and communicate clear progress updates to stakeholders.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 3: Student Teacher */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-lg font-bold">Student Teacher, Narbonne High School</CardTitle>
                    <div className="text-slate-600 font-medium mt-1">Taught 11th Grade English and Honors English</div>
                  </div>
                  <Badge variant="outline" className="shrink-0">Jan 2023 - June 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
                  <li>Planned and delivered standards-aligned lessons emphasizing critical reading, analytical writing, and discussion-based learning.</li>
                  <li>Facilitated student-centered discussions and Socratic seminars to strengthen argumentation and student voice.</li>
                  <li>Taught writing across multiple genres, including literary analysis, argumentative essays, and research-based writing.</li>
                  <li>Provided targeted feedback through conferencing, rubrics, and revision cycles.</li>
                  <li>Collaborated with mentor teachers to co-plan curriculum and analyze student data.</li>
                  <li>Maintained an inclusive, respectful classroom environment that encouraged intellectual risk-taking.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 4: Creative Writing Teacher */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-lg font-bold">Creative Writing Teacher, Ocean Charter School</CardTitle>
                    <div className="text-slate-600 font-medium mt-1">Grades 6-8</div>
                  </div>
                  <Badge variant="outline" className="shrink-0">Aug 2019 - June 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
                  <li>Designed and taught creative writing curriculum rooted in Waldorf educational philosophy and developmental appropriateness.</li>
                  <li>Guided students through the writing process, including idea generation, drafting, revision, and reflection.</li>
                  <li>Facilitated workshops and small-group instruction to support diverse writing abilities.</li>
                  <li>Encouraged student voice, imagination, and risk-taking through poetry, short fiction, journaling, and narrative writing.</li>
                  <li>Integrated storytelling, discussion, and arts-based practices to deepen engagement.</li>
                  <li>Created a supportive, inclusive classroom environment that honored creativity and emotional expression.</li>
                  <li>Adapted instruction to support students requiring additional scaffolding or enrichment.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-slate-900 border-b pb-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <h2>Education</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-bold">Teaching Credential</CardTitle>
                  <div className="text-sm text-slate-500">CSU Long Beach • 2022 - 2023</div>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-slate-700">Secondary Single Subject teaching credential in English Language Arts</p>
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-bold">Bachelor of Arts</CardTitle>
                  <div className="text-sm text-slate-500">Loyola Marymount University • 2016 - 2019</div>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-slate-700">Major: English Literature</p>
                   <p className="text-sm text-slate-700">Minor: International Relations</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Additional Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-slate-900 border-b pb-2">
              <Globe className="w-5 h-5 text-indigo-600" />
              <h2>Additional Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">International Schools Attended</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>International School Kuala Lumpur, Malaysia (2010-2013)</li>
                    <li>International School Manila, Philippines (2005-2009)</li>
                    <li>American International School Vienna, Austria (2004-2005)</li>
                  </ul>
                </div>

                <div>
                   <h4 className="font-semibold text-indigo-800 mb-2">Certifications</h4>
                   <ul className="list-disc list-inside text-sm text-slate-700">
                      <li>AVID (Advancement via Individual Determination) teacher certificate</li>
                   </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-2">Awards & Activities</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>San Diego Zoo Wildlife Alliance Teacher Workshop in Conservation (June 2025)</li>
                    <li>Founder/Faculty Advisor: Gardening Club & Creative Writing Club</li>
                  </ul>
                </div>

                <div>
                   <h4 className="font-semibold text-indigo-800 mb-2">Personal Interests</h4>
                   <p className="text-sm text-slate-700">
                     Surfing, rock climbing, running, beach volleyball, camping, reading, writing, cooking, and baking.
                   </p>
                </div>

                 <div>
                   <h4 className="font-semibold text-indigo-800 mb-2">Other Achievements</h4>
                   <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                     <li>Published author: "Milam Bardo" (Attic Salt, 2019) & "Having Just Met" (On the Run Flash Fiction, 2022)</li>
                     <li>Ran the Long Beach, California Half Marathon in 2025</li>
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