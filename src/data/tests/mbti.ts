
import { Test } from "@/types/test";

export const mbtiTest: Test = {
  id: "mbti-personality",
  title: "MBTI Personality Test",
  shortDescription: "Discover your unique personality type and understand yourself better",
  fullDescription: "Find out which of the 16 personality types matches you best. This test helps you understand how you interact with the world, process information, and make decisions.",
  category: "personality",
  tags: ["personality", "mbti", "self-discovery"],
  illustration: "/illustrations/mbti.svg",
  questions: [
    {
      id: "q1",
      text: "At social events, you usually...",
      type: "multiple-choice",
      options: [
        { id: "q1-a1", text: "Meet new people and start conversations", value: "E" },
        { id: "q1-a2", text: "Prefer talking with people you already know", value: "I" }
      ]
    },
    {
      id: "q2",
      text: "You tend to...",
      type: "multiple-choice",
      options: [
        { id: "q2-a1", text: "Think things through carefully before acting", value: "I" },
        { id: "q2-a2", text: "Jump into action and figure things out as you go", value: "E" }
      ]
    },
    {
      id: "q3",
      text: "When solving problems, you prefer...",
      type: "multiple-choice",
      options: [
        { id: "q3-a1", text: "Following proven methods and concrete facts", value: "S" },
        { id: "q3-a2", text: "Exploring new possibilities and patterns", value: "N" }
      ]
    },
    {
      id: "q4",
      text: "You're more interested in...",
      type: "multiple-choice",
      options: [
        { id: "q4-a1", text: "What is actually happening right now", value: "S" },
        { id: "q4-a2", text: "What could potentially happen in the future", value: "N" }
      ]
    },
    {
      id: "q5",
      text: "When making decisions, you typically...",
      type: "multiple-choice",
      options: [
        { id: "q5-a1", text: "Consider people's feelings and values", value: "F" },
        { id: "q5-a2", text: "Look at logic and consistency", value: "T" }
      ]
    },
    {
      id: "q6",
      text: "In difficult situations, you tend to...",
      type: "multiple-choice",
      options: [
        { id: "q6-a1", text: "Consider how it affects everyone involved", value: "F" },
        { id: "q6-a2", text: "Analyze the problem objectively", value: "T" }
      ]
    },
    {
      id: "q7",
      text: "You prefer to...",
      type: "multiple-choice",
      options: [
        { id: "q7-a1", text: "Have things decided and planned", value: "J" },
        { id: "q7-a2", text: "Keep your options open and flexible", value: "P" }
      ]
    },
    {
      id: "q8",
      text: "Your workspace is usually...",
      type: "multiple-choice",
      options: [
        { id: "q8-a1", text: "Organized and structured", value: "J" },
        { id: "q8-a2", text: "Flexible and adaptable", value: "P" }
      ]
    },
    // E vs I questions
    {
      id: "q9",
      text: "After a busy day, you prefer to...",
      type: "multiple-choice",
      options: [
        { id: "q9-a1", text: "Go out and meet friends", value: "E" },
        { id: "q9-a2", text: "Spend quiet time alone", value: "I" }
      ]
    },
    {
      id: "q10",
      text: "In group projects, you typically...",
      type: "multiple-choice",
      options: [
        { id: "q10-a1", text: "Take the lead and coordinate", value: "E" },
        { id: "q10-a2", text: "Contribute individually and thoughtfully", value: "I" }
      ]
    },
    // S vs N questions
    {
      id: "q11",
      text: "You're more drawn to...",
      type: "multiple-choice",
      options: [
        { id: "q11-a1", text: "Concrete facts and details", value: "S" },
        { id: "q11-a2", text: "Abstract theories and concepts", value: "N" }
      ]
    },
    {
      id: "q12",
      text: "When reading, you prefer books that...",
      type: "multiple-choice",
      options: [
        { id: "q12-a1", text: "Describe real events and experiences", value: "S" },
        { id: "q12-a2", text: "Explore imaginative possibilities", value: "N" }
      ]
    },
    // T vs F questions
    {
      id: "q13",
      text: "When giving feedback, you tend to be...",
      type: "multiple-choice",
      options: [
        { id: "q13-a1", text: "Direct and objective", value: "T" },
        { id: "q13-a2", text: "Gentle and encouraging", value: "F" }
      ]
    },
    {
      id: "q14",
      text: "In conflicts, you usually focus on...",
      type: "multiple-choice",
      options: [
        { id: "q14-a1", text: "Finding the most logical solution", value: "T" },
        { id: "q14-a2", text: "Maintaining harmony", value: "F" }
      ]
    },
    // J vs P questions
    {
      id: "q15",
      text: "You prefer environments that are...",
      type: "multiple-choice",
      options: [
        { id: "q15-a1", text: "Structured and predictable", value: "J" },
        { id: "q15-a2", text: "Spontaneous and flexible", value: "P" }
      ]
    },
    {
      id: "q16",
      text: "When traveling, you like to...",
      type: "multiple-choice",
      options: [
        { id: "q16-a1", text: "Follow a planned itinerary", value: "J" },
        { id: "q16-a2", text: "Go with the flow", value: "P" }
      ]
    },
    // Additional E vs I
    {
      id: "q17",
      text: "You feel most energized when...",
      type: "multiple-choice",
      options: [
        { id: "q17-a1", text: "Being around others", value: "E" },
        { id: "q17-a2", text: "Having time to yourself", value: "I" }
      ]
    },
    // Additional S vs N
    {
      id: "q18",
      text: "You're more likely to trust...",
      type: "multiple-choice",
      options: [
        { id: "q18-a1", text: "Your direct experiences", value: "S" },
        { id: "q18-a2", text: "Your intuition", value: "N" }
      ]
    },
    // Additional T vs F
    {
      id: "q19",
      text: "When making important decisions, you primarily consider...",
      type: "multiple-choice",
      options: [
        { id: "q19-a1", text: "Facts and evidence", value: "T" },
        { id: "q19-a2", text: "People and circumstances", value: "F" }
      ]
    },
    // Additional J vs P
    {
      id: "q20",
      text: "You prefer projects that...",
      type: "multiple-choice",
      options: [
        { id: "q20-a1", text: "Have clear guidelines and deadlines", value: "J" },
        { id: "q20-a2", text: "Allow for exploration and changes", value: "P" }
      ]
    }
  ]
};
