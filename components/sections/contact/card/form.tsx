import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";

export default function Form() {
  return (
    <FieldGroup className="mt-8">
      <Field>
        <FieldLabel htmlFor="name" className="text-xs">
          Your name
        </FieldLabel>
        <Input
          id="name"
          autoComplete="off"
          placeholder="John Doe"
          className="bg-background! placeholder:text-muted-foreground/70 h-10 rounded-md px-3.5"
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="email" className="text-xs">
          Your email
        </FieldLabel>
        <Input
          id="email"
          type="email"
          autoComplete="off"
          placeholder="john@example.com"
          className="bg-background! placeholder:text-muted-foreground/70 h-10 rounded-md px-3.5"
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="message" className="text-xs">
          Your message
        </FieldLabel>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          className="bg-background! placeholder:text-muted-foreground/70 h-32 rounded-md px-3.5"
        />
      </Field>
      <Field orientation="horizontal">
        <Button
          size="sm"
          className="h-11 w-full rounded-md border-none px-5 font-bold transition-all duration-300 hover:-translate-y-0.5 sm:h-10"
        >
          Send message
          <SendIcon className="ml-2 size-4" />
        </Button>
      </Field>
    </FieldGroup>
  );
}
