const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  OnboardingScreen: {
    onb1: {
      title: "Find The Best Service",
      discription: "There are various services from the best salons that have become our partners.",
    },
    onb2: {
      title: "Best Stylist For You",
      discription: "Styling your appearance according to your lifestyle",
    },
    onb3: {
      title: "Meet Our Specialists",
      discription: "There are many best stylists from all the best salons ever",
    },
    skip: "Skip",
    get_started: "Get Started",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
}

export default en
export type Translations = typeof en
