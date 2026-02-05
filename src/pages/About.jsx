import React from 'react';
import { Heart, Book, Mountain, Globe, PenTool, ChefHat, Waves } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10">
      
      {/* Intro Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">About Me</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          "I value learning as a shared experience and always encourage students to bring their authentic selves to my classroom."
        </p>
      </div>

      {/* Main Content Split */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-12">
        
        {/* Left Column: Quick Facts */}
        <div className="space-y-8">
          
          <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-6 shadow-sm">
            <div>
              <h3 className="font-semibold text-indigo-900 mb-4">Global Background</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <Globe className="w-4 h-4 mt-1 text-indigo-600 shrink-0" />
                  <span>Kuala Lumpur, Malaysia</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <Globe className="w-4 h-4 mt-1 text-indigo-600 shrink-0" />
                  <span>Manila, Philippines</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <Globe className="w-4 h-4 mt-1 text-indigo-600 shrink-0" />
                  <span>Vienna, Austria</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-slate-100"></div>

            <div>
              <h3 className="font-semibold text-indigo-900 mb-4">Passions</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-1"><Waves className="w-3 h-3"/> Surfing</Badge>
                <Badge variant="secondary" className="gap-1"><Mountain className="w-3 h-3"/> Rock Climbing</Badge>
                <Badge variant="secondary" className="gap-1"><PenTool className="w-3 h-3"/> Writing</Badge>
                <Badge variant="secondary" className="gap-1"><ChefHat className="w-3 h-3"/> Baking</Badge>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Biography */}
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">My Journey</h2>
          <p>
            My path to education was shaped by a unique upbringing. Having attended international schools in <strong>Malaysia, the Philippines, and Austria</strong>, I experienced firsthand the power of a multicultural, IB-aligned education. These experiences instilled in me a deep appreciation for diverse perspectives and the belief that a classroom should be a place where every student feels seen and valued.
          </p>
          <p>
            After earning my <strong>B.A. and M.A. in English Literature</strong> from Loyola Marymount University, I felt a calling to bring that same level of rigorous, inquiry-driven learning to public education.
          </p>
          <p>
            Today, as an educator in Los Angeles, I combine my background in literature with evidence-based strategies (like AVID and i-Ready data analysis) to help students find their voice. Whether we are analyzing complex texts or engaging in a Socratic seminar, my goal is to foster <strong>intellectual risk-taking</strong> and <strong>academic confidence</strong>.
          </p>
          <p>
            Outside of the classroom, you can usually find me outdoors—surfing the Pacific waves, rock climbing, or running. I am also a published author and the founder of my school's Gardening and Creative Writing clubs.
          </p>
        </div>
      </div>
    </div>
  );
}