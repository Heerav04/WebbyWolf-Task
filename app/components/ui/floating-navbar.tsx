"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // Add background when scrolled
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
  };

  const bgVariants = {
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    },
    normal: {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
    },
  };

  return (
    <>
      <motion.nav
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        variants={navVariants}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          animate={scrolled ? "scrolled" : "normal"}
          variants={bgVariants}
          className="border-b border-gray-100/50 transition-all duration-300"
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between gap-4">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/" className="text-2xl font-bold text-black">
                  Logo
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="hover:text-blue-600 transition-colors font-medium">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
                        >
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-black/40 backdrop-blur-xl p-6 no-underline outline-none focus:shadow-lg transition-all hover:shadow-lg border border-white/20"
                                href="#"
                              >
                                <div className="mb-2 mt-4 text-lg font-semibold text-white">
                                  Featured Product
                                </div>
                                <p className="text-sm leading-tight text-gray-200">
                                  Check out our latest and greatest offering
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <ProductListItem href="#" title="Product 1">
                            Premium features included
                          </ProductListItem>
                          <ProductListItem href="#" title="Product 2">
                            Advanced capabilities
                          </ProductListItem>
                          <ProductListItem href="#" title="Product 3">
                            Enterprise solutions
                          </ProductListItem>
                        </motion.ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "hover:text-blue-600 transition-colors font-medium"
                        )}
                        href="#"
                      >
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "hover:text-blue-600 transition-colors font-medium"
                        )}
                        href="#"
                      >
                        Contact
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Right Section */}
              <div className="hidden md:flex items-center gap-4">
                <motion.form
                  className="relative hidden lg:block"
                  whileHover={{ scale: 1.02 }}
                >
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
                  />
                </motion.form>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-black hover:bg-gray-900 text-white rounded-full px-6 font-semibold shadow-lg">
                    Sign In
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] p-0">
                  <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full bg-white"
                  >
                    <div className="flex items-center justify-between p-6 border-b">
                      <Link href="/" className="text-2xl font-bold text-black">
                        Logo
                      </Link>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <div className="flex flex-col gap-2 p-4">
                        <MobileNavItem href="#" label="Products" />
                        <MobileNavItem href="#" label="About" />
                        <MobileNavItem href="#" label="Contact" />
                      </div>
                    </div>
                    <div className="border-t p-4 gap-2 flex flex-col">
                      <form className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="search"
                          placeholder="Search..."
                          className="pl-10"
                        />
                      </form>
                      <Button className="w-full bg-black hover:bg-gray-900 text-white rounded-lg font-semibold">
                        Sign In
                      </Button>
                    </div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16" />
    </>
  );
}

const ProductListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  // Filter out props that conflict with Framer Motion
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onAnimationStart, onDragStart, onDragEnd, onDrag, ...validProps } = props;

  return (
    <li>
      <NavigationMenuLink asChild>
        <motion.a
          ref={ref}
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10",
            className
          )}
          {...validProps}
        >
          <div className="text-sm font-semibold text-white leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-300">
            {children}
          </p>
        </motion.a>
      </NavigationMenuLink>
    </li>
  );
});
ProductListItem.displayName = "ProductListItem";

const MobileNavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors font-medium"
      >
        {label}
      </Link>
    </motion.div>
  );
};
