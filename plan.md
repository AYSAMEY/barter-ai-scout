# Implementation Plan: The "Autonomous Opportunity" Scout (Barter System)

Building a multi-party barter system where users trade skills and assets without cash.

## Scope & Non-Goals
- **Scope:** User auth (simulated), profiles (assets/skills), AI-driven 3+ party matching logic (client-side), real-time chat (simulated/localStorage), and deal confirmation.
- **Non-Goals:** Real-world payment processing, actual server-side persistence (using localStorage for MVP), actual AI model integration (using a heuristic-based matching algorithm).

## Assumptions & Open Questions
- **Persistence:** All data will be managed in `localStorage` for this session as no database is available.
- **AI Match Engine:** This will be a TypeScript utility that looks for "cycles" in a directed graph of "haves" and "wants".
- **Authentication:** Will be a mock system using localStorage to persist "logged-in" user state.

## Affected Areas
- **Frontend:** React-based UI with Tailwind CSS.
- **State Management:** React Context or a simple custom hook for data management.
- **Data Layer:** LocalStorage adapter to simulate database interactions.

## Data Schema (Client-Side)
- `users`: { id, name, email, avatar, password (mock) }
- `assets`: { id, userId, type: 'skill' | 'item', name, description, category }
- `needs`: { id, userId, category, description }
- `matches`: { id, userIds: string[], status: 'pending' | 'active' | 'completed', createdAt }
- `messages`: { id, matchId, senderId, text, timestamp }

## Project Folder Structure
```
src/
├── assets/          # Static files
├── components/      # UI components (atoms, molecules)
│   ├── ui/          # Shadcn components
│   ├── layout/      # Navbar, Sidebar, Page wrappers
│   ├── profile/     # Asset/Skill cards, forms
│   └── match/       # Match details, trade loops
├── hooks/           # useAuth, useMatches, useAssets
├── lib/             # Utilities (matching engine logic)
├── pages/           # View components (Home, Dashboard, Chat)
├── store/           # Mock DB / State management
└── types/           # TypeScript interfaces
```

## Implementation Phases

### Phase 1: Foundation & Layout (frontend_engineer)
- Set up core routing (React Router).
- Create basic layout (Navbar, Footer, Sidebar).
- Implement Mock Auth Context (Login/Signup screens).
- **Deliverable:** Functional navigation and auth shell.

### Phase 2: Profile & Asset Management (frontend_engineer)
- Create "My Profile" page.
- Build forms to add "Haves" (Assets/Skills) and "Wants" (Needs).
- Implement list views for user assets and needs.
- **Deliverable:** Users can list what they offer and what they need.

### Phase 3: AI Match Engine (quick_fix_engineer)
- Implement the "Trade Loop" algorithm in `src/lib/matchEngine.ts`.
- Logic: Find cycles of 3+ users where User A wants what User B has, User B wants what User C has, and User C wants what User A has.
- **Deliverable:** Utility that identifies potential trade circles from the pool of assets/needs.

### Phase 4: Match Dashboard & Chat (frontend_engineer)
- Create "Matches" dashboard to view proposed loops.
- Implement a Chat view for each match (using localStorage for history).
- Build the "Digital Handshake" button to confirm deals.
- **Deliverable:** Users can interact with matches and finalize trades.

### Phase 5: Polishing & Demo Data (quick_fix_engineer)
- Add seed data (mock users/assets) to demonstrate the matching logic immediately.
- Refine UI/UX (Tailwind transitions, loading states).
- **Deliverable:** A fully interactive MVP.

## First File to Create
`src/types/index.ts` - Defining the core data interfaces to ensure type safety across the application.
