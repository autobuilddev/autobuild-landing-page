import * as React from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Sparkles } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl">Autobuild</span>
          </div>
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
                Terms of Service
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                <strong>Last Updated: September 2, 2025</strong>
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mb-6">
                <p className="mb-0">
                  If you signed a separate Cover Page to access the Product with
                  the same account, and that agreement has not ended, the terms
                  below do not apply to you. Instead, your separate Cover Page
                  applies to your use of the Product.
                </p>
              </div>

              <p>
                This Agreement is between Hacket Services OÜ and the company or
                person accessing or using the Product. This Agreement consists
                of: (1) the Order Form below and (2) the Framework Terms defined
                below.
              </p>

              <p>
                If you are accessing or using the Product on behalf of your
                company, you represent that you are authorized to accept this
                Agreement on behalf of your company. By signing up, accessing,
                or using the Product, Customer indicates its acceptance of this
                Agreement and agrees to be bound by the terms and conditions of
                this Agreement.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-indigo-700 dark:text-indigo-300">
                Cover Page
              </h2>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 italic">
                  Order Form
                </h3>

                <div className="space-y-4">
                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Framework Terms:
                    </strong>{' '}
                    This Order Form incorporates and is governed by the
                    Framework Terms that are made up of the Key Terms below and
                    the Common Paper{' '}
                    <a
                      href="https://commonpaper.com/standards/cloud-service-agreement/2.1/"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cloud Service Agreement Standard Terms Version 2.1
                    </a>
                    , which are incorporated by reference. Any modifications to
                    the Standard Terms made in the Cover Page will control over
                    conflicts with the Standard Terms. Capitalized words have
                    the meanings given in the Cover Page or the Standard Terms.
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Cloud Service:
                    </strong>{' '}
                    A cloud service that provides an AI-guided software builder,
                    allowing users to describe app ideas and automatically
                    generate full-stack web applications, including interaction
                    design, user experience flows, and deployment tools, with
                    future support for mobile apps.
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Order Date:
                    </strong>{' '}
                    The Effective Date
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Subscription Period:
                    </strong>{' '}
                    1 month(s)
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Cloud Service Fees:
                    </strong>
                    <br />
                    Certain parts of the Product have different pricing plans,
                    which are available at Provider's{' '}
                    <a
                      href="https://autobuild.dev/pricing"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                    >
                      pricing page
                    </a>
                    . Customer will pay Provider the applicable Fees based on
                    the Product tier and Customer's usage. Provider may update
                    Product pricing by giving at least 3 days notice to Customer
                    (including by email or notification within the Product), and
                    the change will apply in the next Subscription Period.
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Payment Process:
                    </strong>
                    <br />
                    <em>Automatic payment:</em>
                    <br />
                    Customer authorizes Provider to bill and charge Customer's
                    payment method on file Monthly for immediate payment or
                    deduction without further approval.
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Non-Renewal Notice Period:
                    </strong>{' '}
                    At least 1 days before the end of the current Subscription
                    Period.
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Use Limitations:
                    </strong>{' '}
                    Use of the Cloud Service is subject to consumption limits
                    based on the number of credits included in the customer's
                    subscription plan. Once the included credits are consumed,
                    continued access to credit-metered features requires the
                    purchase of additional credits or an upgrade to a higher
                    plan. Credits expire at the end of each billing period and
                    do not roll over, unless otherwise specified in the Order
                    Form. Use of the Service is also subject to Provider's{' '}
                    <a
                      href="/acceptable-use-policy"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                    >
                      Acceptable Use Policy
                    </a>
                    .
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 italic">Key Terms</h3>

                <div className="space-y-4">
                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Customer:
                    </strong>{' '}
                    The company or person who accesses or uses the Product. If
                    the person accepting this Agreement is doing so on behalf of
                    a company, all use of the word "Customer" in the Agreement
                    will mean that company.
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Provider:
                    </strong>{' '}
                    Hacket Services OÜ
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Effective Date:
                    </strong>{' '}
                    The date Customer first accepts this Agreement.
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Governing Law:
                    </strong>{' '}
                    The laws of the State of Delaware
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Chosen Courts:
                    </strong>{' '}
                    The state or federal courts located in Delaware
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Covered Claims:
                    </strong>
                    <div className="ml-6 mt-2 space-y-2">
                      <div>
                        <strong>Provider Covered Claims:</strong> The Provider
                        does not provide any indemnity. Provider makes no
                        representations or warranties as to the non-infringement
                        of any code, designs, or content generated by the
                        Service. Customer is solely responsible for the review,
                        use, and distribution of outputs.
                      </div>
                      <div>
                        <strong>Customer Covered Claims:</strong> The Customer
                        will cover claims arising from (a) any content or data
                        the Customer uploads or provides to the Service, (b) use
                        of the Service or generated outputs in violation of
                        these Terms, including for unlawful purposes, or (c) any
                        combination of the Service with Customer's own software,
                        systems, or third- party services.
                      </div>
                    </div>
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      General Cap Amount:
                    </strong>
                    <br />
                    The fees paid or payable by Customer to provider in the 12
                    month period immediately before the claim
                  </div>

                  <div>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      Notice Address:
                    </strong>
                    <div className="ml-4 mt-2">
                      <div>
                        For Provider:{' '}
                        <a
                          href="mailto:info@autobuild.dev"
                          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline"
                        >
                          info@autobuild.dev
                        </a>
                      </div>
                      <div>
                        For Customer: The main email address on Customer's
                        account
                      </div>
                    </div>
                  </div>
                </div>
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

export default TermsOfService;

export const Head = () => (
  <SEO
    title="Terms of Service - Autobuild"
    description="Terms of Service for Hacket Services OÜ and the Autobuild platform."
  />
);
