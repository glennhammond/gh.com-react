// src/content/learningTheories.js

export const learningTheories = [
  {
    slug: "behaviourism",
    title: "Behaviourism",
    summary:
      "Learning as a change in observable behaviour - shaped by practice, feedback and reinforcement.",
    intro:
      "Behaviourism is useful when performance is visible, measurable, and benefits from repetition, feedback, and clear standards.",
    whenToUse: [
      "Compliance and procedural training",
      "Safety-critical routines",
      "Tools and systems training with clear right/wrong steps",
      "Fluency building (speed + accuracy)",
    ],
    designMoves: [
      "Define observable behaviours and success criteria",
      "Use worked examples, then guided practice, then independent practice",
      "Immediate feedback with clear correction",
      "Spaced repetition and short refreshers",
    ],
    pitfalls: [
      "Overusing quizzes as a proxy for capability",
      "Ignoring context, judgement, and motivation",
      "Reinforcing the wrong behaviour with weak feedback",
    ],
    inPractice: [
      {
        title: "How I apply this in eLearning",
        points: [
          "Micro-practice loops - attempt, feedback, retry",
          "Branching that reinforces correct choices with specific feedback, not generic praise",
          "Performance checklists aligned to workplace standards",
        ],
      },
    ],
    related: ["cognitivism", "assessment-models"],
  },

  {
    slug: "cognitivism",
    title: "Cognitivism",
    summary:
      "How learners process, organise, store and retrieve information - and what that means for structuring content.",
    intro:
      "Cognitivism helps when learners need to understand systems, build mental models, and recall concepts under pressure.",
    whenToUse: [
      "Concept-heavy content",
      "Decision-making based on multiple cues",
      "Building shared language and categories",
      "Reducing cognitive overload in complex topics",
    ],
    designMoves: [
      "Chunk content and use clear hierarchy",
      "Use signalling - what matters, what to ignore",
      "Teach mental models and ‘why’, not just steps",
      "Use retrieval practice - low-stakes recall over time",
    ],
    pitfalls: [
      "Overloading screens with text and options",
      "Mistaking ‘exposure’ for learning",
      "Skipping retrieval and assuming understanding sticks",
    ],
    inPractice: [
      {
        title: "How I apply this in eLearning",
        points: [
          "Progressive disclosure - reveal complexity gradually",
          "Dual coding - visuals that actually carry meaning",
          "Scenario prompts that force retrieval, not recognition",
        ],
      },
    ],
    related: ["constructivism", "assessment-models"],
  },

  {
    slug: "constructivism",
    title: "Constructivism",
    summary:
      "Learners actively construct meaning from experience, reflection and collaboration, rather than absorbing facts.",
    intro:
      "Constructivism shines when there’s nuance - when learners need to interpret, weigh context, and build judgement.",
    whenToUse: [
      "Scenario-based judgement and human situations",
      "Leadership and people capability",
      "Professional practice (education, health, social services)",
      "Reflection and sense-making",
    ],
    designMoves: [
      "Use authentic scenarios and consequences",
      "Make space for reflection - not just ‘next’",
      "Encourage comparison - why option A over B",
      "Use guided discussion prompts (even asynchronously)",
    ],
    pitfalls: [
      "‘Discovery’ without guidance (people just get lost)",
      "Vague feedback that doesn’t build judgement",
      "Scenarios that are unrealistic or too easy",
    ],
    inPractice: [
      {
        title: "How I apply this in eLearning",
        points: [
          "Branching scenarios with rich feedback per option",
          "Decision-tree downloads for workplace transfer",
          "Reflection prompts that learners can save or email to themselves",
        ],
      },
    ],
    related: ["andragogy", "assessment-models"],
  },

  {
    slug: "connectivism",
    title: "Connectivism",
    summary:
      "Learning across networks of people, resources, and tools - staying capable in fast-changing environments.",
    intro:
      "Connectivism is about enabling people to find, evaluate, and use information - not memorise everything.",
    whenToUse: [
      "Rapidly changing tools and policy environments",
      "Communities of practice",
      "Knowledge management and resource hubs",
      "Digital fluency and ‘learning how to learn’",
    ],
    designMoves: [
      "Curate trusted resource pathways",
      "Teach search strategies and evaluation heuristics",
      "Make job aids easy to access at point-of-need",
      "Encourage sharing patterns and exemplars",
    ],
    pitfalls: [
      "Resource dumping without pathways",
      "Assuming people know what ‘good’ looks like",
      "No maintenance plan for outdated links/content",
    ],
    inPractice: [
      {
        title: "How I apply this in eLearning",
        points: [
          "Resource panels and ‘next best action’ links",
          "Embedded templates and checklists",
          "Lightweight analytics to see what people actually use",
        ],
      },
    ],
    related: ["cognitivism", "assessment-models"],
  },

  {
    slug: "andragogy",
    title: "Andragogy",
    summary:
      "Principles of adult learning - autonomy, relevance, and problem-centred learning.",
    intro:
      "Andragogy helps you respect busy professionals - give control, make relevance obvious, and focus on real problems.",
    whenToUse: [
      "Professional development for educators and leaders",
      "Workplace change and implementation support",
      "Capability uplift with diverse prior experience",
      "Any audience that needs ‘why this matters’ upfront",
    ],
    designMoves: [
      "Start with a realistic problem, not definitions",
      "Offer pathways - ‘I’m new’ vs ‘I’m refreshing’",
      "Use examples that match the workplace context",
      "Support self-assessment and reflection",
    ],
    pitfalls: [
      "Talking down to experts",
      "Over-explaining basics without optionality",
      "No respect for time - long modules, low value",
    ],
    inPractice: [
      {
        title: "How I apply this in eLearning",
        points: [
          "Short modules with optional deep dives",
          "Clear ‘what you’ll be able to do’ outcomes",
          "Real artefacts - templates, scripts, checklists",
        ],
      },
    ],
    related: ["constructivism", "assessment-models"],
  },
];