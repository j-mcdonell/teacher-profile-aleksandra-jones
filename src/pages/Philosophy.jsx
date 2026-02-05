import React from 'react';
import { Lightbulb, Users, Heart, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function Philosophy() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Teaching Philosophy</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          "I create inquiry-driven literacy classrooms that prioritize student voice, choice, and reflection."
        </p>
      </div>

      {/* Core Values Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-indigo-50 border-indigo-100">
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-3 text-indigo-800 font-semibold text-lg">
              <Users className="w-6 h-6" />
              <h3>Student-Centered Community</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              I value learning as a shared experience and encourage students to bring their authentic selves to the classroom. 
              Grounded in collaboration and care, I cultivate communities where students feel seen, confident, and empowered.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-indigo-50 border-indigo-100">
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-3 text-indigo-800 font-semibold text-lg">
              <Globe className="w-6 h-6" />
              <h3>Inclusive & Culturally Responsive</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Drawing from my background in IB-aligned and international environments, I select diverse, globally relevant texts 
              to promote cultural awareness. I am experienced in supporting multilingual learners through inclusive practices.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Methodology Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Instructional Methodology</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="space-y-3 p-4 border rounded-xl hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">Inquiry-Driven (IB)</h3>
            <p className="text-sm text-slate-600">
              Encouraging students to engage deeply with texts and articulate their ideas with confidence through Socratic seminars and higher-order thinking.
            </p>
          </div>

          <div className="space-y-3 p-4 border rounded-xl hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">AVID Strategies</h3>
            <p className="text-sm text-slate-600">
              Utilizing WICOR (Writing, Inquiry, Collaboration, Organization, Reading) to scaffold success for all learners and develop executive functioning.
            </p>
          </div>

          <div className="space-y-3 p-4 border rounded-xl hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">Holistic Growth</h3>
            <p className="text-sm text-slate-600">
              Influenced by Waldorf philosophy, I integrate storytelling and arts-based practices to honor creativity and emotional expression alongside academic rigor.
            </p>
          </div>

        </div>
      </section>

      {/* Quote */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl text-center space-y-4">
        <p className="text-xl md:text-2xl font-serif italic opacity-90">
          "My goal is to help students find their own voices, not just as writers, but as citizens of the world."
        </p>
        <div className="font-semibold text-indigo-300">— Aleksandra Jones</div>
      </div>

    </div>
  );
}