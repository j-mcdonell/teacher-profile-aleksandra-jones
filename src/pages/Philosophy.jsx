import React from 'react';
import { Lightbulb, Users, Heart, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function Philosophy() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Teaching Philosophy</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          "I create inquiry-driven literacy classrooms that prioritize student voice, choice, and reflection."
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-purple-50 border-purple-100">
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-3 text-purple-950 font-semibold text-lg">
              <Users className="w-6 h-6" />
              <h3>Student-Centered Community</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              I value learning as a shared experience and encourage students to bring their authentic selves to the classroom.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-100">
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-3 text-purple-950 font-semibold text-lg">
              <Globe className="w-6 h-6" />
              <h3>Inclusive & Culturally Responsive</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Drawing from my background in IB-aligned and international environments, I select diverse, globally relevant texts.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Instructional Methodology</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3 p-4 border rounded-xl hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-950">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">Inquiry-Driven (IB)</h3>
            <p className="text-sm text-slate-600">
              Encouraging students to engage deeply with texts through Socratic seminars.
            </p>
          </div>
          {/* ... AVID and Holistic cards follow same pattern ... */}
          <div className="space-y-3 p-4 border rounded-xl hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-950">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">AVID Strategies</h3>
            <p className="text-sm text-slate-600">Utilizing WICOR to scaffold success.</p>
          </div>
          <div className="space-y-3 p-4 border rounded-xl hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-950">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">Holistic Growth</h3>
            <p className="text-sm text-slate-600">Influenced by Waldorf philosophy and arts-based practices.</p>
          </div>
        </div>
      </section>

      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl text-center space-y-4">
        <p className="text-xl md:text-2xl font-serif italic opacity-90">
          "My goal is to help students find their own voices, not just as writers, but as citizens of the world."
        </p>
        <div className="font-semibold text-purple-200">— Aleksandra Jones</div>
      </div>
    </div>
  );
}