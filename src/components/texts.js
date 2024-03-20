const texts = {
  startTexts: {
    pageTitle: "What are you looking for?",
    studyingAbroadTitle: "Studying abroad",
    studyingAbroadParagraph:
      "Generation of your academic resume and cover letter (e.g. university admission, scholarschip application, etc.).",
    jobMentoringTitle: "Job mentoring",
    jobMentoringParagraph1: "Tailored Mock Interviews",
    jobMentoringParagraph2: "Expert Resume Crafting",
    jobMentoringParagraph3: "Targeted Cover Letter Develoment",
    footLine:
      "Highlight your qualification, personal experiences, goals and achievements",
  },
  homeTexts: {
    studyTitle: "YOUR UNIVERSITY GUIDE",
    careerTitle: "YOUR CAREER GUIDE",
    applicationTxt: "Application Guide",
    interviewTxt: "Interview",
    coverletterTxt: "Cover Letter",
    resumeTxt: "Resume",
    uniGuidTxt: "Uni Guide",
    matchTxt: "Match",
  },
  modalTexts: {
    title: "Update your info or let's Chat!",
    interviewTitle: "Interview now!",
    uploadTitle: "Upload from resume",
    interviwContent:
      "Through this mock interview, our AI mentors meticulously simulate interview scenarios, providing invaluable insights into your strengths and areas for improvement.",
    uploadContent:
      "With the resume, our AI experts use a strategic approach, highlighting your achievements,skills,and qualifications in a format which captures the attention of hiring managers.",
  },
  QuestionP: {
    back: "Back",
    next: "Next",
  },
  GeberalQ: {
    JobPage: {
      Page1: {
        Q_title: "WHAT JOB YOU ARE APLLYING FOR",
        D_Title: "DESIRED POSITION*",
        D_Title_PH: "Software Development Engineer",
        D_Company: "DESIRED COMPANY*",
        D_Company_PH: "Meta",
        D_Description: "JOB DESCRIPTION*",
        D_Description_PH:
          "The job description for the SDE role at Google typically involves designing, developing, and maintaining software applications, participating in code reviews, collaborating with cross-functional teams, and contributing to the overall software development lifecycle.",
      },
      Page2: {
        Q_title: "WHAT IS YOUR MOST RECENT JOB",
        R_Title: "POSITION*",
        R_Title_PH: "Software Development Engineer (SDE)",
        R_Company: "COMPANY*",
        R_Company_PH: "Google",
        R_Description: "MAIN RESBONSBILITY*",
        R_Description_PH:
          " - Designing and developing software solutions.\n- Collaborating with product managers, designers, and other engineers.\n - Participating in code reviews and providing feedback.\n- Debugging and resolving software defects.\n- Maintaining and improving existing software systems.\n- Contributing to the overall software development process.",
      },
      Page3: {
        Q_title: "WHAT IS YOUR TOP 3 SKILLS",
        TOP1: "TOP1",
        TOP1_PH: "Analytical",
        TOP2: "TOP2",
        TOP2_PH: "Detail-oriented",
        TOP3: "TOP3",
        TOP3_PH: "Strategic",
        Skills: [
          ["Python", "Java", "C++"],
          ["Agile,Scrum", "Version Control"],
          ["Web Development", "Database SQL", "Data Structure"],
          ["Computer Vision", "NLP Algorithm"],
        ],
      },
      Page4: {
        Q_title: "WHAT IS YOUR BIGGEST ACHIEVEMENT",
        Q_Backgrund: "WHAT IS YOUR BACKGROUND",
        Q_Backgrund_PH:
          "The project involved optimizing the performance of a high-traffic web application.",
        Q_Action: "HOW YOU SUCCEED (ACTIION YOU TOOK)",
        Q_Action_PH:
          "- Conducted a thorough analysis of the existing codebase and identified performance bottlenecks.\n- Developed a detailed strategy for code refactoring and optimization.\n- Led a team of five engineers in implementing the changes and coordinating with other teams to minimize disruptions.\n- Implemented rigorous testing and benchmarking to ensure the improvements met the performance goals.",
        Q_Result: "RESULT YOU ACHIEVED*",
        Q_Result_PH:
          "The project was completed two weeks ahead of schedule, and the application's response time improved by 20%, resulting in higher user satisfaction and reduced server costs.",
      },
      Page5: {
        Q_title: "HOW MANNY YEARS OF EXPERIENCES YOU HAVE*",
        Q_Notification: "INTERSHIP AND UNOFFICIAL JOB COULD BE INCLUDED.",
      },
    },
    StdPage: {
      PgaeTitle: "ANSWER THE QUESTIONS TO GET THE COVER LETTER",
      Page1: {
        P1Q1: "WHERE IS YOUR DREAM COUNTRY?",
        P1Q1_PH: "Germany",
        P1Q1_Options: [
          "*USA",
          "*Germany",
          "*Australia",
          "*Denmark",
          "*Belgium",
          "*...",
        ],
        P1Q2: "WHERE IS YOUR DREAM UNIVERSITY?",
        P1Q2_PH: "TU Berlin",
        P1Q2_Options: [
          "*TU Berlin",
          "*TU Munich",
          "*TU Dresden",
          "*TU Achen",
          "*TU Hannover",
          "*...",
        ],
        P1Q3: "WHTA DEGREE YOU ARE APPLYING FOR",
        P1Q3_PH: "Master",
        P1Q4: "WHTA MAJOR YOU ARE APPLYING FOR",
        P1Q4_PH: "Computer Science",
      },
      Page2: {
        P2Q1: "WHY ARE YOU INTERESTED IN STUDYING AT THE SPECIFIC UNIVERSITY IN GERMANY?",

        P2T1: "I am enthusiastic about pursuing my",
        P2T2: "degree at",
        P2T3: "in",
        P2T4: "due to its distinguished reputation in",
        P2T5: "I hold a",
        P2T6: "degree in",
        P2T7: "from",
        P2T8: "in",
        P2T9: ". where I gained a solid foundation in my major and developed a strong background in",
        P2T10: " . Moreover, my coursework in",
        P2T11: " have deepened my interest in this field",
      },
      Page3: {
        P3Q1: "WHAT IS YOUR ACADEMIC BACKGROUND AND HOW DOES ITALIGN WITH THE PROGRAM YOU'RE APPLYING TO?",

        P3T1: "During my studies, I had the opportunity to engage in a research project focused on",
        P3T2: "This research endeavor culminated in a published paper in ",
        P3T3: ", and I was honored with the ",
        P3T4: " for my contributions. Furthermore, I have been involved in ",
        P3T5: " , which enriched my practical understanding of",
        P3T6: " . These experiences have not only expanded my knowledge in",
        P3T7: " Furthermore, my internships as a/an",
        P3T8: " at",
        P3T9: " enhanced my proficiency in this industry",
      },
      Page4: {
        P4Q1: "CAN YOU PROVIDE EXAMPLE OF YOUR ACADEMIC OR RESEARCH ACHIEVEMENTS THAT DEMONSTRATE YOUR POTENTIAL FOR SUCCESS IN THE PROGRAM?",

        P4T1: "The program at",
        P4T2: "aligns seamlessly with my academic interests, especially in courses like",
        P4T3: " that fuel my passion in",
        P4T4: " . I'm inspired by the university's academic excellence and faculty expertise, particularly",
        P4T5: " in ",
        P4T6: " My long-term career goal is to ",
        P4T7: " I will gain during my studies to make a meaningful impact in the field",
      },
      Page5: {
        P5Q1: "WHAT RELEVANT EXPERIENCE AND SKILLS MAKE YOU A STRONG CANDIDATE FOR THE PROGRAM?",

        P5T1: " First name ",
        P5T2: " Last name ",
        P5T3: " Nationality",
        P5T4: " Birthday ",
        P5T5: " Address ",
        P5T6: " Tel ",
        P5T7: " Email ",

        P5T8: " FINAL STEP ",
      },
      Page6: {
        P6Q1: "HOW DO YOUR ACADEMIC AND RESEARCH INTERESTS MATCH THE PROGRAM's CURRICULUM?",
      },
      Page7: {
        P7Q1: "WHAT ARE YOUR LONG-TERM CAREER GOALS, AND HOW DOES THIS PROGRAM FIT INTO YUUR CAREER PATH?",
      },
      Page8: {
        P8Q1: "WHAT LANGUAGE PROFICIENCY DO YOU HAVE, AND HAVE YOU TAKEN ANY LANGUAGE PROFICIENCY TESTS?",
      },
      Page22: {
        P2Q1: "WHAT IS YOUR LOCATION NOW?",
        P2Q1_Options: [
          "*Beijing",
          "*Wuhan",
          "*Shanghai",
          "*Nanjing",
          "*Guangzhou",
          "*...",
        ],
        P2Q2: "WHICH COLLEGE DID YOU STUDY IN?",
        P2Q2_Options: [
          "*Wuhan College",
          "*Peiking university",
          "*Shanghai Jiao Tong University",
          "*Tsinghua University",
          "*Nanjing University",
          "*...",
        ],
      },
      Page33: {
        P3Q1: "WAHT MAJOR DO YOU WANT TO APPLY FOR?",
        P3Q1_Options: [
          "*Electric Automation",
          "*Mechanical Engineering",
          "*Electrical Engineering",
          "*Computer Engineering",
          "*Software Engineering",
          "*...",
        ],
        P3Q2: "WHICH DEGREE DO YOU WANT TO APLLY FOR?",
        P3Q2_Options: ["*Bachelor", "*Master", "*Doctor"],
      },
      Page44: {
        P4Q1: "WAHT'S YOUR MAJOR NOW?",
        P4Q1_Options: [
          "*Electric Automation",
          "*Mechanical Engineering",
          "*Electrical Engineering",
          "*Computer Engineering",
          "*Software Engineering",
          "*...",
        ],
        P4Q2: "WAHT'S YOUR HIGHEST DEGREE NOW?",
        P4Q2_Options: ["*Bachelor", "*Master", "*Doctor", "*..."],
      },
    },
  },
};

export default texts;
