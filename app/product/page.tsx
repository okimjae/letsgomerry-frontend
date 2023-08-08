'use client'
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, Skeleton } from "@nextui-org/react";


export default function Product() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias
                            doloribus impedit.
                        </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                           
                            <a href="#" className="block group">
                                <img
                                    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt=""
                                    className="h-[350px] w-full object-cover sm:h-[450px]"
                                />
                                 {/* <img
                                alt="Party"
                                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            /> */}

                                <div className="mt-1.5">
                                    <p className="text-xs text-gray-500">Space Grey</p>

                                    <div className="mt-1.5 flex gap-1">
                                        <form>
                                            <fieldset>
                                                <legend className="sr-only">Color</legend>
                                            </fieldset>

                                            <div
                                                className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75"
                                            >
                                                <div>
                                                    <input type="checkbox" id="ColorSg" className="sr-only" />

                                                    <label
                                                        htmlFor="ColorSg"
                                                        className="block h-4 w-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                                                    >
                                                        <span className="sr-only"> Space Gray </span>
                                                    </label>
                                                </div>

                                                <div>
                                                    <input type="checkbox" id="ColorS" className="sr-only" />

                                                    <label
                                                        htmlFor="ColorS"
                                                        className="block h-4 w-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                                                    >
                                                        <span className="sr-only"> Silver </span>
                                                    </label>
                                                </div>

                                                <div>
                                                    <input type="checkbox" id="ColorP" className="sr-only" />

                                                    <label
                                                        htmlFor="ColorP"
                                                        className="block h-4 w-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                                                    >
                                                        <span className="sr-only"> Pink </span>
                                                    </label>
                                                </div>

                                                <div>
                                                    <input type="checkbox" id="ColorG" className="sr-only" />

                                                    <label
                                                        htmlFor="ColorG"
                                                        className="block h-4 w-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                                                    >
                                                        <span className="sr-only"> Pink </span>
                                                    </label>
                                                </div>

                                                <div>
                                                    <input type="checkbox" id="ColorSb" className="sr-only" />

                                                    <label
                                                        htmlFor="ColorSb"
                                                        className="block h-4 w-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                                                    >
                                                        <span className="sr-only"> Pink </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="flex justify-between mt-3 text-sm">
                                        <h3
                                            className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Small Headphones
                                        </h3>

                                        <p className="text-gray-900">$299</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
                                    hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
                                    minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
                                    explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
                                    vel mollitia? Vel provident culpa dignissimos possimus, perferendis
                                    consectetur odit accusantium dolorem amet voluptates aliquid,
                                    ducimus tempore incidunt quas. Veritatis molestias tempora
                                    distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
                                    illum impedit!
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
