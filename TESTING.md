# Portfolio test plan

Run these checks locally during development and repeat them on the live GitHub Pages site before submission. Browser and live-site checks have not yet been run. Add page-specific navigation, layout, keyboard, and Lighthouse cases as the remaining pages are built.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Open locally | Double-click index.html. | Page, styles, and scripts load without a server. | Not run |
| T2 | Home links | Activate the Lamar Jackson header portrait and Home link. | Both open index.html. | Not run |
| T3 | About links | Activate About me and Get to know me. | Both navigate to the Background section. | Not run |
| T4 | Interests link | Activate My interests. | The AI interest section is reached. | Not run |
| T5 | Back to top | Activate Back to top in the footer. | Main content is reached. | Not run |
| T6 | Phone layout | View Home at 375px width. | Text fits, cards stack, no horizontal scrolling. | Not run |
| T7 | Laptop layout | View Home at 1366px width. | Hero displays in two columns and navigation remains visible. | Not run |
| T8 | Mobile menu | At 375px width, activate Menu twice. | Menu opens and closes; aria-expanded matches visibility. | Not run |
| T9 | Menu keyboard behavior | Open the mobile menu; Tab through links; press Escape. | Links are reachable; Escape closes the menu and returns focus to Menu. Closed links are skipped. | Not run |
| T10 | Responsive menu | Resize between 375px and 1366px with menu open and closed. | Desktop links remain visible; mobile menu resets closed; focus is not hidden. | Not run |
| T11 | Theme toggle | Activate Dark mode twice. Reload after each choice with storage enabled. | Colors switch, pressed state matches, preference persists. | Not run |
| T12 | Keyboard on Home | Use only Tab, Shift+Tab, Enter, and Space. | Skip link and all controls work with visible focus. | Not run |
| T13 | No JavaScript | Disable JavaScript and reload Home. | Content and all navigation links remain available; inactive controls are hidden. | Not run |
| T14 | Home accessibility | Run Chrome Lighthouse Accessibility on Home. | Score is at least 90; record actual score and findings. | Not run |
| T15 | Live deployment | Repeat T2–T14 at the published repository URL. | Relative paths and interactions work on GitHub Pages. | Not run |
| T16 | Storage unavailable | Block browser storage, reload, and toggle theme. | Theme still switches without an uncaught storage error. | Not run |
| T17 | Header portrait and football interests | View Home at phone and laptop widths in both themes. | Lamar Jackson portrait replaces the top-left initials without distortion; Ravens interest appears in the profile and interests section. | Not run |

For failures, append dated results, fixes, and retest outcomes; preserve the original failed result.
