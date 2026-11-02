# Latest live-site test run — November 2, 2026

Tested https://ajm364.github.io/Portfolio/ after deployment of commit f2d82ab. Browser: isolated headless Chrome 156.0.8078.74 on Windows. Phone-sized viewport: 375 × 900; laptop-sized viewport: 1366 × 900. Layout/behavior checks used 2× display scaling; final screenshots used 1× scaling. These are emulated viewport sizes, not photographs from physical devices.

Home = index.html; About = about.html; Projects & Skills = projects.html; Contact = contact.html. All four pages were included in every row that says "all pages." No site code changed during this test run.

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| L01 | Navigation on Home | Open Home; focus and press Enter on each internal link, including logo, nav, body links, skip link, and footer. | Exact destination or anchor reached. | Pass: all 9 internal link activations matched their destination. |
| L02 | Navigation on About | Repeat L01 on About, including Explore my interests. | Correct pages and Home interests anchor reached. | Pass: all 8 matched. |
| L03 | Navigation on Projects & Skills | Repeat L01 on Projects, then fetch each original model download. | Correct pages/anchors; downloads available. | Pass: all 7 internal link activations matched; all four STL files returned HTTP 200. |
| L04 | Navigation on Contact | Repeat L01 on Contact; inspect email destinations separately. | Correct pages/anchors and approved mailto addresses. | Pass: all 8 internal activations matched. Mailto target source checks passed previously (T37); external email-app launch is L25. |
| L05 | Home layout | Load at 375px and 1366px, switch light/dark, check scroll width; inspect screenshots. | No horizontal overflow; readable stacked/column layout. | Pass: no overflow in either theme at either width; dark screenshots inspected. |
| L06 | About layout | Repeat L05 on About. | Education card stacks on phone and sits beside intro on laptop. | Pass: expected layout, no overflow in either theme at either width. |
| L07 | Projects layout | Repeat L05 on Projects. | Viewer and project cards fit. | Pass: expected layout, no overflow in either theme at either width. |
| L08 | Contact layout | Repeat L05 on Contact. | Email, button, and details card fit. | Pass: expected layout, no overflow in either theme at either width. |
| L09 | Mobile menu on all pages | Focus Menu at 375px; press Enter, Tab to first nav link, then Escape. | Menu opens; first link is Home; Escape closes and returns focus. | Pass on all four pages with complete native Enter key events. |
| L10 | Tab/Shift+Tab on all pages | Tab through each page, including viewer controls; Shift+Tab from theme to Menu with closed nav. | Visible outlines; hidden links skipped; focus can leave viewer. | Pass: no hidden nav focus or focused controls lacking outlines in recorded traversal; reverse navigation passed on all pages. |
| L11 | Responsive focus on all pages | At laptop width focus a nav link; shrink to phone width. | Nav closes and focus moves to visible Menu button. | Pass on all pages (both viewport runs). |
| L12 | Theme toggle on all pages | Switch to light and dark, inspect pressed state; reload in dark; activate theme by Space. | Colors/state match, stored dark preference survives reload, keyboard toggles. | Pass at both widths; Space activation passed on all four pages. |
| L13 | Blocked storage on all pages | Inject a throwing localStorage getter before scripts load; reload and toggle theme. | Toggle remains usable without uncaught errors. | Pass on all four pages. |
| L14 | JavaScript disabled on all pages | Disable script execution and reload each live page. | Text/nav remain; inactive menu/theme buttons hidden; STL links remain. | Pass: content and nav available; Projects retains 5 download links (selected model plus four cards). |
| L15 | All four CAD models | Select each model; inspect visible pixels, status and download target. | Correct model renders with matching name/link. | Pass: counts 972, 928, 8,964, and 1,728 triangles respectively; all rendered. |
| L16 | Viewer mouse controls | Use browser mouse events to drag, Shift-drag, right-drag, and wheel over focused canvas. Compare rendered images. | Rotation, both pan methods, and zoom change rendering. | Pass for all four interaction types. |
| L17 | Viewer keyboard/buttons | For all models activate Zoom in and Reset; send rotate/pan keys. Then send native arrows, Shift+arrow, +, −, and Home. | Image changes appropriately; reset restores original image. | Pass for all models and all native keyboard commands tested. |
| L18 | Emulated touch viewer | Dispatch one-finger drag, then two-finger pinch/pan through browser touch input. | Model image changes for both gestures. | Pass in touch emulation; separate physical-device test remains L26. |
| L19 | Reload crash regression | Reload live Projects five times at 2× scaling; read model status and bitmap dimensions. | Model loads, no runaway size or renderer crash. | Pass in test browser: all five loads rendered at a stable 588 × 600 bitmap. Owner's original browser remains L27. |
| L20 | STL download integrity | Fetch four live card downloads; check file length against binary STL triangle count. | HTTP 200 and length = 84 + 50 × triangle count. | Pass: 48,684; 46,484; 448,284; 86,484 bytes. |
| L21 | Local file support | Navigate Chrome to each actual local HTML file. | External styles/scripts load without a server; Projects initializes. | Pass on all four pages. |
| L22 | Basic accessibility and contrast | Inspect accessibility tree names, h1/current counts, image loading/alt attributes; calculate documented palette contrast. | Controls named; one h1/current marker; images have alt; text pairs meet 4.5:1. | Pass: zero unnamed controls/images; all structural checks passed; tested text color pairs range 6.08:1–17.06:1, including button hover. This is not a Lighthouse audit. |
| L23 | Browser errors | Collect Runtime exceptions, console errors, and uncancelled network failures during first run; collect runtime/console errors during final run. | No captured errors. | Pass: empty error arrays in results.json and final-results.json. |
| L24a | Home Lighthouse | Run Lighthouse Accessibility on live Home. | Score at least 90. | Not run: official PageSpeed Insights API returned HTTP 429 (quota/rate limit); no Lighthouse score obtained. |
| L24b | About Lighthouse | Run Lighthouse Accessibility on live About. | Score at least 90. | Not run: no local Lighthouse runner available; remote audit unavailable as above. |
| L24c | Projects Lighthouse | Run Lighthouse Accessibility on live Projects. | Score at least 90. | Not run: same limitation. |
| L24d | Contact Lighthouse | Run Lighthouse Accessibility on live Contact. | Score at least 90. | Not run: same limitation. |
| L25 | External email application | Activate each mailto link with a configured personal email app. | Draft addressed to ajm364@njit.edu. | Not run: no personal email client opened during automation. |
| L26 | Physical phone interaction | Open live pages on a real phone; test gestures and scrolling outside viewer. | Usable real-device interaction. | Not run; emulated viewport/touch tests do not replace this check. |
| L27 | Original crash environment | Repeat reload/zoom/pan in owner's browser that previously showed the crash icon. | Crash no longer occurs. | Not run in owner's browser; five test-browser reloads passed L19. |

