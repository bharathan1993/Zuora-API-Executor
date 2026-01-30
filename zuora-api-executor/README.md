# Zuora API Studio

> A modern, developer-friendly API testing and exploration tool built specifically for Zuora's REST APIs

Zuora API Studio is an intelligent, browser-based API client that transforms how developers interact with Zuora's extensive billing platform. With 713+ auto-generated endpoints, smart form generation, and instant code examples, it's the fastest way to explore, test, and integrate Zuora APIs.

## 🎯 The Problem

Zuora provides 700+ REST API endpoints for managing subscriptions, billing, payments, and revenue operations. Developers face several challenges:

- **API Discovery**: Finding the right endpoint among hundreds of options
- **Complex Request Bodies**: Manually constructing nested JSON payloads with 20+ fields
- **Authentication Overhead**: Managing OAuth tokens across multiple environments (sandbox, production, regions)
- **CORS Restrictions**: Browser-based tools can't directly call Zuora APIs
- **Code Integration**: Need quick code snippets for cURL, JavaScript, Python implementations

**Zuora API Studio solves all of these problems in one elegant interface.**

## ✨ Key Features

### 🤖 Auto-Generated from OpenAPI Specification
- **713 endpoints** automatically parsed from Zuora's OpenAPI spec
- Zero manual maintenance - always up-to-date with latest API changes
- Organized into 10 categories: Accounts, Subscriptions, Orders, Invoices, Payments, Products, and more

### 🔐 Intelligent Authentication
- OAuth 2.0 client credentials flow with automatic token management
- Support for 10 Zuora environments (US, EU, APAC sandboxes & production)
- Token expiry tracking with visual countdown timer
- Manual token entry mode for restricted environments
- Persistent credential storage (local only)

### 📝 Dynamic Form Generation
- Forms automatically generated from OpenAPI schema definitions
- Smart field types: text, number, boolean, date, email, arrays, nested objects
- Collapsible field sections (Account Settings, Payment Settings, Invoice Settings)
- **Touch-based tracking**: Only sends fields you actually fill out
- Real-time JSON preview of request body
- Required vs optional field separation
- Default value population from schema

### 🚀 CORS Proxy Server
- Local Express proxy server bypasses browser CORS restrictions
- Toggle between direct and proxied request modes
- Secure header forwarding and transformation

### 💻 Multi-Language Code Generation
Generate copy-paste ready code in 3 languages:
- **cURL** commands with proper escaping
- **JavaScript** (axios) with async/await
- **Python** (requests library)
- Real-time updates as you fill forms
- Automatic authentication header inclusion

### 🎨 Modern Developer Experience
- Beautiful dark mode with system preference detection
- Mobile-responsive design (phone, tablet, desktop)
- Smooth animations and transitions
- Method-based color coding (GET=blue, POST=green, PUT=amber, DELETE=red)
- Fast search across all endpoints
- Collapsible sidebar navigation with endpoint counts

### 🔍 Advanced Response Handling
- Formatted JSON response viewer
- Request/response timing
- Complete request details (method, URL, headers, body)
- Friendly error messages
- Response headers display

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Latest React with modern hooks
- **TypeScript 5.9.3** - Full type safety across the application
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **TailwindCSS 3.4.0** - Utility-first styling with custom dark mode
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility

### Backend/Proxy
- **Express 5.2.1** - CORS proxy server
- **Node-fetch 3.3.2** - HTTP client for proxy requests

### API & Data Processing
- **Axios 1.6.0** - HTTP client for API requests
- **js-yaml 4.1.1** - OpenAPI YAML parsing
- Custom OpenAPI parser with recursive schema resolution

### Development Tools
- **ESLint** - Code quality and consistency
- **tsx** - TypeScript script execution
- Custom code generation pipeline

## 🎯 Use Cases

### For Zuora Integration Developers
- Quickly test API endpoints before writing integration code
- Explore available fields and parameters for any endpoint
- Generate starter code for your application
- Prototype complex multi-step workflows

### For Technical Consultants
- Demo Zuora API capabilities to clients
- Validate API responses for specific scenarios
- Test edge cases and error handling
- Build proof-of-concepts rapidly

### For QA Engineers
- Test API endpoints across different environments
- Verify request/response schemas
- Debug integration issues
- Compare API behavior between sandbox and production

### For Developer Advocates
- Learn Zuora's API structure
- Explore endpoint capabilities without reading docs
- Create example API calls for documentation
- Educational tool for onboarding new team members

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **Zuora account** with API access (sandbox or production)
- **OAuth credentials** (Client ID & Client Secret from Zuora)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/zuora-api-studio.git
cd zuora-api-studio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Generate endpoint configurations** (if needed)
```bash
npm run generate-endpoints
# or
yarn generate-endpoints
```

### Running the Application

#### Option 1: With CORS Proxy (Recommended)

**Terminal 1 - Start the proxy server:**
```bash
node proxy-server.js
```
The proxy server will run on `http://localhost:3001`

**Terminal 2 - Start the React app:**
```bash
npm run dev
# or
yarn dev
```
The app will open at `http://localhost:5173`

#### Option 2: Without Proxy (Direct Mode)

If your Zuora environment has CORS enabled or you're using a browser extension:

