"use client";

import Image from "next/image";
import DESLogo from "../../../../public/assets/DES_LOGO4.png"; // Adjust path if needed

const PrivacyPolicyComp = () => {
  return (
    <div className="min-h-screen text-gray-200 px-6 py-12 mt-15">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <Image
            src={DESLogo}
            alt="Digital Elite Services Logo"
            width={90}
            height={90}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg text-gray-400">Digital Elite Services</p>
      </div>

      {/* Content Card */}
      <div className="mt-10 bg-[#1a1525] rounded-2xl shadow-lg p-8 max-w-4xl mx-auto leading-relaxed">
        <p className="mb-6">
          Website:{" "}
          <a
            href="https://digitaleliteservices.in"
            className="text-blue-400 hover:underline"
          >
            www.digitaleliteservices.in
          </a>
        </p>

        <p className="mb-6">
          At{" "}
          <span className="font-semibold text-orange-400">
            Digital Elite Services
          </span>
          , your privacy is one of our top priorities. This Privacy Policy
          outlines the types of information we collect, how we use it, and the
          measures we take to safeguard your data when you visit or interact
          with our website.
        </p>
        <p className="mb-6">
          By accessing or using our website, you agree to the collection and use
          of information in accordance with this Privacy Policy.
        </p>

        {/* Sections */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <span className="font-semibold">Direct Information:</span> Name,
            email, phone, company name, etc.
          </li>
          <li>
            <span className="font-semibold">Account Information:</span>{" "}
            Registration details like business address, contact info.
          </li>
          <li>
            <span className="font-semibold">Communication Data:</span> Emails,
            chat, inquiries.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Deliver and operate our website/services</li>
          <li>Customize user experience</li>
          <li>Analyze site usage</li>
          <li>Develop new features</li>
          <li>Customer support, marketing, and communication</li>
          <li>Send relevant emails and updates</li>
          <li>Fraud prevention and security</li>
        </ul>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          3. Log Files
        </h2>
        <p className="mb-6">
          Like most digital platforms, we collect IP address, browser type, ISP,
          date/time stamps, referring/exit pages, and clicks for analytics only.
        </p>
        <p>
          This data is used strictly for analytical and site administration
          purposes. It is not linked to any personally identifiable information.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          4. Cookies and Tracking
        </h2>
        <p className="mb-6">
          We use cookies and web beacons to enhance your browsing experience.
          You can disable cookies in your browser settings, but some features
          may be affected.
        </p>
        <p>
          These small files store user preferences and activity data to help us
          personalize content based on your browser and behavior on our site.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          5. Advertising Partners
        </h2>
        <p className="mb-6">
          We may collaborate with third-party advertising partners who may use
          cookies, JavaScript, or web beacons in their ads displayed on our
          website. These tools help measure ad effectiveness and personalize ad
          content.
        </p>
        <p>
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500">
            Please note:
          </span>{" "}
          Digital Elite Services does not have control over the data collected
          by these third parties. We recommend reviewing their respective
          privacy policies for further details.
        </p>
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          6. Third-Party Privacy Policies
        </h2>
        <p className="mb-6">
          This Privacy Policy applies only to our website. For third-party
          services, consult their respective privacy policies.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          7. Your Privacy Rights
        </h2>
        <p className="mb-3 font-semibold">
          Under the CCPA (California Consumer Privacy Act), California residents
          have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Request disclosure of data collected about them</li>
          <li>Request deletion of their personal data</li>
          <li>Opt out of the sale of their personal data</li>
        </ul>
        <p className="mb-3 font-semibold">
          Under the GDPR (General Data Protection Regulation), users in the EU
          are entitled to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access their personal data</li>
          <li>Request rectification of inaccurate or incomplete data</li>
          <li>Request restriction or object to the processing of their data</li>
          <li>Request data portability</li>
        </ul>
        <p className="mb-3">
          To exercise any of these rights, please contact us. We will respond
          within one month as required by law.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          8. Children’s Privacy
        </h2>
        <p className="mb-6">
          We are committed to protecting children’s privacy. Our services are
          not intended for users under the age of 13, and we do not knowingly
          collect personally identifiable information from children.
        </p>
        <p className="mb-6">
          If you believe a child has provided us with personal data, please
          contact us immediately, and we will promptly remove the information
          from our systems.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          9. Data Retention
        </h2>
        <p className="mb-6">
          We will retain your personal information only for as long as necessary
          to fulfill the purposes outlined in this Privacy Policy, comply with
          legal obligations, resolve disputes, and enforce our agreements.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          10. Data Security
        </h2>
        <p className="mb-6">
          We implement appropriate technical and organizational measures (such
          as encryption, firewalls, and secure servers) to protect your personal
          data from unauthorized access, alteration, disclosure, or destruction.
          However, no method of transmission over the internet is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          11. Sharing of Information
        </h2>
        <p className="mb-6">
          We do not sell, trade, or rent your personal data to third parties.
          However, we may share information with:
        </p>
        <p>
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mr-1">
            Service providers
          </span>
          (e.g., hosting providers, analytics tools) strictly to support our
          operations.
        </p>
        <p>
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mr-1">
            Legal authorities,
          </span>
          if required to comply with applicable laws, regulations, or legal
          processes.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          12. International Data Transfers
        </h2>
        <p className="mb-6">
          If you access our services from outside India, your information may be
          transferred to, stored, and processed in countries other than your
          own. By using our services, you consent to such transfers in
          accordance with this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          13. Changes to this Privacy Policy
        </h2>
        <p className="mb-6">
          We may update or modify this Privacy Policy from time to time to
          reflect changes in our practices, technology, or legal requirements.
          Any updates will be posted on this page with an updated Effective
          Date. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          14. Consent
        </h2>
        <p className="mb-6">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          15. Payment Information (if applicable)
        </h2>
        <p className="mb-6">
          If we provide paid services and you make payments through our website,
          your payment details (such as credit/debit card numbers or bank
          account information) are processed securely by third-party payment
          gateways. We do not store or directly handle sensitive financial
          information.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          16. Third-Party Analytics
        </h2>
        <p className="mb-6">
          We may use analytics tools (e.g., Google Analytics) to understand how
          visitors use our website. These tools may collect data such as IP
          address, device type, browser information, and on-site behavior. This
          information is used only for statistical and performance improvement
          purposes.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          17. Email & Communication Preferences
        </h2>
        <p className="mb-6">
          You may opt out of receiving promotional emails or marketing
          communications from us by following the unsubscribe instructions
          included in our emails or by contacting us directly. However, we may
          still send you non-promotional messages related to your account or
          services.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          18. Links to Other Websites
        </h2>
        <p className="mb-6">
          Our website may contain links to external websites. We are not
          responsible for the privacy practices or content of such third-party
          sites. We encourage users to review the privacy policies of those
          websites before sharing any personal information.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          19. Do Not Track (DNT)
        </h2>
        <p className="mb-6">
          Some browsers offer a "Do Not Track" feature. Our website currently
          does not respond to DNT signals, but we respect your privacy and
          continuously evaluate industry standards regarding such requests.
        </p>

        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          20. Governing Law & Jurisdiction
        </h2>
        <p className="mb-6">
          This Privacy Policy shall be governed by and construed in accordance
          with the laws of India. Any disputes arising out of or in connection
          with this Privacy Policy shall be subject to the exclusive
          jurisdiction of the courts in Bangalore, Karnataka, India.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500 mt-8 mb-3">
          Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions or concerns regarding this Privacy Policy or
          the handling of your personal information, please reach out to:
        </p>
        <p className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:admin@digitaleliteservices.in"
            className="text-blue-400 hover:underline"
          >
            admin@digitaleliteservices.in
          </a>
        </p>
        <p className="mb-2">
          📍 Address: 35A, Kowdi, 2nd floor, 1st Main Rd, Chiranjeevi Layout,
          Hebbal Kempapura, Bangalore, India, 560024
        </p>
        <p className="mb-2">
          📞 Phone:{" "}
          <a href="tel:+916366930174" className="text-blue-400 hover:underline">
            6366930174
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyComp;
