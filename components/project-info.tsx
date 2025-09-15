import { Info } from "lucide-react";
import { DeployButton } from "./deploy-button";
import { Alert, AlertDescription } from "./ui/alert";
import Link from "next/link";

export const ProjectInfo = () => {
  return (
    <div className="bg-muted p-4 mt-auto">
      <Alert className="bg-muted text-muted-foreground border-0">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription>
          This application uses the{" "}
          <Link
            target="_blank"
            className="text-primary hover:text-primary/90 underline"
            href="https://google.com"
          >
            AGI Mind
          </Link>{" "}
          to allow you to query a PostgreSQL database with natural language. The
          platform is under develop to support all Admin&apos;s database tasks. No Learn more
          at{" "}
          <Link
            href="https://gitlab.local/gpt-sql"
            target="_blank"
            className="text-primary hover:text-primary/90 underline"
          >
            Made with ❤
          </Link>
          .
          <div className="mt-4 sm:hidden">
           AGI: Ablfazl GPU 
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};
