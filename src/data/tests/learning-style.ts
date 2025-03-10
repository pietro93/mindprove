
import { Test } from "@/types/test";

export const learningStyleTest: Test = {
  id: "learning-style",
  title: "Learning Style Test",
  shortDescription: "Discover your natural way of learning and processing information",
  fullDescription: "Find out whether you're an Activist, Reflector, Theorist, or Pragmatist learner, and get tips on how to make the most of your learning style.",
  category: "psychology",
  tags: ["learning", "education", "self-development"],
  illustration: "/illustrations/psychological.svg",
  questions: [
    {
      id: "q1",
      text: "When learning something new, I prefer to...",
      type: "multiple-choice",
      options: [
        { id: "q1-a1", text: "Jump right in and try it", value: "activist" },
        { id: "q1-a2", text: "Watch others do it first", value: "reflector" },
        { id: "q1-a3", text: "Understand the theory behind it", value: "theorist" },
        { id: "q1-a4", text: "See how it works in practice", value: "pragmatist" }
      ]
    },
    {
      id: "q2",
      text: "I learn best when...",
      type: "multiple-choice",
      options: [
        { id: "q2-a1", text: "I can experiment and try new things", value: "activist" },
        { id: "q2-a2", text: "I can think things through carefully", value: "reflector" },
        { id: "q2-a3", text: "I can analyze and understand concepts", value: "theorist" },
        { id: "q2-a4", text: "I can see practical applications", value: "pragmatist" }
      ]
    },
    {
      id: "q3",
      text: "When solving problems, I prefer to...",
      type: "multiple-choice",
      options: [
        { id: "q3-a1", text: "Try different approaches", value: "activist" },
        { id: "q3-a2", text: "Gather all information first", value: "reflector" },
        { id: "q3-a3", text: "Find the underlying principles", value: "theorist" },
        { id: "q3-a4", text: "Focus on practical solutions", value: "pragmatist" }
      ]
    },
    {
      id: "q4",
      text: "In group work, I typically...",
      type: "multiple-choice",
      options: [
        { id: "q4-a1", text: "Generate new ideas and possibilities", value: "activist" },
        { id: "q4-a2", text: "Listen and observe before contributing", value: "reflector" },
        { id: "q4-a3", text: "Analyze and organize ideas", value: "theorist" },
        { id: "q4-a4", text: "Focus on getting things done", value: "pragmatist" }
      ]
    },
    {
      id: "q5",
      text: "I find it easiest to learn when...",
      type: "multiple-choice",
      options: [
        { id: "q5-a1", text: "I can be spontaneous and flexible", value: "activist" },
        { id: "q5-a2", text: "I have time to think things through", value: "reflector" },
        { id: "q5-a3", text: "I can see how things fit together", value: "theorist" },
        { id: "q5-a4", text: "I can apply what I'm learning", value: "pragmatist" }
      ]
    }
  ]
};
