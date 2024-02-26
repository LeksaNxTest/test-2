FROM node:20 AS base
RUN npm install -g turbo pnpm@8.9.0
RUN pnpm config set store-dir ~/.pnpm-store

FROM base AS builder

WORKDIR /app
COPY . .

RUN turbo prune api --docker

FROM base AS installer

WORKDIR /app
# Copy lockfile and package.json's of isolated subworkspace
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .

# First install the dependencies (as they change less often)
RUN pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=builder /app/out/full/ .

RUN turbo build --filter=api

CMD ["tail", "-f", "/dev/null"]

FROM base AS runner

WORKDIR /app

COPY --from=installer /app .

CMD ["node", "apps/api/dist/index.js"]
