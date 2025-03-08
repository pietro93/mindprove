
export interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  readingTime: number;
  views: number;
  content: string;
  author: string;
  publishDate: string;
  illustrationPath?: string;
  order?: number;
}

export const guides: Guide[] = [
  {
    id: "dbt-introduction",
    title: "Introduction to DBT",
    description: "Learn the core concepts and philosophy behind Dialectical Behavior Therapy.",
    category: "dbt",
    readingTime: 5,
    views: 15423,
    author: "Dr. Sarah Johnson",
    publishDate: "2023-09-15",
    illustrationPath: "/illustrations/emotional.svg",
    order: 1,
    content: `
# Introduction to DBT

Dialectical Behavior Therapy (DBT) is a type of cognitive-behavioral therapy that was originally developed to treat borderline personality disorder. However, it has since been adapted to treat a wide range of mental health conditions, including depression, anxiety, substance use disorders, and eating disorders.

## What is DBT?

DBT is based on the concept of dialectics, which means holding two seemingly opposite perspectives simultaneously. In DBT, the primary dialectic is between acceptance and change. This means accepting yourself as you are while also working to change behaviors that are causing problems in your life.

## Core Components of DBT

DBT consists of four main components:

### 1. Mindfulness

*Being fully aware and present in the current moment*

Mindfulness helps you observe your thoughts and feelings without judgment. This skill allows you to experience emotions without being overwhelmed by them.

### 2. Distress Tolerance

*Learning to cope with painful events when you cannot change them*

Distress tolerance skills help you get through difficult situations without making them worse. These skills teach you to accept reality as it is, even when it's painful.

### 3. Emotion Regulation

*Understanding and managing intense emotions*

Emotion regulation skills help you identify, name, and change your emotional responses. These skills are particularly helpful for people who experience intense emotions.

### 4. Interpersonal Effectiveness

*Navigating relationships in healthy ways*

Interpersonal effectiveness skills help you communicate your needs, set boundaries, and maintain self-respect while preserving relationships.

## Who Created DBT?

DBT was developed by Dr. Marsha Linehan in the 1980s. Dr. Linehan combined standard cognitive-behavioral techniques with concepts from Buddhist mindfulness practices to create a treatment approach that emphasizes balance and integration.

In the next guide, we'll dive deeper into mindfulness, the foundation of all DBT skills.
    `
  },
  {
    id: "dbt-mindfulness",
    title: "DBT Mindfulness Skills",
    description: "Master the foundational mindfulness skills that serve as the basis for all DBT practices.",
    category: "dbt",
    readingTime: 6,
    views: 12567,
    author: "Dr. Sarah Johnson",
    publishDate: "2023-09-20",
    illustrationPath: "/illustrations/mindfulness.svg",
    order: 2,
    content: `
# DBT Mindfulness Skills

Mindfulness is the cornerstone of all DBT skills. It involves being fully aware and present in the moment without judgment.

## The "What" Skills of Mindfulness

### 1. Observe

*Notice without attaching to what you observe*

- Notice your breath moving in and out
- Notice sensations in your body
- Watch thoughts come and go like clouds in the sky
- Pay attention to sounds around you

**Practice Exercise:** Set a timer for 2 minutes. Focus only on your breath. When your mind wanders (and it will), gently bring your attention back to your breath.

### 2. Describe

*Put words to your experience*

- Label your thoughts as "thoughts" and emotions as "emotions"
- Describe only what you observe, not your interpretations
- Use specific language: "I feel a tightness in my chest" rather than "I feel anxious"

**Practice Exercise:** Look around your environment and describe 5 things you see using only factual statements without judgments.

### 3. Participate

*Fully engage in the present moment*

- Immerse yourself completely in what you're doing
- Let go of self-consciousness
- Act intuitively rather than overthinking

**Practice Exercise:** The next time you eat a meal, do it mindfully—notice the taste, texture, smell, and sensations of each bite.

## The "How" Skills of Mindfulness

### 1. Non-judgmentally

*See facts, not evaluations*

- Notice judgments and let them go
- Replace "good/bad" with "effective/ineffective"
- Distinguish between facts and opinions

**Practice Exercise:** Notice when you make judgments throughout the day. Try to reframe them as neutral observations.

### 2. One-mindfully

*Do one thing at a time*

- Focus completely on what you're doing
- When your mind wanders, bring it back
- Let go of distractions

**Practice Exercise:** Choose a routine activity (like washing dishes) and do it with full attention.

### 3. Effectively

*Focus on what works*

- Do what is needed in the situation
- Let go of "shoulds" and "fair/unfair"
- Play by the rules that are applicable

**Practice Exercise:** Think of a current problem. Instead of focusing on what's fair, ask "What would be most effective right now?"

## Integrating Mindfulness Into Daily Life

Mindfulness isn't just a formal practice—it can be integrated into your daily activities:

- Morning routine: Pay attention to the sensation of water during your shower
- Commuting: Notice the sights, sounds, and sensations around you
- Work: Focus completely on one task before moving to the next
- Eating: Savor each bite, noticing flavors and textures

Remember, mindfulness is a skill that improves with practice. Start with short periods and gradually extend them as you become more comfortable.

In the next guide, we'll explore distress tolerance skills that help you manage crisis situations.
    `
  },
  {
    id: "dbt-distress-tolerance",
    title: "DBT Distress Tolerance",
    description: "Learn to survive crisis situations and accept reality as it is, even when it's painful.",
    category: "dbt",
    readingTime: 7,
    views: 9876,
    author: "Dr. Michael Chen",
    publishDate: "2023-09-25",
    illustrationPath: "/illustrations/depression.svg",
    order: 3,
    content: `
# DBT Distress Tolerance

Distress tolerance skills help you get through painful situations without making them worse. These skills are particularly useful during crises when your emotions might overwhelm your ability to think clearly.

## Crisis Survival Skills

### 1. STOP Skill

When emotions threaten to overwhelm you:

**S - Stop**
- Don't react automatically
- Freeze and don't move a muscle

**T - Take a step back**
- Take a break
- Remove yourself from the situation

**O - Observe**
- Notice what's happening inside and outside you
- What are you feeling? What's going on?

**P - Proceed mindfully**
- Consider what would be effective
- Act with awareness

**Practice Exercise:** The next time you feel overwhelmed, practice the STOP skill. Write down what you observed and how it helped.

### 2. TIPP Skills for Managing Extreme Emotions

**T - Temperature Change**
- Splash cold water on your face
- Hold an ice cube in your hand
- Take a hot or cold shower

**I - Intense Exercise**
- Do jumping jacks
- Run up and down stairs
- Push against a wall

**P - Paced Breathing**
- Breathe deeply, with a longer exhale than inhale
- Inhale for 4 counts, exhale for 6
- Focus entirely on your breath

**P - Paired Muscle Relaxation**
- Tense and then relax each muscle group
- Notice the difference between tension and relaxation
- Combine with paced breathing

**Practice Exercise:** Create a "distress tolerance kit" with items that can help with TIPP skills (e.g., a stress ball, essential oils, a list of exercises).

### 3. ACCEPTS Skills for Distraction

**A - Activities**
- Engage in hobbies or tasks that require attention
- Clean your room, do a puzzle, go for a walk

**C - Contributing**
- Do something for someone else
- Volunteer, help a friend, send a kind message

**C - Comparisons**
- Compare yourself to people coping the same or less well
- Compare yourself to your own coping in the past

**E - Emotions (different ones)**
- Generate a different emotion
- Watch a funny video, listen to uplifting music

**P - Pushing away**
- Temporarily put the situation on a mental shelf
- Build an imaginary wall between you and the problem

**T - Thoughts**
- Replace your thoughts with other thoughts
- Count backwards from 100 by 7s
- Recite song lyrics or a poem

**S - Sensations**
- Engage in intense sensory experiences
- Hold an ice cube, take a hot shower, eat something spicy

**Practice Exercise:** Make a list of at least two activities for each ACCEPTS category that you can use when in distress.

## Radical Acceptance

When you cannot change a situation, radical acceptance can prevent unnecessary suffering:

### Principles of Radical Acceptance:

1. **Acceptance doesn't mean approval**
   - You can accept reality without liking it
   - Acceptance acknowledges "what is" rather than "what should be"

2. **Fighting reality only creates suffering**
   - Pain is inevitable, but suffering is optional
   - Suffering = Pain + Non-acceptance

3. **Acceptance requires practice**
   - It's not a one-time decision
   - You may need to accept the same reality repeatedly

### Steps to Radical Acceptance:

1. Observe that you're fighting reality ("This shouldn't be happening")
2. Remind yourself that reality can't be changed (the past is the past)
3. Consider the causes of the current reality
4. Accept with your whole self (mind, body, spirit)
5. Practice accepting difficult situations with mindfulness
6. List the advantages of accepting vs. the disadvantages of not accepting
7. Practice willingness rather than willfulness

**Practice Exercise:** Identify something you've been fighting against. Write down how fighting reality has affected you and how accepting it might change your experience.

In the next guide, we'll explore emotion regulation skills that help you understand and manage your emotions effectively.
    `
  },
  {
    id: "dbt-emotion-regulation",
    title: "DBT Emotion Regulation",
    description: "Discover practical techniques to understand, name, and change your emotional responses.",
    category: "dbt",
    readingTime: 7,
    views: 11542,
    author: "Dr. Sarah Johnson",
    publishDate: "2023-10-01",
    illustrationPath: "/illustrations/emotional.svg",
    order: 4,
    content: `
# DBT Emotion Regulation

Emotion regulation skills help you understand, identify, and change your emotional responses. These skills are particularly helpful when you experience intense emotions that make it difficult to think clearly or act effectively.

## Understanding Emotions

### The Function of Emotions

Emotions serve important purposes:

1. **Communicate to others** - Your facial expressions and body language signal to others how you're feeling
2. **Motivate action** - Emotions prepare your body to respond to situations
3. **Provide information** - Emotions tell you about your environment and your reaction to it

### The Model of Emotions

Emotions don't just happen; they follow a sequence:

1. **Prompting event** (internal or external)
2. **Interpretation** of the event
3. **Biological changes** in your body
4. **Urges to act** in certain ways
5. **Expressions** (face, posture, words)
6. **Aftereffects** on your mood and behavior

**Practice Exercise:** Think of a recent emotional experience. Identify each component of the model of emotions.

## Identifying and Naming Emotions

### Primary Emotions

These are your initial, unfiltered emotional reactions:
- **Joy** - Happiness, pleasure, satisfaction
- **Sadness** - Grief, disappointment, despair
- **Fear** - Anxiety, worry, terror
- **Anger** - Irritation, frustration, rage
- **Disgust** - Revulsion, aversion, dislike
- **Shame** - Guilt, embarrassment, humiliation
- **Jealousy** - Envy, resentment, insecurity

### Secondary Emotions

These are reactions to your primary emotions:
- **Anger about feeling sad**
- **Shame about feeling afraid**
- **Anxiety about feeling angry**

**Practice Exercise:** For one week, keep an emotion log. Record events, your emotions, and how intensely you feel them (1-10).

## Reducing Emotional Vulnerability

### The PLEASE Skills

Taking care of your physical health reduces emotional vulnerability:

**PL - Physical Illness**
- Treat physical problems promptly
- Take prescribed medications consistently
- See healthcare providers regularly

**E - Exercise**
- Move your body daily
- Find activities you enjoy
- Start small if you're not used to exercising

**A - Avoid mood-altering substances**
- Be cautious with alcohol, drugs, and caffeine
- Notice how substances affect your emotions

**S - Sleep**
- Aim for 7-9 hours of quality sleep
- Develop a bedtime routine
- Keep consistent sleep/wake times

**E - Eat balanced meals**
- Eat regularly throughout the day
- Include a variety of nutrients
- Notice how food affects your mood

**Practice Exercise:** Choose one PLEASE skill to focus on this week. Record how changes in this area affect your emotions.

## Changing Emotional Responses

### Opposite Action

When your emotion doesn't fit the facts or isn't effective:

1. **Identify the emotion** and its action urge
2. **Check the facts** - Is your emotion justified? Is acting on it effective?
3. **Act opposite** to the emotion's urge

Examples:
- **Fear** → Approach what you fear (gradually and safely)
- **Anger** → Be gentle and empathetic
- **Sadness** → Get active and engage
- **Shame** → Share your experience with trusted others

**Practice Exercise:** Identify an emotion that isn't serving you well. Practice opposite action for one week and record the results.

### Problem Solving

When your emotion fits the facts and the situation can be changed:

1. **Describe** the problem situation
2. **Check the facts** to ensure you understand the problem
3. **Identify your goal** in the situation
4. **Brainstorm** many possible solutions
5. **Choose a solution** that works with your goals and values
6. **Create a step-by-step plan**
7. **Implement the plan**
8. **Evaluate** whether it worked

**Practice Exercise:** Identify a current problem causing distress. Work through each step of problem-solving.

In the next guide, we'll explore interpersonal effectiveness skills to help you navigate relationships while maintaining self-respect.
    `
  },
  {
    id: "dbt-interpersonal-effectiveness",
    title: "DBT Interpersonal Effectiveness",
    description: "Learn powerful strategies for maintaining healthy relationships while respecting your own needs and boundaries.",
    category: "dbt",
    readingTime: 8,
    views: 8532,
    author: "Dr. Michael Chen",
    publishDate: "2023-10-05",
    illustrationPath: "/illustrations/career.svg",
    order: 5,
    content: `
# DBT Interpersonal Effectiveness

Interpersonal effectiveness skills help you navigate relationships while balancing your objectives, maintaining self-respect, and preserving your relationships and their quality. These skills are particularly useful when you need to make requests, set boundaries, or say no.

## Balancing Priorities in Relationships

Every interpersonal situation involves three main priorities:

1. **Objectives Effectiveness (DEAR MAN)** - Getting what you want
2. **Relationship Effectiveness (GIVE)** - Maintaining the relationship
3. **Self-Respect Effectiveness (FAST)** - Maintaining your self-respect

The challenge is determining which priority is most important in a specific situation.

**Practice Exercise:** Identify a current interpersonal challenge. Rank the three priorities (objectives, relationship, self-respect) for this situation.

## DEAR MAN: Getting What You Want

Use these skills when your objective is the priority:

**D - Describe**
- Stick to the facts
- Tell the person exactly what you are reacting to

**E - Express**
- Express your feelings/opinions clearly
- Use "I feel" statements
- Don't assume they know how you feel

**A - Assert**
- Clearly ask for what you want or say no directly
- Don't expect others to read your mind
- Don't hint or beat around the bush

**R - Reinforce**
- Explain the positive effects of getting what you want
- Tell the person the benefits of your request

**M - Mindful**
- Stay focused on your goal
- Come back to your objective when the conversation strays
- Be aware of attempts to change the subject

**A - Appear confident**
- Use a confident tone and physical manner
- Make eye contact
- Don't apologize for making a request

**N - Negotiate**
- Be willing to give to get
- Offer alternative solutions
- Focus on what will work

**Practice Exercise:** Script a DEAR MAN conversation for a request you need to make. Practice it with a friend or in front of a mirror.

## GIVE: Maintaining the Relationship

Use these skills when the relationship is the priority:

**G - Gentle**
- Be courteous and respectful
- No attacks, threats, or judgments
- No sneering or sarcasm

**I - Interested**
- Listen and appear interested
- Maintain eye contact
- Ask questions

**V - Validate**
- Acknowledge the other person's feelings, wants, and difficulties
- "I understand that you..."
- "I see that this is hard for you..."

**E - Easy manner**
- Use a little humor
- Smile
- Be lighthearted

**Practice Exercise:** In your next three conversations, focus on one GIVE skill at a time. Notice how it affects the interaction.

## FAST: Maintaining Self-Respect

Use these skills when self-respect is the priority:

**F - Fair**
- Be fair to yourself and the other person
- Don't give in to unreasonable requests
- Don't make unreasonable requests

**A - Apologies (few)**
- Don't apologize for making a request
- Don't apologize for having an opinion
- Don't apologize for disagreeing

**S - Stick to values**
- Know what you believe in
- Don't compromise your values to please others
- Be clear about what's non-negotiable for you

**T - Truthful**
- Don't lie or exaggerate
- Don't act helpless when you're not
- Don't make excuses

**Practice Exercise:** Identify a situation where you compromised your self-respect. Write a FAST script for how you could handle a similar situation in the future.

## Handling Difficult Conversations

### Saying "No"

1. Be direct: "No, I can't do that."
2. Offer an alternative if possible
3. Validate the request: "I understand this is important to you."
4. Use a broken record technique if needed
5. Remember, you have the right to say no

### Dealing with Conflict

1. Use GIVE skills to maintain respect
2. Validate the other person's perspective
3. Look for the kernel of truth in their position
4. Focus on common ground and mutual interests
5. Take a break if emotions escalate

**Practice Exercise:** Identify a boundary you need to set. Write out exactly what you will say, including how you'll respond if the person pushes back.

## Building Healthy Relationships

### Identifying Values in Relationships

1. What qualities do you value in friends/partners?
2. What behaviors demonstrate these qualities?
3. Are your relationships aligned with your values?

### Building Positive Interactions

1. Schedule regular time together
2. Express appreciation frequently
3. Support each other's goals
4. Respect boundaries
5. Address problems when they're small

**Practice Exercise:** Each day for a week, express genuine appreciation to someone in your life. Notice how this affects your relationship.

In our final guide, we'll look at how to integrate all DBT skills into daily life for lasting change.
    `
  },
  {
    id: "dbt-integration-daily-life",
    title: "Integrating DBT Skills into Daily Life",
    description: "Learn how to combine and apply all DBT skills to create lasting positive change in your everyday experiences.",
    category: "dbt",
    readingTime: 6,
    views: 7890,
    author: "Dr. Sarah Johnson",
    publishDate: "2023-10-10",
    illustrationPath: "/illustrations/mbti.svg",
    order: 6,
    content: `
# Integrating DBT Skills into Daily Life

Now that you've learned the core DBT skills—mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness—the next step is to integrate them into your daily life. This integration is what creates lasting positive change.

## Creating a DBT Lifestyle

### Daily Mindfulness Practice

Start with a structured daily mindfulness practice:

1. **Morning mindfulness** (5-10 minutes)
   - Mindful breathing upon waking
   - Setting intentions for the day
   - Brief body scan

2. **Mindful transitions** throughout the day
   - Take three mindful breaths between activities
   - Notice sensations when walking between locations
   - Pause before responding to messages or emails

3. **Evening reflection** (5-10 minutes)
   - Review skillful and unskillful moments from the day
   - Practice self-compassion for mistakes
   - Set intentions for tomorrow

**Practice Exercise:** Commit to one form of mindfulness practice daily for two weeks. Track how it affects your overall awareness and emotional reactions.

## Building Your DBT Toolkit

### Personalized Skill Selection

Not all skills work equally well for everyone. Create your personalized toolkit:

1. **Identify your most common challenges**
   - Intense emotions?
   - Interpersonal conflicts?
   - Crisis situations?

2. **Select 2-3 skills for each challenge**
   - Which skills have worked best for you?
   - What fits your personality and lifestyle?

3. **Make these skills easily accessible**
   - Create skill reminder cards
   - Set up phone reminders
   - Post visual cues in your environment

**Practice Exercise:** Create a "Top 5 DBT Skills" list personalized to your needs. Write them on a card you can carry with you.

## Applying Skills in Different Environments

### At Work/School

1. **Use DEAR MAN for requesting accommodations or changes**
2. **Practice mindfulness before important meetings or exams**
3. **Use emotion regulation skills to handle criticism constructively**
4. **Build in mini-breaks for PLEASE skills (hydration, movement)**

### In Relationships

1. **Practice validation with loved ones daily**
2. **Use mindfulness to stay present in conversations**
3. **Apply distress tolerance when conflicts arise**
4. **Balance GIVE skills with FAST to maintain boundaries**

### During Difficult Times

1. **Create a crisis plan with your most effective skills**
2. **Identify early warning signs of escalating emotions**
3. **Have accountability partners who understand your skills**
4. **Remember radical acceptance for unchangeable circumstances**

**Practice Exercise:** For each environment (work/school, relationships, difficult times), identify one situation where you can apply a specific DBT skill this week.

## Tracking Progress and Overcoming Obstacles

### Monitoring Your Growth

1. **Keep a skills diary**
   - Which skills did you use today?
   - How effective were they?
   - What could you try differently?

2. **Notice patterns**
   - Are certain situations consistently challenging?
   - Are certain skills more effective for you?
   - Are there times of day when you struggle more?

3. **Celebrate progress**
   - Acknowledge when you use skills effectively
   - Notice improvements in your emotional reactions
   - Recognize relationship improvements

**Practice Exercise:** Create a simple tracking system (app, journal, checklist) to monitor your skill use for two weeks.

### Overcoming Common Obstacles

1. **"I forget to use skills in the moment"**
   - Create environmental reminders
   - Practice skills when calm to build muscle memory
   - Start with just one skill to focus on

2. **"The skills don't work for me"**
   - Are you practicing them correctly?
   - Have you given them enough chances?
   - Have you adapted them to your specific needs?

3. **"I don't have time for skills practice"**
   - Start with 1-minute practices
   - Integrate skills into existing routines
   - Remember that skills save time in the long run

4. **"I feel silly or awkward using the skills"**
   - Practice in private until comfortable
   - Remind yourself of the benefits
   - Adapt the language to feel more natural

**Practice Exercise:** Identify your biggest obstacle to using DBT skills. Create a specific plan to address it this week.

## Creating Lasting Change

The ultimate goal of DBT is not just to learn skills but to transform your relationship with yourself, others, and the world. This transformation happens through:

1. **Consistent practice**
   - Skills become more automatic with repetition
   - Small daily practices lead to significant change
   - Patience with the process is essential

2. **Self-compassion**
   - Learning is not linear
   - Setbacks are part of growth
   - Each moment offers a fresh start

3. **Community**
   - Connect with others learning DBT
   - Share successes and challenges
   - Learn from others' experiences

Remember, DBT is not about perfection but about building a life worth living—one mindful moment, one effective interaction, and one wise decision at a time.

**Practice Exercise:** Write a letter to your future self about the life you hope to create through practicing DBT skills. Keep it somewhere you can revisit when you need motivation.

Congratulations on completing this DBT skills introduction course! You now have powerful tools to navigate life's challenges with greater wisdom, balance, and effectiveness.
    `
  }
];
