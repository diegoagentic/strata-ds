import { CopyButton } from './CopyButton';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './ui/card';
import { Button } from './ui/button';
import { CodeViewer } from './CodeViewer';

export function CardsView() {
    return (
        <div className="space-y-12">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                    Cards
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-4xl">
                    Versatile layout containers for grouping code, data, and content.
                </p>
            </div>

            {/* Default Card */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                        Default Card
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Standard card with a subtle border and shadow.
                    </p>
                </div>

                <div className="p-12 bg-zinc-50 dark:bg-zinc-950/50 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-8">
                    <Card className="max-w-[350px]">
                        <CardHeader>
                            <CardTitle>Project Details</CardTitle>
                            <CardDescription>View and manage project settings</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                This project is currently active and visible to all team members.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">View Settings</Button>
                        </CardFooter>
                    </Card>
                </div>

                <CodeViewer
                    react={`<Card className="max-w-[350px]">
  <CardHeader>
    <CardTitle>Project Details</CardTitle>
    <CardDescription>View and manage project settings</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      This project is currently active and visible to all team members.
    </p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" className="w-full">View Settings</Button>
  </CardFooter>
</Card>`}
                    html=""
                    css=""
                    prompt="Create a card with header, content, and footer actions."
                />
            </section>

            {/* Brand Card */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                        Brand Card
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Card variant that uses the brand color for background and borders to emphasize important content.
                    </p>
                </div>

                <div className="p-12 bg-zinc-50 dark:bg-zinc-950/50 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-8">
                    <Card variant="brand" className="max-w-[350px]">
                        <CardHeader>
                            <CardTitle>Premium Feature</CardTitle>
                            <CardDescription>Upgrade to access exclusive tools</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-900 dark:text-zinc-100">
                                Unlock advanced analytics and priority support with our Pro plan.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="brand" className="w-full">Upgrade Now</Button>
                        </CardFooter>
                    </Card>
                </div>

                <CodeViewer
                    react={`<Card variant="brand" className="max-w-[350px]">
  <CardHeader>
    <CardTitle>Premium Feature</CardTitle>
    <CardDescription>Upgrade to access exclusive tools</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-zinc-900 dark:text-zinc-100">
      Unlock advanced analytics and priority support with our Pro plan.
    </p>
  </CardContent>
  <CardFooter>
    <Button variant="brand" className="w-full">Upgrade Now</Button>
  </CardFooter>
</Card>`}
                    html=""
                    css=""
                    prompt="Create a branded card with lime background and brand button."
                />
            </section>

            {/* Flat & Glass Cards */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                        Other Variants
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Flat cards for lower prominence and Glass cards for overlays.
                    </p>
                </div>

                <div className="p-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-8 items-start relative overflow-hidden">
                    {/* Background used for Glass effect demo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />

                    <Card variant="flat" className="max-w-[350px] relative z-10">
                        <CardHeader>
                            <CardTitle>Flat Card</CardTitle>
                            <CardDescription>No shadow, subtle border</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Useful for grid layouts or dashboard widgets where high contrast isn't needed.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="glass" className="max-w-[350px] relative z-10">
                        <CardHeader>
                            <CardTitle>Glass Card</CardTitle>
                            <CardDescription>Blur effect with transparency</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Perfect for floating panels or content over rich backgrounds.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <CodeViewer
                    react={`{/* Flat Card */}
<Card variant="flat" className="max-w-[350px]">
  <CardHeader>
    <CardTitle>Flat Card</CardTitle>
    <CardDescription>No shadow, subtle border</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      Useful for grid layouts or dashboard widgets where high contrast isn't needed.
    </p>
  </CardContent>
</Card>

{/* Glass Card */}
<Card variant="glass" className="max-w-[350px]">
  <CardHeader>
    <CardTitle>Glass Card</CardTitle>
    <CardDescription>Blur effect with transparency</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      Perfect for floating panels or content over rich backgrounds.
    </p>
  </CardContent>
</Card>`}
                    html=""
                    css=""
                    prompt="Generate flat and glass card variants."
                />
            </section>
        </div>
    );
}
