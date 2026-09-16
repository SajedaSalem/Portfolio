# Sajeda Salem — DevOps & Cloud Portfolio (v2)

## What changed
- Accent color shifted from cyan/turquoise to a calmer light-blue palette.
- Current Focus redesigned as a connected focus rail instead of six individual cards.
- All Technical Skills chips now use the same visual tone.
- Languages section now includes a short communication/perspective statement.
- Azure page rebuilt so every concept sits directly beside its implementation/evidence.
- Azure architecture area now expects the exported Draw.io diagram at:
  `assets/diagrams/azure-architecture.png`
- Docker page rebuilt with detailed concept → implementation → verification sections.
- CI page expanded with more explanation.
- Code Quality & Automated Testing now includes its own clickable YAML card with
  **View YAML** and **View CI Run ↗**.
- Controlled Failure caption rewritten.

## Local test
From this folder:
`python -m http.server 8000`
then open:
`http://localhost:8000`

## Evidence image locations
Azure: `assets/screenshots/azure/`
Docker: `assets/screenshots/docker/`
CI:
- `assets/screenshots/ci/break-it-change.png`
- `assets/screenshots/ci/failed-pull-request.png`

## Azure Draw.io
Export your Draw.io architecture as PNG and save it exactly as:
`assets/diagrams/azure-architecture.png`
The placeholder disappears automatically.


## Render-safe visibility fix
Sections are now visible by default and no longer depend on JavaScript IntersectionObserver to appear.


## v11 homepage updates
- Added Training & Courses section (DevOps Bootcamp, CCNA 2, CCNA 1).
- Updated Technical Skills to reflect Kubernetes/GitLab CI/CD project experience.
- Replaced Current Focus dots with tool logos + labels and added Terraform/Ansible as current bootcamp focus.
