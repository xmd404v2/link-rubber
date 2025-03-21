import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import Image from 'next/image';

export default function Settings() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-[#1f1f23] text-[#f5f5f7]">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center relative">
              <Image 
                src="/linkduck_logo.png" 
                alt="LinkDuck Logo" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 40px, 40px"
              />
            </div>
            <h1 className="text-2xl font-bold text-[#f5f5f7]">Settings</h1>
          </div>
          <Button className="bg-[#2a2a30] hover:bg-[#3a3a45] text-[#f5f5f7] border-[#3a3a45]" asChild>
            <Link href="/">Back to Dashboard</Link>
          </Button>
        </div>

        <Alert className="bg-[#2d2d35] border-[#3a3a45]">
          <AlertTitle className="text-[#f5f5f7]">Extension Settings</AlertTitle>
          <AlertDescription className="text-[#a0a0a7]">
            Changes made here will affect how the LinkDuck extension operates in your browser.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6">
          <Card className="bg-[#2a2a30] border-[#3a3a45] text-[#f5f5f7]">
            <CardHeader>
              <CardTitle className="text-[#f5f5f7]">General Settings</CardTitle>
              <CardDescription className="text-[#a0a0a7]">Configure basic extension behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="font-medium text-[#f5f5f7]">Enable Protection</h3>
                  <p className="text-sm text-[#a0a0a7]">Monitor all navigation events for safety checks</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#3a3a45]">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-[#d6ac25] transition"></span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-[#3a3a45]">
                <div>
                  <h3 className="font-medium text-[#f5f5f7]">Show Notifications</h3>
                  <p className="text-sm text-[#a0a0a7]">Display browser notifications for unsafe URLs</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#3a3a45]">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-[#d6ac25] transition"></span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-[#3a3a45]">
                <div>
                  <h3 className="font-medium text-[#f5f5f7]">Auto-proceed for Safe URLs</h3>
                  <p className="text-sm text-[#a0a0a7]">Skip confirmation for URLs detected as safe</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#3a3a45]">
                  <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-[#4a4a55] transition"></span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a30] border-[#3a3a45] text-[#f5f5f7]">
            <CardHeader>
              <CardTitle className="text-[#f5f5f7]">Security Settings</CardTitle>
              <CardDescription className="text-[#a0a0a7]">Configure security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="font-medium text-[#f5f5f7]">Security Level</h3>
                  <p className="text-sm text-[#a0a0a7]">Set how strict the URL safety checks should be</p>
                </div>
                <select className="rounded-md bg-[#3a3a45] border-[#4a4a55] text-[#f5f5f7] text-sm py-1 px-3">
                  <option>Standard</option>
                  <option>High</option>
                  <option>Maximum</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-[#3a3a45]">
                <div>
                  <h3 className="font-medium text-[#f5f5f7]">Trusted Domains</h3>
                  <p className="text-sm text-[#a0a0a7]">Websites that will bypass safety checks</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#2d2d35] hover:bg-[#3a3a45] text-[#f5f5f7] border-[#3a3a45]" size="sm">Manage</Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#2a2a30] border-[#3a3a45] text-[#f5f5f7]">
                    <DialogHeader>
                      <DialogTitle className="text-[#f5f5f7]">Trusted Domains</DialogTitle>
                      <DialogDescription className="text-[#a0a0a7]">
                        Add domains you trust to bypass safety checks.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[#f5f5f7]">example.com</span>
                          <Button className="bg-[#2d2d35] hover:bg-[#3a3a45] text-[#f5f5f7] border-[#3a3a45]" size="sm">Remove</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[#f5f5f7]">trusted-site.org</span>
                          <Button className="bg-[#2d2d35] hover:bg-[#3a3a45] text-[#f5f5f7] border-[#3a3a45]" size="sm">Remove</Button>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <input
                          type="text"
                          placeholder="Enter domain..."
                          className="flex-1 rounded-md bg-[#3a3a45] border-[#4a4a55] text-[#f5f5f7] px-3 py-2 text-sm"
                        />
                        <Button className="bg-[#d6ac25] hover:bg-[#b69321] text-white" size="sm">Add</Button>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button className="bg-[#2d2d35] hover:bg-[#3a3a45] text-[#f5f5f7] border-[#3a3a45]">Close</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-[#3a3a45]">
                <div>
                  <h3 className="font-medium text-[#f5f5f7]">Clear History</h3>
                  <p className="text-sm text-[#a0a0a7]">Remove all saved URL scan history</p>
                </div>
                <Button className="bg-[#2d2d35] hover:bg-[#3a3a45] text-[#f5f5f7] border-[#3a3a45]" size="sm">Clear</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a30] border-[#3a3a45] text-[#f5f5f7]">
            <CardHeader>
              <CardTitle className="text-[#f5f5f7]">API Settings</CardTitle>
              <CardDescription className="text-[#a0a0a7]">Configure URL scanning API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="font-medium text-[#f5f5f7]">Threat Intelligence Provider</h3>
                  <p className="text-sm text-[#a0a0a7]">Select which API to use for URL safety checks</p>
                </div>
                <select className="rounded-md bg-[#3a3a45] border-[#4a4a55] text-[#f5f5f7] text-sm py-1 px-3">
                  <option>URLscan.io</option>
                  <option>Google Safe Browsing</option>
                  <option>Custom API</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-[#3a3a45]">
                <div>
                  <h3 className="font-medium text-[#f5f5f7]">API Key</h3>
                  <p className="text-sm text-[#a0a0a7]">Your API key for the selected provider</p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value="••••••••••••••••"
                    className="w-40 rounded-md bg-[#3a3a45] border-[#4a4a55] text-[#f5f5f7] px-3 py-1 text-sm"
                    disabled
                  />
                  <Button className="bg-[#2d2d35] hover:bg-[#3a3a45] text-[#f5f5f7] border-[#3a3a45]" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#d6ac25] hover:bg-[#b69321] text-white">Save Settings</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
} 