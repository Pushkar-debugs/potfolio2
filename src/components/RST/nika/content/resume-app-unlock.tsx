import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Key, Download, Sparkles, Zap, CheckCircle, FileText, Eye, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/useToast';
import { submitContactForm } from '@/api/contact';

export function ResumeAppUnlock() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  // APP LINK
  const APP_DOWNLOAD_LINK = "https://rahulsonawane-rgb.github.io/AI-Resume-Builder/";
  
  // RESUME LINK
  const RESUME_LINK = "https://raw.githubusercontent.com/sorahul196-code/rahul-portfolio/refs/heads/main/Resume.pdf";
  
  // GOOGLE DOCS VIEWER
  const PDF_PREVIEW_URL = `https://docs.google.com/gview?url=${RESUME_LINK}&embedded=true`;

  const handleRequestKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      await submitContactForm({
        name: "Laugh Tale Explorer",
        email: email,
        subject: "🔑 AI KEY REQUEST - Laugh Tale Reached!",
        message: `A user has reached Laugh Tale and requests an AI Access Key for the Resume Builder App.\n\nUser Email: ${email}\n\nPlease generate a key and send it to them.`
      });

      setIsSuccess(true);
      toast({
        title: "Signal Transmitted!",
        description: "Your request has reached the Captain. Watch your email for the Key!",
        className: "bg-purple-900 border-purple-500 text-white",
      });

    } catch (error) {
      toast({
        title: "Transmission Failed",
        description: "Interference in the signal. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* --- SECTION 1: RESUME PREVIEW --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-black/40 border border-cyan-500/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md"
      >
         <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <FileText className="w-32 h-32 text-cyan-500" />
         </div>

         <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            
            {/* --- PREVIEW AREA (FIXED SIZING) --- */}
            <div className="w-full md:w-1/3 flex justify-center">
               <div 
                 className="relative group cursor-pointer" 
                 onClick={() => window.open(RESUME_LINK, '_blank')}
               >
                  {/* Container with A4 Aspect Ratio (roughly 1 : 1.41) */}
                  <div className="w-[240px] h-[340px] bg-white rounded-lg shadow-2xl overflow-hidden relative border-4 border-cyan-500/50 group-hover:border-cyan-400 transition-all transform group-hover:scale-105 duration-300">
                      
                      {/* THE SCALING TRICK:
                         1. w-[200%] h-[200%] -> Makes the iframe double the size of the container.
                         2. scale-50 -> Shrinks it back down to 50%.
                         Result: The viewer thinks it has a huge screen, so it shows the full page.
                      */}
                      <iframe 
                        src={PDF_PREVIEW_URL}
                        className="w-[200%] h-[200%] border-none pointer-events-none opacity-90 transform scale-50 origin-top-left"
                        title="Resume Preview"
                        scrolling="no"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-cyan-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-[2px]">
                          <Maximize2 className="w-10 h-10 text-white mb-2" />
                          <span className="text-white font-bold text-sm uppercase tracking-wider">Click to Open</span>
                      </div>
                  </div>

                  {/* Decorative Blobs */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg border-2 border-black"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full shadow-lg border-2 border-black"></div>
               </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3 space-y-5 text-center md:text-left">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/50 text-yellow-300 text-xs font-mono mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>BUILT WITH THIS APP</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">My Own Resume</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                     This resume wasn't just written—it was <strong>engineered</strong>. I built it using the very same AI Resume Builder application you can download below. It's clean, ATS-friendly, and designed to land interviews.
                  </p>
               </div>
{/*                
               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    onClick={() => window.open(RESUME_LINK, '_blank')}
                    className="bg-white hover:bg-gray-200 text-black font-bold px-8 h-12"
                  >
                     <Eye className="w-4 h-4 mr-2" />
                     View Full Resume
                  </Button>
                  <Button 
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = RESUME_LINK;
                        link.download = 'Rahul_Sonawane_Resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 h-12 px-8"
                  >
                     <Download className="w-4 h-4 mr-2" />
                     Download PDF
                  </Button>
               </div> */}
            </div>
         </div>
      </motion.div>

      {/* --- SECTION 2: APP UNLOCK (Existing) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 border-2 border-purple-500/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)]"
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 relative z-10">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 text-xs font-mono mb-4">
                <Zap className="w-3 h-3" />
                <span>NEW ERA TECHNOLOGY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 italic">
                AI RESUME BUILDER
              </h3>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                You've found the One Piece of career tools. Build your resume in seconds using the power of the <span className="text-cyan-400 font-bold">Brain-Brain Fruit (AI)</span>.
              </p>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Smartphone className="w-6 h-6 text-white" />
                     </div>
                     <div>
                        <p className="text-white font-bold text-sm">Resume Builder App</p>
                        <p className="text-white/40 text-xs">v1.0 • Android / iOS</p>
                     </div>
                  </div>
               </div>
               <Button 
                 onClick={() => window.open(APP_DOWNLOAD_LINK, '_blank')}
                 className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm py-2 sm:py-3 h-auto"
               >
                 <Download className="w-4 h-4 mr-2" />
                 Download Application
               </Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center mt-6 md:mt-0">
            <div className="bg-black/40 border border-yellow-500/30 rounded-xl p-5 sm:p-6 relative overflow-hidden">
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-500/20 rounded-full border border-yellow-500/50 flex-shrink-0">
                    <Key className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-sm">Restricted Access</h4>
                    <p className="text-yellow-100/50 text-xs">AI Features require a unique Key</p>
                  </div>
               </div>

               <AnimatePresence mode="wait">
                 {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 sm:py-8"
                    >
                       <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                       </div>
                       <h5 className="text-white font-bold text-lg mb-2">Request Received!</h5>
                       <p className="text-white/60 text-sm px-2">
                         The Captain has received your signal. <br className="hidden sm:block" />Check your email ({email}) shortly.
                       </p>
                       <Button 
                         variant="ghost" 
                         onClick={() => { setIsSuccess(false); setEmail(''); }}
                         className="mt-4 text-purple-300 hover:text-white text-sm"
                       >
                         Request another key
                       </Button>
                    </motion.div>
                 ) : (
                   <motion.form 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleRequestKey} 
                      className="space-y-4"
                   >
                      <p className="text-white/80 text-sm">
                        Since you reached Laugh Tale, you are eligible for a <span className="text-yellow-300 font-bold">Free Premium Key</span>.
                      </p>
                      <div className="space-y-2">
                        <label className="text-xs text-purple-200 ml-1">Your Email Address</label>
                        <Input 
                          type="email" 
                          required
                          placeholder="pirate.king@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-purple-900/40 border-purple-500/30 text-white placeholder:text-white/20 focus:border-yellow-400 h-10 sm:h-11 text-sm"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all h-10 sm:h-11 text-sm"
                      >
                        {isSubmitting ? "Transmitting..." : <><Sparkles className="w-4 h-4 mr-2" /> Request AI Key</>}
                      </Button>
                      <p className="text-[10px] text-center text-white/30">
                        *Key will be sent directly to your inbox.
                      </p>
                   </motion.form>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}