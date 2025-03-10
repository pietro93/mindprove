
import { Test } from "@/types/test";

export const mbtiTest: Test = {
  id: "mbti-personality",
  title: "MBTI Personality Test",
  shortDescription: "Discover your personality type based on the Myers-Briggs framework",
  fullDescription: "Learn about your preferences for extraversion or introversion, sensing or intuition, thinking or feeling, and judging or perceiving with this personality assessment.",
  category: "personality",
  tags: ["personality", "psychology", "mbti"],
  timeMinutes: 15,
  completions: 18429,
  illustration: "/illustrations/mbti.svg",
  questions: [
    {
      id: "q1",
      text: "At a party, you usually...",
      type: "multiple-choice",
      options: [
        { id: "q1-a1", text: "Interact with many, including strangers", value: 1 },
        { id: "q1-a2", text: "Interact with a few people you know", value: 2 }
      ]
    },
    {
      id: "q2",
      text: "You tend to focus on...",
      type: "multiple-choice",
      options: [
        { id: "q2-a1", text: "Possibilities and what might be", value: 1 },
        { id: "q2-a2", text: "Realities and what actually exists", value: 2 }
      ]
    },
    {
      id: "q3",
      text: "When making decisions, you usually prefer...",
      type: "multiple-choice",
      options: [
        { id: "q3-a1", text: "Using logic and objective analysis", value: 1 },
        { id: "q3-a2", text: "Considering people and special circumstances", value: 2 }
      ]
    },
    {
      id: "q4",
      text: "In your daily life, you tend to...",
      type: "multiple-choice",
      options: [
        { id: "q4-a1", text: "Plan ahead and be well-organized", value: 1 },
        { id: "q4-a2", text: "Be flexible and spontaneous", value: 2 }
      ]
    },
    {
      id: "q5",
      text: "You feel more energized by...",
      type: "multiple-choice",
      options: [
        { id: "q5-a1", text: "Being around others and socializing", value: 1 },
        { id: "q5-a2", text: "Spending time alone or with a few close friends", value: 2 }
      ]
    },
    {
      id: "q6",
      text: "You prefer to focus on...",
      type: "multiple-choice",
      options: [
        { id: "q6-a1", text: "The big picture and connections between ideas", value: 1 },
        { id: "q6-a2", text: "Details and specific facts", value: 2 }
      ]
    },
    {
      id: "q7",
      text: "When evaluating a situation, you rely more on...",
      type: "multiple-choice",
      options: [
        { id: "q7-a1", text: "Objective principles and logical reasoning", value: 1 },
        { id: "q7-a2", text: "Personal values and how others will be affected", value: 2 }
      ]
    },
    {
      id: "q8",
      text: "You prefer...",
      type: "multiple-choice",
      options: [
        { id: "q8-a1", text: "Having a plan and sticking to it", value: 1 },
        { id: "q8-a2", text: "Adapting as you go", value: 2 }
      ]
    },
    {
      id: "q9",
      text: "Your typical mode is being...",
      type: "multiple-choice",
      options: [
        { id: "q9-a1", text: "Outgoing and receiving energy from external activities", value: 1 },
        { id: "q9-a2", text: "Reserved and receiving energy from within", value: 2 }
      ]
    },
    {
      id: "q10",
      text: "You are more interested in...",
      type: "multiple-choice",
      options: [
        { id: "q10-a1", text: "What is possible and theoretical", value: 1 },
        { id: "q10-a2", text: "What is actual and real", value: 2 }
      ]
    },
    {
      id: "q11",
      text: "When making a tough choice, you usually...",
      type: "multiple-choice",
      options: [
        { id: "q11-a1", text: "Make decisions based on facts and logical analysis", value: 1 },
        { id: "q11-a2", text: "Consider the impact on people involved", value: 2 }
      ]
    },
    {
      id: "q12",
      text: "In your work style, you prefer to...",
      type: "multiple-choice",
      options: [
        { id: "q12-a1", text: "Work in an organized, structured way", value: 1 },
        { id: "q12-a2", text: "Work in a flexible, adaptive way", value: 2 }
      ]
    },
    {
      id: "q13",
      text: "At a social event, you typically...",
      type: "multiple-choice",
      options: [
        { id: "q13-a1", text: "Stay late, gaining energy as you interact", value: 1 },
        { id: "q13-a2", text: "Leave early, feeling drained from interaction", value: 2 }
      ]
    },
    {
      id: "q14",
      text: "You are more likely to trust...",
      type: "multiple-choice",
      options: [
        { id: "q14-a1", text: "Your imagination and innovation", value: 1 },
        { id: "q14-a2", text: "Your experience and observations", value: 2 }
      ]
    },
    {
      id: "q15",
      text: "You find it easier to...",
      type: "multiple-choice",
      options: [
        { id: "q15-a1", text: "See the flaws in an argument", value: 1 },
        { id: "q15-a2", text: "Understand how people feel", value: 2 }
      ]
    },
    {
      id: "q16",
      text: "You prefer situations that are...",
      type: "multiple-choice",
      options: [
        { id: "q16-a1", text: "Structured and scheduled", value: 1 },
        { id: "q16-a2", text: "Open-ended and spontaneous", value: 2 }
      ]
    },
    {
      id: "q17",
      text: "You prefer to...",
      type: "multiple-choice",
      options: [
        { id: "q17-a1", text: "Think out loud and talk through your ideas", value: 1 },
        { id: "q17-a2", text: "Think things through quietly before speaking", value: 2 }
      ]
    },
    {
      id: "q18",
      text: "When reading, you prefer material that...",
      type: "multiple-choice",
      options: [
        { id: "q18-a1", text: "Is imaginative and theoretical", value: 1 },
        { id: "q18-a2", text: "Is practical and factual", value: 2 }
      ]
    },
    {
      id: "q19",
      text: "You find it more natural to...",
      type: "multiple-choice",
      options: [
        { id: "q19-a1", text: "Be objective when making decisions", value: 1 },
        { id: "q19-a2", text: "Be empathetic when making decisions", value: 2 }
      ]
    },
    {
      id: "q20",
      text: "You prefer environments that are...",
      type: "multiple-choice",
      options: [
        { id: "q20-a1", text: "Planned and orderly", value: 1 },
        { id: "q20-a2", text: "Casual and unstructured", value: 2 }
      ]
    }
  ]
};
