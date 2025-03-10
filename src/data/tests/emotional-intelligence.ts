
import { Test } from "@/types/test";

export const emotionalIntelligenceTest: Test = {
  id: "emotional-intelligence",
  title: "Emotional Intelligence Test",
  shortDescription: "Understand how well you recognize and handle emotions",
  fullDescription: "Discover your emotional intelligence level and learn how well you understand and manage both your own emotions and those of others.",
  category: "psychology",
  tags: ["emotions", "self-awareness", "relationships"],
  timeMinutes: 8,
  completions: 7126,
  illustration: "/illustrations/emotional.svg",
  questions: [
    {
      id: "q1",
      text: "I can easily identify how I'm feeling in different situations",
      type: "likert",
      options: [
        { id: "q1-a1", text: "Not at all like me", value: 1 },
        { id: "q1-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q1-a3", text: "Neutral", value: 3 },
        { id: "q1-a4", text: "Somewhat like me", value: 4 },
        { id: "q1-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q2",
      text: "I notice how others are feeling by their tone of voice and body language",
      type: "likert",
      options: [
        { id: "q2-a1", text: "Not at all like me", value: 1 },
        { id: "q2-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q2-a3", text: "Neutral", value: 3 },
        { id: "q2-a4", text: "Somewhat like me", value: 4 },
        { id: "q2-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q3",
      text: "I stay calm under pressure",
      type: "likert",
      options: [
        { id: "q3-a1", text: "Not at all like me", value: 1 },
        { id: "q3-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q3-a3", text: "Neutral", value: 3 },
        { id: "q3-a4", text: "Somewhat like me", value: 4 },
        { id: "q3-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q4",
      text: "I can bounce back quickly after setbacks",
      type: "likert",
      options: [
        { id: "q4-a1", text: "Not at all like me", value: 1 },
        { id: "q4-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q4-a3", text: "Neutral", value: 3 },
        { id: "q4-a4", text: "Somewhat like me", value: 4 },
        { id: "q4-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q5",
      text: "I'm good at handling disagreements with others",
      type: "likert",
      options: [
        { id: "q5-a1", text: "Not at all like me", value: 1 },
        { id: "q5-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q5-a3", text: "Neutral", value: 3 },
        { id: "q5-a4", text: "Somewhat like me", value: 4 },
        { id: "q5-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q6",
      text: "I can adapt my communication style based on who I'm talking to",
      type: "likert",
      options: [
        { id: "q6-a1", text: "Not at all like me", value: 1 },
        { id: "q6-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q6-a3", text: "Neutral", value: 3 },
        { id: "q6-a4", text: "Somewhat like me", value: 4 },
        { id: "q6-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q7",
      text: "I'm aware of how my moods affect others",
      type: "likert",
      options: [
        { id: "q7-a1", text: "Not at all like me", value: 1 },
        { id: "q7-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q7-a3", text: "Neutral", value: 3 },
        { id: "q7-a4", text: "Somewhat like me", value: 4 },
        { id: "q7-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q8",
      text: "I can motivate myself to get things done",
      type: "likert",
      options: [
        { id: "q8-a1", text: "Not at all like me", value: 1 },
        { id: "q8-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q8-a3", text: "Neutral", value: 3 },
        { id: "q8-a4", text: "Somewhat like me", value: 4 },
        { id: "q8-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q9",
      text: "I can read the room in social situations",
      type: "likert",
      options: [
        { id: "q9-a1", text: "Not at all like me", value: 1 },
        { id: "q9-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q9-a3", text: "Neutral", value: 3 },
        { id: "q9-a4", text: "Somewhat like me", value: 4 },
        { id: "q9-a5", text: "Very much like me", value: 5 }
      ]
    },
    {
      id: "q10",
      text: "I'm good at helping others feel better when they're down",
      type: "likert",
      options: [
        { id: "q10-a1", text: "Not at all like me", value: 1 },
        { id: "q10-a2", text: "Somewhat unlike me", value: 2 },
        { id: "q10-a3", text: "Neutral", value: 3 },
        { id: "q10-a4", text: "Somewhat like me", value: 4 },
        { id: "q10-a5", text: "Very much like me", value: 5 }
      ]
    }
  ]
};
