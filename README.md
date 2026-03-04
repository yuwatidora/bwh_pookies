# Mama Well

Inspired by the strong mothers around us, **Mama Well** is a postpartum care app that seeks to fill a crucial gap in women's health—catering to mothers’ needs during a vulnerable period. We aim to leverage technology to make support more accessible and simplify self-care practices, ensuring that mothers receive the assistance and attention they deserve during their postpartum journey.

---

## Demo

Devpost: [Mama Well on Devpost](https://devpost.com/software/mama-well)

---

## Inspiration 🎂

After mothers go through labor, a lot of the time the attention for care goes entirely towards the baby—from the mother, father, and the doctors too. It's time to start taking care of our mothers as they navigate through this stage of motherhood!

---

## What it does 🥚

Mama Well helps postpartum mothers build healthier day-to-day habits, connect with local care, and check in with themselves through:

- **Authentication** — sign in / sign up for a personalized experience
- **Daily check-in** — a quick daily self check-in to help users stay mindful and consistent
- **Water tracker** — supports hydration tracking and consistency
- **Mood tracker** — helps users record mood and reflect over time
- **Local gynecologist contact page** — find and contact nearby gynecologists for postpartum support

---

## How we built it 🔨

- **React Native + Expo**
- **Firebase + Firestore**
- **Clerk (Expo)** for authentication
- **React Navigation**
- **Tailwind** (styling)
- JavaScript (primary)

---

## Challenges we ran into 🛑

Some challenges we ran into were figuring out how we can incorporate Firebase into our app, along with figuring out how to route to different pages through React Native.

---

## Accomplishments that we're proud of 🚀

We are really happy to have implemented so many of our designs into code. The designs are fun and colorful, and we’re proud we finished so much in such a short amount of time.

---

## What we learned 💭

We definitely feel more comfortable using GitHub now! We also got much better at styling our frontend app because of the number of different features the application had, along with understanding how React Native apps are routed.

---

## What's next 🤔

One thing we wanted to implement was a **community forum** where postpartum mothers are able to chat about their experiences, share advice, and encourage each other. We believe that especially for mothers who are in the postpartum stage, it can be difficult to go out and socialize—so we hope to expand our platform so they have a safe space to share their experiences and recover well!

We also hope to incorporate an **AI Buddy** for those who may feel uncomfortable getting advice from other individuals (for fear of being judged). In that case, we hope to build a **judgement-free AI Buddy** that can provide supportive guidance.

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- Expo (optional; you can run via `npx expo`)

### Install

```bash
npm install
```

### Run

```bash
npm run start
```

Run on a specific platform:

```bash
npm run android
npm run ios
npm run web
```

---

## Environment Variables

This repo includes a `.env` file in the root. **Do not commit secrets publicly.**  
If you’re setting this up locally, you may need to provide your own Firebase/Clerk keys depending on how `config/` is set up.

---

## Project Structure (high level)

- `App.js` — app entry; wraps providers and navigation
- `App/` — screens, navigation, and contexts
- `src/` — additional application code
- `assets/` — images and static assets
- `config/` — configuration and setup

---

## Contributing

PRs and suggestions are welcome. If you plan to add a feature, consider opening an issue first describing what you want to change and why.

---

## License

No license specified yet. If you want this to be open source, consider adding a `LICENSE` file (MIT or Apache-2.0 are common choices).