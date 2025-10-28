import { layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

export function SecuritySection() {
  return (
    <section className="bg-gradient-to-b from-amber-100/10 to-background">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-7xl lg:border-x-2 border-amber-200/20 p-6 py-16 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl text-center border-y-4 border-primary py-16">
          {/* <Image
            src="/(landing)/obras/security.png"
            width={150}
            height={150}
            alt="Icone de segurança"
          /> */}
          <ShieldCheck className="w-24 h-24 text-primary" />

          <h2
            className={cn(
              layout.fonts.highlight.className,
              "text-5xl font-bold text-primary"
            )}
          >
            Compra 100% segura
          </h2>

          <p className="max-w-xl">
            Se por qualquer motivo você achar que o curso não é para você, tem
            até 7 dias de garantia para pedir a devolução do valor investido.
            Sem burocracia, sem pegadinhas. O risco é meu, não seu.
          </p>
        </div>
      </div>
    </section>
  );
}
