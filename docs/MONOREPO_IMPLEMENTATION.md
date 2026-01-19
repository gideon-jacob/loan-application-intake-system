# Monorepo Structure & Implementation Plan
## Loan Application Intake System

Based on the [SRS](./SRS_REPORT.md) and [PRD](./PRD_REPORT.md), this document outlines the proposed structure and implementation strategy for the system using a Monorepo architecture.

## 1. Monorepo Strategy

**Tooling Selection:** [Turborepo](https://turbo.build/) (Recommended) or Nx.
*Reasoning:* Turborepo offers high-performance build caching and is highly compatible with the specified ecosystem (React, NestJS, Tailwind, AWS).

**Package Manager:** `pnpm`
*Reasoning:* Efficient dependency management and native workspace support.

## 2. Proposed Folder Structure

```graphql
.
├── apps/                          # Deployable Applications
│   ├── web-customer/              # React SPA: Customer Portal
│   ├── web-officer/               # React SPA: Loan Officer Dashboard
│   │
│   └── services/                  # Backend Microservices (NestJS)
│       ├── api-gateway/           # Unified Entry Point / Reverse Proxy
│       ├── auth-service/          # Authentication & OTP (SNS/Twilio)
│       ├── application-service/   # Core Logic: Loan Applications
│       ├── customer-service/      # User Profiles & Management
│       ├── document-service/      # S3 Interaction & Doc Management
│       └── notification-service/  # Async Events (SMS/Email)
│
├── packages/                      # Shared Libraries & Configs
│   ├── ui/                        # Shared React UI Components (Tailwind)
│   ├── database/                  # Prisma/TypeORM Schema & Client
│   ├── dto/                       # Shared Data Transfer Objects (Types)
│   ├── logger/                    # Structured Logging Utility
│   ├── utils/                     # Common Helper Functions (Validators)
│   ├── eslint-config/             # Shared Linting Rules
│   └── tsconfig/                  # Shared TypeScript Configs
│
├── infrastructure/                # IaC & Deployment
│   ├── k8s/                       # Kubernetes Manifests / Helm Charts
│   ├── terraform/                 # AWS Resource Provisioning (RDS, S3, EKS)
│   └── docker/                    # Shared Dockerfile Templates
│
├── docs/                          # Project Documentation
│   ├── PRD_REPORT.md
│   ├── SRS_REPORT.md
│   └── ...
│
├── package.json                   # Root Dependencies (Turbo, Prettier)
├── pnpm-workspace.yaml            # Workspace Definitions
└── turbo.json                     # Pipeline Configuration
```

## 3. Implementation Details

### 3.1. Frontend (`apps/web-*`)
*   **Framework:** React 18+ with Vite.
*   **Styling:** Tailwind CSS (Shared config in `packages/ui`).
*   **State Management:** TanStack Query (React Query) for server state, Zustand for client state.
*   **Communication:** REST Clients generated from Swagger/OpenAPI (or manual Axios instances).

### 3.2. Backend (`apps/services/*`)
*   **Framework:** NestJS (Standard mode).
*   **Communication:**
    *   **External:** REST API (JSON).
    *   **Inter-service:** TCP/gRPC or Message Queue (RabbitMQ/SQS) for async tasks like Notifications.
*   **Database Access:**
    *   Shared `packages/database` library exporting a Prisma Client.
    *   *Implementation Note:* Each service should ideally strictly own its own tables/schema to avoid tight coupling.

### 3.3. Shared (`packages/*`)
*   **UI:** A "Design System" package exporting `<Button>`, `<Input>`, `<Layout>` ensuring visual consistency between Customer and Officer apps.
*   **DTO:** Share TypeScript interfaces/classes (`CreateApplicationDto`, `UserResponse`) between Backend and Frontend to ensure type safety across the network.

## 4. Development Workflow

1.  **Setup:** `pnpm install`
2.  **Dev:** `pnpm dev` (Uses Turbo to run all apps in parallel calls)
3.  **Build:** `pnpm build` (Caches artifacts so unchanged apps don't rebuild)
4.  **Lint/Test:** `pnpm lint`, `pnpm test`

## 5. Deployment Pipeline (CI/CD)

*   **Build Stage:**
    *   Detect changed workspaces.
    *   Build Docker images for changed apps.
*   **Push Stage:**
    *   Push images to AWS ECR.
*   **Deploy Stage:**
    *   **Frontend:** Sync `dist/` to S3 bucket + Invalidate CloudFront.
    *   **Backend:** Update EKS Deployments / Lambda Functions.
