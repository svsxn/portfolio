import { Separator } from "../../ui/separator";
import { ModeToggle } from "../../theme/mode-toggle";
import { externalLinks } from "../external-links";
import { LinkIconButton } from "../link-icon-button";

export function Actions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {externalLinks.map((link) => (
          <LinkIconButton key={link.href} href={link.href}>
            {link.svg}
          </LinkIconButton>
        ))}
      </div>
      <Separator orientation="vertical" />
      <ModeToggle />
    </div>
  );
}
