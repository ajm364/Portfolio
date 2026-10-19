# Project instructions

## Purpose and scope

Build a personal portfolio for a class assignment using plain HTML, CSS, and JavaScript. Showcase the owner's background, education, projects, and skills. Work on one requested task at a time and keep the code simple enough for the owner to explain during a class demo.

The repository currently contains only a README. Create these five pages as requested:

- `index.html`: Home, with a brief personal introduction and links to the other pages.
- `about.html`: Background, education, and interests.
- `projects.html`: At least three real projects, including class projects, with descriptions, images or screenshots, and relevant links.
- `skills.html`: Technical skills and proficiencies.
- `contact.html`: Owner-approved email and professional profile links.

Do not invent personal details, qualifications, projects, or contact information. Ask for missing content when needed. Finished pages must contain real content, without placeholder text. Never publish a home address, phone number, secrets, passwords, tokens, or API keys.

## Design direction

Use this initial design unless the owner requests a change:

- Clean, welcoming, professional style with generous spacing, readable text, and simple project cards.
- Light background `#F8FAFC`, white surfaces `#FFFFFF`, dark text `#0F172A`, secondary text `#475569`, and blue accent `#1D4ED8`.
- Use a system font stack: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Use consistent navigation, page widths, headings, buttons, and footer across all pages.
- Start with a single-column phone layout and expand to multiple columns where space permits. Avoid horizontal scrolling.
- Keep motion subtle and respect `prefers-reduced-motion`.

Check contrast for actual color combinations, including hover and focus states. Update this file when the owner changes the design.

## Technical rules

- Use only static HTML5, external CSS, and vanilla JavaScript.
- Do not add a backend, databases, login functionality, frameworks, UI libraries, npm, package manifests, or build tools. This includes React, Vue, Tailwind, and Bootstrap.
- The site must work when opening `index.html` directly and when hosted under a GitHub Pages repository path.
- Use relative paths such as `about.html`, `css/styles.css`, `js/main.js`, and `images/project-name.webp`. Avoid root-relative paths beginning with `/`.
- Put shared styles in `css/styles.css`, shared scripts in `js/main.js`, and images in `images/`. Use lowercase filenames and hyphens for multiword names.
- Load scripts with `defer`. Avoid JavaScript modules, fetch-based content loading, or other features that break local file viewing.
- Keep each image under 500 KB. Use appropriately sized images and descriptive filenames.
- Prefer readable, straightforward code. Comment only where the intent needs explanation.

## Content, interaction, and accessibility

- Use semantic HTML, a descriptive page title, `lang="en"`, a viewport meta tag, and exactly one `h1` per page.
- Include consistent navigation to all five pages and identify the current page with `aria-current="page"`.
- Provide a skip link, logical headings, visible keyboard focus, and meaningful link text.
- Give informative images descriptive alt text and decorative images empty alt text.
- Make every control usable with the keyboard. Use native buttons and properly associated form labels.
- Implement at least two JavaScript interactions: a responsive navigation menu and a light/dark theme toggle by default.
- The mobile menu button must expose its state with `aria-expanded` and reference the menu with `aria-controls`. Hidden menu links must not remain keyboard-focusable.
- Keep essential content and navigation available if JavaScript fails. Guard shared scripts against elements missing on individual pages.
- If the owner requests a contact form, validate it with JavaScript, test valid and invalid input, and clearly direct visitors to email. Never imply that a static form sent a message.
- Aim for a Lighthouse Accessibility score of at least 90 on every page.

## Task workflow and Git

- Inspect relevant existing files before editing. Make focused changes for the current task and preserve unrelated user work.
- After each change, verify relevant behavior in VS Code Live Preview or an available browser, at phone and laptop sizes, and with the keyboard.
- Summarize what changed, what was checked, and anything still requiring the owner's review. Never claim a check passed unless it was run.
- After each completed task, stage only the intended files and commit with a clear, descriptive message. Push to GitHub after obtaining the owner's approval for that push, as required by the assignment. Honor any explicit approval already given for the current push.
- Do not force-push, rewrite history, or use reset to undo work. Use a revert commit when an undo is requested.
- Work incrementally over the real project timeline. Never fabricate commit dates or testing evidence.

## Testing and documentation

- Maintain `TESTING.md` with at least 12 test cases. Include an ID, what is tested, steps, expected result, and actual result for each case. Mark unrun checks as "Not run"; record Pass or Fail only after execution.
- Cover every navigation link on every page, every page at phone and laptop sizes, every JavaScript feature, keyboard navigation with Tab and Enter on every page, and Lighthouse Accessibility on every page. Include valid and invalid cases if a form exists.
- Run the final test plan on the live GitHub Pages site. Record failures and retest results rather than replacing failed results without explanation.
- Keep `README.md` updated with the project description, verified live site URL, local viewing instructions, and acknowledgments for any outside assets.
- Deployment target: GitHub Pages from the `main` branch and repository root. Verify the repository and published URL before documenting them; do not assume deployment is configured.
- When requested, help prepare the 1–2 page assignment report with repository and live-site links, features, challenges, an actual Codex mistake and correction, and phone/laptop screenshots. Do not fabricate experiences or screenshots.
