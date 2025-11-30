# Release Notes

## 2025-11-30
- Initialize runnable Next.js frontend (App Router) under `frontend/`.
- Configure static export for GoDaddy (`output: 'export'`, unoptimized images, trailingSlash).
- Add Tailwind CSS with brand theme and typography plugin.
- Add basic pages: Home, Models (list), Model detail ([slug]), About, Contact.
- Add sample `src/data/models.json` and wire to UI.
- Add dev/build scripts: `npm run dev`, `npm run build`, `npm run build:static`.
- Update README with correct start and export instructions.

## 2025-11-30 (Dockerization)
- Add Dockerfile (multi-stage) for frontend with dev and prod targets.
- Add `.dockerignore` files (root and frontend).
- Add `docker-compose.yml` with:
  - `web` (dev, hot reload on port 3000)
  - `web_prod` (nginx static server on port 8080)
- Verified Windows Docker Desktop compatibility.
