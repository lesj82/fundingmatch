import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#182744] text-white font-sans">
      <div className="container mx-auto px-4 py-16 max-w-[960px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-['Roobert-SemiBold',Helvetica]">
          Privacy Policy
        </h1>

        <p className="text-lg text-white opacity-70 mb-12">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="space-y-10 text-base md:text-lg leading-relaxed font-['Roobert-Regular',Helvetica]">

          <section>
            <h2 className="text-2xl font-bold mb-4">
              1. Introduction
            </h2>

            <p className="mb-4">
              FundingMatch.ai is committed to protecting and respecting your privacy.
              This Privacy Policy explains how we collect, use, process, store,
              and share your information when you use our website or submit a
              funding enquiry through our platform.
            </p>

            <p>
              By using our website or services, you agree to the practices
              described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. Who We Are
            </h2>

            <p className="mb-4">
              FundingMatch.ai is operated by:
            </p>

            <address className="not-italic mb-4 pl-4 border-l-4 border-gray-400">
              <span className="font-semibold">EFG Group Ltd</span>
              <br />
              Ground Floor, 5 North Court
              <br />
              Armstrong Road
              <br />
              Maidstone
              <br />
              Kent
              <br />
              ME15 6JZ
              <br />
              United Kingdom
            </address>

            <p className="mb-4">
              Email:{" "}
              <a
                href="mailto:hello@fundingmatch.ai"
                className="text-blue-300 hover:underline"
              >
                hello@fundingmatch.ai
              </a>
            </p>

            <p className="mb-4">
              FundingMatch.ai provides an AI-powered business funding matching
              platform helping UK businesses identify suitable lenders and
              funding providers based on their profile and financial data.
            </p>

            <p>
              We act as an introducer only and are not a lender.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mb-2 mt-6">
              Personal Information
            </h3>

            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Full name</li>
              <li>Date of birth</li>
              <li>Residential address</li>
              <li>Email address</li>
              <li>Telephone number</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-6">
              Business Information
            </h3>

            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Business name</li>
              <li>Company registration number</li>
              <li>Trading address</li>
              <li>Business activity</li>
              <li>Length of time trading</li>
              <li>Annual turnover</li>
              <li>Requested funding amount</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-6">
              Financial Information
            </h3>

            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Business bank statements</li>
              <li>Transaction history</li>
              <li>Cashflow and balance information</li>
              <li>Existing finance arrangements</li>
              <li>Open Banking data where authorised</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-6">
              Verification Information
            </h3>

            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Proof of identity documents</li>
              <li>Proof of address documents</li>
              <li>Director and shareholder information</li>
              <li>Anti-money laundering verification data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-6">
              Credit Information
            </h3>

            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Soft credit search information</li>
              <li>Public records such as CCJs or insolvency markers</li>
              <li>Creditworthiness indicators</li>
            </ul>

            <p className="mt-2 text-sm italic">
              We only perform soft credit searches unless otherwise stated by a lender.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">
              Technical Information
            </h3>

            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Website usage data</li>
              <li>Cookies and analytics information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              4. How We Collect Information
            </h2>

            <p className="mb-4">
              We collect information:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Through forms submitted on our website</li>
              <li>During telephone or email conversations</li>
              <li>Through uploaded documents and bank statements</li>
              <li>Via Open Banking providers where consent is given</li>
              <li>From credit reference agencies</li>
              <li>From publicly available sources such as Companies House</li>
              <li>Through cookies and analytics tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. How We Use Your Information
            </h2>

            <p className="mb-4">
              We use your information to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Assess funding suitability</li>
              <li>Match businesses with lenders</li>
              <li>Verify identity and prevent fraud</li>
              <li>Conduct affordability assessments</li>
              <li>Improve our AI matching systems</li>
              <li>Communicate regarding your enquiry</li>
              <li>Meet legal and regulatory obligations</li>
              <li>Provide customer support</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Legal Basis For Processing
            </h2>

            <p className="mb-4">
              Under UK GDPR, we process data under the following lawful bases:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Consent</li>
              <li>Contractual necessity</li>
              <li>Legitimate interests</li>
              <li>Legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Open Banking
            </h2>

            <p className="mb-4">
              Where Open Banking is selected or authorised:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Access is read-only</li>
              <li>We cannot move funds or initiate payments</li>
              <li>Data is used solely for affordability and underwriting assessment</li>
              <li>Access is secure and encrypted</li>
              <li>Permissions can be revoked at any time</li>
            </ul>

            <p className="mt-4">
              Open Banking services may be provided through FCA-authorised third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              8. AI & Automated Matching
            </h2>

            <p className="mb-4">
              FundingMatch.ai may use AI-assisted systems and automated matching
              technology to identify lenders and finance products suited to your
              business profile and financial data.
            </p>

            <p>
              Final lending decisions are always made by the lender or funding provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              9. Data Sharing
            </h2>

            <p className="mb-4">
              We may share information with:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Third-party lenders and funding providers</li>
              <li>Commercial finance brokers and introducers</li>
              <li>Credit reference agencies</li>
              <li>Fraud prevention agencies</li>
              <li>Open Banking providers</li>
              <li>Technology and cloud hosting providers</li>
              <li>Compliance and identity verification providers</li>
              <li>Regulators or law enforcement where legally required</li>
            </ul>

            <p className="mt-4 font-semibold">
              We do not sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              10. Marketing Communications
            </h2>

            <p className="mb-4">
              We may contact you regarding:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Your funding enquiry</li>
              <li>Relevant products or services</li>
              <li>Business funding opportunities</li>
              <li>Updates and promotions</li>
            </ul>

            <p className="mt-4">
              You can opt out of marketing communications at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              11. Data Retention
            </h2>

            <p>
              We retain information only for as long as necessary to provide our
              services and meet legal, regulatory, fraud prevention, and accounting obligations.
              In some cases, records may be retained for up to 6 years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              12. Data Security
            </h2>

            <p className="mb-4">
              We take security seriously and implement appropriate technical and
              organisational measures to protect your information.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>SSL encryption</li>
              <li>Secure cloud hosting</li>
              <li>Restricted staff access</li>
              <li>Password protection</li>
              <li>Encrypted document storage</li>
              <li>Access controls and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              13. Your Rights
            </h2>

            <p className="mb-4">
              Under UK GDPR, you have the right to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Access your data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
              <li>Request transfer of your data</li>
            </ul>

            <p className="mt-4">
              To exercise your rights, contact:
            </p>

            <a
              href="mailto:hello@fundingmatch.ai"
              className="text-blue-300 hover:underline"
            >
              hello@fundingmatch.ai
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              14. Complaints
            </h2>

            <p className="mb-4">
              If you are unhappy with how we process your information,
              please contact us first so we can attempt to resolve the issue.
            </p>

            <p>
              You also have the right to complain to the Information Commissioner’s Office (ICO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              15. Cookies
            </h2>

            <p className="mb-4">
              Our website uses cookies and similar technologies to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Improve website functionality</li>
              <li>Analyse website traffic</li>
              <li>Support advertising and remarketing</li>
              <li>Improve user experience</li>
            </ul>

            <p className="mt-4">
              We may use tools such as Google Analytics and Meta Pixel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              16. Third-Party Websites
            </h2>

            <p>
              Our website may contain links to third-party websites.
              We are not responsible for the privacy practices or content of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              17. Updates To This Policy
            </h2>

            <p>
              This Privacy Policy may be updated periodically.
              The latest version will always appear on this page.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
