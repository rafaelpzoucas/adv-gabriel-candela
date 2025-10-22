import { Card } from "@/components/ui/card";
import { CreditCard, Lock } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-to-b from-background to-amber-100/10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-7xl p-6 py-16 mx-auto">
        <div className="flex flex-col items-center justify-center gap-16 w-full max-w-4xl text-center border-t-4 border-primary py-16">
          <h2 className="text-5xl font-bold text-primary">
            Transforme sua carreira agora
          </h2>

          <p className="max-w-xl">
            O criminalista real não se apoia em dúvidas, em decisões ou
            hesitação. Transforme sua prática, conquiste melhores resultados e
            construa a carreira que você merece.
          </p>

          <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-200 from-20% via-white via-30% to-amber-600 text-primary-foreground font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base hover:opacity-90 transition-opacity">
            QUERO COMEÇAR AGORA
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-4 flex flex-row gap-2 bg-transparent border-2 border-amber-200/20">
              <Lock className="text-primary" />
              <span>Compra 100% segura</span>
            </Card>

            <Card className="p-4 flex flex-row gap-2 bg-transparent border-2 border-amber-200/20">
              <CreditCard className="text-primary" />
              <span>Compra 100% segura</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
