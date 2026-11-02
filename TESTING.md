# Portfolio test plan

Run these checks locally during development and repeat them on the live GitHub Pages site before submission. Browser and live-site checks have not yet been run. Add page-specific navigation, layout, keyboard, and Lighthouse cases as the remaining pages are built.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Open locally | Double-click index.html. | Page, styles, and scripts load without a server. | Not run |
| T2 | Home links | Activate the Lamar Jackson header portrait and Home link. | Both open index.html. | Not run |
| T3 | About links | On Home, activate About me, Get to know me, and More about me. | Each opens about.html. | Not run |
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
| T18 | About navigation | On About Me, activate the portrait, Home, About me, My interests, Explore my interests, and Back to top. | Portrait and Home open index.html; About me opens about.html; interests links reach Home's interests section; Back to top reaches About's main content. About me is marked as the current page. | Not run |
| T19 | About responsive layout | View about.html at 375px and 1366px widths in both themes. | All text fits without horizontal scrolling; education card stacks on phone and sits alongside introduction on laptop. | Not run |
| T20 | About keyboard | Use Tab, Shift+Tab, Enter, and Space on about.html; open mobile menu, then press Escape. | Skip link, navigation, theme toggle, and content links work with visible focus; Escape closes the mobile menu and returns focus to its button. | Not run |
| T21 | About JavaScript | Repeat T8–T11 and T16 on about.html. | Mobile menu, viewport changes, and theme preference behave as on Home, including when storage is blocked. | Not run |
| T22 | About accessibility | Run Chrome Lighthouse Accessibility on about.html. | Score is at least 90; record actual score and findings. | Not run |
| T23 | About local and live loading | Open about.html directly, then repeat T18–T22 on the live GitHub Pages site. Disable JavaScript and reload each version. | Relative assets load locally and live; content and navigation remain available without JavaScript. | Not run |

For failures, append dated results, fixes, and retest outcomes; preserve the original failed result.

2026-10-22: Expanded the About Me football paragraph with the owner's love of Lamar Jackson and appreciation of his passing, running, and creativity. Reviewed the source change and ran `git diff --check` successfully. Phone/laptop browser and keyboard checks for this edit: Not run (no browser automation available in this session).

## Projects viewer checks

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T24 | Projects navigation | On Home, About, and Projects, activate every header link; on Projects also activate the portrait, downloads, and Back to top. | Destinations resolve; Projects alone has its current-page marker. | Not run |
| T25 | Projects phone/laptop | Open projects.html at 375px and 1366px in both themes. | Viewer and cards fit with no horizontal scrolling. | Not run |
| T26 | Model selection | Select all four models. | Each renders; model name, triangle count, and download match. | Not run |
| T27 | Pointer controls | Drag, Shift-drag, right-drag; focus canvas and scroll; use zoom/rotate/reset buttons. | Rotation, pan, bounded zoom, and reset work. | Not run |
| T28 | Touch controls | On a touchscreen, drag, pinch, and move two fingers. | One finger rotates; two fingers zoom and pan; page scrolls outside canvas. | Not run |
| T29 | Projects keyboard | Tab and Shift+Tab through page; use Enter/Space on controls, arrows and Shift+arrows on canvas, +/−, Home, and menu Escape. | Visible focus; controls and model manipulation work; no keyboard trap. | Not run |
| T30 | Projects shared scripts | Repeat menu resizing, theme persistence, and blocked-storage checks on Projects. | Menu and theme work consistently with Home/About. | Not run |
| T31 | Projects without JavaScript | Disable JavaScript and open projects.html directly. | Navigation, descriptions, and all four original STL download links remain available. | Not run |
| T32 | Projects accessibility | Run Lighthouse Accessibility on projects.html. | Score at least 90; record score/findings. | Not run |
| T33 | Projects live site | Repeat T24–T32 on verified GitHub Pages URL. | Relative assets, models, and interactions work under the repository path. | Not run |
| T34 | Source structure and targets | Check local href/src destinations, exactly one h1 and current-page marker in each built page. | All targets exist and counts equal one. | Pass (2026-11-02, PowerShell source checks) |
| T35 | Binary STL integrity | Check each file length equals 84 + triangle count × 50 and vertex coordinates are finite during conversion. | All four files validate. | Pass (2026-11-02) |

2026-11-02: Added Projects with four owner-provided STL models made in Onshape. Source target/structure and STL integrity checks passed, as did git diff --check. Chrome headless preview failed with GPU process errors; a second attempt produced no usable result. Rendering, interaction, phone/laptop, keyboard, and Lighthouse checks remain Not run. Project-specific class context and fuller descriptions still need owner input. No deployment performed.
## Contact and combined skills page — 2026-11-02

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T36 | Four-page navigation and source structure | Check nav destinations, local href/src targets, h1 count, and aria-current count on Home, About, Projects & Skills, and Contact. | All four pages linked; local targets exist; exactly one h1 and current marker per page. | Pass (PowerShell source checks, 2026-11-02) |
| T37 | Contact email destinations | Inspect both Contact email links. | Both use exactly mailto:ajm364@njit.edu. | Pass (PowerShell source checks, 2026-11-02) |
| T38 | Contact links in browser | Activate every navigation link, header portrait, both email links, project link, and Back to top. | Pages/anchors open correctly; email links open configured email app. | Not run |
| T39 | Contact phone and laptop | View contact.html at 375px and 1366px in both themes. | Content fits without sideways scrolling; email wraps when needed. | Not run |
| T40 | Contact keyboard and shared scripts | Tab/Shift+Tab through Contact; activate with Enter/Space. Test mobile menu, Escape, resize, theme, and blocked storage. | Visible focus and working controls; closed menu links skipped; theme switches. | Not run |
| T41 | Contact without JavaScript | Disable JavaScript and open contact.html locally. | Content, navigation, and email links work; inactive controls hidden. | Not run |
| T42 | Contact Lighthouse | Run Lighthouse Accessibility on Contact. | Score at least 90; record score. | Not run |
| T43 | Live site and updated navigation | Repeat T38–T42 live; test every updated navigation link and keyboard flow on all four pages at phone/laptop widths. | All links, layouts, and interactions work under repository path. | Not run |

Added the owner-approved email and a combined Onshape skills section. No proficiency level or additional skills invented. Source checks and git diff --check passed. Browser layout, keyboard, email-app launch, and Lighthouse checks remain Not run; headless browser preview previously failed in this environment. No push or deployment performed.