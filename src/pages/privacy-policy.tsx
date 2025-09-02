import * as React from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Sparkles } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl">Autobuild</span>
          </a>
          <Button variant="ghost" size="sm" asChild>
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="shadow-xl border-0 dark:bg-slate-800/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                <strong>Last Updated: September 2, 2025</strong>
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {/* Removed redundant H1 for "PRIVACY POLICY" as it's handled by the main page header. */}
              {/* The "Last updated" date is already part of the main header. */}

              <p>
                This Privacy Notice for Hacket Services OÜ ("<strong>we</strong>
                ," "<strong>us</strong>," or "<strong>our</strong>") describes
                how and why we might access, collect, store, use, and/or share (
                "<strong>process</strong>") your personal information when you
                use our services ("<strong>Services</strong>"), including when
                you:
              </p>
              <ul>
                <li>
                  Visit our website at{' '}
                  <a
                    href="https://autobuild.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                  >
                    https://autobuild.dev
                  </a>{' '}
                  or any website of ours that links to this Privacy Notice
                </li>
              </ul>
              <ul>
                <li>
                  Use AutoBuild. AutoBuild is a cloud-based AI-guided software
                  builder that allows non-technical users to design, build, and
                  deploy custom web applications and, in the future, mobile
                  applications. It leverages artificial intelligence to
                  interpret user requirements and generate full-stack code, user
                  interface flows, and deployment scripts.
                </li>
              </ul>
              <ul>
                <li>
                  Engage with us in other related ways, including any sales,
                  marketing, or events
                </li>
              </ul>
              <p>
                <strong>Questions or concerns?&nbsp;</strong>Reading this
                Privacy Notice will help you understand your privacy rights and
                choices. We are responsible for making decisions about how your
                personal information is processed. If you do not agree with our
                policies and practices, please do not use our Services. If you
                still have any questions or concerns, please contact us at{' '}
                <a
                  href="mailto:info@autobuild.dev"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  info@autobuild.dev
                </a>
                .
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                SUMMARY OF KEY POINTS
              </h2>
              <p>
                <strong>
                  <em>
                    This summary provides key points from our Privacy Notice,
                    but you can find out more details about any of these topics
                    by clicking the link following each key point or by using
                    our&nbsp;
                  </em>
                </strong>
                <a
                  href="#toc"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  <strong>
                    <em>table of contents</em>
                  </strong>
                </a>
                <strong>
                  <em>&nbsp;below to find the section you are looking for.</em>
                </strong>
              </p>
              <p>
                <strong>What personal information do we process?</strong> When
                you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with us and
                the Services, the choices you make, and the products and
                features you use. Learn more about&nbsp;
                <a
                  href="#personalinfo"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  personal information you disclose to us
                </a>
                .
              </p>
              <p>
                <strong>
                  Do we process any sensitive personal information?&nbsp;
                </strong>
                Some of the information may be considered "special" or
                "sensitive" in certain jurisdictions, for example your racial or
                ethnic origins, sexual orientation, and religious beliefs. We do
                not process sensitive personal information.
              </p>
              <p>
                <strong>
                  Do we collect any information from third parties?
                </strong>
                We do not collect any information from third parties.
              </p>
              <p>
                <strong>How do we process your information?</strong> We process
                your information to provide, improve, and administer our
                Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so. Learn more about&nbsp;
                <a
                  href="#infouse"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  how we process your information
                </a>
                .
              </p>
              <p>
                <strong>
                  In what situations and with which types of parties do we share
                  personal information?
                </strong>
                We may share information in specific situations and with
                specific categories of third parties. Learn more about&nbsp;
                <a
                  href="#whoshare"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  when and with whom we share your personal information
                </a>
                .
              </p>
              <p>
                <strong>How do we keep your information safe?</strong> We have
                adequate organizational and technical processes and procedures
                in place to protect your personal information. However, no
                electronic transmission over the internet or information storage
                technology can be guaranteed to be 100% secure, so we cannot
                promise or guarantee that hackers, cybercriminals, or other
                unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Learn more about&nbsp;
                <a
                  href="#infosafe"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  how we keep your information safe
                </a>
                .
              </p>
              <p>
                <strong>What are your rights?</strong> Depending on where you
                are located geographically, the applicable privacy law may mean
                you have certain rights regarding your personal information.
                Learn more about&nbsp;
                <a
                  href="#privacyrights"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  your privacy rights
                </a>
                .
              </p>
              <p>
                <strong>How do you exercise your rights?</strong> The easiest
                way to exercise your rights is by{' '}
                <a
                  href="https://autobuild.dev/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  https://autobuild.dev/contact
                </a>
                , or by contacting us. We will consider and act upon any request
                in accordance with applicable data protection laws.
              </p>
              <p>
                Want to learn more about what we do with any information we
                collect?&nbsp;
                <a
                  href="#toc"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  Review the Privacy Notice in full
                </a>
                .
              </p>

              <h2
                id="toc"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                TABLE OF CONTENTS
              </h2>
              <p>
                <a
                  href="#infocollect"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  1. WHAT INFORMATION DO WE COLLECT?
                </a>
              </p>
              <p>
                <a
                  href="#infouse"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  2. HOW DO WE PROCESS YOUR INFORMATION?
                </a>
              </p>
              <p>
                <a
                  href="#legalbases"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                  INFORMATION?
                </a>
              </p>
              <p>
                <a
                  href="#whoshare"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
              </p>
              <p>
                <a
                  href="#cookies"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </a>
              </p>
              <p>
                <a
                  href="#ai"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
                </a>
              </p>
              <p>
                <a
                  href="#sociallogins"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </a>
              </p>
              <p>
                <a
                  href="#intltransfers"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                </a>
              </p>
              <p>
                <a
                  href="#inforetain"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  9. HOW LONG DO WE KEEP YOUR INFORMATION?
                </a>
              </p>
              <p>
                <a
                  href="#infosafe"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  10. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </a>
              </p>
              <p>
                <a
                  href="#infominors"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  11. DO WE COLLECT INFORMATION FROM MINORS?
                </a>
              </p>
              <p>
                <a
                  href="#privacyrights"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  12. WHAT ARE YOUR PRIVACY RIGHTS?
                </a>
              </p>
              <p>
                <a
                  href="#DNT"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  13. CONTROLS FOR DO-NOT-TRACK FEATURES
                </a>
              </p>
              <p>
                <a
                  href="#uslaws"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  14. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </a>
              </p>
              <p>
                <a
                  href="#policyupdates"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  15. DO WE MAKE UPDATES TO THIS NOTICE?
                </a>
              </p>
              <p>
                <a
                  href="#contact"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
              </p>
              <p>
                <a
                  href="#request"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </a>
              </p>

              <h2
                id="infocollect"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                1. WHAT INFORMATION DO WE COLLECT?
              </h2>
              <h3 id="personalinfo">Personal information you disclose to us</h3>
              <p>
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  {' '}
                  We collect personal information that you provide to us.
                </em>
              </p>
              <p>
                We collect personal information that you voluntarily provide to
                us when you register on the Services,&nbsp;express an interest
                in obtaining information about us or our products and Services,
                when you participate in activities on the Services, or otherwise
                when you contact us.
              </p>
              <p>
                <strong>Personal Information Provided by You.</strong> The
                personal information that we collect depends on the context of
                your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal
                information we collect may include the following:
              </p>
              <ul>
                <li>email addresses</li>
              </ul>
              <ul>
                <li>usernames</li>
              </ul>
              <ul>
                <li>passwords</li>
              </ul>
              <p>
                <strong>Sensitive Information.</strong> We do not process
                sensitive information.
              </p>
              <p>
                <strong>Payment Data.</strong> We may collect data necessary to
                process your payment if you choose to make purchases, such as
                your payment instrument number, and the security code associated
                with your payment instrument. All payment data is handled and
                stored by Paddle. You may find their privacy notice link(s)
                here:{' '}
                <a
                  href="https://paddle.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  https://paddle.com/legal/privacy
                </a>
                .
              </p>
              <p>
                <strong>Social Media Login Data.&nbsp;</strong>We may provide
                you with the option to register with us using your existing
                social media account details, like your Facebook, X, or other
                social media account. If you choose to register in this way, we
                will collect certain profile information about you from the
                social media provider, as described in the section called "
                <a
                  href="#sociallogins"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </a>
                " below.
              </p>
              <p>
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>
              <h3>Information automatically collected</h3>
              <p>
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  &nbsp;Some information — such as your Internet Protocol (IP)
                  address and/or browser and device characteristics — is
                  collected automatically when you visit our Services.
                </em>
              </p>
              <p>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </p>
              <p>
                Like many businesses, we also collect information through
                cookies and similar technologies.
              </p>
              <p>The information we collect includes:</p>
              <ul>
                <li>
                  <em>Log and Usage Data.</em> Log and usage data is
                  service-related, diagnostic, usage, and performance
                  information our servers automatically collect when you access
                  or use our Services and which we record in log files.
                  Depending on how you interact with us, this log data may
                  include your IP address, device information, browser type, and
                  settings and information about your activity in the Services
                  (such as the date/time stamps associated with your usage,
                  pages and files viewed, searches, and other actions you take
                  such as which features you use), device event information
                  (such as system activity, error reports (sometimes called
                  "crash dumps"), and hardware settings).
                </li>
              </ul>
              <ul>
                <li>
                  <em>Device Data.</em> We collect device data such as
                  information about your computer, phone, tablet, or other
                  device you use to access the Services. Depending on the device
                  used, this device data may include information such as your IP
                  address (or proxy server), device and application
                  identification numbers, location, browser type, hardware
                  model, Internet service provider and/or mobile carrier,
                  operating system, and system configuration information.
                </li>
              </ul>
              <ul>
                <li>
                  <em>Location Data.</em> We collect location data such as
                  information about your device's location, which can be either
                  precise or imprecise. How much information we collect depends
                  on the type and settings of the device you use to access the
                  Services. For example, we may use GPS and other technologies
                  to collect geolocation data that tells us your current
                  location (based on your IP address). You can opt out of
                  allowing us to collect this information either by refusing
                  access to the information or by disabling your Location
                  setting on your device. However, if you choose to opt out, you
                  may not be able to use certain aspects of the Services.
                </li>
              </ul>
              <h3>Google API</h3>
              <p>
                Our use of information received from Google APIs will adhere
                to&nbsp;
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  Google API Services User Data Policy
                </a>
                , including the&nbsp;
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  Limited Use requirements
                </a>
                .
              </p>

              <h2
                id="infouse"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </h2>
              <p>
                <strong>
                  <em>In Short:&nbsp;</em>
                </strong>
                <em>
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We process the
                  personal information for the following purposes listed below.
                  We may also process your information for other purposes only
                  with your prior explicit consent.
                </em>
              </p>
              <p>
                <strong>
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </strong>
              </p>
              <ul>
                <li>
                  <strong>
                    To facilitate account creation and authentication and
                    otherwise manage user accounts.&nbsp;
                  </strong>
                  We may process your information so you can create and log in
                  to your account, as well as keep your account in working
                  order.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    To deliver and facilitate delivery of services to the
                    user.&nbsp;
                  </strong>
                  We may process your information to provide you with the
                  requested service.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    To respond to user inquiries/offer support to users.&nbsp;
                  </strong>
                  We may process your information to respond to your inquiries
                  and solve any potential issues you might have with the
                  requested service.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    To send administrative information to you.&nbsp;
                  </strong>
                  We may process your information to send you details about our
                  products and services, changes to our terms and policies, and
                  other similar information.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>To fulfill and manage your orders.</strong> We may
                  process your information to fulfill and manage your orders,
                  payments, returns, and exchanges made through the Services.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>To request feedback.&nbsp;</strong>We may process your
                  information when necessary to request feedback and to contact
                  you about your use of our Services.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    To send you marketing and promotional communications.&nbsp;
                  </strong>
                  We may process the personal information you send to us for our
                  marketing purposes, if this is in accordance with your
                  marketing preferences. You can opt out of our marketing emails
                  at any time. For more information, see "
                  <a
                    href="#privacyrights"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                  >
                    WHAT ARE YOUR PRIVACY RIGHTS?
                  </a>
                  " below.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>To protect our Services.</strong> We may process your
                  information as part of our efforts to keep our Services safe
                  and secure, including fraud monitoring and prevention.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>To identify usage trends.</strong> We may process
                  information about how you use our Services to better
                  understand how they are being used so we can improve them.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    To save or protect an individual's vital interest.
                  </strong>
                  We may process your information when necessary to save or
                  protect an individual’s vital interest, such as to prevent
                  harm.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Product Improvement & Human Review.</strong> We may
                  analyze usage data (e.g., feature interactions, error events,
                  implementation logs) and review specific user sessions or
                  artifacts (e.g., prompts, generated outputs, build logs) to
                  debug issues, improve prompts/algorithms, and enhance our
                  Services and AI features. Access is limited to authorized
                  personnel under confidentiality obligations. We minimize
                  personal information in logs where feasible, and we apply
                  access controls and security measures to protect this data.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>AI Providers & Training.</strong> We use third-party
                  AI service providers to power certain features. We do not
                  permit those providers to use your data for model training or
                  to improve their generalized services, and we contractually
                  restrict such use. Providers may retain limited logs for abuse
                  prevention and compliance. We also do not use your content to
                  train generalized, publicly-available foundation models.
                </li>
              </ul>

              <h2
                id="legalbases"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
              </h2>
              <p>
                <em>
                  <strong>In Short:&nbsp;</strong>
                  We only process your personal information when we believe it
                  is necessary and we have a valid legal reason (i.e., legal
                  basis) to do so under applicable law, like with your consent,
                  to comply with laws, to provide you with services to enter
                  into or fulfill our contractual obligations, to protect your
                  rights, or to fulfill our legitimate business interests.
                </em>
              </p>
              <p>
                <em>
                  <strong>
                    <u>
                      If you are located in the EU or UK, this section applies
                      to you.
                    </u>
                  </strong>
                </em>
              </p>
              <p>
                The General Data Protection Regulation (GDPR) and UK GDPR
                require us to explain the valid legal bases we rely on in order
                to process your personal information. As such, we may rely on
                the following legal bases to process your personal information:
              </p>
              <ul>
                <li>
                  <strong>Consent.&nbsp;</strong>We may process your information
                  if you have given us permission (i.e., consent) to use your
                  personal information for a specific purpose. You can withdraw
                  your consent at any time. Learn more about&nbsp;
                  <a
                    href="#withdrawconsent"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                  >
                    withdrawing your consent
                  </a>
                  .
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Performance of a Contract.</strong> We may process
                  your personal information when we believe it is necessary to
                  fulfill our contractual obligations to you, including
                  providing our Services or at your request prior to entering
                  into a contract with you.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Legitimate Interests.</strong> We may process your
                  information when we believe it is reasonably necessary to
                  achieve our legitimate business interests and those interests
                  do not outweigh your interests and fundamental rights and
                  freedoms. For example, we may process your personal
                  information for some of the purposes described in order to:
                </li>
              </ul>
              <ul className="ml-6">
                <li>
                  Send users information about special offers and discounts on
                  our products and services
                </li>
              </ul>
              <ul className="ml-6">
                <li>
                  Analyze how our Services are used so we can improve them to
                  engage and retain users
                </li>
              </ul>
              <ul className="ml-6">
                <li>Diagnose problems and/or prevent fraudulent activities</li>
              </ul>
              <ul className="ml-6">
                <li>
                  Understand how our users use our products and services so we
                  can improve user experience
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Legal Obligations.</strong> We may process your
                  information where we believe it is necessary for compliance
                  with our legal obligations, such as to cooperate with a law
                  enforcement body or regulatory agency, exercise or defend our
                  legal rights, or disclose your information as evidence in
                  litigation in which we are involved.
                  <br />
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Vital Interests.</strong> We may process your
                  information where we believe it is necessary to protect your
                  vital interests or the vital interests of a third party, such
                  as situations involving potential threats to the safety of any
                  person.
                </li>
              </ul>
              <p>
                <br />
              </p>
              <p>
                <em>
                  <strong>
                    <u>
                      If you are located in Canada, this section applies to you.
                    </u>
                  </strong>
                </em>
              </p>
              <p>
                We may process your information if you have given us specific
                permission (i.e., express consent) to use your personal
                information for a specific purpose, or in situations where your
                permission can be inferred (i.e., implied consent). You
                can&nbsp;
                <a
                  href="#withdrawconsent"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  withdraw your consent
                </a>
                &nbsp;at any time.
              </p>
              <p>
                In some exceptional cases, we may be legally permitted under
                applicable law to process your information without your consent,
                including, for example:
              </p>
              <ul>
                <li>
                  If collection is clearly in the interests of an individual and
                  consent cannot be obtained in a timely way
                </li>
              </ul>
              <ul>
                <li>For investigations and fraud detection and prevention</li>
              </ul>
              <ul>
                <li>
                  For business transactions provided certain conditions are met
                </li>
              </ul>
              <ul>
                <li>
                  If it is contained in a witness statement and the collection
                  is necessary to assess, process, or settle an insurance claim
                </li>
              </ul>
              <ul>
                <li>
                  For identifying injured, ill, or deceased persons and
                  communicating with next of kin
                </li>
              </ul>
              <ul>
                <li>
                  If we have reasonable grounds to believe an individual has
                  been, is, or may be victim of financial abuse
                </li>
              </ul>
              <ul>
                <li>
                  If it is reasonable to expect collection and use with consent
                  would compromise the availability or the accuracy of the
                  information and the collection is reasonable for purposes
                  related to investigating a breach of an agreement or a
                  contravention of the laws of Canada or a province
                </li>
              </ul>
              <ul>
                <li>
                  If disclosure is required to comply with a subpoena, warrant,
                  court order, or rules of the court relating to the production
                  of records
                </li>
              </ul>
              <ul>
                <li>
                  If it was produced by an individual in the course of their
                  employment, business, or profession and the collection is
                  consistent with the purposes for which the information was
                  produced
                </li>
              </ul>
              <ul>
                <li>
                  If the collection is solely for journalistic, artistic, or
                  literary purposes
                </li>
              </ul>
              <ul>
                <li>
                  If the information is publicly available and is specified by
                  the regulations
                </li>
              </ul>
              <ul>
                <li>
                  We may disclose de-identified information for approved
                  research or statistics projects, subject to ethics oversight
                  and confidentiality commitments
                </li>
              </ul>
              <h2
                id="whoshare"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </h2>
              <p>
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  &nbsp;We may share information in specific situations
                  described in this section and/or with the following categories
                  of third parties.
                </em>
              </p>
              <p>
                <strong>
                  Vendors, Consultants, and Other Third-Party Service Providers.
                </strong>
                We may share your data with third-party vendors, service
                providers, contractors, or agents ("
                <strong>third parties</strong>
                ") who perform services for us or on our behalf and require
                access to such information to do that work. We have contracts in
                place with our third parties, which are designed to help
                safeguard your personal information. This means that they cannot
                do anything with your personal information unless we have
                instructed them to do it. They will also not share your personal
                information with any organization apart from us. They also
                commit to protect the data they hold on our behalf and to retain
                it for the period we instruct.
              </p>
              <p>
                The categories of third parties we may share personal
                information with are as follows:
              </p>
              <ul>
                <li>AI Platforms</li>
              </ul>
              <ul>
                <li>Cloud Computing Services</li>
              </ul>
              <ul>
                <li>Communication &amp; Collaboration Tools</li>
              </ul>
              <ul>
                <li>Data Analytics Services</li>
              </ul>
              <ul>
                <li>Sales &amp; Marketing Tools</li>
              </ul>
              <ul>
                <li>Data Storage Service Providers</li>
              </ul>
              <ul>
                <li>Performance Monitoring Tools</li>
              </ul>
              <ul>
                <li>Payment Processors</li>
              </ul>
              <ul>
                <li>User Account Registration &amp; Authentication Services</li>
              </ul>
              <ul>
                <li>Website Hosting Service Providers</li>
              </ul>
              <p>
                We also may need to share your personal information in the
                following situations:
              </p>
              <ul>
                <li>
                  <strong>Business Transfers.</strong> We may share or transfer
                  your information in connection with, or during negotiations
                  of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another
                  company.
                </li>
              </ul>

              <h2
                id="cookies"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </h2>
              <p>
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  &nbsp;We may use cookies and other tracking technologies to
                  collect and store your information.
                </em>
              </p>
              <p>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to gather information when you interact with
                our Services. Some online tracking technologies help us maintain
                the security of our Services and your account, prevent crashes,
                fix bugs, save your preferences, and assist with basic site
                functions.
              </p>
              <p>
                We also permit third parties and service providers to use online
                tracking technologies on our Services for analytics and
                advertising, including to help manage and display
                advertisements, to tailor advertisements to your interests, or
                to send abandoned shopping cart reminders (depending on your
                communication preferences). The third parties and service
                providers use their technology to provide advertising about
                products and services tailored to your interests which may
                appear either on our Services or on other websites.
              </p>
              <p>
                To the extent these online tracking technologies are deemed to
                be a "sale"/"sharing" (which includes targeted advertising, as
                defined under the applicable laws) under applicable US state
                laws, you can opt out of these online tracking technologies by
                submitting a request as described below under section "
                <a
                  href="#uslaws"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </a>
                ".
              </p>
              <p>
                Specific information about how we use such technologies and how
                you can refuse certain cookies is set out in our Cookie Notice.
              </p>
              <h3>Google Analytics</h3>
              <p>
                We may share your information with Google Analytics to track and
                analyze the use of the Services. To opt out of being tracked by
                Google Analytics across the Services, visit{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
                . For more information on the privacy practices of Google,
                please visit the{' '}
                <a
                  href="https://policies.google.com/privacy"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  Google Privacy &amp; Terms page
                </a>
                .
              </p>

              <h2
                id="ai"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
              </h2>
              <p>
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  &nbsp;We offer products, features, or tools powered by
                  artificial intelligence, machine learning, or similar
                  technologies.
                </em>
              </p>
              <p>
                As part of our Services, we offer products, features, or tools
                powered by artificial intelligence, machine learning, or similar
                technologies (collectively, "AI Products"). These tools are
                designed to enhance your experience and provide you with
                innovative solutions. The terms in this Privacy Notice govern
                your use of the AI Products within our Services.
              </p>
              <p>
                <strong>Use of AI Technologies</strong>
              </p>
              <p>
                We provide the AI Products through third-party service providers
                ("AI Service Providers"), including OpenAI. As outlined in this
                Privacy Notice, your input, output, and personal information
                will be shared with and processed by these AI Service Providers
                to enable your use of our AI Products for purposes outlined in "
                <a
                  href="#legalbases"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                  INFORMATION?
                </a>
                " You must not use the AI Products in any way that violates the
                terms or policies of any AI Service Provider.
              </p>
              <p>
                <strong>Our AI Products</strong>
              </p>
              <p>Our AI Products are designed for the following functions:</p>
              <ul>
                <li>AI development</li>
              </ul>
              <ul>
                <li>AI automation</li>
              </ul>
              <ul>
                <li>AI deployment</li>
              </ul>
              <p>
                <strong>How We Process Your Data Using AI</strong>
              </p>
              <p>
                All personal information processed using our AI Products is
                handled in line with our Privacy Notice and our agreement with
                third parties. This ensures high security and safeguards your
                personal information throughout the process, giving you peace of
                mind about your data's safety.
              </p>
              <p>
                <strong>How to Opt Out</strong>
              </p>
              <p>
                We believe in giving you the power to decide how your data is
                used. To opt out, you can:
              </p>
              <ul>
                <li>Contact us using the contact information provided</li>
              </ul>

              <h2
                id="sociallogins"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </h2>
              <p>
                <strong>
                  <em>In Short:&nbsp;</em>
                </strong>
                <em>
                  If you choose to register or log in to our Services using a
                  social media account, we may have access to certain
                  information about you.
                </em>
              </p>
              <p>
                Our Services offer you the ability to register and log in using
                your third-party social media account details (like your
                Facebook or X logins). Where you choose to do this, we will
                receive certain profile information about you from your social
                media provider. The profile information we receive may vary
                depending on the social media provider concerned, but will often
                include your name, email address, and profile picture, as well
                as other information you choose to make public on such a social
                media platform.
              </p>
              <p>
                We will use the information we receive only for the purposes
                that are described in this Privacy Notice or that are otherwise
                made clear to you on the relevant Services. Please note that we
                do not control, and are not responsible for, other uses of your
                personal information by your third-party social media provider.
                We recommend that you review their privacy notice to understand
                how they collect, use, and share your personal information, and
                how you can set your privacy preferences on their sites and
                apps.
              </p>

              <h2
                id="intltransfers"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
              </h2>
              <p>
                <strong>
                  <em>In Short:&nbsp;</em>
                </strong>
                <em>
                  We may transfer, store, and process your information in
                  countries other than your own.
                </em>
              </p>
              <p>
                Our servers are located in the United States. Regardless of your
                location,&nbsp;please be aware that your information may be
                transferred to, stored by, and processed by us in our facilities
                and in the facilities of the third parties with whom we may
                share your personal information (see "
                <a
                  href="#whoshare"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
                " above), including facilities in the United States,&nbsp;and
                other countries.
              </p>
              <p>
                If you are a resident in the European Economic Area (EEA),
                United Kingdom (UK), or Switzerland, then these countries may
                not necessarily have data protection laws or other similar laws
                as comprehensive as those in your country. However, we will take
                all necessary measures to protect your personal information in
                accordance with this Privacy Notice and applicable law.
              </p>
              <p>European Commission's Standard Contractual Clauses:</p>
              <p>
                We have implemented measures to protect your personal
                information, including by using the European Commission's
                Standard Contractual Clauses for transfers of personal
                information between our group companies and between us and our
                third-party providers. These clauses require all recipients to
                protect all personal information that they process originating
                from the EEA or UK in accordance with European data protection
                laws and regulations. &nbsp;Our Standard Contractual Clauses can
                be provided upon request. &nbsp;We have implemented similar
                appropriate safeguards with our third-party service providers
                and partners and further details can be provided upon request.
              </p>

              <h2
                id="inforetain"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                9. HOW LONG DO WE KEEP YOUR INFORMATION?
              </h2>
              <p>
                <strong>
                  <em>In Short:&nbsp;</em>
                </strong>
                <em>
                  We keep your information for as long as necessary to fulfill
                  the purposes outlined in this Privacy Notice unless otherwise
                  required by law.
                </em>
              </p>
              <p>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this Privacy Notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements). No
                purpose in this notice will require us keeping your personal
                information for longer than the period of time in which users
                have an account with us.
              </p>
              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>

              <h2
                id="infosafe"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                10. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </h2>
              <p>
                <strong>
                  <em>In Short:&nbsp;</em>
                </strong>
                <em>
                  We aim to protect your personal information through a system
                  of organizational and technical security measures.
                </em>
              </p>
              <p>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </p>

              <h2
                id="infominors"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                11. DO WE COLLECT INFORMATION FROM MINORS?
              </h2>
              <p>
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  &nbsp;We do not knowingly collect data from or market to
                  children under 18 years of age or the equivalent age as
                  specified by law in your jurisdiction.
                </em>
              </p>
              <p>
                We do not knowingly collect, solicit data from, or market to
                children under 18 years of age or the equivalent age as
                specified by law in your jurisdiction, nor do we knowingly sell
                such personal information. By using the Services, you represent
                that you are at least 18 or the equivalent age as specified by
                law in your jurisdiction or that you are the parent or guardian
                of such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age or the equivalent age as specified by law
                in your jurisdiction has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18 or the equivalent age
                as specified by law in your jurisdiction, please contact us at
                info@autobuild.dev.
              </p>

              <h2
                id="privacyrights"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                12. WHAT ARE YOUR PRIVACY RIGHTS?
              </h2>
              <p>
                <strong>
                  <em>In Short:</em>
                </strong>
                <em>
                  &nbsp;Depending on your state of residence in the US or in
                  some regions, such as the European Economic Area (EEA), United
                  Kingdom (UK), Switzerland, and Canada, you have rights that
                  allow you greater access to and control over your personal
                  information. You may review, change, or terminate your account
                  at any time, depending on your country, province, or state of
                  residence.
                </em>
              </p>
              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you
                have certain rights under applicable data protection laws. These
                may include the right (i) to request access and obtain a copy of
                your personal information, (ii) to request rectification or
                erasure; (iii) to restrict the processing of your personal
                information; (iv) if applicable, to data portability; and (v)
                not to be subject to automated decision-making. If a decision
                that produces legal or similarly significant effects is made
                solely by automated means, we will inform you, explain the main
                factors, and offer a simple way to request human review. In
                certain circumstances, you may also have the right to object to
                the processing of your personal information. You can make such a
                request by contacting us by using the contact details provided
                in the section "
                <a
                  href="#contact"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
                " below.
              </p>
              <p>
                We will consider and act upon any request in accordance with
                applicable data protection laws.
              </p>
              <p>&nbsp;</p>
              <p>
                If you are located in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your{' '}
                <a
                  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  Member State data protection authority
                </a>{' '}
                or&nbsp;
                <a
                  href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  UK data protection authority
                </a>
                .
              </p>
              <p>
                If you are located in Switzerland, you may contact the{' '}
                <a
                  href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  Federal Data Protection and Information Commissioner
                </a>
                .
              </p>
              <h3 id="withdrawconsent">
                <strong>
                  <u>Withdrawing your consent:</u>
                </strong>
              </h3>
              <p>
                If we are relying on your consent to process your personal
                information, which may be express and/or implied consent
                depending on the applicable law, you have the right to withdraw
                your consent at any time. You can withdraw your consent at any
                time by contacting us by using the contact details provided in
                the section "
                <a
                  href="#contact"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
                " below.
              </p>
              <p>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </p>
              <p>
                <strong>
                  <u>Opting out of marketing and promotional communications:</u>
                </strong>
                <strong>&nbsp;</strong>You can unsubscribe from our marketing
                and promotional communications at any time by clicking on the
                unsubscribe link in the emails that we send, or by contacting us
                using the details provided in the section "
                <a
                  href="#contact"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
                " below. You will then be removed from the marketing lists.
                However, we may still communicate with you — for example, to
                send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes.
              </p>
              <h3>Account Information</h3>
              <p>
                If you would at any time like to review or change the
                information in your account or terminate your account, you can:
              </p>
              <ul>
                <li>Contact us using the contact information provided.</li>
              </ul>
              <p>
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, we may retain some information in our files
                to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our legal terms and/or comply with
                applicable legal requirements.
              </p>
              <p>
                <strong>
                  <u>Cookies and similar technologies:</u>
                </strong>
                Most Web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove
                cookies and to reject cookies. If you choose to remove cookies
                or reject cookies, this could affect certain features or
                services of our Services.
              </p>
              <p>
                If you have questions or comments about your privacy rights, you
                may email us at{' '}
                <a
                  href="mailto:info@autobuild.dev"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  info@autobuild.dev
                </a>
                .
              </p>

              <h2
                id="DNT"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                13. CONTROLS FOR DO-NOT-TRACK FEATURES
              </h2>
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage, no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this Privacy Notice.
              </p>
              <p>
                California law requires us to let you know how we respond to web
                browser DNT signals. Because there currently is not an industry
                or legal standard for recognizing or honoring DNT signals, we do
                not respond to them at this time.
              </p>

              <h2
                id="uslaws"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                14. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </h2>
              <p>
                <strong>
                  <em>In Short:&nbsp;</em>
                </strong>
                <em>
                  If you are a resident of California, Colorado, Connecticut,
                  Delaware, Florida, Indiana, Iowa, Kentucky, Maryland,
                  Minnesota, Montana, Nebraska, New Hampshire, New Jersey,
                  Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you
                  may have the right to request access to and receive details
                  about the personal information we maintain about you and how
                  we have processed it, correct inaccuracies, get a copy of, or
                  delete your personal information. You may also have the right
                  to withdraw your consent to our processing of your personal
                  information. These rights may be limited in some circumstances
                  by applicable law. More information is provided below.
                </em>
              </p>
              <h3>Categories of Personal Information We Collect</h3>
              <p>
                The table below shows the categories of personal information we
                have collected in the past twelve (12) months. The table
                includes illustrative examples of each category and does not
                reflect the personal information we collect from you. For a
                comprehensive inventory of all personal information we process,
                please refer to the section "
                <a
                  href="#infocollect"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  WHAT INFORMATION DO WE COLLECT?
                </a>
                ".
              </p>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-black text-left p-2">
                      <strong>Category</strong>
                    </th>
                    <th className="border border-black text-left p-2">
                      <strong>Examples</strong>
                    </th>
                    <th className="border border-black text-left p-2">
                      <strong>Collected</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-2">A. Identifiers</td>
                    <td className="border border-black p-2">
                      Contact details, such as real name, alias, postal address,
                      telephone or mobile contact number, unique personal
                      identifier, online identifier, Internet Protocol address,
                      email address, and account name
                    </td>
                    <td className="border border-black text-center p-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      B. Personal information as defined in the California
                      Customer Records statute
                    </td>
                    <td className="border border-black p-2">
                      Name, contact information, education, employment,
                      employment history, and financial information
                    </td>
                    <td className="border border-black text-center p-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      C. Protected classification characteristics under state or
                      federal law
                    </td>
                    <td className="border border-black p-2">
                      Gender, age, date of birth, race and ethnicity, national
                      origin, marital status, and other demographic data
                    </td>
                    <td className="border border-black text-center p-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      D. Commercial information
                    </td>
                    <td className="border border-black p-2">
                      Transaction information, purchase history, financial
                      details, and payment information
                    </td>
                    <td className="border border-black text-center p-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      E. Biometric information
                    </td>
                    <td className="border border-black p-2">
                      Fingerprints and voiceprints
                    </td>
                    <td className="border border-black text-center p-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      F. Internet or other similar network activity
                    </td>
                    <td className="border border-black p-2">
                      Browsing history, search history, online behavior,
                      interest data, and interactions with our and other
                      websites, applications, systems, and advertisements
                    </td>
                    <td className="border border-black text-center p-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      G. Geolocation data
                    </td>
                    <td className="border border-black p-2">Device location</td>
                    <td className="border border-black text-center p-2">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      H. Audio, electronic, sensory, or similar information
                    </td>
                    <td className="border border-black p-2">
                      Images and audio, video or call recordings created in
                      connection with our business activities
                    </td>
                    <td className="border border-black text-center p-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      I. Professional or employment-related information
                    </td>
                    <td className="border border-black p-2">
                      Business contact details in order to provide you our
                      Services at a business level or job title, work history,
                      and professional qualifications if you apply for a job
                      with us
                    </td>
                    <td className="border border-black text-center p-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      J. Education Information
                    </td>
                    <td className="border border-black p-2">
                      Student records and directory information
                    </td>
                    <td className="border border-black text-center p-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      K. Inferences drawn from collected personal information
                    </td>
                    <td className="border border-black p-2">
                      Inferences drawn from any of the collected personal
                      information listed above to create a profile or summary
                      about, for example, an individual’s preferences and
                      characteristics
                    </td>
                    <td className="border border-black text-center p-2">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      L. Sensitive personal Information
                    </td>
                    <td className="border border-black p-2"></td>
                    <td className="border border-black text-center p-2">NO</td>
                  </tr>
                </tbody>
              </table>
              <p>
                We may also collect other personal information outside of these
                categories through instances where you interact with us in
                person, online, or by phone or mail in the context of:
              </p>
              <ul>
                <li>Receiving help through our customer support channels;</li>
              </ul>
              <ul>
                <li>Participation in customer surveys or contests; and</li>
              </ul>
              <ul>
                <li>
                  Facilitation in the delivery of our Services and to respond to
                  your inquiries.
                </li>
              </ul>
              <p>
                We will use and retain the collected personal information as
                needed to provide the Services or for:
              </p>
              <ul>
                <li>Category A - As long as the user has an account with us</li>
              </ul>
              <ul>
                <li>Category B - As long as the user has an account with us</li>
              </ul>
              <ul>
                <li>Category F - As long as the user has an account with us</li>
              </ul>
              <ul>
                <li>Category G - As long as the user has an account with us</li>
              </ul>
              <h3>Sources of Personal Information</h3>
              <p>
                Learn more about the sources of personal information we collect
                in "
                <a
                  href="#infocollect"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  WHAT INFORMATION DO WE COLLECT?
                </a>
                ".
              </p>
              <h3>How We Use and Share Personal Information</h3>
              <p>
                Learn more about how we use your personal information in the
                section, "
                <a
                  href="#infouse"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  HOW DO WE PROCESS YOUR INFORMATION?
                </a>
                ".
              </p>
              <p>
                <strong>
                  Will your information be shared with anyone else?
                </strong>
              </p>
              <p>
                We may disclose your personal information with our service
                providers pursuant to a written contract between us and each
                service provider. Learn more about how we disclose personal
                information to in the section, "
                <a
                  href="#whoshare"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
                ".
              </p>
              <p>
                We may use your personal information for our own business
                purposes, such as for undertaking internal research for
                technological development and demonstration. This is not
                considered to be "selling" of your personal information.
              </p>
              <p>
                We have not sold or shared any personal information to third
                parties for a business or commercial purpose in the preceding
                twelve (12) months.&nbsp;We have disclosed the following
                categories of personal information to third parties for a
                business or commercial purpose in the preceding twelve (12)
                months:
              </p>
              <p>
                The categories of third parties to whom we disclosed personal
                information for a business or commercial purpose can be found
                under "
                <a
                  href="#whoshare"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
                ".
              </p>
              <h3>Your Rights</h3>
              <p>
                You have rights under certain US state data protection laws.
                However, these rights are not absolute, and in certain cases, we
                may decline your request as permitted by law. These rights
                include:
              </p>
              <ul>
                <li>
                  <strong>Right to know</strong> whether or not we are
                  processing your personal data
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Right to access&nbsp;</strong>your personal data
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Right to correct&nbsp;</strong>inaccuracies in your
                  personal data
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Right to request</strong> the deletion of your
                  personal data
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Right to obtain a copy&nbsp;</strong>of the personal
                  data you previously shared with us
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Right to non-discrimination</strong> for exercising
                  your rights
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Right to opt out</strong> of the processing of your
                  personal data if it is used for targeted advertising (or
                  sharing as defined under California’s privacy law), the sale
                  of personal data, or profiling in furtherance of decisions
                  that produce legal or similarly significant effects
                  ("profiling")
                </li>
              </ul>
              <p>
                Depending upon the state where you live, you may also have the
                following rights:
              </p>
              <ul>
                <li>
                  Right to access the categories of personal data being
                  processed (as permitted by applicable law, including the
                  privacy law in Minnesota)
                </li>
              </ul>
              <ul>
                <li>
                  Right to obtain a list of the categories of third parties to
                  which we have disclosed personal data (as permitted by
                  applicable law, including the privacy law in California,
                  Delaware, and Maryland)
                </li>
              </ul>
              <ul>
                <li>
                  Right to obtain a list of specific third parties to which we
                  have disclosed personal data (as permitted by applicable law,
                  including the privacy law in Minnesota and Oregon)
                </li>
              </ul>
              <ul>
                <li>
                  Right to review, understand, question, and correct how
                  personal data has been profiled (as permitted by applicable
                  law, including the privacy law in Minnesota)
                </li>
              </ul>
              <ul>
                <li>
                  Right to limit use and disclosure of sensitive personal data
                  (as permitted by applicable law, including the privacy law in
                  California)
                </li>
              </ul>
              <ul>
                <li>
                  Right to opt out of the collection of sensitive data and
                  personal data collected through the operation of a voice or
                  facial recognition feature (as permitted by applicable law,
                  including the privacy law in Florida)
                </li>
              </ul>
              <h3>How to Exercise Your Rights</h3>
              <p>
                To exercise these rights, you can contact us by visiting{' '}
                <a
                  href="https://autobuild.dev/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  https://autobuild.dev/contact
                </a>
                , by emailing us at{' '}
                <a
                  href="mailto:info@autobuild.dev"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  info@autobuild.dev
                </a>
                , or by visiting{' '}
                <a
                  href="https://autobuild.dev/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  https://autobuild.dev/contact
                </a>
                , or by referring to the contact details at the bottom of this
                document.
              </p>
              <p>
                Under certain US state data protection laws, you can designate
                an authorized agent to make a request on your behalf. We may
                deny a request from an authorized agent that does not submit
                proof that they have been validly authorized to act on your
                behalf in accordance with applicable laws.
              </p>
              <h3>Request Verification</h3>
              <p>
                Upon receiving your request, we will need to verify your
                identity to determine you are the same person about whom we have
                the information in our system. We will only use personal
                information provided in your request to verify your identity or
                authority to make the request. However, if we cannot verify your
                identity from the information already maintained by us, we may
                request that you provide additional information for the purposes
                of verifying your identity and for security or fraud-prevention
                purposes.
              </p>
              <p>
                If you submit the request through an authorized agent, we may
                need to collect additional information to verify your identity
                before processing your request and the agent will need to
                provide a written and signed permission from you to submit such
                request on your behalf.
              </p>
              <h3>Appeals</h3>
              <p>
                Under certain US state data protection laws, if we decline to
                take action regarding your request, you may appeal our decision
                by emailing us at{' '}
                <a
                  href="mailto:info@autobuild.dev"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  info@autobuild.dev
                </a>
                . We will inform you in writing of any action taken or not taken
                in response to the appeal, including a written explanation of
                the reasons for the decisions. If your appeal is denied, you may
                submit a complaint to your state attorney general.
              </p>
              <h3>California "Shine The Light" Law</h3>
              <p>
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us by using
                the contact details provided in the section "
                <a
                  href="#contact"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
                ".
              </p>

              <h2
                id="policyupdates"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                15. DO WE MAKE UPDATES TO THIS NOTICE?
              </h2>
              <p>
                <strong>
                  <em>In Short:&nbsp;</em>
                </strong>
                <em>
                  Yes, we will update this notice as necessary to stay compliant
                  with relevant laws.
                </em>
              </p>
              <p>
                We may update this Privacy Notice from time to time. The updated
                version will be indicated by an updated "Revised" date at the
                top of this Privacy Notice. If we make material changes to this
                Privacy Notice, we may notify you either by prominently posting
                a notice of such changes or by directly sending you a
                notification. We encourage you to review this Privacy Notice
                frequently to be informed of how we are protecting your
                information.
              </p>

              <h2
                id="contact"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </h2>
              <p>
                If you have questions or comments about this notice, you may
                contact us by post at:
              </p>
              <p>Hacket Services OÜ</p>
              <p>Sepapaja tn 6</p>
              <p>Lasnamäe linnaosa</p>
              <p>Tallinn, Harju maakond</p>
              <p>15551</p>
              <p>Estonia</p>

              <h2
                id="request"
                className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300"
              >
                17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </h2>
              <p>
                You have the right to request access to the personal information
                we collect from you, details about how we have processed it,
                correct inaccuracies, or delete your personal information. You
                may also have the right to withdraw your consent to our
                processing of your personal information. These rights may be
                limited in some circumstances by applicable law. To request to
                review, update, or delete your personal information, please
                visit:{' '}
                <a
                  href="https://autobuild.dev/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                >
                  https://autobuild.dev/contact
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Hacket Services OÜ. All rights
            reserved.
          </p>
          <div className="mt-2">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="/"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                Return to Autobuild
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

export const Head = () => (
  <SEO
    title="Privacy Policy - Autobuild"
    description="Privacy Policy for Hacket Services OÜ and the Autobuild platform."
  />
);
