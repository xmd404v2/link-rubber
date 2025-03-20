import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

export default function Settings() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-50">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              LR
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">Back to Dashboard</Link>
          </Button>
        </div>

        <Alert className="bg-amber-50 border-amber-200">
          <AlertTitle className="text-amber-800">Extension Settings</AlertTitle>
          <AlertDescription className="text-amber-700">
            Changes made here will affect how the Link Rubber extension operates in your browser.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic extension behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="font-medium">Enable Protection</h3>
                  <p className="text-sm text-gray-600">Monitor all navigation events for safety checks</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-indigo-600 transition"></span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="font-medium">Show Notifications</h3>
                  <p className="text-sm text-gray-600">Display browser notifications for unsafe URLs</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-indigo-600 transition"></span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="font-medium">Auto-proceed for Safe URLs</h3>
                  <p className="text-sm text-gray-600">Skip confirmation for URLs detected as safe</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                  <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-gray-400 transition"></span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="font-medium">Security Level</h3>
                  <p className="text-sm text-gray-600">Set how strict the URL safety checks should be</p>
                </div>
                <select className="rounded-md border-gray-300 text-sm py-1 px-3">
                  <option>Standard</option>
                  <option>High</option>
                  <option>Maximum</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="font-medium">Trusted Domains</h3>
                  <p className="text-sm text-gray-600">Websites that will bypass safety checks</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">Manage</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Trusted Domains</DialogTitle>
                      <DialogDescription>
                        Add domains you trust to bypass safety checks.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">example.com</span>
                          <Button variant="outline" size="sm">Remove</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">trusted-site.org</span>
                          <Button variant="outline" size="sm">Remove</Button>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <input
                          type="text"
                          placeholder="Enter domain..."
                          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                        />
                        <Button size="sm">Add</Button>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Close</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="font-medium">Clear History</h3>
                  <p className="text-sm text-gray-600">Remove all saved URL scan history</p>
                </div>
                <Button variant="outline" size="sm">Clear</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>Configure URL scanning API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="font-medium">Threat Intelligence Provider</h3>
                  <p className="text-sm text-gray-600">Select which API to use for URL safety checks</p>
                </div>
                <select className="rounded-md border-gray-300 text-sm py-1 px-3">
                  <option>URLscan.io</option>
                  <option>Google Safe Browsing</option>
                  <option>Custom API</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="font-medium">API Key</h3>
                  <p className="text-sm text-gray-600">Your API key for the selected provider</p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value="••••••••••••••••"
                    className="w-40 rounded-md border border-gray-300 px-3 py-1 text-sm"
                    disabled
                  />
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Save Settings</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
} 