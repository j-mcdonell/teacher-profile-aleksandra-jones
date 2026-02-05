import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, TrendingUp, Globe, BookOpen, Mountain, PenTool, ChefHat, Waves, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-24 pb-24">
      
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 mt-12 md:mt-24">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Hello, I'm <br /> <span className="text-indigo-600">Aleksandra Jones</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
             An <strong>English Language Arts Teacher</strong> and <strong>Educational Therapist</strong> dedicated to creating inquiry-driven classrooms where student voice and choice lead the way.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Link to="/philosophy">
              <Button size="lg" className="rounded-full px-8 h-12 text-base">
                Teaching Philosophy <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/resume">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                View Resume <FileText className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
            <div className="absolute inset-0 bg-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <img 
              src="/profile-pic.JPG"
              alt="Profile" 
              className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Student Growth</h3>
          <p className="text-4xl font-extrabold text-slate-900 mb-2">150%+</p>
          <p className="text-slate-600 font-medium">Reading level increase in a single academic year.</p>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Education</h3>
          <p className="text-4xl font-extrabold text-slate-900 mb-2">M.A.</p>
          <p className="text-slate-600 font-medium">English Literature from Loyola Marymount University.</p>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Perspective</h3>
          <p className="text-4xl font-extrabold text-slate-900 mb-2">Global</p>
          <p className="text-slate-600 font-medium">Educated in Austria, Malaysia, and the Philippines.</p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full h-px bg-slate-200"></div>

      {/* ABOUT ME SECTION (Merged) */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto italic font-serif">
            "I value learning as a shared experience and always encourage students to bring their authentic selves to my classroom."
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          
          {/* Left Column: Quick Facts */}
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-8">
              <div>
                <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5"/> Global Background
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>Kuala Lumpur, Malaysia</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>Manila, Philippines</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>Vienna, Austria</span>
                  </li>
                </ul>
              </div>

              <div className="h-px bg-slate-200 w-full"></div>

              <div>
                <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <Mountain className="w-5 h-5"/> Passions
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="px-3 py-1 text-sm bg-white border border-slate-200 hover:bg-white"><Waves className="w-3 h-3 mr-1"/> Surfing</Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-sm bg-white border border-slate-200 hover:bg-white"><Mountain className="w-3 h-3 mr-1"/> Climbing</Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-sm bg-white border border-slate-200 hover:bg-white"><PenTool className="w-3 h-3 mr-1"/> Writing</Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-sm bg-white border border-slate-200 hover:bg-white"><ChefHat className="w-3 h-3 mr-1"/> Baking</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography */}
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
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
      </section>

    </div>
  );
}