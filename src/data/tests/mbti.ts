
import { Test } from "@/types/test";

export const mbtiTest: Test = {
  id: "mbti-personality",
  title: "MBTI Personality Test",
  shortDescription: "Discover your four-letter personality type based on the Myers-Briggs Type Indicator",
  fullDescription: "The MBTI (Myers-Briggs Type Indicator) assessment identifies your psychological preferences in how you perceive the world and make decisions. This simplified version will help you discover which of the 16 personality types best matches your natural way of thinking and behaving.",
  category: "personality",
  tags: ["personality", "psychology", "self-awareness", "Myers-Briggs"],
  timeMinutes: 15,
  completions: 18543,
  illustration: "/illustrations/mbti.svg",
  questions: [
    {
      id: "q1",
      text: "At social events, you typically:",
      type: "likert",
      options: [
        { id: "q1-a1", text: "Talk to many different people, including strangers", value: 1 },
        { id: "q1-a2", text: "Mostly talk to people you already know", value: 5 },
      ],
    },
    {
      id: "q2",
      text: "You prefer to focus on:",
      type: "likert",
      options: [
        { id: "q2-a1", text: "Concrete facts and observable details", value: 1 },
        { id: "q2-a2", text: "Possibilities, patterns, and what could be", value: 5 },
      ],
    },
    {
      id: "q3",
      text: "When making decisions, you typically:",
      type: "likert",
      options: [
        { id: "q3-a1", text: "Consider logic and consistency above all", value: 1 },
        { id: "q3-a2", text: "Consider people's feelings and circumstances", value: 5 },
      ],
    },
    {
      id: "q4",
      text: "You tend to:",
      type: "likert",
      options: [
        { id: "q4-a1", text: "Make plans and stick to them", value: 1 },
        { id: "q4-a2", text: "Stay flexible and adapt to situations", value: 5 },
      ],
    },
    {
      id: "q5",
      text: "After spending time with many people, you often feel:",
      type: "likert",
      options: [
        { id: "q5-a1", text: "Energized and want more interaction", value: 1 },
        { id: "q5-a2", text: "Drained and need alone time", value: 5 },
      ],
    },
    {
      id: "q6",
      text: "You are more interested in:",
      type: "likert",
      options: [
        { id: "q6-a1", text: "What is real and actual", value: 1 },
        { id: "q6-a2", text: "What could be possible", value: 5 },
      ],
    },
    {
      id: "q7",
      text: "You find it more natural to:",
      type: "likert",
      options: [
        { id: "q7-a1", text: "Be objective when evaluating situations", value: 1 },
        { id: "q7-a2", text: "Consider how situations affect people", value: 5 },
      ],
    },
    {
      id: "q8",
      text: "You prefer:",
      type: "likert",
      options: [
        { id: "q8-a1", text: "Having things decided and settled", value: 1 },
        { id: "q8-a2", text: "Keeping options open", value: 5 },
      ],
    },
    {
      id: "q9",
      text: "At parties, you generally:",
      type: "likert",
      options: [
        { id: "q9-a1", text: "Stay late, gaining energy as you go", value: 1 },
        { id: "q9-a2", text: "Leave early, with decreased energy", value: 5 },
      ],
    },
    {
      id: "q10",
      text: "You are more drawn to:",
      type: "likert",
      options: [
        { id: "q10-a1", text: "Practical skills", value: 1 },
        { id: "q10-a2", text: "Abstract ideas", value: 5 },
      ],
    },
    {
      id: "q11",
      text: "You value more highly:",
      type: "likert",
      options: [
        { id: "q11-a1", text: "Clarity and rational thinking", value: 1 },
        { id: "q11-a2", text: "Harmony and compassion", value: 5 },
      ],
    },
    {
      id: "q12",
      text: "When working on a project, you prefer to:",
      type: "likert",
      options: [
        { id: "q12-a1", text: "Follow a plan with clear milestones", value: 1 },
        { id: "q12-a2", text: "Adapt and change course as needed", value: 5 },
      ],
    },
    {
      id: "q13",
      text: "You find small talk:",
      type: "likert",
      options: [
        { id: "q13-a1", text: "Enjoyable and easy", value: 1 },
        { id: "q13-a2", text: "Difficult or tiresome", value: 5 },
      ],
    },
    {
      id: "q14",
      text: "You tend to focus more on:",
      type: "likert",
      options: [
        { id: "q14-a1", text: "Details and facts", value: 1 },
        { id: "q14-a2", text: "The big picture", value: 5 },
      ],
    },
    {
      id: "q15",
      text: "In conflicts, you're more concerned with:",
      type: "likert",
      options: [
        { id: "q15-a1", text: "Finding the most logical solution", value: 1 },
        { id: "q15-a2", text: "Making sure everyone feels heard", value: 5 },
      ],
    },
    {
      id: "q16",
      text: "Your workspace is usually:",
      type: "likert",
      options: [
        { id: "q16-a1", text: "Organized and structured", value: 1 },
        { id: "q16-a2", text: "Flexible with some disorder", value: 5 },
      ],
    },
    {
      id: "q17",
      text: "You prefer to:",
      type: "likert",
      options: [
        { id: "q17-a1", text: "Speak up and share thoughts in groups", value: 1 },
        { id: "q17-a2", text: "Process thoughts internally first", value: 5 },
      ],
    },
    {
      id: "q18",
      text: "You're more likely to trust:",
      type: "likert",
      options: [
        { id: "q18-a1", text: "Your direct experience and observation", value: 1 },
        { id: "q18-a2", text: "Your intuition about what feels right", value: 5 },
      ],
    },
    {
      id: "q19",
      text: "When evaluating an idea, you first consider:",
      type: "likert",
      options: [
        { id: "q19-a1", text: "If it makes logical sense", value: 1 },
        { id: "q19-a2", text: "How it will affect people", value: 5 },
      ],
    },
    {
      id: "q20",
      text: "You prefer to work:",
      type: "likert",
      options: [
        { id: "q20-a1", text: "According to a schedule with clear deadlines", value: 1 },
        { id: "q20-a2", text: "In a flexible environment with room to adapt", value: 5 },
      ],
    },
  ],
};
