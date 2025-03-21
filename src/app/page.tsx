import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#1f1f23] text-[#f5f5f7]">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center relative">
            <Image 
              src="/linkduck_logo.png" 
              alt="LinkDuck Logo" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48px, 48px"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#f5f5f7]">LinkDuck</h1>
        </div>
        
        <div className="text-center">
          <p className="text-[#a0a0a7] max-w-lg mx-auto">
            Advanced URL safety checking for secure browsing. Protect yourself from phishing attacks and dangerous websites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-[#2a2a30] border-[#3a3a45] text-[#f5f5f7]">
            <CardHeader>
              <CardTitle className="text-[#f5f5f7]">Real-time Scanning</CardTitle>
              <CardDescription className="text-[#a0a0a7]">Check URLs as you browse</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#a0a0a7]">
                LinkDuck scans every URL you visit in real-time, providing immediate safety feedback before you access potentially harmful content.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a30] border-[#3a3a45] text-[#f5f5f7]">
            <CardHeader>
              <CardTitle className="text-[#f5f5f7]">User Control</CardTitle>
              <CardDescription className="text-[#a0a0a7]">You make the final decision</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#a0a0a7]">
                We provide safety information, but you maintain control. Choose whether to proceed to any website after reviewing our safety assessment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a30] border-[#3a3a45] text-[#f5f5f7]">
            <CardHeader>
              <CardTitle className="text-[#f5f5f7]">Threat Intelligence</CardTitle>
              <CardDescription className="text-[#a0a0a7]">Powered by security data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#a0a0a7]">
                LinkDuck leverages advanced threat intelligence to identify malicious websites, phishing attempts, and other online dangers.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-[#3a3a45] bg-[#2d2d35]">
          <CardHeader>
            <CardTitle className="text-[#f5f5f7]">How LinkDuck Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#d6ac25] text-white flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="font-medium text-[#f5f5f7]">Intercept Navigation</h3>
                <p className="text-sm text-[#a0a0a7]">
                  When you click a link, LinkDuck intercepts the navigation event before the page loads.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#d6ac25] text-white flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="font-medium text-[#f5f5f7]">Scan the URL</h3>
                <p className="text-sm text-[#a0a0a7]">
                  The URL is quickly scanned using advanced threat intelligence to determine its safety status.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#d6ac25] text-white flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="font-medium text-[#f5f5f7]">Review & Decide</h3>
                <p className="text-sm text-[#a0a0a7]">
                  You&apos;re shown the safety verdict and can choose to proceed or cancel the navigation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#f5f5f7]">Ready to browse safer?</h2>
          <p className="text-[#a0a0a7] max-w-lg mx-auto">
            LinkDuck is now protecting your browser. Return to your browsing and experience safer navigation.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#d6ac25] hover:bg-[#b69321] text-white">
              <Link href="https://github.com/xmd404v2/link-rubber" target="_blank" className="text-white">
                View on GitHub
              </Link>
            </Button>
            <Button className="bg-[#2a2a30] hover:bg-[#3a3a45] text-[#f5f5f7] border-[#3a3a45]">
              <Link href="/settings" className="text-[#f5f5f7]">
                Extension Settings
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
