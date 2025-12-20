import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Logo } from '@/components/icons/Logo';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const iconUrl = (name: string) => `https://img.icons8.com/fluency/48/000000/${name}.png`;

const tools = [
    { name: 'Canva', icon: 'canva-app.png' },
    { name: 'ChatGPT', icon: 'chatgpt.png' },
    { name: 'DaVinci Resolve', icon: 'davinci-resolve.png' },
    { name: 'Visual Studio Code', icon: 'visual-studio-code-2019.png' },
    { name: 'Framer', icon: 'framer.png' },
    { name: 'Google', icon: 'google-logo.png' },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Flowva</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="#"
                className="flex items-center text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Hub <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Support <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center text-foreground/60 transition-colors hover:text-foreground/80"
              >
                Community <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
             <Link href="/login">
                <Button variant="ghost">Login</Button>
             </Link>
             <Link href="/login">
                <Button>Sign Up</Button>
             </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container relative px-4 pb-12 pt-20 text-center md:px-8">
          <section className="mx-auto max-w-3xl">
            <div className="mb-8 flex justify-center space-x-2">
                <Button variant="secondary" className="rounded-full">For users</Button>
                <Button variant="ghost" className="rounded-full">For brands</Button>
            </div>

            <h1 className="mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              YOUR{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SMART
              </span>{' '}
              SPACE TO MANAGE YOUR DIGITAL LIFE AND BE REWARDED
            </h1>
            
            <Link href="/login">
              <Button size="lg" className="rounded-full">
                Start Earning Today
              </Button>
            </Link>
          </section>

          <section className="mt-16">
             <div className="flex justify-center">
                 <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-6">
                    {tools.map((tool) => (
                        <div key={tool.name} className="flex items-center justify-center">
                            <Image src={iconUrl(tool.icon)} alt={tool.name} width={64} height={64} className="h-16 w-16 rounded-2xl bg-white p-2 shadow-sm" />
                        </div>
                    ))}
                </div>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-xl">
             <p className="text-xl text-muted-foreground">
                Turn productivity into rewards with a calm, smart space that organizes your tools, and keeps you in control.
             </p>
          </section>
          
          <section className="mx-auto mt-16 grid max-w-4xl justify-center gap-4 sm:grid-cols-3">
              <Card className="bg-muted/50 text-left">
                  <CardContent className="p-6">
                      <h3 className="text-4xl font-bold">10,000+</h3>
                      <p className="mt-2 font-semibold">Users</p>
                      <p className="mt-4 text-sm text-muted-foreground">Already simplifying their workflow with Flowva</p>
                  </CardContent>
              </Card>
              <Card className="bg-muted/50 text-left">
                  <CardContent className="p-6">
                      <h3 className="text-4xl font-bold">200+</h3>
                      <p className="mt-2 font-semibold">Tools</p>
                      <p className="mt-4 text-sm text-muted-foreground">Curated and organized for you in the library</p>
                  </CardContent>
              </Card>
              <Card className="bg-muted/50 text-left">
                  <CardContent className="p-6">
                      <h3 className="text-4xl font-bold">25+</h3>
                      <p className="mt-2 font-semibold">Countries</p>
                      <p className="mt-4 text-sm text-muted-foreground">Reviewing tools and building smarter stacks every day</p>
                  </CardContent>
              </Card>
          </section>

        </div>
      </main>
    </div>
  );
}
