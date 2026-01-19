# Software Requirements Specification (SRS)
## Loan Application Intake System

---

## 1. Introduction
This document defines the technical specifications, architecture, and constraints for the Loan Application Intake System. It serves as a guide for the development team to implement the functional requirements outlined in the PRD.

## 2. Technical Architecture

### 2.1. Overview
The system follows a **Microservices Architecture** deployed on **AWS**:
- **Presentation Layer (Frontend):** Responsive SPA (React.js) hosted on **AWS S3 + CloudFront**.
- **Logic Layer (Backend):** Decomposed RESTful microservices (**NestJS**) running on **AWS EKS (Kubernetes)** or **AWS Lambda**.
- **Data Layer (Database):** 
    - **Amazon RDS (PostgreSQL)** for structured application data (per-service schemas where applicable).
    - **Amazon S3** for secure document storage.

### 2.2. Tech Stack Recommendations
- **Frontend:** React.js, Tailwind CSS.
- **Backend:** NestJS - Microservices.
- **Database:** PostgreSQL.
- **Storage:** AWS S3.
- **Authentication:** Mobile OTP Service (e.g., AWS SNS or 3rd party like Twilio/Msg91).

## 3. Detailed Component Design

### 3.1. Database Schema (ER Model Highlights)

**Table: Users**
| Field | Type | Description |
|---|---|---|
| `user_id` | UUID | Primary Key |
| `mobile_number` | VARCHAR | Unique, Indexed (Login ID) |
| `role` | ENUM | 'CUSTOMER', 'OFFICER' |

**Table: Loan_Applications**
| Field | Type | Description |
|---|---|---|
| `application_id` | UUID | Primary Key |
| `customer_id` | UUID | FK -> Users.user_id |
| `status` | ENUM | 'DRAFT', 'SUBMITTED', 'IN_REVIEW', 'APPROVED', 'REJECTED' |
| `kyc_verified` | BOOLEAN | Flag for API verification success |
| `created_at` | TIMESTAMP | |

**Table: Documents**
| Field | Type | Description |
|---|---|---|
| `doc_id` | UUID | Primary Key |
| `application_id` | UUID | FK -> Loan_Applications |
| `doc_type` | ENUM | 'AADHAAR', 'PAN', 'INCOME_PROOF' |
| `s3_key` | VARCHAR | Private S3 Path |

### 3.2. API Design (Key Endpoints)

#### Authentication
- `POST /api/v1/auth/send-otp` - Trigger OTP to mobile.
- `POST /api/v1/auth/verify-otp` - Validate OTP and issue Session Token.

#### Applications
- `POST /api/v1/applications` - Create/Submit.
- `GET /api/v1/applications/{id}` - Details.
- `POST /api/v1/integrations/kyc/verify` - Interface for Real-time KYC Check (Aadhaar/PAN).

#### Downstream Integration (Mock/Logger)
- `POST /api/v1/core-banking/handover` 
    - *Note:* Currently logs the approved application JSON payload for future CBS integration.

### 3.3. State Machine (Status Workflow)
- **Draft** -> User clicks Submit -> **Submitted**
- **Submitted** -> Officer Views -> **In Review**
- **In Review** -> Logic Check -> **Approved** OR **Rejected** OR **Request Info**

## 4. System Attributes

### 4.1. Security & Compliance
- **Standards:** adhere to **RBI Digital Lending Guidelines** and **Indian DPDP Act**.
- **Data Residency:** All data stored within AWS India Regions (Mumbai/Hyderabad).
- **Encryption:** AWS KMS for sensitive fields (Aadhaar/PAN).
- **Access Control:** Strict IAM roles for backend services.

### 4.2. Performance
- **Response Time:** APIs < 200ms.
- **Concurrency:** Auto-scaling groups to handle load spikes.

## 5. Integration Requirements
- **SMS Gateway:** High-reliability gateway for OTPs (AWS SNS / Msg91).
- **KYC API Provider:** Integration with authorized KUAs (KYC User Agencies) availability.
- **Future:** Core Banking System (API hook ready).
