# Loan Application Intake System

## Overview
The **Loan Application Intake System** is a platform designed to streamline the loan application process for both customers and loan officers. It facilitates the submission, tracking, and processing of loan applications.

## Tech Stack
- **Monorepo Management**: [TurboRepo](https://turbo.build/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Frontend**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Infrastructure**: Docker, Kubernetes, Terraform (AWS Customized)

## Project Structure
The project follows a monorepo structure:

- **`apps/`**: Contains deployable applications.
  - `web-customer`: Customer-facing web application.
  - `web-officer`: Loan officer tracking and management dashboard.
  - `services/`: Backend microservices.
- **`packages/`**: Shared libraries and configurations.
  - `ui`: Shared UI component library.
  - `tsconfig`: Shared TypeScript configurations.
  - `eslint-config`: Shared ESLint configurations.
  - `database`: Database models and connection logic.
  - `dto`: Data Transfer Objects.
  - `logger`: Logging utility.
  - `utils`: Common utility functions.
- **`infrastructure/`**: Infrastructure as Code (IaC) resources (Docker, K8s, Terraform).

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) (for containerization)

### Installation
Install dependencies across the monorepo:
```bash
pnpm install
```

### Running Locally
Start the development servers for all applications:
```bash
pnpm dev
```

### Building
Build all applications and packages:
```bash
pnpm build
```

## Scripts
- `pnpm build`: Build the project (uses TurboRepo).
- `pnpm dev`: Start development servers (uses TurboRepo).
- `pnpm lint`: Run linting (uses TurboRepo).
- `pnpm test`: Run tests (uses TurboRepo).
- `pnpm format`: Format code using Prettier.
