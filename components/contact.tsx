"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    service: z.string().min(2, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact({ id }: { id?: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(values);
        setIsSubmitting(false);
        form.reset();
    }

    return (
        <section
            id={id}
            ref={ref}
            className="px-4 sm:px-2 lg:px-12 py-20 bg-zinc-900 text-white relative"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Get a Quote Now
                    </h2>
                    <p className="text-center text-zinc-400 mb-12">
                        Get a Quote Immediately Upon Form Submission
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Name"
                                                        className="bg-zinc-800 border-zinc-700"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Email"
                                                        type="email"
                                                        className="bg-zinc-800 border-zinc-700"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Phone"
                                                        className="bg-zinc-800 border-zinc-700"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="service"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Service Need"
                                                        className="bg-zinc-800 border-zinc-700"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Your Specific Needs"
                                                        className="bg-zinc-800 border-zinc-700 min-h-[100px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting
                                            ? "Sending..."
                                            : "Send Request"}
                                    </Button>
                                </form>
                            </Form>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">
                                    Address
                                </h3>
                                <p className="text-zinc-400">
                                    2nd Floor,
                                    <br />
                                    SRJ Tower, No 26B,
                                    <br />
                                    Rajiv Gandhi Salai,
                                    <br />
                                    OMR, Sholinganallur,
                                    <br />
                                    Chennai, Tamil Nadu 600119
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">
                                    Follow US
                                </h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-yellow-400 transition-colors"
                                    >
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-yellow-400 transition-colors"
                                    >
                                        <Phone className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-zinc-400 hover:text-yellow-400 transition-colors"
                                    >
                                        <MapPin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
