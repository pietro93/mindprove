
import { Test } from "@/types/test";

export const tests: Test[] = [
  {
    id: "anxiety-assessment",
    title: "Anxiety Assessment",
    shortDescription: "Evaluate your anxiety levels and learn coping strategies",
    fullDescription: "This assessment helps you understand your anxiety levels based on clinically validated questions. After completing the test, you'll receive personalized insights and recommendations for managing anxiety.",
    category: "mental-health",
    timeMinutes: 5,
    completions: 15872,
    questions: [
      {
        id: "q1",
        text: "How often do you feel nervous, anxious, or on edge?",
        type: "likert",
        options: [
          { id: "q1-a1", text: "Not at all", value: 0 },
          { id: "q1-a2", text: "Several days", value: 1 },
          { id: "q1-a3", text: "More than half the days", value: 2 },
          { id: "q1-a4", text: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "q2",
        text: "How often do you have trouble relaxing?",
        type: "likert",
        options: [
          { id: "q2-a1", text: "Not at all", value: 0 },
          { id: "q2-a2", text: "Several days", value: 1 },
          { id: "q2-a3", text: "More than half the days", value: 2 },
          { id: "q2-a4", text: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "q3",
        text: "How often do you worry too much about different things?",
        type: "likert",
        options: [
          { id: "q3-a1", text: "Not at all", value: 0 },
          { id: "q3-a2", text: "Several days", value: 1 },
          { id: "q3-a3", text: "More than half the days", value: 2 },
          { id: "q3-a4", text: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "q4",
        text: "How often do you have trouble falling or staying asleep?",
        type: "likert",
        options: [
          { id: "q4-a1", text: "Not at all", value: 0 },
          { id: "q4-a2", text: "Several days", value: 1 },
          { id: "q4-a3", text: "More than half the days", value: 2 },
          { id: "q4-a4", text: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "q5",
        text: "How often do you become easily annoyed or irritable?",
        type: "likert",
        options: [
          { id: "q5-a1", text: "Not at all", value: 0 },
          { id: "q5-a2", text: "Several days", value: 1 },
          { id: "q5-a3", text: "More than half the days", value: 2 },
          { id: "q5-a4", text: "Nearly every day", value: 3 },
        ],
      },
    ],
  },
  {
    id: "big-five-personality",
    title: "Big Five Personality Test",
    shortDescription: "Discover your personality traits based on the Five-Factor Model",
    fullDescription: "The Big Five Personality Test measures the five major dimensions of personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. This scientifically validated assessment will help you understand your unique personality profile.",
    category: "personality",
    timeMinutes: 10,
    completions: 24691,
    questions: [
      {
        id: "q1",
        text: "I see myself as someone who is talkative",
        type: "likert",
        options: [
          { id: "q1-a1", text: "Strongly disagree", value: 1 },
          { id: "q1-a2", text: "Disagree", value: 2 },
          { id: "q1-a3", text: "Neutral", value: 3 },
          { id: "q1-a4", text: "Agree", value: 4 },
          { id: "q1-a5", text: "Strongly agree", value: 5 },
        ],
      },
      {
        id: "q2",
        text: "I see myself as someone who tends to find fault with others",
        type: "likert",
        options: [
          { id: "q2-a1", text: "Strongly disagree", value: 5 },
          { id: "q2-a2", text: "Disagree", value: 4 },
          { id: "q2-a3", text: "Neutral", value: 3 },
          { id: "q2-a4", text: "Agree", value: 2 },
          { id: "q2-a5", text: "Strongly agree", value: 1 },
        ],
      },
      {
        id: "q3",
        text: "I see myself as someone who does a thorough job",
        type: "likert",
        options: [
          { id: "q3-a1", text: "Strongly disagree", value: 1 },
          { id: "q3-a2", text: "Disagree", value: 2 },
          { id: "q3-a3", text: "Neutral", value: 3 },
          { id: "q3-a4", text: "Agree", value: 4 },
          { id: "q3-a5", text: "Strongly agree", value: 5 },
        ],
      },
      {
        id: "q4",
        text: "I see myself as someone who is depressed, blue",
        type: "likert",
        options: [
          { id: "q4-a1", text: "Strongly disagree", value: 5 },
          { id: "q4-a2", text: "Disagree", value: 4 },
          { id: "q4-a3", text: "Neutral", value: 3 },
          { id: "q4-a4", text: "Agree", value: 2 },
          { id: "q4-a5", text: "Strongly agree", value: 1 },
        ],
      },
      {
        id: "q5",
        text: "I see myself as someone who is original, comes up with new ideas",
        type: "likert",
        options: [
          { id: "q5-a1", text: "Strongly disagree", value: 1 },
          { id: "q5-a2", text: "Disagree", value: 2 },
          { id: "q5-a3", text: "Neutral", value: 3 },
          { id: "q5-a4", text: "Agree", value: 4 },
          { id: "q5-a5", text: "Strongly agree", value: 5 },
        ],
      },
    ],
  },
  {
    id: "depression-screening",
    title: "Depression Screening",
    shortDescription: "Assess symptoms of depression with this quick screening tool",
    fullDescription: "This screening tool is based on the PHQ-9, a widely used instrument for assessing the severity of depression. The results will help you understand if you might be experiencing symptoms of depression and provide guidance on next steps.",
    category: "mental-health",
    timeMinutes: 3,
    completions: 12458,
    questions: [
      {
        id: "q1",
        text: "Over the past 2 weeks, how often have you had little interest or pleasure in doing things?",
        type: "likert",
        options: [
          { id: "q1-a1", text: "Not at all", value: 0 },
          { id: "q1-a2", text: "Several days", value: 1 },
          { id: "q1-a3", text: "More than half the days", value: 2 },
          { id: "q1-a4", text: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "q2",
        text: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
        type: "likert",
        options: [
          { id: "q2-a1", text: "Not at all", value: 0 },
          { id: "q2-a2", text: "Several days", value: 1 },
          { id: "q2-a3", text: "More than half the days", value: 2 },
          { id: "q2-a4", text: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "q3",
        text: "Over the past 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
        type: "likert",
        options: [
          { id: "q3-a1", text: "Not at all", value: 0 },
          { id: "q3-a2", text: "Several days", value: 1 },
          { id: "q3-a3", text: "More than half the days", value: 2 },
          { id: "q3-a4", text: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "q4",
        text: "Over the past 2 weeks, how often have you felt tired or had little energy?",
        type: "likert",
        options: [
          { id: "q4-a1", text: "Not at all", value: 0 },
          { id: "q4-a2", text: "Several days", value: 1 },
          { id: "q4-a3", text: "More than half the days", value: 2 },
          { id: "q4-a4", text: "Nearly every day", value: 3 },
        ],
      },
      {
        id: "q5",
        text: "Over the past 2 weeks, how often have you had poor appetite or been overeating?",
        type: "likert",
        options: [
          { id: "q5-a1", text: "Not at all", value: 0 },
          { id: "q5-a2", text: "Several days", value: 1 },
          { id: "q5-a3", text: "More than half the days", value: 2 },
          { id: "q5-a4", text: "Nearly every day", value: 3 },
        ],
      },
    ],
  },
  {
    id: "career-aptitude",
    title: "Career Aptitude Test",
    shortDescription: "Find career paths that match your skills and interests",
    fullDescription: "This career aptitude test analyzes your skills, interests, and preferences to suggest career paths that might be a good fit for you. Discover professional directions that align with your natural strengths and motivations.",
    category: "career",
    timeMinutes: 8,
    completions: 9245,
    questions: [
      {
        id: "q1",
        text: "I enjoy solving complex problems and puzzles",
        type: "likert",
        options: [
          { id: "q1-a1", text: "Strongly disagree", value: 1 },
          { id: "q1-a2", text: "Disagree", value: 2 },
          { id: "q1-a3", text: "Neutral", value: 3 },
          { id: "q1-a4", text: "Agree", value: 4 },
          { id: "q1-a5", text: "Strongly agree", value: 5 },
        ],
      },
      {
        id: "q2",
        text: "I prefer working with people rather than with data or things",
        type: "likert",
        options: [
          { id: "q2-a1", text: "Strongly disagree", value: 1 },
          { id: "q2-a2", text: "Disagree", value: 2 },
          { id: "q2-a3", text: "Neutral", value: 3 },
          { id: "q2-a4", text: "Agree", value: 4 },
          { id: "q2-a5", text: "Strongly agree", value: 5 },
        ],
      },
      {
        id: "q3",
        text: "I enjoy creative activities like art, writing, or music",
        type: "likert",
        options: [
          { id: "q3-a1", text: "Strongly disagree", value: 1 },
          { id: "q3-a2", text: "Disagree", value: 2 },
          { id: "q3-a3", text: "Neutral", value: 3 },
          { id: "q3-a4", text: "Agree", value: 4 },
          { id: "q3-a5", text: "Strongly agree", value: 5 },
        ],
      },
      {
        id: "q4",
        text: "I like to take charge and lead others",
        type: "likert",
        options: [
          { id: "q4-a1", text: "Strongly disagree", value: 1 },
          { id: "q4-a2", text: "Disagree", value: 2 },
          { id: "q4-a3", text: "Neutral", value: 3 },
          { id: "q4-a4", text: "Agree", value: 4 },
          { id: "q4-a5", text: "Strongly agree", value: 5 },
        ],
      },
      {
        id: "q5",
        text: "I'm detail-oriented and like to follow established procedures",
        type: "likert",
        options: [
          { id: "q5-a1", text: "Strongly disagree", value: 1 },
          { id: "q5-a2", text: "Disagree", value: 2 },
          { id: "q5-a3", text: "Neutral", value: 3 },
          { id: "q5-a4", text: "Agree", value: 4 },
          { id: "q5-a5", text: "Strongly agree", value: 5 },
        ],
      },
    ],
  },
];

export const popularTests = [
  tests[1], // Big Five Personality Test
  tests[0], // Anxiety Assessment
  tests[2], // Depression Screening
];
