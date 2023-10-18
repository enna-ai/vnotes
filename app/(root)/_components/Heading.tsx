"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas, Documents, & Plans. Welcome to <span className="underline">Vnotes</span></h1>
            <h3 className="text-base sm:text-cl md:text-2xl font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloremque animi, accusamus nihil sequi eveniet! Quidem aliquid totam, explicabo autem necessitatibus, molestiae provident, quae perspiciatis ratione harum saepe incidunt optio?.</h3>
            <Button>Enter Vnotes
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
};