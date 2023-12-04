This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Shad CN UI

This project makes use of the [Shad CN UI](https://shad-cn-ui-library.com) component library for building the user interface. Shad CN UI provides a set of pre-designed and customizable React components that enhance the visual appeal and user experience of the application.

## State Management

This project leverages a combination of React Context, custom hooks, and a reducer for efficient state management. This approach offers a scalable and organized way to handle the application state.

### React Context

[React Context](https://reactjs.org/docs/context.html) is employed to share state across components without the need for prop drilling. It establishes a global state accessible to components deep within the component tree.

### Custom Hooks

Custom hooks encapsulate logic, providing a clean interface for components to interact with the application state. This promotes the reuse of logic across different parts of the application.

### Reducer

A [reducer](https://reactjs.org/docs/hooks-reference.html#usereducer) function is used to manage state transitions in a predictable manner. It centralizes state logic and actions, simplifying the understanding of the application's state changes.

By utilizing these techniques, the project ensures a structured and maintainable state management solution.

## Demo

Explore a live demo of this project [here](https://beam-dynamics.vercel.app). The demo provides a hands-on experience with the features and functionality of the application.

Feel free to interact with the demo and see the project in action!
