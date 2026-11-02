# Alex Marshall's Portfolio

A personal portfolio for Alex Marshall, an Electrical and Computer Engineering Technology student from Clark, New Jersey, interested in making AI better and safer.

## View locally

Open `index.html` directly in a browser, or use VS Code Live Preview. No installation or build step is required.

## Live website

[View the portfolio on GitHub Pages](https://ajm364.github.io/Portfolio/).

Verified on November 2, 2026: all four published pages and all four STL downloads return successfully. Repository: [ajm364/Portfolio](https://github.com/ajm364/Portfolio).

## Current features

- Responsive Home page with background, AI interests, and Ravens fandom.
- About Me page covering freshman studies at NJIT, a preference for hands-on work, and goals in AI and robotics.
- Keyboard-accessible mobile navigation and a dark mode toggle.
- Plain HTML, CSS, and JavaScript with no external dependencies.

The Projects page showcases four Onshape CAD models with an interactive 3D viewer: rotate, zoom, pan, reset, model selection, touch gestures, and keyboard controls. The viewer uses vanilla JavaScript and Canvas with embedded STL coordinates so it also works when opened directly. Original STL downloads are included in models/. To update a model, both the STL and its embedded coordinates in js/models.js must be updated. Home, About Me, Projects & Skills, and Contact are linked through shared navigation.

The owner chose to combine Projects and Skills on `projects.html` rather than create a separate Skills page. The combined page highlights Onshape CAD modeling. Contact is available at `contact.html` using the owner-approved email address, ajm364@njit.edu, with an email-app link, browser-based Gmail compose link, and a copy-address button. All four pages share navigation. A separate Skills page remains an assignment requirement that this combined structure does not meet.

See `TESTING.md` for manual checks and their status.

Live-site browser testing on November 2, 2026 covered navigation, 375px/1366px layouts, keyboard input, themes, model controls, downloads, and JavaScript-disabled viewing. Genuine screenshots and raw results are saved in `testing-artifacts/`. All four published pages scored 100/100 in Lighthouse 13.5.0 Accessibility snapshot audits, with optional report screenshot capture disabled. The owner also reported that the site works on a physical phone. See `TESTING.md` for the email fix, retest status, preserved audit infrastructure errors, and any outstanding manual checks.

## Image acknowledgment

The header portrait of Lamar Jackson is an AI-generated illustration made with OpenAI's built-in image generation tool. The optimized asset is `images/lamar-jackson.jpg`.

Generation prompt: "Create a square illustrated portrait of Lamar Jackson, Baltimore Ravens football quarterback, recognizable face, wearing a purple football jersey with number 8. Head and shoulders, face centered and large enough to read as a small website header avatar. Refined sports editorial illustration, purple background, clean lighting, no text or watermark. Opaque background."
