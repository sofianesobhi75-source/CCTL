lucide.createIcons();
let currentState={page:'dashboard',exam:{selectedExamId:null,active:false,timeRemaining:0,currentQuestionIndex:0,answers:{},timerInterval:null}};
let currentQuizState={chapterId:null,quizId:null,index:0,answered:false,selectedOpt:null};
let currentFlashcardState={chapterId:'c1',index:0,flipped:false};
let pomodoroState={running:false,timeLeft:25*60,mode:'work',interval:null};

function saveProgress(){localStorage.setItem('cctl_user',JSON.stringify(MOCK_DATA.user));localStorage.setItem('cctl_chap',JSON.stringify(MOCK_DATA.chapitres));}
function loadProgress(){const u=localStorage.getItem('cctl_user');const c=localStorage.getItem('cctl_chap');if(u)MOCK_DATA.user=JSON.parse(u);if(c)MOCK_DATA.chapitres=JSON.parse(c);}
loadProgress();
function updateStreak(){const today=new Date().toDateString();if(MOCK_DATA.user.lastStudyDate!==today){const yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);if(MOCK_DATA.user.lastStudyDate===yesterday.toDateString()){MOCK_DATA.user.streak++;}else if(MOCK_DATA.user.lastStudyDate!==today){MOCK_DATA.user.streak=1;}MOCK_DATA.user.lastStudyDate=today;saveProgress();}const badge=document.getElementById('streak-badge');const cnt=document.getElementById('streak-count');if(badge&&cnt&&MOCK_DATA.user.streak>0){badge.classList.remove('hidden');badge.classList.add('flex');cnt.textContent=MOCK_DATA.user.streak;}}
updateStreak();

function showToast(msg,type='success'){const c=document.getElementById('toast-container');if(!c)return;const t=document.createElement('div');t.className='toast-enter px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 text-white text-sm font-medium '+(type==='success'?'bg-slate-800 dark:bg-slate-700':'bg-red-500');t.innerHTML='<i data-lucide="'+(type==='success'?'check-circle':'alert-circle')+'" class="w-4 h-4 '+(type==='success'?'text-green-400':'text-white')+'"></i><span>'+msg+'</span>';c.appendChild(t);lucide.createIcons();setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(100%)';t.style.transition='all .3s';setTimeout(()=>t.remove(),300);},3000);}
function triggerConfetti(){if(typeof confetti!=='undefined')confetti({particleCount:100,spread:70,origin:{y:0.6},colors:['#6366f1','#ec4899','#10b981','#fbbf24','#f43f5e']});}
function resetProgress(){if(confirm("Réinitialiser toute la progression ?")){localStorage.clear();location.reload();}}
function formatTime(s){const m=Math.floor(s/60);const sec=s%60;return m.toString().padStart(2,'0')+':'+sec.toString().padStart(2,'0');}

// Theme
const html=document.documentElement;
function loadTheme(){const t=localStorage.getItem('cctl_theme')||'classic';const d=localStorage.getItem('theme');html.setAttribute('data-theme',t);if(d==='dark')html.classList.add('dark');else html.classList.remove('dark');updateThemeLabel();}
function toggleThemeStyle(){const cur=html.getAttribute('data-theme');const next=cur==='classic'?'kawaii':'classic';html.setAttribute('data-theme',next);localStorage.setItem('cctl_theme',next);updateThemeLabel();showToast(next==='kawaii'?'Mode Kawaii activé 🌸':'Mode Classic activé ✨');}
function toggleDarkMode(){html.classList.toggle('dark');localStorage.setItem('theme',html.classList.contains('dark')?'dark':'light');}
function updateThemeLabel(){const l=document.getElementById('theme-style-label');if(l)l.textContent=html.getAttribute('data-theme')==='classic'?'Mode Kawaii':'Mode Classic';}
loadTheme();
document.getElementById('theme-style-toggle').addEventListener('click',toggleThemeStyle);
document.getElementById('theme-toggle').addEventListener('click',toggleDarkMode);

// Navigation
function navigate(page){currentState.page=page;document.querySelectorAll('.nav-btn').forEach(b=>{b.classList.remove('active');if(b.id==='nav-'+page)b.classList.add('active');});const c=document.getElementById('app-content');const t=document.getElementById('page-title');if(page!=='examen'&&currentState.exam.timerInterval){clearInterval(currentState.exam.timerInterval);currentState.exam.active=false;}c.classList.remove('page-transition');void c.offsetWidth;c.classList.add('page-transition');const titles={dashboard:'Dashboard',cours:'Cours',flashcards:'Fiches de Révision',entrainement:'Entraînement',examen:'Examen Blanc',pomodoro:'Pomodoro',stats:'Statistiques'};t.textContent=titles[page]||'';switch(page){case'dashboard':renderDashboard();break;case'cours':renderCours();break;case'flashcards':renderFlashcards();break;case'entrainement':renderEntrainement();break;case'examen':renderExamen();break;case'pomodoro':renderPomodoro();break;case'stats':renderStats();break;}lucide.createIcons();}

// Keyboard
document.addEventListener('keydown',e=>{if(currentState.page==='examen'&&currentState.exam.active){const ex=MOCK_DATA.examens.find(x=>x.id===currentState.exam.selectedExamId);if(!ex)return;if(e.key==='ArrowRight')navigateExam(1);else if(e.key==='ArrowLeft')navigateExam(-1);else if(['1','2','3','4'].includes(e.key)){selectAnswer(currentState.exam.currentQuestionIndex,parseInt(e.key)-1);}else if(e.key==='Enter'&&currentState.exam.currentQuestionIndex===ex.questions.length-1)submitExam();}else if(currentState.page==='entrainement'&&currentQuizState.quizId){if(!currentQuizState.answered&&['1','2','3','4'].includes(e.key))handleEntrainementAnswer(parseInt(e.key)-1);else if(currentQuizState.answered&&e.key==='Enter'){currentQuizState.index++;currentQuizState.answered=false;renderEntrainement(currentQuizState.chapterId,currentQuizState.quizId);}}});
