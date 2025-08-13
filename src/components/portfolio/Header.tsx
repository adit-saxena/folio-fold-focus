import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="container-portfolio py-8 md:py-12">
      <div className="flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-light tracking-tight text-text-primary">
          Abit
        </div>
        <Button variant="outline" size="sm" className="rounded-full">
          hire me
        </Button>
      </div>
    </header>
  );
};