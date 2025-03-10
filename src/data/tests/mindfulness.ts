
import { Test } from "@/types/test";

export const mindfulnessTest: Test = {
  id: "mindfulness-compassion",
  title: "Mindfulness & Self-Compassion Test",
  shortDescription: "Explore your mindfulness and self-compassion levels",
  fullDescription: "Discover how mindful you are in daily life and how kindly you treat yourself, especially during challenging times.",
  category: "psychology",
  tags: ["mindfulness", "self-compassion", "well-being"],
  timeMinutes: 7,
  completions: 6234,
  illustration: "/illustrations/mindfulness.svg",
  questions: [
    {
      id: "q1",
      text: "When I fail at something important, I try to be kind to myself",
      type: "likert",
      options: [
        { id: "q1-a1", text: "Rarely", value: 1 },
        { id: "q1-a2", text: "Sometimes", value: 2 },
        { id: "q1-a3", text: "Often", value: 3 },
        { id: "q1-a4", text: "Almost Always", value: 4 },
        { id: "q1-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q2",
      text: "I notice my thoughts without getting carried away by them",
      type: "likert",
      options: [
        { id: "q2-a1", text: "Rarely", value: 1 },
        { id: "q2-a2", text: "Sometimes", value: 2 },
        { id: "q2-a3", text: "Often", value: 3 },
        { id: "q2-a4", text: "Almost Always", value: 4 },
        { id: "q2-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q3",
      text: "I pay attention to physical sensations in my body",
      type: "likert",
      options: [
        { id: "q3-a1", text: "Rarely", value: 1 },
        { id: "q3-a2", text: "Sometimes", value: 2 },
        { id: "q3-a3", text: "Often", value: 3 },
        { id: "q3-a4", text: "Almost Always", value: 4 },
        { id: "q3-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q4",
      text: "When I'm going through a hard time, I give myself the caring I need",
      type: "likert",
      options: [
        { id: "q4-a1", text: "Rarely", value: 1 },
        { id: "q4-a2", text: "Sometimes", value: 2 },
        { id: "q4-a3", text: "Often", value: 3 },
        { id: "q4-a4", text: "Almost Always", value: 4 },
        { id: "q4-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q5",
      text: "I'm able to focus on the present moment",
      type: "likert",
      options: [
        { id: "q5-a1", text: "Rarely", value: 1 },
        { id: "q5-a2", text: "Sometimes", value: 2 },
        { id: "q5-a3", text: "Often", value: 3 },
        { id: "q5-a4", text: "Almost Always", value: 4 },
        { id: "q5-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q6",
      text: "I treat myself with kindness when I'm feeling emotional pain",
      type: "likert",
      options: [
        { id: "q6-a1", text: "Rarely", value: 1 },
        { id: "q6-a2", text: "Sometimes", value: 2 },
        { id: "q6-a3", text: "Often", value: 3 },
        { id: "q6-a4", text: "Almost Always", value: 4 },
        { id: "q6-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q7",
      text: "I can pause before reacting to difficult situations",
      type: "likert",
      options: [
        { id: "q7-a1", text: "Rarely", value: 1 },
        { id: "q7-a2", text: "Sometimes", value: 2 },
        { id: "q7-a3", text: "Often", value: 3 },
        { id: "q7-a4", text: "Almost Always", value: 4 },
        { id: "q7-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q8",
      text: "I accept my flaws and difficulties without judging them",
      type: "likert",
      options: [
        { id: "q8-a1", text: "Rarely", value: 1 },
        { id: "q8-a2", text: "Sometimes", value: 2 },
        { id: "q8-a3", text: "Often", value: 3 },
        { id: "q8-a4", text: "Almost Always", value: 4 },
        { id: "q8-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q9",
      text: "I stay present with unpleasant sensations or emotions",
      type: "likert",
      options: [
        { id: "q9-a1", text: "Rarely", value: 1 },
        { id: "q9-a2", text: "Sometimes", value: 2 },
        { id: "q9-a3", text: "Often", value: 3 },
        { id: "q9-a4", text: "Almost Always", value: 4 },
        { id: "q9-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q10",
      text: "I remind myself that many others feel the same way I do",
      type: "likert",
      options: [
        { id: "q10-a1", text: "Rarely", value: 1 },
        { id: "q10-a2", text: "Sometimes", value: 2 },
        { id: "q10-a3", text: "Often", value: 3 },
        { id: "q10-a4", text: "Almost Always", value: 4 },
        { id: "q10-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q11",
      text: "I observe my thoughts without getting caught up in them",
      type: "likert",
      options: [
        { id: "q11-a1", text: "Rarely", value: 1 },
        { id: "q11-a2", text: "Sometimes", value: 2 },
        { id: "q11-a3", text: "Often", value: 3 },
        { id: "q11-a4", text: "Almost Always", value: 4 },
        { id: "q11-a5", text: "Always", value: 5 }
      ]
    },
    {
      id: "q12",
      text: "I'm kind to myself when things go wrong",
      type: "likert",
      options: [
        { id: "q12-a1", text: "Rarely", value: 1 },
        { id: "q12-a2", text: "Sometimes", value: 2 },
        { id: "q12-a3", text: "Often", value: 3 },
        { id: "q12-a4", text: "Almost Always", value: 4 },
        { id: "q12-a5", text: "Always", value: 5 }
      ]
    }
  ]
};
