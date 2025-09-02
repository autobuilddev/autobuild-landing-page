import * as React from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Sparkles } from 'lucide-react';

const AcceptableUsePolicy = () => {
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
                Acceptable Use Policy
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                <strong>Last updated: September 2, 2025</strong>
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mb-6">
                <p className="mb-0">
                  This Acceptable Use Policy ("Policy") is part of our Terms of
                  Service ("Legal Terms") and should therefore be read alongside
                  our main Legal Terms:{' '}
                  <a
                    href="https://autobuild.dev/terms-of-service"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://autobuild.dev/terms-of-service
                  </a>
                  .
                </p>
              </div>

              <p>
                When you use the AI-powered services provided by Hacket Services
                OÜ ("AI Products"), you warrant that you will comply with this
                document, our Legal Terms and all applicable laws and
                regulations governing AI. Your usage of our AI Products
                signifies your agreement to engage with our platform in a
                lawful, ethical, and responsible manner that respects the rights
                and dignity of all individuals. If you do not agree with these
                Legal Terms, please refrain from using our Services. Your
                continued use of our Services implies acceptance of these Legal
                Terms.
              </p>

              <p>
                Please carefully review this Policy which applies to any and
                all:
              </p>

              <div className="space-y-2 mb-6 ml-6">
                <p>(a) uses of our Services (as defined in "Legal Terms")</p>
                <p>
                  (b) forms, materials, consent tools, comments, post, and all
                  other content available on the Services ("Content")
                </p>
                <p>
                  (c) material which you contribute to the Services including
                  any upload, post, review, disclosure, ratings, comments, chat
                  etc. in any forum, chatrooms, reviews, and to any interactive
                  services associated with it ("Contribution")
                </p>
                <p>
                  (d) responsible implementation and management of AI Products
                  within our Services
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                Who We Are
              </h2>

              <p>
                We are Hacket Services OÜ, doing business as Autobuild
                ("Company," "we," "us," or "our") a company registered in
                Estonia at Sepapaja tn 6, Lasnamäe linnaosa, Tallinn, Harju
                maakond 15551. We operate the website{' '}
                <a
                  href="https://autobuild.dev"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://autobuild.dev
                </a>{' '}
                (the "Site"), as well as any other related products and services
                that refer or link to this Policy (collectively, the
                "Services").
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                Use of the Services
              </h2>

              <p>
                When you use the Services, you warrant that you will comply with
                this Policy and with all applicable laws.
              </p>

              <p>You also acknowledge that you may not:</p>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li>
                    Systematically retrieve data or other content from the
                    Services to create or compile, directly or indirectly, a
                    collection, compilation, database, or directory without
                    written permission from us.
                  </li>
                  <li>
                    Make any unauthorized use of the Services, including
                    collecting usernames and/or email addresses of users by
                    electronic or other means for the purpose of sending
                    unsolicited email, or creating user accounts by automated
                    means or under false pretenses.
                  </li>
                  <li>
                    Circumvent, disable, or otherwise interfere with
                    security-related features of the Services, including
                    features that prevent or restrict the use or copying of any
                    Content or enforce limitations on the use of the Services
                    and/or the Content contained therein.
                  </li>
                  <li>
                    Engage in unauthorized framing of or linking to the
                    Services.
                  </li>
                  <li>
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </li>
                  <li>
                    Make improper use of our Services, including our support
                    services or submit false reports of abuse or misconduct.
                  </li>
                  <li>
                    Engage in any automated use of the Services, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </li>
                  <li>
                    Interfere with, disrupt, or create an undue burden on the
                    Services or the networks or the Services connected.
                  </li>
                  <li>
                    Attempt to impersonate another user or person or use the
                    username of another user.
                  </li>
                  <li>
                    Use any information obtained from the Services in order to
                    harass, abuse, or harm another person.
                  </li>
                  <li>
                    Use the Services as part of any effort to compete with us or
                    otherwise use the Services and/or the Content for any
                    revenue-generating endeavor or commercial enterprise.
                  </li>
                  <li>
                    Decipher, decompile, disassemble, or reverse engineer any of
                    the software comprising or in any way making up a part of
                    the Services, except as expressly permitted by applicable
                    law.
                  </li>
                  <li>
                    Attempt to bypass any measures of the Services designed to
                    prevent or restrict access to the Services, or any portion
                    of the Services.
                  </li>
                  <li>
                    Harass, annoy, intimidate, or threaten any of our employees
                    or agents engaged in providing any portion of the Services
                    to you.
                  </li>
                  <li>
                    Delete the copyright or other proprietary rights notice from
                    any Content.
                  </li>
                  <li>
                    Copy or adapt the Services' software, including but not
                    limited to Flash, PHP, HTML, JavaScript, or other code.
                  </li>
                  <li>
                    Upload or transmit (or attempt to upload or to transmit)
                    viruses, Trojan horses, or other material, including
                    excessive use of capital letters and spamming (continuous
                    posting of repetitive text), that interferes with any
                    party's uninterrupted use and enjoyment of the Services or
                    modifies, impairs, disrupts, alters, or interferes with the
                    use, features, functions, operation, or maintenance of the
                    Services.
                  </li>
                  <li>
                    Upload or transmit (or attempt to upload or to transmit) any
                    material that acts as a passive or active information
                    collection or transmission mechanism, including without
                    limitation, clear graphics interchange formats ("gifs"), 1×1
                    pixels, web bugs, cookies, or other similar devices
                    (sometimes referred to as "spyware" or "passive collection
                    mechanisms" or "pcms").
                  </li>
                  <li>
                    Except as may be the result of standard search engine or
                    Internet browser usage, use, launch, develop, or distribute
                    any automated system, including without limitation, any
                    spider, robot, cheat utility, scraper, or offline reader
                    that accesses the Services, or using or launching any
                    unauthorized script or other software.
                  </li>
                  <li>
                    Disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Services.
                  </li>
                  <li>
                    Use the Services in a manner inconsistent with any
                    applicable laws or regulations.
                  </li>
                  <li>
                    Use a buying agent or purchasing agent to make purchases on
                    the Services.
                  </li>
                  <li>Sell or otherwise transfer your profile.</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4 text-indigo-600 dark:text-indigo-400">
                Subscriptions
              </h3>

              <p>
                If you subscribe to our Services, you understand, acknowledge,
                and agree that you may not, except if expressly permitted:
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li>
                    Engage in any use, including modification, copying,
                    redistribution, publication, display, performance, or
                    retransmission, of any portions of any Services, other than
                    as expressly permitted by this Policy, without the prior
                    written consent of Hacket Services OÜ, which consent Hacket
                    Services OÜ may grant or refuse in its sole and absolute
                    discretion.
                  </li>
                  <li>
                    Reconstruct or attempt to discover any source code or
                    algorithms of the Services, or any portion thereof, by any
                    means whatsoever.
                  </li>
                  <li>
                    Provide, or otherwise make available, the Services to any
                    third party.
                  </li>
                  <li>Intercept any data not intended for you.</li>
                  <li>
                    Damage, reveal, or alter any user's data, or any other
                    hardware, software, or information relating to another
                    person or entity.
                  </li>
                  <li>
                    Attempting to gain unauthorized access to any accounts,
                    systems, or data not belonging to the user.
                  </li>
                  <li>
                    Sharing, reselling, or transferring login credentials, API
                    keys, or access tokens outside the user's organization.
                  </li>
                  <li>
                    Circumventing or attempting to bypass usage limits, rate
                    limits, or billing mechanisms.
                  </li>
                  <li>
                    Running automated scripts, bots, or processes that place
                    excessive load on the Services or disrupt availability.
                  </li>
                  <li>
                    Uploading, generating, or transmitting unlawful, infringing,
                    harmful, or abusive content.
                  </li>
                  <li>
                    Using the Services to infringe upon or violate the
                    intellectual property rights of others.
                  </li>
                  <li>
                    Using the Services for fraudulent, deceptive, or malicious
                    purposes, including phishing or impersonation.
                  </li>
                  <li>
                    Employing the Services to build or distribute malware, spam
                    tools, or scraping systems that violate third-party terms.
                  </li>
                  <li>
                    Attempting to disable, remove, or interfere with any
                    security or monitoring features of the Services.
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4 text-indigo-600 dark:text-indigo-400">
                AI Products
              </h3>

              <p>
                When you use the AI Products provided by Hacket Services OÜ, you
                warrant that you will not:
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li>
                    Deploy AI techniques that utilize subliminal, manipulative,
                    or deceptive methods designed to distort behavior and impair
                    informed decision-making, particularly when such actions
                    cause significant harm to individuals.
                  </li>
                  <li>
                    Exploit vulnerabilities related to age, disability, or
                    socio-economic circumstances through AI in a way that
                    distorts behavior or decision-making, especially if this
                    results in significant harm to the individual.
                  </li>
                  <li>
                    Use AI systems for biometric categorization that infer
                    sensitive attributes such as race, political opinions, trade
                    union membership, religious or philosophical beliefs, sex
                    life, or sexual orientation, except in limited cases, such
                    as labeling or filtering lawfully acquired datasets, or
                    specific law enforcement activities.
                  </li>
                  <li>
                    Implement AI-based social scoring systems that evaluate or
                    classify individuals or groups based on their social
                    behavior or personal traits in a manner that causes harm,
                    discrimination, or unfair treatment.
                  </li>
                  <li>
                    Assess the risk of an individual committing criminal
                    offenses based solely on profiling, personality traits, or
                    other non-behavioral factors, except in narrowly defined
                    circumstances where legal safeguards are in place.
                  </li>
                  <li>
                    Not compile facial recognition databases through untargeted
                    scraping of facial images from the internet, social media,
                    or CCTV footage, unless it is part of a legally compliant
                    and narrowly defined purpose.
                  </li>
                  <li>
                    Use AI to infer emotions in sensitive environments such as
                    workplaces, educational institutions, or any other context
                    where such analysis could lead to discrimination, unfair
                    treatment, or privacy violations.
                  </li>
                  <li>
                    Engage in real-time remote biometric identification in
                    public places for law enforcement purposes, except in
                    specific situations where there are strong legal
                    justifications and oversight mechanisms.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                Artificial Intelligence
              </h2>

              <p>
                We recognize the significant impact AI can have on our users and
                society, and we are dedicated to ensuring that our AI Products
                are designed and operated in a manner that aligns with
                comprehensive ethical standards. We aim to use AI to enhance
                user experiences while upholding fairness, transparency, and
                accountability principles.
              </p>

              <p>
                This Policy applies to all AI-powered features, services, and
                systems in our Services. It governs the development, deployment,
                and use of AI technologies to protect users' rights and maintain
                transparency in all AI operations. This Policy applies to all
                stakeholders, including employees, third-party vendors, and
                partners who contribute to or interact with our AI Products.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-4 text-indigo-600 dark:text-indigo-400">
                Enforcement
              </h3>

              <p>
                Any misuse of our AI Products or failure to adhere to the
                standards outlined in this Policy will result in appropriate
                actions to ensure the integrity of our platform and the
                protection of our users. The specific consequences for misuse of
                AI may vary depending on the nature and severity of the
                violation and the user's history with our Services.
              </p>

              <p>Violations may include, but are not limited to:</p>

              <ul className="space-y-2 mb-4">
                <li>
                  Engaging the AI Products in ways that violate user privacy,
                  manipulate data, disregard ethical guidelines, or are against
                  AI Service Providers' terms of use.
                </li>
                <li>
                  Deploying AI in a manner that introduces or causes bias,
                  leading to unfair treatment of users or groups.
                </li>
                <li>
                  Improper handling, storage, or use of data by AI Products,
                  leading to breaches of user trust and legal compliance.
                </li>
                <li>
                  Using AI in a way that compromises the privacy and security of
                  our systems, data, or users.
                </li>
              </ul>

              <p>
                Depending on the violation, Hacket Services OÜ may take one or
                more of the following actions:
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li>
                    <strong>Warnings:</strong> The responsible party may receive
                    a formal warning and be required to cease violating
                    practices.
                  </li>
                  <li>
                    <strong>Temporary Suspension:</strong> In cases of repeated
                    or more severe violations, the responsible individual's
                    access to AI Products or certain features of our platform
                    may be temporarily suspended while the issue is
                    investigated.
                  </li>
                  <li>
                    <strong>Termination of Access:</strong> Serious violations,
                    particularly those that result in harm to users or breach
                    privacy or other regulations, may lead to the permanent
                    termination of access to our AI Products and Services.
                  </li>
                  <li>
                    <strong>Legal Action:</strong> In cases where the misuse of
                    AI leads to significant harm, data breaches, or legal
                    violations, we may pursue legal action against the party
                    responsible. This could include reporting the incident to
                    law enforcement or regulatory bodies.
                  </li>
                  <li>
                    <strong>Public Disclosure:</strong> For incidents that
                    impact public trust or involve severe ethical breaches, we
                    reserve the right to publicly disclose the violation and the
                    actions taken in response to maintain transparency and
                    accountability.
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4 text-indigo-600 dark:text-indigo-400">
                Commitment to Responsible AI
              </h3>

              <p>
                In addition to the consequences outlined above, we are deeply
                committed to repairing any harm caused by the misuse of AI. This
                commitment is a testament to our dedication to our users and our
                responsibility as a company. We will correct biased outcomes and
                implement additional safeguards to prevent future violations.
              </p>

              <p>
                At Hacket Services OÜ, we are committed to the ongoing
                refinement and enhancement of our Policy. As technology evolves
                and regulatory environments shift, we recognize the importance
                of keeping our policies up to date to ensure that they remain
                relevant, effective, and aligned with best practices in AI
                ethics. We will regularly review and update our Policy to
                reflect technological advancements and legal changes in local,
                national, and international regulations related to AI. Our
                Policy will be updated as needed to comply with new laws and
                guidelines, ensuring that our practices remain legally sound and
                socially responsible.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                Contributions
              </h2>

              <p>In this Policy, the term "Contributions" means:</p>

              <ul className="space-y-2 mb-4">
                <li>
                  any data, information, software, text, code, music, scripts,
                  sound, graphics, photos, videos, tags, messages, interactive
                  features, or other materials that you post, share, upload,
                  submit, or otherwise provide in any manner on or through to
                  the Services; or
                </li>
                <li>
                  any other content, materials, or data you provide to Hacket
                  Services OÜ or use with the Services.
                </li>
              </ul>

              <p>
                Some areas of the Services may allow users to upload, transmit,
                or post Contributions. We may but are under no obligation to
                review or moderate the Contributions made on the Services, and
                we expressly exclude our liability for any loss or damage
                resulting from any of our users' breach of this Policy. Please
                report any Contribution that you believe breaches this Policy;
                however, we will determine, in our sole discretion, whether a
                Contribution is indeed in breach of this Policy.
              </p>

              <p>You warrant that:</p>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li>
                    you are the creator and owner of or have the necessary
                    licenses, rights, consents, releases, and permissions to use
                    and to authorize us, the Services, and other users of the
                    Services to use your Contributions in any manner
                    contemplated by the Services and this Policy;
                  </li>
                  <li>
                    all your Contributions comply with applicable laws and are
                    original and true (if they represent your opinion or facts);
                  </li>
                  <li>
                    the creation, distribution, transmission, public display, or
                    performance, and the accessing, downloading, or copying of
                    your Contributions do not and will not infringe the
                    proprietary rights, including but not limited to the
                    copyright, patent, trademark, trade secret, or moral rights
                    of any third party; and
                  </li>
                  <li>
                    you have the verifiable consent, release, and/or permission
                    of each and every identifiable individual person in your
                    Contributions to use the name or likeness of each and every
                    such identifiable individual person to enable inclusion and
                    use of your Contributions in any manner contemplated by the
                    Services and this Policy.
                  </li>
                </ul>
              </div>

              <p>
                You also agree that you will not post, transmit, or upload any
                (or any part of a) Contribution that:
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li>
                    is in breach of applicable laws, regulation, court order,
                    contractual obligation, this Policy, our Legal Terms, a
                    legal duty, or that promotes or facilitates fraud or illegal
                    activities;
                  </li>
                  <li>
                    is defamatory, obscene, offensive, hateful, insulting,
                    intimidating, bullying, abusive, or threatening, to any
                    person or group;
                  </li>
                  <li>is false, inaccurate, or misleading;</li>
                  <li>
                    includes child sexual abuse material, or violates any
                    applicable law concerning child pornography or otherwise
                    intended to protect minors;
                  </li>
                  <li>
                    contains any material that solicits personal information
                    from anyone under the age of 18 or exploits people under the
                    age of 18 in a sexual or violent manner;
                  </li>
                  <li>
                    promotes violence, advocates the violent overthrow of any
                    government, or incites, encourages, or threatens physical
                    harm against another;
                  </li>
                  <li>
                    is obscene, lewd, lascivious, filthy, violent, harassing,
                    libelous, slanderous, contains sexually explicit material,
                    or is otherwise objectionable (as determined by us);
                  </li>
                  <li>
                    is discriminatory based on race, sex, religion, nationality,
                    disability, sexual orientation, or age;
                  </li>
                  <li>
                    bullies, intimidates, humiliates, or insults any person;
                  </li>
                  <li>
                    promotes, facilitates, or assists anyone in promoting and
                    facilitating acts of terrorism;
                  </li>
                  <li>
                    infringes, or assists anyone in infringing, a third party's
                    intellectual property rights or publicity or privacy rights;
                  </li>
                  <li>
                    is deceitful, misrepresents your identity or affiliation
                    with any person and/or misleads anyone as to your
                    relationship with us or implies that the Contribution was
                    made by someone else than you;
                  </li>
                  <li>
                    contains unsolicited or unauthorized advertising,
                    promotional materials, pyramid schemes, chain letters, spam,
                    mass mailings, or other forms of solicitation that has been
                    "paid for," whether with monetary compensation or in kind;
                    or
                  </li>
                  <li>
                    misrepresents your identity or who the Contribution is from.
                  </li>
                </ul>
              </div>

              <p>
                You may not use our Services to offer, present, promote, sell,
                give away or otherwise make available to others any good or
                service involving:
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <ul className="space-y-3">
                  <li>
                    items that promote, encourage, facilitate, or instruct
                    others how to engage in illegal activity,
                  </li>
                  <li>cigarettes,</li>
                  <li>
                    controlled substances and/or other products that present a
                    risk to consumer safety, narcotics, steroids, drug
                    paraphernalia,
                  </li>
                  <li>
                    specific knives or other weapons regulated under applicable
                    law,
                  </li>
                  <li>
                    firearms, ammunition, or certain firearm parts or
                    accessories,
                  </li>
                  <li>certain sexually oriented materials or services,</li>
                  <li>
                    certain items before the seller has control or possession of
                    the item,
                  </li>
                  <li>stolen goods,</li>
                  <li>
                    products or services identified by government agencies to be
                    highly likely to be fraudulent, and
                  </li>
                  <li>
                    any transaction or activity that requires pre-approval
                    without having obtained said approval.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                Reporting a Breach of this Policy
              </h2>

              <p>
                We may but are under no obligation to review or moderate the
                Contributions made on the Services and we expressly exclude our
                liability for any loss or damage resulting from any of our
                users' breach of this Policy.
              </p>

              <p>If you consider that any Service, Content, or Contribution:</p>

              <ul className="space-y-2 mb-6">
                <li>
                  breach this Policy, please refer to the contact details at the
                  bottom of this document to let us know which Service, Content,
                  or Contribution is in breach of this Policy and why
                </li>
                <li>
                  infringe any third-party intellectual property rights, please
                  contact us using the details provided at the bottom of this
                  document
                </li>
                <li>
                  users can also send detailed feedback on their interactions
                  with our AI Products by emailing{' '}
                  <a
                    href="mailto:info@autobuild.dev"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                  >
                    info@autobuild.dev
                  </a>
                  , or referring to the contact details at the bottom of this
                  document. You should include specific details about the AI
                  interaction, such as the context, the nature of the concern,
                  and any relevant screenshots or documentation
                </li>
              </ul>

              <p>
                We will reasonably determine whether a Service, Content, or
                Contribution breaches this Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                Consequences of Breaching this Policy
              </h2>

              <p>
                The consequences for violating our Policy will vary depending on
                the severity of the breach and the user's history on the
                Services, by way of example:
              </p>

              <p>
                We may, in some cases, give you a warning and/or remove the
                infringing Contribution, however, if your breach is serious or
                if you continue to breach our Legal Terms and this Policy, we
                have the right to suspend or terminate your access to and use of
                our Services and, if applicable, disable your account. We may
                also notify law enforcement or issue legal proceedings against
                you when we believe that there is a genuine risk to an
                individual or a threat to public safety.
              </p>

              <p>
                We exclude our liability for all action we may take in response
                to any of your breaches of this Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                Disclaimer
              </h2>

              <p>
                Hacket Services OÜ is under no obligation to monitor users'
                activities, and we disclaim any responsibility for any user's
                misuse of the Services. Hacket Services OÜ has no responsibility
                for any user or other Content or Contribution created,
                maintained, stored, transmitted, or accessible on or through the
                Services, and is not obligated to monitor or exercise any
                editorial control over such material. If Hacket Services OÜ
                becomes aware that any such Content or Contribution violates
                this Policy, Hacket Services OÜ may, in addition to removing
                such Content or Contribution and blocking your account, report
                such breach to the police or appropriate regulatory authority.
                Unless otherwise stated in this Policy, Hacket Services OÜ
                disclaims any obligation to any person who has not entered into
                an agreement with Hacket Services OÜ for the use of the
                Services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                How Can You Contact Us About this Policy?
              </h2>

              <p>
                If you have any further questions or comments or wish to report
                any problematic Content or Contribution, you may contact us by:
              </p>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mt-4">
                <p className="mb-0">
                  Email:{' '}
                  <a
                    href="mailto:info@autobuild.dev"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                  >
                    info@autobuild.dev
                  </a>
                </p>
              </div>
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

export default AcceptableUsePolicy;

export const Head = () => (
  <SEO
    title="Acceptable Use Policy - Autobuild"
    description="Acceptable Use Policy for Hacket Services OÜ and the Autobuild platform."
  />
);
