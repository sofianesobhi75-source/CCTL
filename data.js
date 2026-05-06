// Main data assembly - loads from data_courses.js, data_quizzes.js, data_exams.js
const MOCK_DATA = {
  user: { name:"Candidat CCTL", progress:0, quizzesCompleted:0, totalQuizzes:12, streak:0, lastStudyDate:null, statsHistory:[] },
  chapitres: [
    {id:"c1",title:"1. Gestion de Projet (WBS & OBS)",progress:0,icon:"layout-list"},
    {id:"c2",title:"2. Systèmes d'Information et Réseaux",progress:0,icon:"network"},
    {id:"c3",title:"3. Bases de Données & Modélisation",progress:0,icon:"database"},
    {id:"c4",title:"4. Le Langage SQL",progress:0,icon:"file-code-2"}
  ],
  cours: COURSES_DATA,
  fiches: FICHES_DATA,
  entrainementQuizzes: QUIZ_DATA,
  examens: EXAM_DATA
};
