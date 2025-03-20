import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4">
            LR
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Link Rubber</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Advanced URL safety checking for secure browsing. Protect yourself from phishing attacks and dangerous websites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Real-time Scanning</CardTitle>
              <CardDescription>Check URLs as you browse</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Link Rubber scans every URL you visit in real-time, providing immediate safety feedback before you access potentially harmful content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Control</CardTitle>
              <CardDescription>You make the final decision</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                We provide safety information, but you maintain control. Choose whether to proceed to any website after reviewing our safety assessment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Threat Intelligence</CardTitle>
              <CardDescription>Powered by security data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Link Rubber leverages advanced threat intelligence to identify malicious websites, phishing attempts, and other online dangers.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-indigo-100 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-700">How Link Rubber Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="font-medium text-indigo-900">Intercept Navigation</h3>
                <p className="text-sm text-indigo-700">
                  When you click a link, Link Rubber intercepts the navigation event before the page loads.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="font-medium text-indigo-900">Scan the URL</h3>
                <p className="text-sm text-indigo-700">
                  The URL is quickly scanned using advanced threat intelligence to determine its safety status.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="font-medium text-indigo-900">Review & Decide</h3>
                <p className="text-sm text-indigo-700">
                  You&apos;re shown the safety verdict and can choose to proceed or cancel the navigation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Ready to browse safer?</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Link Rubber is now protecting your browser. Return to your browsing and experience safer navigation.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="https://github.com/yourusername/link-rubber" target="_blank" className="text-white">
                View on GitHub
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/settings" className="text-indigo-600">
                Extension Settings
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