23 executed test groups passed. Seven remaining checks (four Lighthouse pages, email-app launch, physical phone, and owner's crash environment) are explicitly Not run. The separate Skills page and per-project static images remain omitted by owner decision; these test results do not assert full assignment-rubric compliance.

Evidence: testing-artifacts/results.json, extended-results.json, final-results.json, and eight PNG screenshots named by page and viewport width. All saved screenshots are below 500 KB. The screenshots show dark mode; light-mode checks used computed colors and overflow measurements.

Initial keyboard automation returned false for menu activation because its Enter event omitted the character event needed for native button activation. Preserved in results.json as keyboard-menu entries. Corrected automation sent keyDown, character, and keyUp; retests passed on all pages in extended-results.json. This was a test harness failure, not a website defect. No failed product check was erased or silently changed to Pass.

To complete Lighthouse: open each live page in Chrome DevTools, choose Lighthouse → Accessibility, run the audit, and record each actual score and any fixes/retests here. No dependencies, frameworks, or build tools were installed for this testing.

---
# Portfolio test plan

The tables below preserve the development plan and results as recorded at the time. The latest live-site execution is recorded above; its results supersede earlier Not run entries for the checks actually covered. Historical cases referring to a My interests navigation item are obsolete: that item was replaced by Contact; About still links to the interests section.

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
## Viewer crash regression — 2026-11-02

Owner reported model enlargement/movement followed by the browser's crashed-renderer icon on reload. Earlier fresh-browser rendering checks did not reproduce that failure. Fix: keep the CSS display size independent of bitmap dimensions, cap bitmap resolution at 2048 pixels per dimension, allocate only on dimension changes, observe the container instead of the canvas, and version the viewer/CSS URLs.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T44 | High-DPI sizing with missing styles | In headless Chrome at 2× display scaling, remove the stylesheet in a temporary test page, set body widths to 375 and 1366, select every model, then zoom, rotate and pan with synthetic control/key events. Read bitmap dimensions and rendered pixels after each selection. | Every model paints pixels, bitmap remains bounded, and height stays stable across interactions; no JS errors. | Pass: eight model/width combinations rendered and stayed stable; maximum bitmap width 2048; zero captured errors. Headless timing delayed some resize observations; full visual layout testing remains separate. |
| T45 | Owner's reload crash | Reload the updated live Projects page repeatedly in the browser that originally crashed, then rotate/pan/zoom all models. | No uncontrolled enlargement, movement, or crashed-renderer icon. | Not run; requires retest in affected browser after deployment. |

Temporary browser probe removed after execution. Browser checks used a local file with stylesheet deliberately removed; these results do not constitute Lighthouse, touch, full keyboard navigation, or live-site interaction verification.