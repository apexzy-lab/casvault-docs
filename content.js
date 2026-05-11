const PAGES = {

home: {
  title: 'CaseVault Documentation',
  content: `
    <div class="home-hero">
      <div class="home-hero-badge">📚 Documentation v1.5</div>
      <div class="home-hero-title">CaseVault <span>Documentation</span></div>
      <div class="home-hero-subtitle">Everything you need to manage immigration cases, clients, documents, and payments — for consultants and their clients.</div>
      <div class="home-hero-actions">
        <a href="#" onclick="navigate('quick-start')" class="btn-primary">Get started →</a>
        <a href="https://app.casvault.com" target="_blank" class="btn-secondary">Open app</a>
      </div>
    </div>

    <div class="home-section-title">Start here</div>
    <div class="home-cards">
      <a href="#" onclick="navigate('quick-start')" class="home-card">
        <div class="home-card-icon">🚀</div>
        <div class="home-card-title">Quick start guide</div>
        <div class="home-card-body">Create your account, add your first client, and open a case in under 5 minutes.</div>
      </a>
      <a href="#" onclick="navigate('cases')" class="home-card">
        <div class="home-card-icon">📁</div>
        <div class="home-card-title">Managing cases</div>
        <div class="home-card-body">Track applications from lead to approval with visa-specific checklists and timelines.</div>
      </a>
      <a href="#" onclick="navigate('portal-overview')" class="home-card">
        <div class="home-card-icon">🌐</div>
        <div class="home-card-title">Client portal guide</div>
        <div class="home-card-body">How your clients track their case, upload documents, and pay invoices.</div>
      </a>
    </div>

    <div class="home-section-title">Explore by section</div>
    <div class="home-cards">
      <a href="#" onclick="navigate('clients')" class="home-card">
        <div class="home-card-icon">👥</div>
        <div class="home-card-title">Clients</div>
        <div class="home-card-body">Add, import, and manage your client profiles with passport and contact details.</div>
      </a>
      <a href="#" onclick="navigate('intake-forms')" class="home-card">
        <div class="home-card-icon">📋</div>
        <div class="home-card-title">Intake Forms</div>
        <div class="home-card-body">Send branded forms to prospects. Submissions auto-create client profiles.</div>
      </a>
      <a href="#" onclick="navigate('invoices')" class="home-card">
        <div class="home-card-icon">💰</div>
        <div class="home-card-title">Invoices & Payments</div>
        <div class="home-card-body">Create invoices and collect payments via Paystack (Nigeria) or Dodo Payments.</div>
      </a>
      <a href="#" onclick="navigate('gov-status')" class="home-card">
        <div class="home-card-icon">🏛️</div>
        <div class="home-card-title">Gov. Case Status</div>
        <div class="home-card-body">Track USCIS, UKVI, and IRCC application status automatically.</div>
      </a>
      <a href="#" onclick="navigate('visa-us')" class="home-card">
        <div class="home-card-icon">🇺🇸</div>
        <div class="home-card-title">US Visa Types</div>
        <div class="home-card-body">EB-1A, NIW, O-1A, H-1B, F-1, B1/B2 — checklists and timelines.</div>
      </a>
      <a href="#" onclick="navigate('security')" class="home-card">
        <div class="home-card-icon">🔒</div>
        <div class="home-card-title">Security</div>
        <div class="home-card-body">2FA, session management, and how we protect your client data.</div>
      </a>
    </div>
  `
},

'what-is-casevault': {
  title: 'What is CaseVault?',
  badge: 'Overview',
  lead: 'CaseVault is immigration case management software built for consultants, lawyers, and agencies — especially those serving clients from Nigeria and the Global South.',
  content: `
    <p>It replaces spreadsheets, WhatsApp notes, and scattered email threads with a single organized platform where you manage clients, track applications, collect documents, send invoices, and keep clients informed — all in one place.</p>

    <h2>Two parts, one system</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-card-icon">🖥️</div>
        <div class="feature-card-title">Consultant App</div>
        <div class="feature-card-body">Your command centre at <strong>app.casvault.com</strong>. Manage clients, cases, documents, invoices, tasks, and analytics.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📱</div>
        <div class="feature-card-title">Client Portal</div>
        <div class="feature-card-body">Your clients' window into their case at <strong>portal.casvault.com</strong>. They track progress, upload documents, and pay invoices.</div>
      </div>
    </div>

    <h2>Who is CaseVault for?</h2>
    <ul>
      <li><strong>Immigration consultants</strong> managing multiple client applications simultaneously</li>
      <li><strong>Immigration lawyers</strong> who need organised case files and client communication</li>
      <li><strong>Immigration agencies</strong> with team members working on different cases</li>
      <li><strong>Solo practitioners</strong> who want to look professional and stay organised</li>
    </ul>

    <h2>What makes CaseVault different?</h2>
    <p>Most immigration software is built for US or UK law firms and is expensive. CaseVault is built for Global South consultants — affordable, in the currencies you use, with visa types relevant to your practice.</p>
    <ul>
      <li>Built-in templates for 22 visa types including EB-1A, NIW, UK Global Talent, Canada Express Entry, Dubai Golden Visa, and more</li>
      <li>Nigerian Paystack payments + international Dodo Payments</li>
      <li>USCIS case status tracking</li>
      <li>Client portal in English (multilingual coming)</li>
      <li>Affordable pricing — $29/month for up to 20 clients</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Free trial</div>
        <div class="callout-body">You get a 14-day free trial with full access to every feature. No credit card required to start.</div>
      </div>
    </div>
  `
},

'quick-start': {
  title: 'Quick start guide',
  badge: 'Getting Started',
  lead: 'Get from zero to your first active case in under 5 minutes.',
  content: `
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Create your account</div>
          <div class="step-body">Go to <a href="https://app.casvault.com/register" target="_blank">app.casvault.com/register</a>. Enter your company name, email, and a password. Your 14-day free trial starts immediately.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Complete the setup wizard</div>
          <div class="step-body">On first login you'll see a 3-step wizard. Set your company name, your name, country, currency, and timezone. This takes under 2 minutes.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Add your first client</div>
          <div class="step-body">Go to <strong>Clients → Add Client</strong>. Enter first name, last name, email, nationality, passport number, and date of birth. These are the minimum required fields.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Open a case</div>
          <div class="step-body">Go to <strong>Cases → New Case</strong>. Select your client, pick a visa type (e.g. EB-1A), set a priority and deadline. CaseVault automatically creates a full checklist and timeline for that visa type.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
          <div class="step-title">Invite client to their portal</div>
          <div class="step-body">Open the client profile, click <strong>Invite to Portal</strong>. A 6-digit access code is generated and emailed to your client. They log in at portal.casvault.com with their email and code.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">6</div>
        <div class="step-content">
          <div class="step-title">Request documents</div>
          <div class="step-body">Inside the case, go to the <strong>Requests</strong> tab. Request specific documents. Your client sees these in their portal with an Upload Now button.</div>
        </div>
      </div>
    </div>

    <div class="callout callout-info">
      <div class="callout-icon">✅</div>
      <div class="callout-content">
        <div class="callout-title">You're ready</div>
        <div class="callout-body">That's it. Your client can now upload documents, track their case progress, and pay invoices — all without needing to message you every time.</div>
      </div>
    </div>

    <h2>Next steps</h2>
    <ul>
      <li><a href="#" onclick="navigate('intake-forms')">Set up an intake form</a> to auto-capture prospect details</li>
      <li><a href="#" onclick="navigate('invoices')">Create your first invoice</a></li>
      <li><a href="#" onclick="navigate('gov-status')">Track a USCIS receipt number</a></li>
      <li><a href="#" onclick="navigate('two-factor')">Enable 2FA</a> for account security</li>
    </ul>
  `
},

'dashboard': {
  title: 'Dashboard',
  badge: 'Consultant App',
  lead: 'Your command centre — see everything happening across all your cases at a glance.',
  content: `
    <h2>What the dashboard shows</h2>
    <ul>
      <li><strong>Stats cards</strong> — Total clients, active cases, approved cases, total revenue</li>
      <li><strong>Deadline alerts</strong> — Red banner for cases due within 2 days, amber for within 7 days. Click to open the case.</li>
      <li><strong>Passport expiry alerts</strong> — Orange banner for clients whose passports expire within 6 months</li>
      <li><strong>Upcoming Deadlines widget</strong> — Next 5 case deadlines shown as colour-coded cards</li>
      <li><strong>Recent Cases</strong> — Your 5 most recent cases with progress bars</li>
      <li><strong>Recent Activity</strong> — Last 4 events with a link to the full Activity Log</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Deadline colours</div>
        <div class="callout-body">Red = due within 2 days. Amber = due within 7 days. Blue = more than 7 days away. The same colours appear on the deadline cards and inside case headers.</div>
      </div>
    </div>

    <h2>Activity feed</h2>
    <p>The Recent Activity section shows the last 4 events. Click <strong>All activity</strong> to go to the full Activity Log, where you can filter by event type and see every event across all cases paginated.</p>
  `
},

'clients': {
  title: 'Clients',
  badge: 'Consultant App',
  lead: 'Manage all your immigration applicants — profiles, photos, portal access, and notes.',
  content: `
    <h2>Adding a client</h2>
    <p>Go to <strong>Clients → Add Client</strong>. Required fields:</p>
    <ul>
      <li>First name, last name</li>
      <li>Email address (unique per consultant)</li>
      <li>Nationality</li>
      <li>Passport number</li>
      <li>Date of birth</li>
    </ul>
    <p>Optional: phone, city, country, marital status, education, occupation, referral source.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Always set the referral source</div>
        <div class="callout-body">Referral source (word of mouth, Instagram, LinkedIn, etc.) feeds into your Revenue analytics page. Tracking this from day one helps you understand which marketing channels are working.</div>
      </div>
    </div>

    <h2>Importing clients</h2>
    <p>Have existing clients in a spreadsheet? Go to <strong>Clients → Import CSV</strong>.</p>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Download the template</div>
          <div class="step-body">Click <strong>Download CSV template</strong> to get a correctly formatted spreadsheet.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Fill in your data</div>
          <div class="step-body">Required columns: firstName, lastName, email, nationality, passportNo, dateOfBirth. All other columns are optional.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Upload</div>
          <div class="step-body">Upload the filled CSV. CaseVault imports up to 500 clients per file. Duplicate emails (clients already in the system) are skipped.</div>
        </div>
      </div>
    </div>

    <h2>Client profile</h2>
    <p>Click any client to open their profile. From here you can:</p>
    <ul>
      <li><strong>Edit details</strong> — Click Edit to update any field including passport expiry date</li>
      <li><strong>Upload a photo</strong> — Hover over the avatar and click to upload. Accepted: JPG, PNG, WEBP.</li>
      <li><strong>Internal notes</strong> — Private notes only you can see. Not visible to the client. Use for things like "referred by Tunde", "prefers WhatsApp", "budget-conscious".</li>
      <li><strong>View cases</strong> — All cases for this client with their current status and progress</li>
      <li><strong>Portal access</strong> — Invite, generate new codes, copy the invite message, or revoke access</li>
    </ul>

    <h2>Portal invite</h2>
    <p>From the client profile, click <strong>Invite to Portal</strong>. CaseVault:</p>
    <ul>
      <li>Generates a 6-digit access code (valid 7 days)</li>
      <li>Sends it to the client by email automatically</li>
      <li>Shows you a ready-to-send WhatsApp message with the portal URL, email, and code</li>
    </ul>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠</div>
      <div class="callout-content">
        <div class="callout-title">Code expiry</div>
        <div class="callout-body">Access codes expire after 7 days. If a client loses their code or it expires, generate a new one from their profile — it only takes a few seconds.</div>
      </div>
    </div>

    <h2>Exporting clients</h2>
    <p>Click <strong>Export CSV</strong> on the Clients page to download all visible clients as a spreadsheet. Useful for reporting or transferring to another system.</p>
  `
},

'cases': {
  title: 'Cases',
  badge: 'Consultant App',
  lead: 'Track every immigration application from first contact to final decision.',
  content: `
    <h2>Creating a case</h2>
    <p>Go to <strong>Cases → New Case</strong>. Select a client, choose a visa type from the grouped dropdown, set a priority (low/medium/high/urgent) and deadline.</p>
    <p>When you click Create, CaseVault automatically:</p>
    <ul>
      <li>Creates a <strong>full checklist</strong> with 15-25 items specific to that visa type</li>
      <li>Creates a <strong>timeline</strong> with 6-8 milestones specific to that visa type</li>
      <li>Logs a "Case Created" activity event</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Visa type matters</div>
        <div class="callout-body">Always select the correct visa type — this determines the entire checklist and timeline. You can add or remove checklist items after creation, but starting with the right template saves significant time.</div>
      </div>
    </div>

    <h2>Case views</h2>
    <ul>
      <li><strong>Kanban view</strong> — Cases in columns: Lead, Active, Documents, Submitted, Approved, Rejected. Drag or change status to move cases between columns.</li>
      <li><strong>List view</strong> — All cases in a sortable table. Better for large numbers of cases.</li>
    </ul>

    <h2>Filters and bulk actions</h2>
    <p>Click <strong>Filters</strong> to filter by status, visa type, and priority. Use checkboxes to select multiple cases, then click <strong>Update X selected</strong> to bulk change their status.</p>

    <h2>Inside a case</h2>
    <p>A case has 6 tabs:</p>

    <div class="doc-table-wrapper">
      <table class="doc-table">
        <thead><tr><th>Tab</th><th>What it's for</th></tr></thead>
        <tbody>
          <tr><td><strong>Overview</strong></td><td>Client info card, editable case notes, deadline urgency badge, recent activity</td></tr>
          <tr><td><strong>Documents</strong></td><td>Upload, view, download, verify, or reject documents. Verified docs count toward progress.</td></tr>
          <tr><td><strong>Checklist</strong></td><td>The visa-specific document checklist. Add items, mark complete, set required flag.</td></tr>
          <tr><td><strong>Timeline</strong></td><td>Case milestones. Add, edit, delete. Status changes auto-create timeline events.</td></tr>
          <tr><td><strong>Comms</strong></td><td>Log calls, WhatsApp, emails, meetings, notes with timestamp.</td></tr>
          <tr><td><strong>Requests</strong></td><td>Request documents from your client. Appears in their portal with Upload Now button.</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Case status flow</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot done">✓</div>
        <div class="timeline-content">
          <div class="timeline-title">Lead</div>
          <div class="timeline-desc">Initial enquiry — evaluating eligibility and scope</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot done">✓</div>
        <div class="timeline-content">
          <div class="timeline-title">Active</div>
          <div class="timeline-desc">Engaged — collecting documents and preparing application</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot current">●</div>
        <div class="timeline-content">
          <div class="timeline-title">Documents</div>
          <div class="timeline-desc">All documents being gathered and verified</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot upcoming">4</div>
        <div class="timeline-content">
          <div class="timeline-title">Submitted</div>
          <div class="timeline-desc">Application submitted to the relevant authority</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot upcoming">5</div>
        <div class="timeline-content">
          <div class="timeline-title">Approved / Rejected</div>
          <div class="timeline-desc">Final decision received from the authority</div>
        </div>
      </div>
    </div>

    <div class="callout callout-info">
      <div class="callout-icon">✅</div>
      <div class="callout-content">
        <div class="callout-title">Automatic notifications</div>
        <div class="callout-body">Every time you change a case status, CaseVault automatically emails your client with the old and new stage. No manual follow-up needed.</div>
      </div>
    </div>

    <h2>Duplicating a case</h2>
    <p>On the Cases page, click <strong>Duplicate</strong>. Select a source case and a different client. CaseVault creates a new case with the same visa type and copies the entire checklist. Useful when onboarding a second client for the same visa pathway.</p>
  `
},

'tasks': {
  title: 'Tasks',
  badge: 'Consultant App',
  lead: 'Track every action item — not just deadlines. Tasks are for you and your team, not your clients.',
  content: `
    <p>Tasks are different from the case checklist. The checklist tracks what documents the client needs to provide. Tasks track what <em>you</em> need to do.</p>

    <h2>Examples of tasks</h2>
    <ul>
      <li>"File I-797C petition by June 3"</li>
      <li>"Schedule medical exam appointment"</li>
      <li>"Chase employer for reference letter — due in 5 days"</li>
      <li>"Notarise bank statements before Wednesday"</li>
      <li>"Send draft petition to client for review"</li>
    </ul>

    <h2>Creating a task</h2>
    <p>Go to <strong>Tasks → Add Task</strong>. You can set:</p>
    <ul>
      <li><strong>Title</strong> (required) — what needs to be done</li>
      <li><strong>Description</strong> — additional detail or instructions</li>
      <li><strong>Due date</strong> — task turns red when overdue</li>
      <li><strong>Priority</strong> — Low, Medium, High, or Urgent</li>
      <li><strong>Status</strong> — Pending, In Progress, Completed</li>
      <li><strong>Linked case</strong> — associates the task with a specific application</li>
      <li><strong>Linked client</strong> — associates with a specific person</li>
      <li><strong>Assignee</strong> — team member name (for future multi-staff support)</li>
    </ul>

    <h2>Completing tasks</h2>
    <p>Click the circle on any task to toggle it complete. Completed tasks show with a strikethrough and green checkmark.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Filter by status</div>
        <div class="callout-body">Use the status tabs (All, Pending, In Progress, Completed) to focus on what needs action today. The overdue count shows in red at the top.</div>
      </div>
    </div>
  `
},

'intake-forms': {
  title: 'Intake Forms',
  badge: 'Consultant App',
  lead: 'Collect prospect information before the first call. Submissions automatically create client profiles.',
  content: `
    <h2>Why intake forms matter</h2>
    <p>Without intake forms, consultants spend 30-45 minutes on the first call just collecting basic information — name, passport number, date of birth, employment. An intake form sent before the call means the client is already in your system when you speak to them.</p>

    <h2>Creating a form</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Go to Intake Forms → Create Form</div>
          <div class="step-body">Give the form a title (e.g. "UK Global Talent Visa Intake Form"). Optionally link it to a visa type.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Configure fields</div>
          <div class="step-body">Default fields include name, email, phone, nationality, passport number, date of birth, marital status, education, occupation, and a free-text message field. Toggle each as required or optional.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Copy the public link</div>
          <div class="step-body">Each form gets a unique public URL (e.g. app.casvault.com/intake/uk-talent-abc12). Copy it and share via WhatsApp, email, Instagram, or your website.</div>
        </div>
      </div>
    </div>

    <h2>What happens on submission</h2>
    <ul>
      <li>If the email is new — a client profile is automatically created with all submitted details</li>
      <li>If the email already exists — the submission is matched to the existing client profile</li>
      <li>You see each submission in the Intake Forms page with status: <strong>New</strong>, <strong>Converted</strong>, or <strong>Matched</strong></li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Put your form link everywhere</div>
        <div class="callout-body">Add it to your Instagram bio, WhatsApp Business auto-reply, email signature, and website contact page. Every prospect who fills it in becomes a client in CaseVault automatically — even if you're offline.</div>
      </div>
    </div>

    <h2>Managing forms</h2>
    <ul>
      <li><strong>Active/Inactive toggle</strong> — Deactivate a form without deleting it. Deactivated forms return a "Form not found" error.</li>
      <li><strong>Preview</strong> — See exactly what your prospects see before sharing</li>
      <li><strong>View submissions</strong> — See all responses with names, emails, and conversion status</li>
    </ul>
  `
},

'gov-status': {
  title: 'Government Case Status',
  badge: 'Consultant App',
  lead: 'Monitor USCIS, UKVI, and IRCC application status automatically — without logging into government portals.',
  content: `
    <h2>How it works</h2>
    <p>When you file a petition or application with a government agency, you receive a receipt or reference number. CaseVault tracks this number for you:</p>
    <ul>
      <li>Checks USCIS status automatically every 6 hours</li>
      <li>Emails you immediately when the status changes</li>
      <li>Shows the receipt number and current status to your client in their portal</li>
      <li>Stores a history of the last 20 status checks</li>
    </ul>

    <h2>Adding a case to track</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Go to Gov. Status → Track Case</div>
          <div class="step-body">Click the Track Case button in the top right.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Select the agency</div>
          <div class="step-body">Choose USCIS, UKVI, or IRCC. For USCIS, the status is fetched live. For UKVI and IRCC, a direct link to check manually is provided.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Enter the receipt number</div>
          <div class="step-body">Enter the receipt/reference number exactly as issued. USCIS receipts look like: IOE0934823597, MSC2190000001, EAC2190000001.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Link to a case (optional)</div>
          <div class="step-body">If you link to a case, the receipt number and status will appear in your client's portal dashboard.</div>
        </div>
      </div>
    </div>

    <div class="callout callout-warn">
      <div class="callout-icon">⚠</div>
      <div class="callout-content">
        <div class="callout-title">USCIS availability</div>
        <div class="callout-body">USCIS status is fetched from their public portal page (egov.uscis.gov). It may occasionally be unavailable during USCIS website maintenance. Use the Refresh button to retry manually.</div>
      </div>
    </div>

    <h2>Supported agencies</h2>
    <div class="doc-table-wrapper">
      <table class="doc-table">
        <thead><tr><th>Agency</th><th>Country</th><th>Tracking method</th></tr></thead>
        <tbody>
          <tr><td>🇺🇸 USCIS</td><td>United States</td><td>Live status from egov.uscis.gov — automatic every 6 hours</td></tr>
          <tr><td>🇬🇧 UKVI</td><td>United Kingdom</td><td>Direct link to GOV.UK visa tracker — manual check</td></tr>
          <tr><td>🇨🇦 IRCC</td><td>Canada</td><td>Direct link to IRCC application status — manual check</td></tr>
        </tbody>
      </table>
    </div>
  `
},

'invoices': {
  title: 'Invoices',
  badge: 'Consultant App',
  lead: 'Create professional invoices, generate payment links, collect money, and download PDFs.',
  content: `
    <h2>Creating an invoice</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Go to Invoices → Create Invoice</div>
          <div class="step-body">Click the Create Invoice button.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Fill in the details</div>
          <div class="step-body">Enter: client name, client email, amount, currency, due date, and an optional description (e.g. "EB-1A petition preparation — first instalment").</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Edit if needed</div>
          <div class="step-body">Before generating a payment link, you can edit the amount, description, due date, and currency using the Edit button. Once a payment link is generated, the invoice is locked.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Generate payment link</div>
          <div class="step-body">Click <strong>Generate link</strong> to create a Paystack payment URL. Your client receives an automatic email with the link and can pay by card or bank transfer.</div>
        </div>
      </div>
    </div>

    <h2>Downloading as PDF</h2>
    <p>Click the <strong>PDF</strong> button on any invoice to download a formatted PDF containing your company name, client details, description, amount, due date, status, and payment link. Share via email or WhatsApp.</p>

    <h2>Marking as paid</h2>
    <p>When a client pays via Paystack, the invoice is automatically marked as paid via the Paystack webhook. You can also manually mark any invoice as paid by clicking <strong>Mark paid</strong>.</p>

    <h2>Supported currencies</h2>
    <p>USD, GBP, EUR, NGN, CAD, AUD, KES, ZAR, GHS.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Payment processors</div>
        <div class="callout-body">Nigerian clients pay via Paystack (NGN, local cards and bank transfers). International clients pay via Dodo Payments (USD, international cards). Go to <a href="#" onclick="navigate('billing')">Billing</a> to configure your processor.</div>
      </div>
    </div>
  `
},

'revenue': {
  title: 'Revenue & Analytics',
  badge: 'Consultant App',
  lead: 'Understand your business performance — revenue collected, invoice aging, case pipeline, and referral sources.',
  content: `
    <h2>KPI cards</h2>
    <ul>
      <li><strong>Total invoiced</strong> — Sum of all invoices ever raised</li>
      <li><strong>Total collected</strong> — Sum of paid invoices</li>
      <li><strong>Collection rate</strong> — Percentage of invoiced amount actually collected</li>
      <li><strong>Outstanding</strong> — Total invoiced minus total collected</li>
    </ul>

    <h2>Monthly revenue chart</h2>
    <p>Bar chart of paid invoice amounts for the last 6 months. Helps you identify revenue trends and seasonal patterns.</p>

    <h2>Invoice aging</h2>
    <p>Shows pending (unpaid) invoices grouped by how overdue they are:</p>
    <ul>
      <li><strong>Current</strong> — Not yet due</li>
      <li><strong>1-30 days overdue</strong></li>
      <li><strong>31-60 days overdue</strong></li>
      <li><strong>60+ days overdue</strong></li>
    </ul>

    <h2>Case pipeline funnel</h2>
    <p>Shows how many cases are in each stage — Lead, Active, Documents, Submitted, Approved. Identifies bottlenecks in your workflow.</p>

    <h2>Client referral sources</h2>
    <p>Shows which channels bring you the most clients — word of mouth, Instagram, LinkedIn, Google, etc. Only populated if you set the referral source when adding clients.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Always track referral source</div>
        <div class="callout-body">The referral source chart is only useful if you consistently set the referral source when adding clients. It takes 5 seconds and is the single most valuable data point for growing your practice.</div>
      </div>
    </div>
  `
},

'activity': {
  title: 'Activity Log',
  badge: 'Consultant App',
  lead: 'A complete, searchable audit trail of everything that happens across all your cases.',
  content: `
    <p>Go to <strong>Activity</strong> in the sidebar. Every event is logged automatically — no manual entry required.</p>

    <h2>What gets logged</h2>
    <ul>
      <li>Case created, status changed, notes updated</li>
      <li>Documents uploaded (by consultant or client), verified, rejected</li>
      <li>Document requests sent to client</li>
      <li>Invoices created, paid</li>
      <li>Checklist items completed</li>
      <li>Timeline events added</li>
      <li>Communications logged</li>
    </ul>

    <h2>Filtering</h2>
    <p>Use the filter buttons at the top to show only specific event types: all, case created, status changed, document uploaded, document requested, invoice sent, case approved.</p>

    <h2>Pagination</h2>
    <p>30 events per page. Use prev/next to navigate through history.</p>

    <h2>Clicking through</h2>
    <p>Each activity item shows the case reference and client name as a link. Click it to go directly to that case.</p>
  `
},

'settings': {
  title: 'Settings',
  badge: 'Consultant App',
  lead: 'Manage your account, security, and preferences.',
  content: `
    <h2>Profile</h2>
    <p>Update your company name, first name, last name, phone, country, currency, and timezone. These appear on invoices and in emails sent to clients.</p>

    <h2>Password</h2>
    <p>Enter your current password and a new password (minimum 8 characters). Changing your password automatically signs out all other active sessions.</p>

    <h2>Two-Factor Authentication</h2>
    <p>See the <a href="#" onclick="navigate('two-factor')">2FA documentation</a> for a full guide.</p>

    <h2>Active Sessions</h2>
    <p>See the <a href="#" onclick="navigate('sessions')">Sessions documentation</a> for a full guide.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Set your currency</div>
        <div class="callout-body">Set your default currency in Settings → Profile. This pre-fills the currency field when creating invoices. Nigerian consultants should set NGN; international consultants USD or GBP.</div>
      </div>
    </div>
  `
},

'billing': {
  title: 'Billing',
  badge: 'Consultant App',
  lead: 'Manage your CaseVault subscription — choose a plan and payment processor.',
  content: `
    <h2>Plans</h2>
    <div class="plan-grid">
      <div class="plan-card">
        <div class="plan-name">Free Trial</div>
        <div class="plan-price">$0</div>
        <div class="plan-period">14 days</div>
        <div class="plan-limit">Up to 20 clients</div>
        <ul class="plan-features">
          <li>Full access to all features</li>
          <li>No credit card required</li>
        </ul>
      </div>
      <div class="plan-card">
        <div class="plan-name">Starter</div>
        <div class="plan-price">$29</div>
        <div class="plan-period">per month</div>
        <div class="plan-limit">Up to 20 clients</div>
        <ul class="plan-features">
          <li>Unlimited cases</li>
          <li>Client portal</li>
          <li>Document management</li>
          <li>Invoicing & payments</li>
          <li>Email notifications</li>
        </ul>
      </div>
      <div class="plan-card featured">
        <div class="plan-name">Pro</div>
        <div class="plan-price">$79</div>
        <div class="plan-period">per month</div>
        <div class="plan-limit">Unlimited clients</div>
        <ul class="plan-features">
          <li>Everything in Starter</li>
          <li>Unlimited clients</li>
          <li>Revenue analytics</li>
          <li>Bulk import/export</li>
          <li>Priority support</li>
        </ul>
      </div>
    </div>

    <h2>Payment processors</h2>
    <div class="doc-table-wrapper">
      <table class="doc-table">
        <thead><tr><th>Processor</th><th>Best for</th><th>Currency</th></tr></thead>
        <tbody>
          <tr><td>🇳🇬 Paystack</td><td>Nigerian consultants</td><td>NGN — local cards, bank transfers</td></tr>
          <tr><td>🌍 Dodo Payments</td><td>International consultants</td><td>USD — international cards</td></tr>
        </tbody>
      </table>
    </div>
    <p>You can toggle between processors on the Billing page. CaseVault auto-detects your country from your profile and pre-selects the right processor.</p>

    <div class="callout callout-warn">
      <div class="callout-icon">⚠</div>
      <div class="callout-content">
        <div class="callout-title">Billing activation</div>
        <div class="callout-body">Billing requires live payment processor keys to be configured. Contact support@casvault.com if you see an error when trying to upgrade.</div>
      </div>
    </div>
  `
},

'portal-overview': {
  title: 'Client Portal Overview',
  badge: 'Client Portal',
  lead: 'The client portal gives your clients a window into their case — without needing to message you for every update.',
  content: `
    <p>Your clients access their portal at <a href="https://portal.casvault.com" target="_blank">portal.casvault.com</a>. They log in with their email address and a 6-digit access code you generate for them.</p>

    <h2>Portal pages</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-card-icon">📊</div>
        <div class="feature-card-title">Overview</div>
        <div class="feature-card-body">Current stage, deadline countdown, progress, action banners, government receipt status, quick navigation.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📁</div>
        <div class="feature-card-title">My Cases</div>
        <div class="feature-card-body">All their applications as cards with stage, progress, deadline. Click to switch which case is shown on Overview.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">📄</div>
        <div class="feature-card-title">My Documents</div>
        <div class="feature-card-body">Upload documents. See pending requests with Upload Now buttons. View document verification status.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">✅</div>
        <div class="feature-card-title">Checklist</div>
        <div class="feature-card-body">Full visa-specific checklist read-only. Required items clearly marked. Progress bar.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">💰</div>
        <div class="feature-card-title">Invoices</div>
        <div class="feature-card-body">View all invoices. Pay online via Paystack. See payment history.</div>
      </div>
      <div class="feature-card">
        <div class="feature-card-icon">🔔</div>
        <div class="feature-card-title">Case Updates</div>
        <div class="feature-card-body">Full activity feed — all events on their case in chronological order.</div>
      </div>
    </div>

    <h2>What clients see on the Overview</h2>
    <ul>
      <li><strong>Current stage card</strong> — Blue gradient card showing the current milestone name and description, plus the next milestone. E.g. "Stage 3 of 8 — Petition Drafting"</li>
      <li><strong>Stats</strong> — Documents verified, days to deadline, overall progress percentage</li>
      <li><strong>Action banners</strong> — Amber for pending document requests, blue for incomplete required checklist items</li>
      <li><strong>Government status</strong> — If a receipt number is linked, the USCIS/UKVI/IRCC status card appears here</li>
      <li><strong>Quick nav</strong> — Cards linking to My Cases, Documents, Checklist, Invoices</li>
    </ul>
  `
},

'portal-access': {
  title: 'Accessing the portal',
  badge: 'Client Portal',
  lead: 'How clients log in and what to do if they lose access.',
  content: `
    <h2>For consultants: inviting a client</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Open the client profile</div>
          <div class="step-body">Go to Clients, click on the client.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Click Invite to Portal</div>
          <div class="step-body">CaseVault generates a 6-digit access code (bcrypt-hashed, valid for 7 days) and automatically emails it to the client.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Copy the WhatsApp message</div>
          <div class="step-body">A ready-to-send message is shown with the portal URL, email, and code. Copy and send via WhatsApp as a backup.</div>
        </div>
      </div>
    </div>

    <h2>For clients: logging in</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Go to portal.casvault.com</div>
          <div class="step-body">Open the portal login page in any browser.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Enter your email and access code</div>
          <div class="step-body">Use the email address on file with your consultant and the 6-digit code they sent you.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">You are logged in for 30 days</div>
          <div class="step-body">Your session lasts 30 days. After that you will need a new access code from your consultant.</div>
        </div>
      </div>
    </div>

    <div class="callout callout-warn">
      <div class="callout-icon">⚠</div>
      <div class="callout-content">
        <div class="callout-title">Lost your code?</div>
        <div class="callout-body">Contact your consultant and ask them to generate a new access code. They can do this in seconds from your client profile. Your new code will be emailed to you immediately.</div>
      </div>
    </div>

    <h2>Revoking access</h2>
    <p>To revoke a client's portal access at any time, open their profile and click <strong>Revoke portal access</strong>. Their session is immediately invalidated.</p>
  `
},

'portal-cases': {
  title: 'My Cases (Portal)',
  badge: 'Client Portal',
  lead: 'Clients with multiple applications can see all their cases and switch between them.',
  content: `
    <p>Click <strong>My Cases</strong> in the portal navigation. All applications appear as cards showing:</p>
    <ul>
      <li>Visa type name and flag</li>
      <li>Case reference number (e.g. CV-5117)</li>
      <li>Status badge (Lead, Active, Documents, Submitted, Approved)</li>
      <li>Current stage blue card — "Stage 2 of 8 — Evidence Gathering"</li>
      <li>Progress bar — how far along the document submission is</li>
      <li>Timeline dots — visual progress across all milestones</li>
      <li>Document count and deadline</li>
    </ul>

    <h2>Switching cases</h2>
    <p>Click any case card to open it on the Overview page. The Overview will show all data for the selected case — timeline, checklist, documents, government status.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Multiple applications</div>
        <div class="callout-body">If a client has both a Canada Express Entry and a study permit, they see both on My Cases and can switch between them. The Overview always shows the most recently selected case.</div>
      </div>
    </div>
  `
},

'portal-documents': {
  title: 'Uploading Documents (Portal)',
  badge: 'Client Portal',
  lead: 'How clients upload documents through the portal.',
  content: `
    <h2>When to upload</h2>
    <p>Upload documents when:</p>
    <ul>
      <li>Your consultant sends a document request — you'll see an amber "Action needed" banner on Overview</li>
      <li>You want to proactively upload any required document from your checklist</li>
    </ul>

    <h2>How to upload</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Go to My Documents</div>
          <div class="step-body">Click My Documents in the sidebar or the Documents quick nav card on Overview.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Click Upload Document</div>
          <div class="step-body">A modal opens with a document type selector dropdown.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Select the document type</div>
          <div class="step-body">Choose the type that matches what you're uploading (e.g. "Passport", "Bank statement", "Reference letter").</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Choose your file and upload</div>
          <div class="step-body">Accepted formats: PDF, JPG, PNG, DOCX. Maximum file size: 10MB.</div>
        </div>
      </div>
    </div>

    <h2>Document status</h2>
    <ul>
      <li><strong>Pending</strong> — Uploaded but not yet reviewed by your consultant</li>
      <li><strong>Verified</strong> — Accepted. You will receive an email confirmation.</li>
      <li><strong>Rejected</strong> — Your consultant needs you to re-upload. You will receive an email explaining why.</li>
    </ul>

    <div class="callout callout-warn">
      <div class="callout-icon">⚠</div>
      <div class="callout-content">
        <div class="callout-title">Document quality</div>
        <div class="callout-body">Make sure documents are clear, fully in frame, and all pages are included. Blurry, cut-off, or incomplete documents will be rejected and will delay your application.</div>
      </div>
    </div>
  `
},

'portal-payments': {
  title: 'Payments (Portal)',
  badge: 'Client Portal',
  lead: 'How clients view invoices and pay online through the portal.',
  content: `
    <h2>Viewing invoices</h2>
    <p>Go to <strong>Invoices</strong> in the portal navigation. All invoices from your consultant are listed showing: invoice number, description, amount, currency, due date, and status.</p>

    <h2>Paying an invoice</h2>
    <p>Click <strong>Pay Now</strong> on any pending invoice. You will be redirected to the Paystack payment page where you can pay by:</p>
    <ul>
      <li>Credit or debit card (Visa, Mastercard)</li>
      <li>Bank transfer (Nigerian banks)</li>
      <li>USSD</li>
    </ul>
    <p>After successful payment, you are redirected back to your portal and the invoice status updates to <strong>Paid</strong> automatically.</p>

    <h2>Payment history</h2>
    <p>Each paid invoice shows the payment date, method, and transaction reference number for your records.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Keep your receipt</div>
        <div class="callout-body">Take a screenshot of the paid confirmation page or ask your consultant to email you the invoice PDF for your records.</div>
      </div>
    </div>
  `
},

'visa-us': {
  title: 'US Visa Types',
  badge: 'Visa Types',
  lead: 'CaseVault supports 7 US immigration pathways with full checklists and timelines.',
  content: `
    <div class="visa-grid">
      <div class="visa-card">
        <div class="visa-card-title">🇺🇸 EB-1A — Extraordinary Ability</div>
        <div class="visa-card-meta">
          <span>18 checklist items</span>
          <span>8 timeline stages</span>
        </div>
      </div>
      <div class="visa-card">
        <div class="visa-card-title">🇺🇸 NIW — National Interest Waiver</div>
        <div class="visa-card-meta">
          <span>15 checklist items</span>
          <span>8 timeline stages</span>
        </div>
      </div>
      <div class="visa-card">
        <div class="visa-card-title">🇺🇸 EB-1B — Outstanding Researcher</div>
        <div class="visa-card-meta">
          <span>10 checklist items</span>
          <span>6 timeline stages</span>
        </div>
      </div>
      <div class="visa-card">
        <div class="visa-card-title">🇺🇸 O-1A — Extraordinary Ability</div>
        <div class="visa-card-meta">
          <span>11 checklist items</span>
          <span>6 timeline stages</span>
        </div>
      </div>
      <div class="visa-card">
        <div class="visa-card-title">🇺🇸 H-1B — Specialty Occupation</div>
        <div class="visa-card-meta">
          <span>10 checklist items</span>
          <span>6 timeline stages</span>
        </div>
      </div>
      <div class="visa-card">
        <div class="visa-card-title">🇺🇸 B1/B2 — Visitor Visa</div>
        <div class="visa-card-meta">
          <span>15 checklist items</span>
          <span>6 timeline stages</span>
        </div>
      </div>
      <div class="visa-card">
        <div class="visa-card-title">🇺🇸 F-1 — Student Visa</div>
        <div class="visa-card-meta">
          <span>12 checklist items</span>
          <span>6 timeline stages</span>
        </div>
      </div>
    </div>

    <h2>EB-1A Timeline — 8 stages</h2>
    <div class="timeline">
      <div class="timeline-item"><div class="timeline-dot done">1</div><div class="timeline-content"><div class="timeline-title">Engagement & Assessment</div><div class="timeline-desc">Case evaluation, eligibility assessment, strategy planning for 3 of 10 criteria</div></div></div>
      <div class="timeline-item"><div class="timeline-dot done">2</div><div class="timeline-content"><div class="timeline-title">Evidence Gathering</div><div class="timeline-desc">Collecting awards, publications, reference letters, employment records, salary evidence</div></div></div>
      <div class="timeline-item"><div class="timeline-dot current">3</div><div class="timeline-content"><div class="timeline-title">Reference Letters</div><div class="timeline-desc">Drafting and obtaining expert letters from independent professionals in the field</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">4</div><div class="timeline-content"><div class="timeline-title">Petition Drafting</div><div class="timeline-desc">Drafting I-140 petition, cover letter, and evidence index</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">5</div><div class="timeline-content"><div class="timeline-title">Legal Review</div><div class="timeline-desc">Attorney review of the complete petition package</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">6</div><div class="timeline-content"><div class="timeline-title">Filing with USCIS</div><div class="timeline-desc">I-140 petition filed — receipt number obtained and tracked</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">7</div><div class="timeline-content"><div class="timeline-title">USCIS Review</div><div class="timeline-desc">Standard: 6-8 months. Premium processing: 15 business days.</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">8</div><div class="timeline-content"><div class="timeline-title">Decision</div><div class="timeline-desc">I-140 approval or RFE (Request for Evidence) response required</div></div></div>
    </div>

    <h2>EB-1A — 10 criteria (need at least 3)</h2>
    <div class="checklist">
      <div class="checklist-item"><div class="checklist-num">1</div><div class="checklist-text">Evidence of major awards or prizes in the field</div></div>
      <div class="checklist-item"><div class="checklist-num">2</div><div class="checklist-text">Membership in associations requiring outstanding achievements</div></div>
      <div class="checklist-item"><div class="checklist-num">3</div><div class="checklist-text">Published material about you in professional publications</div></div>
      <div class="checklist-item"><div class="checklist-num">4</div><div class="checklist-text">Evidence of judging others' work in the field</div></div>
      <div class="checklist-item"><div class="checklist-num">5</div><div class="checklist-text">Evidence of original scientific, artistic, or business contributions</div></div>
      <div class="checklist-item"><div class="checklist-num">6</div><div class="checklist-text">Authorship of scholarly articles in professional journals</div></div>
      <div class="checklist-item"><div class="checklist-num">7</div><div class="checklist-text">Evidence of work displayed at artistic exhibitions</div></div>
      <div class="checklist-item"><div class="checklist-num">8</div><div class="checklist-text">Evidence of leading or critical role in distinguished organisations</div></div>
      <div class="checklist-item"><div class="checklist-num">9</div><div class="checklist-text">Evidence of high salary relative to others in the field</div></div>
      <div class="checklist-item"><div class="checklist-num">10</div><div class="checklist-text">Evidence of commercial success in performing arts</div></div>
    </div>
  `
},

'visa-uk': {
  title: 'UK Visa Types',
  badge: 'Visa Types',
  lead: 'CaseVault supports 5 UK immigration pathways.',
  content: `
    <div class="visa-grid">
      <div class="visa-card"><div class="visa-card-title">🇬🇧 Global Talent Visa</div><div class="visa-card-meta"><span>15 checklist items</span><span>7 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇬🇧 Innovator Founder Visa</div><div class="visa-card-meta"><span>15 checklist items</span><span>8 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇬🇧 Skilled Worker Visa</div><div class="visa-card-meta"><span>11 checklist items</span><span>6 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇬🇧 Student Visa</div><div class="visa-card-meta"><span>10 checklist items</span><span>6 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇬🇧 High Net Worth / Investor</div><div class="visa-card-meta"><span>10 checklist items</span><span>6 timeline stages</span></div></div>
    </div>

    <h2>Global Talent Visa — 7 stages</h2>
    <div class="timeline">
      <div class="timeline-item"><div class="timeline-dot done">1</div><div class="timeline-content"><div class="timeline-title">Engagement & Eligibility Check</div><div class="timeline-desc">Assess Exceptional Talent vs Exceptional Promise route</div></div></div>
      <div class="timeline-item"><div class="timeline-dot done">2</div><div class="timeline-content"><div class="timeline-title">Evidence Portfolio Building</div><div class="timeline-desc">Compiling endorsement evidence across relevant criteria</div></div></div>
      <div class="timeline-item"><div class="timeline-dot current">3</div><div class="timeline-content"><div class="timeline-title">Endorsement Application</div><div class="timeline-desc">Submit to endorsing body (Tech Nation, Royal Society, British Academy, etc.)</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">4</div><div class="timeline-content"><div class="timeline-title">Endorsement Decision</div><div class="timeline-desc">8-week endorsement assessment period</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">5</div><div class="timeline-content"><div class="timeline-title">Visa Application</div><div class="timeline-desc">Submit visa application with endorsement letter</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">6</div><div class="timeline-content"><div class="timeline-title">Biometrics & Medical</div><div class="timeline-desc">Biometric appointment and health checks</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">7</div><div class="timeline-content"><div class="timeline-title">Decision</div><div class="timeline-desc">Visa grant — typically 3 weeks after biometrics</div></div></div>
    </div>
  `
},

'visa-canada': {
  title: 'Canada Visa Types',
  badge: 'Visa Types',
  lead: 'CaseVault supports 4 Canadian immigration pathways.',
  content: `
    <div class="visa-grid">
      <div class="visa-card"><div class="visa-card-title">🇨🇦 Express Entry</div><div class="visa-card-meta"><span>15 checklist items</span><span>8 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇨🇦 Provincial Nominee (PNP)</div><div class="visa-card-meta"><span>13 checklist items</span><span>6 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇨🇦 Study Permit</div><div class="visa-card-meta"><span>11 checklist items</span><span>6 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇨🇦 Work Permit (LMIA)</div><div class="visa-card-meta"><span>10 checklist items</span><span>6 timeline stages</span></div></div>
    </div>

    <h2>Express Entry — 8 stages</h2>
    <div class="timeline">
      <div class="timeline-item"><div class="timeline-dot done">1</div><div class="timeline-content"><div class="timeline-title">Eligibility Assessment</div><div class="timeline-desc">CRS score calculation, NOC code identification, points maximisation strategy</div></div></div>
      <div class="timeline-item"><div class="timeline-dot done">2</div><div class="timeline-content"><div class="timeline-title">Document Collection</div><div class="timeline-desc">ECA, IELTS, employment references, police clearance, medical</div></div></div>
      <div class="timeline-item"><div class="timeline-dot current">3</div><div class="timeline-content"><div class="timeline-title">Express Entry Profile</div><div class="timeline-desc">Create and submit Express Entry profile in IRCC pool</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">4</div><div class="timeline-content"><div class="timeline-title">Invitation to Apply (ITA)</div><div class="timeline-desc">Waiting for ITA — pool monitoring and CRS score improvement</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">5</div><div class="timeline-content"><div class="timeline-title">PR Application Preparation</div><div class="timeline-desc">Complete PR application within 60 days of receiving ITA</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">6</div><div class="timeline-content"><div class="timeline-title">Application Submission</div><div class="timeline-desc">Submit permanent residence application to IRCC</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">7</div><div class="timeline-content"><div class="timeline-title">Biometrics & Medical</div><div class="timeline-desc">Biometric enrollment and medical examination</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">8</div><div class="timeline-content"><div class="timeline-title">Decision</div><div class="timeline-desc">COPR (Confirmation of Permanent Residence) issued</div></div></div>
    </div>
  `
},

'visa-uae': {
  title: 'UAE Visa Types',
  badge: 'Visa Types',
  lead: 'CaseVault supports the Dubai Golden Visa pathway.',
  content: `
    <div class="visa-grid">
      <div class="visa-card"><div class="visa-card-title">🇦🇪 Dubai Golden Visa</div><div class="visa-card-meta"><span>15 checklist items</span><span>6 timeline stages</span></div></div>
    </div>

    <h2>Golden Visa — qualifying categories</h2>
    <ul>
      <li><strong>Investor</strong> — AED 2 million in UAE property or business</li>
      <li><strong>Exceptional talent</strong> — Culture, arts, sports at international level</li>
      <li><strong>Outstanding student</strong> — GPA 3.75+ from a UAE institution</li>
      <li><strong>Pioneers & humanitarian</strong> — Significant contributions recognised by UAE government</li>
    </ul>

    <h2>Golden Visa — 6 stages</h2>
    <div class="timeline">
      <div class="timeline-item"><div class="timeline-dot done">1</div><div class="timeline-content"><div class="timeline-title">Engagement & Category Assessment</div><div class="timeline-desc">Determine qualifying category — investor, talent, student, or pioneer</div></div></div>
      <div class="timeline-item"><div class="timeline-dot current">2</div><div class="timeline-content"><div class="timeline-title">Document Preparation</div><div class="timeline-desc">Gather all supporting documents for chosen category</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">3</div><div class="timeline-content"><div class="timeline-title">Application Submission</div><div class="timeline-desc">Submit through ICP (Federal Authority) or GDRFA (Dubai)</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">4</div><div class="timeline-content"><div class="timeline-title">Initial Approval</div><div class="timeline-desc">Receive initial approval letter</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">5</div><div class="timeline-content"><div class="timeline-title">Medical & Emirates ID</div><div class="timeline-desc">Medical fitness test and Emirates ID application</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">6</div><div class="timeline-content"><div class="timeline-title">Golden Visa Grant</div><div class="timeline-desc">Golden Visa stamped in passport — 10-year validity</div></div></div>
    </div>
  `
},

'visa-australia': {
  title: 'Australia Visa Types',
  badge: 'Visa Types',
  lead: 'CaseVault supports 3 Australian immigration pathways.',
  content: `
    <div class="visa-grid">
      <div class="visa-card"><div class="visa-card-title">🇦🇺 Global Talent (Subclass 858)</div><div class="visa-card-meta"><span>14 checklist items</span><span>7 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇦🇺 Skilled Independent (Subclass 189)</div><div class="visa-card-meta"><span>12 checklist items</span><span>6 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇦🇺 Temporary Skill Shortage (Subclass 482)</div><div class="visa-card-meta"><span>10 checklist items</span><span>6 timeline stages</span></div></div>
    </div>

    <h2>Global Talent target sectors</h2>
    <p>The Australian Global Talent visa targets professionals in:</p>
    <ul>
      <li>AgriFood and AgTech</li>
      <li>Space, Defence, and Advanced Manufacturing</li>
      <li>Cybersecurity</li>
      <li>FinTech</li>
      <li>Energy</li>
      <li>Health Industries</li>
      <li>Infrastructure and Tourism</li>
      <li>Digital Economy (ICT)</li>
    </ul>
  `
},

'visa-europe': {
  title: 'European Visa Types',
  badge: 'Visa Types',
  lead: 'CaseVault supports the Germany EU Blue Card and Schengen Visa.',
  content: `
    <div class="visa-grid">
      <div class="visa-card"><div class="visa-card-title">🇩🇪 Germany EU Blue Card</div><div class="visa-card-meta"><span>14 checklist items</span><span>8 timeline stages</span></div></div>
      <div class="visa-card"><div class="visa-card-title">🇪🇺 Schengen Visa</div><div class="visa-card-meta"><span>15 checklist items</span><span>6 timeline stages</span></div></div>
    </div>

    <h2>EU Blue Card salary thresholds (2024)</h2>
    <ul>
      <li><strong>General occupations</strong> — Minimum EUR 45,300/year</li>
      <li><strong>Shortage occupations</strong> (IT, engineering, medical) — Minimum EUR 35,100/year</li>
    </ul>

    <h2>EU Blue Card — 8 stages</h2>
    <div class="timeline">
      <div class="timeline-item"><div class="timeline-dot done">1</div><div class="timeline-content"><div class="timeline-title">Eligibility Assessment</div><div class="timeline-desc">Degree recognition check, salary threshold verification, employer identification</div></div></div>
      <div class="timeline-item"><div class="timeline-dot done">2</div><div class="timeline-content"><div class="timeline-title">Degree Recognition</div><div class="timeline-desc">Statement of Comparability from KMK or Anabin database verification</div></div></div>
      <div class="timeline-item"><div class="timeline-dot current">3</div><div class="timeline-content"><div class="timeline-title">Employment Contract</div><div class="timeline-desc">Secure employment contract meeting EU Blue Card salary threshold</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">4</div><div class="timeline-content"><div class="timeline-title">Document Preparation</div><div class="timeline-desc">Compile all required documents including health insurance</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">5</div><div class="timeline-content"><div class="timeline-title">Visa Application at German Embassy</div><div class="timeline-desc">Appointment at German embassy or consulate in home country</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">6</div><div class="timeline-content"><div class="timeline-title">National Visa Grant</div><div class="timeline-desc">Entry visa issued — valid 6 months</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">7</div><div class="timeline-content"><div class="timeline-title">Arrival & Registration</div><div class="timeline-desc">Register address (Anmeldung) within 2 weeks of arrival</div></div></div>
      <div class="timeline-item"><div class="timeline-dot upcoming">8</div><div class="timeline-content"><div class="timeline-title">EU Blue Card Application</div><div class="timeline-desc">Apply for EU Blue Card at local immigration office (Auslanderbehorde)</div></div></div>
    </div>
  `
},

'security': {
  title: 'Security Overview',
  badge: 'Security',
  lead: 'How CaseVault protects your data and your clients\' sensitive immigration files.',
  content: `
    <p>Immigration files contain some of the most sensitive personal data possible — passport numbers, financial records, travel history, and family information. CaseVault takes this seriously.</p>

    <h2>Data protection</h2>
    <ul>
      <li><strong>Encryption in transit</strong> — All data is transmitted over HTTPS/TLS. No unencrypted connections.</li>
      <li><strong>Encryption at rest</strong> — Documents stored in Cloudflare R2 with private access. Files are served via time-limited signed URLs that expire.</li>
      <li><strong>Password hashing</strong> — All passwords are hashed with bcrypt (10 rounds). We never store plain-text passwords.</li>
      <li><strong>Portal code hashing</strong> — Client portal access codes are also bcrypt-hashed.</li>
    </ul>

    <h2>Access controls</h2>
    <ul>
      <li><strong>Multi-tenant isolation</strong> — Each consultant's data is strictly isolated. You can only access your own clients and cases.</li>
      <li><strong>Rate limiting</strong> — Login attempts are limited to prevent brute force attacks. General API requests are rate-limited to 500 per 15 minutes.</li>
      <li><strong>Session revocation</strong> — Changing your password immediately invalidates all other active sessions.</li>
      <li><strong>JWT expiry</strong> — Consultant sessions expire after 7 days. Portal sessions expire after 30 days.</li>
    </ul>

    <h2>Infrastructure</h2>
    <ul>
      <li>Hosted on Hostinger VPS with fail2ban intrusion prevention (4 active jails)</li>
      <li>Nginx reverse proxy with security headers</li>
      <li>Daily automated database backups retained for 30 days</li>
      <li>Cloudflare CDN and DDoS protection</li>
    </ul>

    <h2>File storage</h2>
    <ul>
      <li>Documents stored in Cloudflare R2 at files.casvault.com</li>
      <li>Private bucket — no public access without a signed URL</li>
      <li>CORS policy restricts browser access to app.casvault.com and portal.casvault.com only</li>
      <li>File type validation — only PDF, JPG, PNG, DOCX accepted</li>
      <li>File size limit — 10MB per document</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Enable 2FA</div>
        <div class="callout-body">Two-factor authentication adds a critical layer of protection. Immigration data is a high-value target. Enable 2FA in Settings in under 2 minutes.</div>
      </div>
    </div>
  `
},

'two-factor': {
  title: 'Two-Factor Authentication',
  badge: 'Security',
  lead: 'Add a one-time code from your phone as a second layer of protection.',
  content: `
    <p>CaseVault supports TOTP (Time-based One-Time Password) 2FA, compatible with Google Authenticator, Authy, and any standard authenticator app.</p>

    <h2>Setting up 2FA</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <div class="step-title">Go to Settings</div>
          <div class="step-body">Open Settings from the sidebar and scroll down to the Two-Factor Authentication section.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <div class="step-title">Click Enable 2FA</div>
          <div class="step-body">A QR code is generated and displayed. Install Google Authenticator or Authy on your phone if you haven't already.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <div class="step-title">Scan the QR code</div>
          <div class="step-body">Open your authenticator app, tap Add Account, and scan the QR code. If you can't scan it, manually enter the secret key shown below the QR code.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <div class="step-title">Enter the 6-digit code to confirm</div>
          <div class="step-body">Type the current code from your authenticator app into the verification field and click Enable 2FA. 2FA is now active.</div>
        </div>
      </div>
    </div>

    <div class="callout callout-warn">
      <div class="callout-icon">⚠</div>
      <div class="callout-content">
        <div class="callout-title">Save your backup</div>
        <div class="callout-body">If you lose access to your phone, you will not be able to log in without the 6-digit code. Save a screenshot of the QR code or note the secret key in a safe place.</div>
      </div>
    </div>

    <h2>Disabling 2FA</h2>
    <p>Go to Settings → Two-Factor Authentication → Disable 2FA. You will be asked to enter a valid 6-digit code from your authenticator app to confirm.</p>
  `
},

'sessions': {
  title: 'Session Management',
  badge: 'Security',
  lead: 'See all devices logged into your account and revoke any you don\'t recognise.',
  content: `
    <p>Every time you log in, CaseVault records the session — browser type, IP address, and last seen time. Go to <strong>Settings → Active Sessions</strong> to see and manage them.</p>

    <h2>What you'll see</h2>
    <ul>
      <li><strong>Current session</strong> — Marked with a green "Current" badge. This is the device you're using right now.</li>
      <li><strong>Other sessions</strong> — Other devices or browsers where you're logged in. Each shows the browser, IP address, and when it was last active.</li>
    </ul>

    <h2>Revoking a session</h2>
    <p>Click <strong>Revoke</strong> next to any session you don't recognise. That session is immediately invalidated and cannot be used to access your account.</p>

    <h2>Revoking all other sessions</h2>
    <p>Click <strong>Revoke all other sessions</strong> to sign out everywhere except your current device. Useful if you think your account has been accessed from an unrecognised location.</p>

    <div class="callout callout-warn">
      <div class="callout-icon">⚠</div>
      <div class="callout-content">
        <div class="callout-title">Unrecognised session?</div>
        <div class="callout-body">If you see a session from a location you don't recognise, immediately revoke all other sessions and change your password. Then enable 2FA if you haven't already.</div>
      </div>
    </div>
  `
},

'faq': {
  title: 'Frequently Asked Questions',
  badge: 'Reference',
  lead: 'Answers to the most common questions from consultants and clients.',
  content: `
    <h2>For consultants</h2>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        How do I invite a client to their portal?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">Open the client profile, click <strong>Invite to Portal</strong>. A 6-digit code is generated and emailed automatically. Copy the ready-made WhatsApp message to also send via chat.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        What happens when I change a case status?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">Three things happen automatically: (1) A timeline event is created, (2) An email is sent to your client showing the old and new stage, (3) An activity log entry is recorded. No manual follow-up needed.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        Can I customise the checklist for a specific case?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">Yes. The checklist is auto-populated from the visa type template on case creation, but you can add, edit, or delete any item from the Checklist tab inside the case.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        How do I track a USCIS receipt number?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">Go to <strong>Gov. Status → Track Case</strong>. Enter the receipt number, select USCIS, optionally link to a case. CaseVault checks every 6 hours and emails you when it changes. The status also appears in your client's portal.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        What currencies does CaseVault support for invoicing?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">USD, GBP, EUR, NGN, CAD, AUD, KES, ZAR, and GHS. Nigerian clients pay via Paystack. International clients pay via Dodo Payments.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        Can I import existing clients from a spreadsheet?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">Yes. Go to Clients → Import CSV. Download the template, fill it in, and upload. Up to 500 clients per import. Duplicate emails are automatically skipped.</div>
    </div>

    <h2>For clients</h2>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        I lost my portal access code. What do I do?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">Contact your consultant and ask for a new access code. They can generate one in seconds from your client profile. You'll receive it by email immediately.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        What does the percentage on my case mean?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">The percentage shows how many required documents have been uploaded and verified by your consultant. 100% means all required documents are complete. It does not reflect government processing time.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        How do I know when my case status changes?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">You receive an email automatically every time your consultant updates your case status. You can also see a full history in <strong>Case Updates</strong> in your portal.</div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">
        Can I see all my applications in one place?
        <svg class="faq-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="faq-answer">Yes. Click <strong>My Cases</strong> in the portal navigation. All your applications appear as cards. Click any card to view its details on the Overview page.</div>
    </div>
  `
},

'messages': {
  title: 'Messages',
  badge: 'Consultant App',
  lead: 'Direct messaging between consultant and client — visible on both the consultant app and client portal.',
  content: `
    <h2>How it works</h2>
    <p>Messages are tied to a specific case. The consultant sends from the Messages tab inside the case. The client reads and replies from the Messages page in their portal. Both sides update automatically every 5 seconds — no refresh needed.</p>

    <h2>Sending a message (consultant)</h2>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Open a case</div><div class="step-body">Go to Cases and click on any case.</div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Click the Messages tab</div><div class="step-body">The 8th tab in the case view. All previous messages load automatically.</div></div></div>
      <div class="step"><div class="step-num">3</div><div class="step-content"><div class="step-title">Type and send</div><div class="step-body">Type your message and press Enter or click Send. Shift+Enter adds a new line. The client receives an email notification immediately.</div></div></div>
    </div>

    <h2>Receiving and replying (client)</h2>
    <p>Your client logs into portal.casvault.com and clicks <strong>Messages</strong> in the sidebar. They see the full conversation and can reply directly. You receive an email notification when they reply.</p>

    <h2>Auto-updating</h2>
    <p>Both sides poll for new messages every 5 seconds. When a new message arrives it appears automatically without any action needed — no refresh, no manual reload.</p>

    <h2>Read receipts</h2>
    <p>When the client opens the Messages page, all consultant messages are marked as read. You will see "Read" next to messages the client has seen.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Use messages for quick updates</div>
        <div class="callout-body">Messages are ideal for quick back-and-forth — "please upload your bank statement", "your reference letter has been approved", "we are filing on Thursday". For formal communications, use the Comms log tab to record calls and meetings.</div>
      </div>
    </div>
  `
},

'team': {
  title: 'Team',
  badge: 'Consultant App',
  lead: 'Invite colleagues to help manage cases and clients under your account.',
  content: `
    <h2>Team roles</h2>
    <div class="doc-table-wrapper">
      <table class="doc-table">
        <thead><tr><th>Role</th><th>Access</th></tr></thead>
        <tbody>
          <tr><td><strong>Admin</strong></td><td>Full access to everything except billing. Can manage clients, cases, invoices, settings, and team members.</td></tr>
          <tr><td><strong>Case Manager</strong></td><td>Can manage cases — create, edit, update status, manage checklist and timeline, upload documents.</td></tr>
          <tr><td><strong>Viewer</strong></td><td>Read-only access. Can view clients, cases, and documents but cannot make changes.</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Inviting a team member</h2>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-content"><div class="step-title">Go to Team in the sidebar</div><div class="step-body">Click the Team nav item at the bottom of the sidebar.</div></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-content"><div class="step-title">Click Invite member</div><div class="step-body">A modal opens with fields for email, first name, last name, and role.</div></div></div>
      <div class="step"><div class="step-num">3</div><div class="step-content"><div class="step-title">Select a role</div><div class="step-body">Choose Admin, Case Manager, or Viewer based on what the person needs to do.</div></div></div>
      <div class="step"><div class="step-num">4</div><div class="step-content"><div class="step-title">Send invite</div><div class="step-body">An invitation email is sent with a link to set their password. The link expires in 7 days.</div></div></div>
    </div>

    <h2>Accepting an invitation</h2>
    <p>Your team member clicks the link in their email, which takes them to <code>app.casvault.com/join-team?token=...</code>. They set a password and their account is activated. They can then log in with their email and new password.</p>

    <h2>Managing the team</h2>
    <ul>
      <li><strong>Change role</strong> — Use the role dropdown next to any active team member</li>
      <li><strong>Resend invite</strong> — Click the refresh icon next to any pending member</li>
      <li><strong>Remove member</strong> — Click the trash icon to remove a member from your team</li>
    </ul>

    <div class="callout callout-warn">
      <div class="callout-icon">⚠</div>
      <div class="callout-content">
        <div class="callout-title">Invitation expiry</div>
        <div class="callout-body">Invitations expire after 7 days. If a team member does not accept in time, use the Resend button to generate a new invite.</div>
      </div>
    </div>
  `
},


'changelog': {
  title: 'Changelog',
  badge: 'Reference',
  lead: 'A history of every update to CaseVault.',
  content: `
    <div class="changelog-version">
      <div class="changelog-version-header">
        <div class="changelog-version-num">v1.6</div>
        <div class="changelog-version-date">May 11, 2026</div>
        <div class="changelog-version-badge">Latest</div>
      </div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Portal messaging thread</strong> — real-time chat between consultant and client, auto-updates every 5 seconds on both sides</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>2FA login enforcement</strong> — accounts with 2FA enabled now require TOTP code on every login</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Multi-staff team roles</strong> — invite team members with Admin, Case Manager, or Viewer roles</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>docs.casvault.com</strong> — full product documentation site with search, dark mode, 30 pages</div></div>
      <div class="changelog-item"><div class="changelog-dot fix"></div><div class="changelog-text"><strong>Consultant sidebar</strong> — now stays fixed while content scrolls</div></div>
      <div class="changelog-item"><div class="changelog-dot fix"></div><div class="changelog-text">Multiple Prisma schema, TypeScript, and layout bug fixes</div></div>
    </div>

    <div class="changelog-version">
      <div class="changelog-version-header">
        <div class="changelog-version-num">v1.5</div>
        <div class="changelog-version-date">May 10, 2026</div>
      </div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>22 visa type templates</strong> — EB-1A, NIW, UK Global Talent, Innovator Founder, Canada Express Entry and PNP, Dubai Golden Visa, Australia Global Talent, Germany EU Blue Card, Schengen, and more</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Task management</strong> — per-case tasks with priority, due date, status, and assignee</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Intake forms</strong> — branded public forms that auto-create client profiles on submission</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Government case status tracking</strong> — USCIS polling every 6 hours with email alerts</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Portal: visual timeline</strong> — vertical journey map with done/current/upcoming states</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Portal: My Cases page</strong> — all applications as cards with progress and stage info</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Portal: government receipt card</strong> — USCIS/UKVI/IRCC status visible to client</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Portal: full-width layout</strong> — fixed sidebar, proper use of screen space</div></div>
    </div>

    <div class="changelog-version">
      <div class="changelog-version-header">
        <div class="changelog-version-num">v1.4</div>
        <div class="changelog-version-date">May 10, 2026</div>
      </div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>2FA (TOTP)</strong> — Google Authenticator support</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Session management</strong> — view and revoke active sessions</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Subscription billing</strong> — Paystack (Nigeria) + Dodo Payments (international)</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Invoice PDF download</strong></div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Revenue & Analytics page</strong> — monthly chart, aging, funnel, referral sources</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Trial enforcement banner</strong> — amber warning and red expired banner</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Client notes & referral source</strong> tracking</div></div>
    </div>

    <div class="changelog-version">
      <div class="changelog-version-header">
        <div class="changelog-version-num">v1.3</div>
        <div class="changelog-version-date">May 6, 2026</div>
      </div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Email notifications</strong> — ZeptoMail integration (portal invite, invoice, doc verified, status change, doc request, deadline reminder)</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Activity Log page</strong> — paginated, filterable by event type</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text"><strong>Dashboard redesign</strong> — deadline widget moved up, activity capped at 4</div></div>
    </div>

    <div class="changelog-version">
      <div class="changelog-version-header">
        <div class="changelog-version-num">v1.2</div>
        <div class="changelog-version-date">May 6, 2026</div>
      </div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text">Onboarding wizard, client pagination, mobile responsive sidebar</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text">Case filters, bulk status update, case duplication</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text">CSV export and import (up to 500 clients)</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text">Super-admin dashboard</div></div>
    </div>

    <div class="changelog-version">
      <div class="changelog-version-header">
        <div class="changelog-version-num">v1.0 — v1.1</div>
        <div class="changelog-version-date">May 4, 2026</div>
      </div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text">Initial launch — full backend, consultant app, client portal, Cloudflare R2 storage</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text">Client profile photos, editable profiles, checklist and timeline management</div></div>
      <div class="changelog-item"><div class="changelog-dot feat"></div><div class="changelog-text">Document requests, communication log, auto-timeline on status change</div></div>
    </div>
  `
},

'support': {
  title: 'Support',
  badge: 'Reference',
  lead: 'How to get help with CaseVault.',
  content: `
    <h2>Contact us</h2>
    <div class="doc-table-wrapper">
      <table class="doc-table">
        <thead><tr><th>Type</th><th>Contact</th><th>Response time</th></tr></thead>
        <tbody>
          <tr><td>General support</td><td>support@casvault.com</td><td>Within 24 hours</td></tr>
          <tr><td>Billing</td><td>billing@casvault.com</td><td>Within 24 hours</td></tr>
          <tr><td>Security concerns</td><td>security@casvault.com</td><td>Within 4 hours</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Before contacting support</h2>
    <ul>
      <li>Hard refresh your browser with <code>Ctrl+Shift+R</code> (Windows) or <code>Cmd+Shift+R</code> (Mac)</li>
      <li>Check you're using an up-to-date version of Chrome, Firefox, or Safari</li>
      <li>Check the <a href="#" onclick="navigate('faq')">FAQ</a> for common issues</li>
      <li>Check the <a href="#" onclick="navigate('changelog')">Changelog</a> for recent changes</li>
    </ul>

    <h2>Reporting a bug</h2>
    <p>When reporting a bug, please include:</p>
    <ul>
      <li>What you were trying to do</li>
      <li>What happened instead</li>
      <li>Your browser and operating system</li>
      <li>A screenshot if possible</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Consultant App</div>
        <div class="callout-body">app.casvault.com — for immigration consultants managing cases, clients, and invoices.</div>
      </div>
    </div>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Client Portal</div>
        <div class="callout-body">portal.casvault.com — for clients tracking their application progress and uploading documents.</div>
      </div>
    </div>
  `
},

'onboarding': {
  title: 'Onboarding Wizard',
  badge: 'Getting Started',
  lead: 'What happens on your first login.',
  content: `
    <p>When you register and log in for the first time, CaseVault detects that your profile is incomplete and shows a 3-step setup wizard before taking you to the dashboard.</p>

    <h2>Step 1 — Your company</h2>
    <p>Enter your company or firm name, first name, and last name. These are required — they appear on invoices, emails sent to clients, and the client portal header.</p>

    <h2>Step 2 — Location & currency</h2>
    <p>Set your country, default currency, and timezone. These pre-fill settings that you'd otherwise have to configure manually.</p>
    <p>Currency options: USD, GBP, EUR, NGN, KES, ZAR, GHS, AED, INR, CAD, AUD.</p>

    <h2>Step 3 — You're all set</h2>
    <p>A welcome screen shows a simple 3-step getting started guide: add a client → open a case → track progress.</p>

    <h2>Skipping the wizard</h2>
    <p>The wizard only appears when your <code>firstName</code> field is empty. Once you complete it (or update your profile in Settings), it won't appear again. You can update all these settings at any time in <a href="#" onclick="navigate('settings')">Settings</a>.</p>
  `
},

'plans': {
  title: 'Plans & Pricing',
  badge: 'Getting Started',
  lead: 'CaseVault offers a free trial and two paid plans.',
  content: `
    <div class="plan-grid">
      <div class="plan-card">
        <div class="plan-name">Free Trial</div>
        <div class="plan-price">$0</div>
        <div class="plan-period">14 days, no card needed</div>
        <div class="plan-limit">Up to 20 clients</div>
        <ul class="plan-features">
          <li>All features unlocked</li>
          <li>Full portal access</li>
          <li>No credit card required</li>
        </ul>
      </div>
      <div class="plan-card">
        <div class="plan-name">Starter</div>
        <div class="plan-price">$29</div>
        <div class="plan-period">per month</div>
        <div class="plan-limit">Up to 20 clients</div>
        <ul class="plan-features">
          <li>Unlimited cases</li>
          <li>Client portal</li>
          <li>Document management</li>
          <li>Invoicing & payments</li>
          <li>Email notifications</li>
          <li>Intake forms</li>
          <li>Gov. status tracking</li>
        </ul>
      </div>
      <div class="plan-card featured">
        <div class="plan-name">Pro ⭐</div>
        <div class="plan-price">$79</div>
        <div class="plan-period">per month</div>
        <div class="plan-limit">Unlimited clients</div>
        <ul class="plan-features">
          <li>Everything in Starter</li>
          <li>Unlimited clients</li>
          <li>Revenue analytics</li>
          <li>Bulk CSV import</li>
          <li>Priority support</li>
          <li>Invoice PDF export</li>
        </ul>
      </div>
    </div>

    <h2>Payment methods</h2>
    <ul>
      <li><strong>Nigeria</strong> — Pay in NGN via Paystack (cards, bank transfer, USSD)</li>
      <li><strong>International</strong> — Pay in USD via Dodo Payments (international cards)</li>
    </ul>

    <p>You can toggle between processors on the <a href="#" onclick="navigate('billing')">Billing page</a>.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-content">
        <div class="callout-title">Start free</div>
        <div class="callout-body">Your 14-day trial includes full Pro access. No credit card required. Upgrade only when you're ready.</div>
      </div>
    </div>
  `
}

};