```bash
npm run dev
# or
yarn dev
```

Toggle the "Use Proxy" option in the UI to switch between modes.

### First-Time Setup

1. **Navigate to the application** at `http://localhost:5173`

2. **Select your Zuora environment** from the dropdown:
   - US Production
   - US Sandbox
   - EU Production
   - EU Sandbox
   - APAC regions, etc.

3. **Authenticate** using one of two methods:

   **Method A: OAuth Flow (Recommended)**
   - Enter your **Client ID** and **Client Secret**
   - Click "Generate Token"
   - Token is automatically used for all requests
   - Token expiry is tracked with countdown timer

   **Method B: Manual Token**
   - Generate a token externally (e.g., via Postman or cURL)
   - Paste it into the "Access Token" field
   - Manually refresh when expired

4. **Start testing APIs**:
   - Browse endpoints in the sidebar (organized by category)
   - Use search to find specific endpoints
   - Fill out the dynamic form
   - View live JSON preview
   - Click "Execute" to send the request
   - See formatted response and generated code

## 📁 Project Structure

```
zuora-api-executor/
├── src/
│   ├── components/              # React components
│   │   ├── ApiForm.tsx          # Dynamic form generator (626 lines)
│   │   ├── OAuthAuthentication.tsx  # OAuth flow UI
│   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   ├── ResponseViewer.tsx   # API response display
│   │   ├── CodeGenerator.tsx    # Multi-language code gen
│   │   ├── JsonPreview.tsx      # Live JSON preview
│   │   ├── FormField.tsx        # Individual field renderer
│   │   └── FieldSection.tsx     # Collapsible field groups
│   │
│   ├── config/
│   │   ├── environments.ts      # 10 Zuora environments
│   │   ├── zuoraEndpoints.ts    # Endpoint registry
│   │   └── generated/           # 713 auto-generated endpoints
│   │       ├── accounts/        # Account management APIs
│   │       ├── subscriptions/   # Subscription APIs
│   │       ├── orders/          # Order management APIs
│   │       ├── invoices/        # Invoice APIs
│   │       ├── payments/        # Payment APIs
│   │       ├── products/        # Product catalog APIs
│   │       └── index.ts         # Master endpoint index
│   │
│   ├── services/
│   │   ├── oauthService.ts      # OAuth token generation
│   │   └── apiExecutor.ts       # API request execution + code gen
│   │
│   ├── utils/
│   │   └── openApiParser.ts     # OpenAPI YAML parser (552 lines)
│   │
│   ├── types/
│   │   └── api.ts               # TypeScript interfaces
│   │
│   ├── hooks/
│   │   └── useTheme.ts          # Dark mode hook
│   │
│   ├── App.tsx                  # Main application
│   ├── index.css                # Global styles + Tailwind
│   └── main.tsx                 # React entry point
│
├── scripts/
│   └── generateEndpoints.ts     # OpenAPI → TypeScript code generator
│
├── proxy-server.js              # CORS bypass Express server
├── zuora_openapi.yaml           # Zuora OpenAPI specification (2026-01-23)
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # This file
```

## 🎨 Architecture Highlights

### Code Generation Pipeline
```
zuora_openapi.yaml
    ↓ (parsed by)
openApiParser.ts
    ↓ (generates)
713 TypeScript endpoint configs
    ↓ (consumed by)
React Components
    ↓ (renders)
Dynamic UI
```

### Request Flow
```
User Input → Form Data → API Executor → Proxy Server → Zuora API
                ↓
        Code Generator → Copy-paste ready code
                ↓
        Response Viewer → Formatted display
```

### Key Design Patterns
- **Code Generation**: OpenAPI spec → TypeScript configurations (automated)
- **Composition**: Small, focused React components
- **Type Safety**: Full TypeScript coverage with strict mode
- **Service Layer**: Business logic separated from UI
- **Proxy Pattern**: Express server acts as CORS proxy

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Generate endpoint configurations from OpenAPI spec
npm run generate-endpoints
```

## 🌐 Supported Zuora Environments

- **US Production**: `https://rest.zuora.com`
- **US API Sandbox**: `https://rest.sandbox.na.zuora.com`
- **US Central Sandbox**: `https://rest.test.zuora.com`
- **EU Production**: `https://rest.eu.zuora.com`
- **EU Sandbox**: `https://rest.sandbox.eu.zuora.com`
- **US Performance Test**: `https://rest.pt1.zuora.com`
- **NA Production**: `https://rest.na.zuora.com`
- **APAC Production**: `https://rest.apac.zuora.com`

## 🤝 Contributing

This is a hackathon project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🐛 Known Limitations

- No request history/collections (planned)
- No bulk operations support
- No webhook testing (planned)
- No GraphQL support (REST only)
- Limited to browser environment (desktop app planned)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Zuora** for providing comprehensive OpenAPI specifications
- **React**, **Vite**, and **TailwindCSS** teams for amazing developer tools
- The open-source community for inspiration

## 📧 Contact

For questions, feedback, or collaboration opportunities:
- Create an issue in this repository
- Reach out to the development team

---

**Built with ❤️ for developers who work with Zuora APIs**

*Made for [Hackathon Name] 2026*
