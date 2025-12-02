# Release Notes

## 2025-11-30
- Initialize runnable Next.js frontend (App Router) under `frontend/`.
- Configure static export for GoDaddy (`output: 'export'`, unoptimized images, trailingSlash).
- Add Tailwind CSS with brand theme and typography plugin.
- Add basic pages: Home, Models (list), Model detail ([slug]), About, Contact.
- Add sample `src/data/models.json` and wire to UI.
- Add dev/build scripts: `npm run dev`, `npm run build`, `npm run build:static`.
- Update README with correct start and export instructions.

## 2025-11-30 (Frontend Upgrade)
- Upgraded Next.js to 15.4.0 and aligned `eslint-config-next` to 15.4.0.
- Verified compatibility with React 18.2 and TypeScript 5.6.

## 2025-11-30 (Dockerization)
- Add Dockerfile (multi-stage) for frontend with dev and prod targets.
- Add `.dockerignore` files (root and frontend).
- Add `docker-compose.yml` with:
  - `web` (dev, hot reload on port 3000)
  - `web_prod` (nginx static server on port 8080)
- Verified Windows Docker Desktop compatibility.

## 2025-11-30 (Reverse Proxy)
- Added Nginx Proxy Manager with MariaDB to `docker-compose.yml`.
- Exposes ports 80 (HTTP), 443 (HTTPS), and 81 (admin UI).
- Connected all services to `sugarpaws_net`; proxy upstream target is `http://web:3000`.
- Named volumes created: `npm_data`, `npm_letsencrypt`, `npm_db`.

## 2025-11-30 (Swarm scaffolding)
- Add `docker-stack.yml` for Docker Swarm (single-node ready).
- Overlay network: `sugarpaws_overlay`.
- Named volumes (prepared for future services): `nginx_logs`, `mongo_data`, `neo4j_data`, `qdrant_data`, `prometheus_data`, `grafana_data`.
- Example deploy:
  - `docker build -t sugarpaws3d-web:latest --target runner ./frontend`
  - `docker swarm init`
  - `docker stack deploy -c docker-stack.yml sugarpaws`

## 2025-11-30 (Simplification)
- Simplified to a single Docker Compose service `web` (port 3000) for local use.
- Removed `web_prod` service from Compose and stopped using Swarm by default.
- Persistent named volumes and shared network retained for future services.

## 2025-11-30 (UI Revamp)
- Home page redesign inspired by FrogCoin reference site interactions (hero focus, marquee, feature cards, roadmap, FAQ).
- New components: `Marquee`, `FAQ`, `Roadmap`.
- Global styles: button utilities (`.btn-primary`, `.btn-secondary`) and marquee animation classes.
- Preserved SugarPaws3D branding, colors, links, and navigation structure.
- Added `framer-motion` and interactive animations (section reveal, card hover, staggered headings, count-up stats).
