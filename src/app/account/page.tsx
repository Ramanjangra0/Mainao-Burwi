"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreProvider } from "@/lib/store-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";

function AccountContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-md mx-auto">
              <h1 className="font-serif text-3xl md:text-4xl text-center mb-8">
                My Account
              </h1>

              <Tabs defaultValue="signin" className="w-full flex flex-col ">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger
                    className={cn(
                      "rounded-none bg-transparent pb-3 text-sm font-normal",
                      "data-[state=active]:border-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:bg-transparent",
                    )}
                    value="signin"
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className={cn(
                      "rounded-none bg-transparent pb-3 text-sm font-normal",
                      "data-[state=active]:border-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:bg-transparent",
                    )}
                  >
                    Register
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="signin">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsLoggedIn(true);
                    }}
                  >
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="signin-email">Email</FieldLabel>
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="your@email.com"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="signin-password">
                          Password
                        </FieldLabel>
                        <Input
                          id="signin-password"
                          type="password"
                          placeholder="Enter password"
                          required
                        />
                      </Field>
                    </FieldGroup>

                    <div className="flex items-center justify-between mt-4 mb-6">
                      <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                        <input type="checkbox" className="accent-foreground" />
                        Remember me
                      </label>
                      <button
                        type="button"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      className="w-full"
                      size="lg"
                    >
                      Sign In
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsLoggedIn(true);
                    }}
                  >
                    <FieldGroup>
                      <div className="grid grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="reg-first">
                            First Name
                          </FieldLabel>
                          <Input
                            id="reg-first"
                            placeholder="First name"
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="reg-last">Last Name</FieldLabel>
                          <Input
                            id="reg-last"
                            placeholder="Last name"
                            required
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="reg-email">Email</FieldLabel>
                        <Input
                          id="reg-email"
                          type="email"
                          placeholder="your@email.com"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="reg-password">Password</FieldLabel>
                        <Input
                          id="reg-password"
                          type="password"
                          placeholder="Create password"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="reg-confirm">
                          Confirm Password
                        </FieldLabel>
                        <Input
                          id="reg-confirm"
                          type="password"
                          placeholder="Confirm password"
                          required
                        />
                      </Field>
                    </FieldGroup>

                    <div className="mt-4 mb-6">
                      <label className="flex items-start gap-2 text-sm text-muted-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-foreground mt-0.5"
                          required
                        />
                        <span>
                          I agree to the{" "}
                          <Link
                            href="/terms"
                            className="underline hover:text-foreground"
                          >
                            Terms & Conditions
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy"
                            className="underline hover:text-foreground"
                          >
                            Privacy Policy
                          </Link>
                        </span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      className="w-full"
                      size="lg"
                    >
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Logged in state
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-serif text-3xl md:text-4xl">Welcome Back</h1>
              <Button
                variant="outline-subtle"
                onClick={() => setIsLoggedIn(false)}
              >
                Sign Out
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <nav className="space-y-2">
                  <button className="w-full text-left px-4 py-2 bg-secondary text-sm font-medium">
                    My Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-secondary transition-colors">
                    Orders
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-secondary transition-colors">
                    Address Book
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-secondary transition-colors">
                    Payment Methods
                  </button>
                  <Link
                    href="/wishlist"
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    My Wishlist
                  </Link>
                </nav>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="bg-secondary p-6 md:p-8">
                  <h2 className="font-medium text-lg mb-6">
                    Profile Information
                  </h2>

                  <FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="profile-first">
                          First Name
                        </FieldLabel>
                        <Input id="profile-first" defaultValue="John" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="profile-last">
                          Last Name
                        </FieldLabel>
                        <Input id="profile-last" defaultValue="Doe" />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="profile-email">Email</FieldLabel>
                      <Input
                        id="profile-email"
                        type="email"
                        defaultValue="john@example.com"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="profile-phone">Phone</FieldLabel>
                      <Input
                        id="profile-phone"
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                      />
                    </Field>
                  </FieldGroup>

                  <div className="flex gap-4 mt-6">
                    <Button variant="luxury">Save Changes</Button>
                    <Button variant="outline-subtle">Change Password</Button>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="mt-8">
                  <h2 className="font-medium text-lg mb-4">Recent Orders</h2>
                  <div className="text-center py-12 bg-secondary">
                    <p className="text-muted-foreground mb-4">No orders yet</p>
                    <Button asChild variant="outline-subtle">
                      <Link href="/shop">Start Shopping</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function AccountPage() {
  return (
    <StoreProvider>
      <AccountContent />
    </StoreProvider>
  );
}
