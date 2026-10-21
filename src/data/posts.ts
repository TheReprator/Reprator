export type PostBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'quote'; content: string; cite?: string }
  | { type: 'list'; items: string[] };

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: PostBlock[];
}

export const POSTS_PER_PAGE = 10;

export const posts: Post[] = [
  {
    slug: 'the-case-for-a-smaller-internet',
    title: 'The case for a smaller internet',
    date: '2026-10-18',
    excerpt:
      'For years, the web’s ambition was to get bigger. More people, more pages, more reach. Lately I’ve been wondering what we traded away for all that scale, and what a smaller, more local internet might feel like…',
    body: [
      {
        type: 'paragraph',
        content:
          'For years, the web’s ambition was to get bigger. More people. More pages. More reach. Every product wanted to become a platform; every platform wanted to become a city. Lately I’ve been wondering what we traded away for all that scale.'
      },
      {
        type: 'paragraph',
        content:
          'I don’t mean smaller in the nostalgic sense. I’m not pining for hand-coded homepages, hit counters, and guestbooks. I mean smaller in the way a good room is small: specific, comfortable, and sized for the people who actually gather there.'
      },
      { type: 'heading', content: 'A room, not a stadium' },
      {
        type: 'paragraph',
        content:
          'The small web is already here. It’s a forum with forty regulars. A newsletter written for six hundred people who know why they subscribed. A personal site that exists for no commercial reason at all. These places don’t try to capture the whole world. They try to be useful to someone.'
      },
      {
        type: 'quote',
        content:
          'The best places online feel less like broadcasts and more like rooms with the door left open.'
      },
      {
        type: 'paragraph',
        content:
          'There is a different set of decisions available when you stop optimizing for maximum reach. You can keep the rough edges. You can write the long version. You can let the archive grow. You can make something that rewards returning, instead of something that has to be endlessly refilled to stay alive.'
      },
      {
        type: 'paragraph',
        content:
          'Scale is not a virtue by itself. Sometimes it’s just the thing that makes a place impossible to keep clean. I’d like to spend more of my time in rooms. I’d like to build a few of my own.'
      }
    ]
  },
  {
    slug: 'tools-should-disappear',
    title: 'Tools should disappear',
    date: '2026-10-09',
    excerpt:
      'The best tool is the one you stop noticing. Not because it is unimportant, but because it has done its job so completely that your attention is free to move on to the work itself…',
    body: [
      {
        type: 'paragraph',
        content:
          'The best tool is the one you stop noticing. Not because it is unimportant, but because it has done its job so completely that your attention is free to move on to the work itself.'
      },
      {
        type: 'paragraph',
        content:
          'This is harder than it sounds. Software has a gravity to it. Every feature wants to announce itself. Every setting wants to be adjusted. Every update wants a tour. We build products that compete for the very attention they were supposed to return to us.'
      },
      { type: 'heading', content: 'Invisible by design' },
      {
        type: 'paragraph',
        content:
          'A good hammer does not ask how you’re feeling. A good pencil does not sync. A good notebook does not remind you that it has been three days since your last entry. These tools have opinions, but they keep them quiet.'
      },
      {
        type: 'list',
        items: [
          'It remembers what matters, so I don’t have to.',
          'It stays close without getting in the way.',
          'It lets me leave without making me feel guilty.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'That last point is underrated. The best software is not the kind you cannot put down. It is the kind you can put down because you trust it to be there when you come back.'
      },
      {
        type: 'paragraph',
        content:
          'I’ve been trying to remove things from my own work instead of adding them. Fewer buttons. Fewer choices. Fewer moments where the interface says look at me. The goal is not emptiness. The goal is the quiet that makes room for the work.'
      }
    ]
  },
  {
    slug: 'a-studio-of-one-for-now',
    title: 'A studio of one, for now',
    date: '2026-09-30',
    excerpt:
      'There is no heroic version of working alone. There is just the work, the calendar, and the daily decision to keep showing up. I’ve stopped waiting for that to feel like a bigger story…',
    body: [
      {
        type: 'paragraph',
        content:
          'There is no heroic version of working alone. There is just the work, the calendar, and the daily decision to keep showing up. I’ve stopped waiting for that to feel like a bigger story.'
      },
      {
        type: 'paragraph',
        content:
          'When people ask what I do, I sometimes say I run a studio. It sounds more substantial than “I work at my kitchen table.” But the kitchen table is the truth. The studio is one person, one laptop, and a stack of notebooks that keeps getting taller.'
      },
      {
        type: 'paragraph',
        content:
          'What I like about it is the absence of translation. An idea starts with me and ends with me. If something is bad, I find out quickly. If something is good, I get to live inside that goodness for a while before anyone else has an opinion about it.'
      },
      {
        type: 'paragraph',
        content:
          'What I miss is the friction of other people. Not meetings, exactly. The accidental collisions. The sentence someone says in passing that reorders your whole week. You have to build those moments deliberately when there is no office to provide them.'
      },
      {
        type: 'paragraph',
        content:
          'So I call people. I share drafts earlier. I keep a standing coffee with two designers who are honest with me. It is not a team, but it is a room, and for now the room is enough.'
      }
    ]
  },
  {
    slug: 'the-quiet-work-of-maintenance',
    title: 'The quiet work of maintenance',
    date: '2026-09-21',
    excerpt:
      'Nobody puts maintenance on a roadmap. It has no launch date, no demo, no applause. Yet almost everything I admire most has been maintained with the same care that went into making it…',
    body: [
      {
        type: 'paragraph',
        content:
          'Nobody puts maintenance on a roadmap. It has no launch date, no demo, no applause. Yet almost everything I admire most has been maintained with the same care that went into making it.'
      },
      {
        type: 'paragraph',
        content:
          'There is a particular kind of intelligence in keeping a thing alive. You have to remember why old decisions were made. You have to resist the urge to rewrite everything just because you are bored. You have to fix the leak without falling in love with the plumbing.'
      },
      { type: 'heading', content: 'The long middle' },
      {
        type: 'paragraph',
        content:
          'Launch is a moment. Maintenance is the long middle, where the real life of a product happens. It is the period when users stop being an audience and start being inhabitants. They notice small things. They build habits around them. They become attached to details you barely remember choosing.'
      },
      {
        type: 'quote',
        content:
          'Making something is an act of imagination. Keeping it good is an act of attention.'
      },
      {
        type: 'paragraph',
        content:
          'I’ve started to schedule maintenance the way I schedule new work. Not as a cleanup task at the end, but as a first-class part of the week. An hour for the small fixes. A morning for the uncomfortable questions. A day, every few months, to look at the whole thing with fresh eyes.'
      },
      {
        type: 'paragraph',
        content:
          'It is not glamorous. It is the work that makes everything else possible.'
      }
    ]
  },
  {
    slug: 'build-the-boring-version-first',
    title: 'Build the boring version first',
    date: '2026-09-11',
    excerpt:
      'Every ambitious project begins with a fantasy version of itself. The fantasy is beautiful, coherent, and almost entirely useless. The boring version is the one that teaches you something…',
    body: [
      {
        type: 'paragraph',
        content:
          'Every ambitious project begins with a fantasy version of itself. The fantasy is beautiful, coherent, and almost entirely useless. It solves problems you have not met yet and skips the problems that will actually determine whether the thing works.'
      },
      {
        type: 'paragraph',
        content:
          'The boring version is the one that teaches you something. It has one feature. It has a name you might change. It has a database schema you will be embarrassed by in six months. It also has contact with reality, which is more than the fantasy can say.'
      },
      { type: 'heading', content: 'What boring buys you' },
      {
        type: 'paragraph',
        content:
          'Boring is not the absence of ambition. It is ambition with its sleeves rolled up. It is choosing to learn the shape of the problem before you commit to an elegant answer. The first version is not a smaller version of the final thing. It is a question you ask the world.'
      },
      {
        type: 'list',
        items: [
          'It gets used, which is the only feedback that matters.',
          'It gives you a real edge to sharpen.',
          'It makes the next decision smaller and more specific.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'There is a moment in every project when you can feel the fantasy trying to take over. It whispers that you should wait, rebuild, make it presentable. That is usually the moment to ship the awkward little thing and see what happens.'
      },
      {
        type: 'paragraph',
        content:
          'The boring version is not the destination. It is the first honest step.'
      }
    ]
  },
  {
    slug: 'notes-from-an-analog-weekend',
    title: 'Notes from an analog weekend',
    date: '2026-08-30',
    excerpt:
      'No laptop. No notifications. A paper map, a fountain pen, and a camera that does not know the internet exists. I expected to feel restless. Instead, I felt something closer to relief…',
    body: [
      {
        type: 'paragraph',
        content:
          'No laptop. No notifications. A paper map, a fountain pen, and a camera that does not know the internet exists. I expected to feel restless. Instead, I felt something closer to relief.'
      },
      {
        type: 'paragraph',
        content:
          'The strange thing about leaving your tools behind is how quickly your sense of time changes. An hour becomes an hour. A walk becomes a walk. You stop reaching for the thing that turns every pause into a task.'
      },
      {
        type: 'paragraph',
        content:
          'I wrote down small observations in a notebook: the particular green of the water, a dog waiting outside a bakery, the way the light changed at four o’clock. None of it was important. All of it was the point.'
      },
      {
        type: 'paragraph',
        content:
          'I don’t think the answer is to become a person who lives offline. I like my work too much. I like the people I meet through it. But I do think we need periods when the input stops and the world becomes local again.'
      },
      {
        type: 'paragraph',
        content:
          'Monday morning, I opened my laptop and felt the familiar pull of the inbox. But underneath it was a little more room. The weekend had done its quiet work.'
      }
    ]
  },
  {
    slug: 'designing-for-the-second-visit',
    title: 'Designing for the second visit',
    date: '2026-08-18',
    excerpt:
      'Most product design is about the first impression. The landing page, the empty state, the onboarding flow. But the real relationship begins later, when someone comes back and expects to find things where they left them…',
    body: [
      {
        type: 'paragraph',
        content:
          'Most product design is about the first impression. The landing page, the empty state, the onboarding flow. But the real relationship begins later, when someone comes back and expects to find things where they left them.'
      },
      {
        type: 'paragraph',
        content:
          'The second visit is a test of memory. Not the user’s memory, but yours. Did you make a promise on the first visit that you cannot keep on the second? Did you confuse delight with clarity? Did you build a storefront when what they needed was a desk?'
      },
      { type: 'heading', content: 'The furniture of a product' },
      {
        type: 'paragraph',
        content:
          'Returning users do not need to be entertained. They need to be oriented. They need their work to be where they left it, their settings to behave, their shortcuts to still work. The best second visit is uneventful.'
      },
      {
        type: 'paragraph',
        content:
          'This is why I love designing after launch. The first version gives you a language. The second version gives you a chance to make that language coherent. You can remove the decorative bits that turned out to be noise. You can let the real habits show through.'
      },
      {
        type: 'paragraph',
        content:
          'A good product is not a performance. It is a place you return to. Design for the return.'
      }
    ]
  },
  {
    slug: 'the-luxury-of-a-good-constraint',
    title: 'The luxury of a good constraint',
    date: '2026-08-04',
    excerpt:
      'Writers have the blank page. Designers have the infinite canvas. Both are terrifying because they offer no resistance. A good constraint is not a limitation; it is a shape to push against…',
    body: [
      {
        type: 'paragraph',
        content:
          'Writers have the blank page. Designers have the infinite canvas. Both are terrifying because they offer no resistance. A good constraint is not a limitation; it is a shape to push against.'
      },
      {
        type: 'paragraph',
        content:
          'The constraints I remember most fondly are almost never the ones I would have chosen. A single typeface. A two-week deadline. A feature that had to fit in one screen. A budget that ruled out the obvious solution. Each one closed a door and made the remaining rooms feel more interesting.'
      },
      {
        type: 'quote',
        content:
          'Freedom is not the absence of limits. It is the presence of a few limits you respect.'
      },
      {
        type: 'paragraph',
        content:
          'The trick is to choose constraints that clarify rather than punish. “No JavaScript” clarifies. “No dark mode, ever” punishes. A useful constraint removes a category of decisions, so you can spend your attention on the decisions that remain.'
      },
      {
        type: 'paragraph',
        content:
          'Lately mine have been simple: one page, one column, one typeface, one clear action per screen. Most of the time that is enough. When it isn’t, the constraint tells me exactly where to look.'
      }
    ]
  },
  {
    slug: 'what-the-bicycle-taught-me-about-software',
    title: 'What the bicycle taught me about software',
    date: '2026-07-22',
    excerpt:
      'A bicycle is a nearly perfect machine. Not because it is complicated, but because every part has earned its place. I keep thinking about that when I open a codebase that has forgotten how to be simple…',
    body: [
      {
        type: 'paragraph',
        content:
          'A bicycle is a nearly perfect machine. Not because it is complicated, but because every part has earned its place. I keep thinking about that when I open a codebase that has forgotten how to be simple.'
      },
      {
        type: 'paragraph',
        content:
          'My bike has two wheels, a frame, a chain, and a handful of things that make it stop. When something feels wrong, the problem is usually obvious once you look closely. There is nowhere for a bad decision to hide.'
      },
      { type: 'heading', content: 'Earned complexity' },
      {
        type: 'paragraph',
        content:
          'Software is different because layers can hide inside other layers. A feature becomes a service. A service becomes a platform. A platform becomes a team. Soon nobody can tell where the noise is coming from, so we add more layers to manage the noise.'
      },
      {
        type: 'paragraph',
        content:
          'Good engineering is not the elimination of complexity. That is impossible. It is the willingness to ask, part by part, whether this complexity is earning its keep. Does this abstraction make the system easier to understand, or merely easier to talk about?'
      },
      {
        type: 'paragraph',
        content:
          'A bike is not simple because it was designed by a minimalist. It is simple because a hundred years of riders kept noticing what did not need to be there. Software could use more riders.'
      }
    ]
  },
  {
    slug: 'making-room-for-unfinished-ideas',
    title: 'Making room for unfinished ideas',
    date: '2026-07-09',
    excerpt:
      'I used to keep a list of projects. It was long, ambitious, and mostly a source of guilt. Now I keep a shelf of unfinished ideas. Some are sketches. Some are sentences. Some are just names…',
    body: [
      {
        type: 'paragraph',
        content:
          'I used to keep a list of projects. It was long, ambitious, and mostly a source of guilt. Every item was a reminder of the person I was not yet. Now I keep a shelf of unfinished ideas. Some are sketches. Some are sentences. Some are just names.'
      },
      {
        type: 'paragraph',
        content:
          'An unfinished idea is not a failure. It is a seed. It needs the right weather, which is usually another idea, a conversation, or a season of your life that has not arrived yet.'
      },
      {
        type: 'paragraph',
        content:
          'The problem with lists is that they flatten everything into tasks. A task can be finished. A seed cannot. If you treat every spark as an obligation, you will eventually stop allowing yourself to spark.'
      },
      {
        type: 'list',
        items: [
          'Keep a place for fragments that does not demand completion.',
          'Revisit the shelf every few months, not every day.',
          'Let some ideas expire without turning it into a moral failure.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'The work does not have to justify itself by becoming a product. Some of it is just practice. Some of it is compost. The shelf is not a backlog; it is a garden.'
      }
    ]
  },
  {
    slug: 'a-field-guide-to-slow-launches',
    title: 'A field guide to slow launches',
    date: '2026-06-26',
    excerpt:
      'The modern launch is a fireworks display: a big noise, a brief light, and then the long dark. I’ve come to prefer a different approach. Open the doors quietly. Invite a few people in. Pay attention…',
    body: [
      {
        type: 'paragraph',
        content:
          'The modern launch is a fireworks display: a big noise, a brief light, and then the long dark. I’ve come to prefer a different approach. Open the doors quietly. Invite a few people in. Pay attention.'
      },
      {
        type: 'paragraph',
        content:
          'A slow launch is not an excuse for timidity. It is a way of listening before you amplify. It gives you room to fix the embarrassing parts while the audience is still small enough to forgive them. It also gives the product time to develop a point of view.'
      },
      { type: 'heading', content: 'The first hundred' },
      {
        type: 'paragraph',
        content:
          'The first hundred users are not a market. They are collaborators. They will use your thing in ways you did not plan. They will ask for the feature you deliberately left out. They will tell you, with varying degrees of tact, what the product is actually for.'
      },
      {
        type: 'list',
        items: [
          'Launch with a clear promise, not a long feature list.',
          'Write to the first hundred people like they are individuals, because they are.',
          'Wait until the story is true before you tell it loudly.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'There is a time for scale. Eventually the doors should open wider. But the early days are a rare gift. You will never have so few people paying so much attention again.'
      },
      {
        type: 'paragraph',
        content:
          'Slow is not the opposite of ambitious. It is a way of being ambitious about the right thing.'
      }
    ]
  },
  {
    slug: 'the-web-belongs-to-the-patient',
    title: 'The web belongs to the patient',
    date: '2026-06-12',
    excerpt:
      'The web rewards a certain kind of patience. Not the passive kind, but the kind that keeps making small, considered things while everyone else is chasing the next wave. Links age well. Trust compounds…',
    body: [
      {
        type: 'paragraph',
        content:
          'The web rewards a certain kind of patience. Not the passive kind, but the kind that keeps making small, considered things while everyone else is chasing the next wave. Links age well. Trust compounds. A body of work becomes a place.'
      },
      {
        type: 'paragraph',
        content:
          'It is easy to forget this when every dashboard measures the last seven days. The web has always been a long game disguised as a short one. The pages that matter are rarely the ones that trended. They are the ones that were still there when you needed them.'
      },
      {
        type: 'paragraph',
        content:
          'I think about the sites I return to: a photographer’s archive, a developer’s notebook, a forum that has quietly run for twenty years. None of them are optimized for my attention. All of them have earned it.'
      },
      {
        type: 'quote',
        content:
          'A good website is a promise that the door will still open the next time you knock.'
      },
      {
        type: 'paragraph',
        content:
          'The patience is not only in the making. It is in the keeping. It is in choosing a format that can survive a redesign, a name that can survive a trend, and a pace that can survive a bad month. The web belongs to the people who are still here.'
      }
    ]
  },
  {
    slug: 'on-keeping-a-commonplace-book',
    title: 'On keeping a commonplace book',
    date: '2026-05-29',
    excerpt:
      'A commonplace book is a personal collection of passages, observations, and half-thoughts. Mine is not beautiful. It is a mess of index cards, margin notes, and screenshots I will probably never revisit…',
    body: [
      {
        type: 'paragraph',
        content:
          'A commonplace book is a personal collection of passages, observations, and half-thoughts. Mine is not beautiful. It is a mess of index cards, margin notes, and screenshots I will probably never revisit. I keep it anyway.'
      },
      {
        type: 'paragraph',
        content:
          'The point is not storage. Search engines can store things far better than I can. The point is the act of copying something by hand, which forces you to slow down enough to notice what you are taking.'
      },
      { type: 'heading', content: 'A conversation with yourself' },
      {
        type: 'paragraph',
        content:
          'Over time, the book becomes a portrait of your attention. You can see which questions kept returning, which writers you trusted, which ideas you circled for years before they became your own.'
      },
      {
        type: 'paragraph',
        content:
          'I’ve started adding a small note to each entry: why I copied it. Not a summary, just a trace of the thought that was alive when I did. Those notes are often more useful than the quote.'
      },
      {
        type: 'paragraph',
        content:
          'A commonplace book is not a productivity system. It is a place to think in public with yourself. The value is in the keeping, not the having.'
      }
    ]
  },
  {
    slug: 'small-teams-long-horizons',
    title: 'Small teams, long horizons',
    date: '2026-05-15',
    excerpt:
      'The most interesting work I know is made by small teams with a long horizon. Not because small is morally superior, but because smallness makes it possible to hold the whole thing in your head…',
    body: [
      {
        type: 'paragraph',
        content:
          'The most interesting work I know is made by small teams with a long horizon. Not because small is morally superior, but because smallness makes it possible to hold the whole thing in your head.'
      },
      {
        type: 'paragraph',
        content:
          'When a team is small, decisions are cheap. You can try something on Monday and undo it on Wednesday. You can disagree without forming a committee. You can care about details that would be invisible to a larger organization.'
      },
      {
        type: 'quote',
        content:
          'A long horizon is not a promise to work slowly. It is a promise not to make every decision as if this quarter were the only one.'
      },
      {
        type: 'paragraph',
        content:
          'The combination is rare because it is structurally difficult. Small teams are under pressure to grow. Long horizons are under pressure to produce. The culture that sustains both has to be built deliberately, and defended more than once.'
      },
      {
        type: 'paragraph',
        content:
          'The reward is a different kind of progress. You get to make things that are coherent, that accumulate, that people can trust. You get to be here next year. That is not a small thing.'
      }
    ]
  }
];

const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getAllPosts(): Post[] {
  return sortedPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return sortedPosts.find((post) => post.slug === slug);
}

export function getPageCount(): number {
  return Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
}

export function getPostsForPage(page: number): Post[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return sortedPosts.slice(start, start + POSTS_PER_PAGE);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${date}T12:00:00Z`));
}

export function getAdjacentPosts(slug: string): { previous?: Post; next?: Post } {
  const index = sortedPosts.findIndex((post) => post.slug === slug);
  if (index === -1) return {};

  return {
    previous: sortedPosts[index + 1],
    next: sortedPosts[index - 1]
  };
}
