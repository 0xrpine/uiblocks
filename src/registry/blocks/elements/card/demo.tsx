"use client";

import { Button } from "../button/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Supporting description for the card content.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content goes here.</p>
      </CardContent>
      <CardFooter className="gap-3">
        <Button size="sm">Primary</Button>
        <Button size="sm" variant="outline">
          Secondary
        </Button>
      </CardFooter>
    </Card>
  );
}
