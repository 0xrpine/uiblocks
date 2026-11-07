"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Button } from "../button/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

const controls: PlaygroundControl[] = [
  { type: "boolean", key: "header", label: "Header", default: true },
  { type: "boolean", key: "content", label: "Content", default: true },
  { type: "boolean", key: "footer", label: "Footer", default: true },
];

export function CardPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => {
        if (!values.header && !values.content && !values.footer) {
          return (
            <Card className="mx-auto w-full max-w-sm p-6 text-sm text-muted-foreground">
              No sections selected. Turn a section back on, or press Reset.
            </Card>
          );
        }
        return (
          <Card className="mx-auto w-full max-w-sm">
            {Boolean(values.header) ? (
              <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>Supporting description.</CardDescription>
              </CardHeader>
            ) : null}
            {Boolean(values.content) ? (
              <CardContent className={values.header ? undefined : "pt-6"}>
                <p className="text-sm text-muted-foreground">Card content goes here.</p>
              </CardContent>
            ) : null}
            {Boolean(values.footer) ? (
              <CardFooter
                className={`${values.header || values.content ? "" : "pt-6"} gap-3`}
              >
                <Button size="sm">Solid</Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
              </CardFooter>
            ) : null}
          </Card>
        );
      }}
    />
  );
}
