import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ban, Info } from "lucide-react";
import Image from "@/components/ui/image";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BackButton from "./back-button";
import CheckPayment from "./check-payment";
import Link from "next/link";
import { useMemo } from "react";

const getName = (name: string) =>
  useMemo(() => {
    const names: Record<string, string> = {
      "Trade and Development bank": "TDB",
      "National investment bank": "NIB",
      "Chinggis khaan bank": "CKHB",
    };
    return names[name] || name;
  }, [name]);

const QrDetail = ({
  errorDescription,
  status,
  qrCode,
  id,
  urls,
}: {
  errorDescription?: string;
  status: string;
  qrCode: string;
  id: string;
  urls: { name: string; logo: string; link: string }[];
}) => (
  <div className="relative">
    <div className="max-h-[60vh] overflow-auto pb-14">
      <QrContainer error={errorDescription}>
        {qrCode ? (
          <Image
            src={qrCode}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            height={256}
            width={256}
            alt="QR Code"
            priority
          />
        ) : (
          <Ban
            className="h-20 w-20 text-input absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            strokeWidth={1}
          />
        )}
      </QrContainer>

      {!!urls?.length && (
        <div className="pt-4 grid grid-cols-3 gap-4 md:hidden">
          {urls.map(({ name, logo, link }) => (
            <Button
              key={name}
              className="text-xs flex flex-col gap-1 items-center justify-center px-2 py-3 shadow border border-border/10 h-auto rounded-md"
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href={link}>
                <Image
                  src={logo}
                  className="h-12 w-12 block rounded-md object-contain"
                  alt={name}
                  height={164}
                  width={164}
                  loading="lazy"
                />
                <span className="h-4 overflow-hidden mt-1 text-neutral-600">
                  {getName(name)}
                </span>
              </Link>
            </Button>
          ))}
        </div>
      )}

      <DialogFooter className="sm:justify-center gap-2 pt-4 block md:flex space-y-2 md:space-y-0">
        <BackButton />
        <CheckPayment id={id} />
      </DialogFooter>
    </div>
  </div>
);

export const QrContainer = ({
  children,
  loading,
  error,
}: React.PropsWithChildren & { loading?: boolean; error?: string }) => (
  <>
    <div className="p-4">
      <div className="relative aspect-square mx-auto max-w-80 border rounded-lg">
        <div className="w-full h-full bg-background rounded-3xl absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>

    <Alert variant={error ? "destructive" : "warning"}>
      <Info className="h-4 w-4" />
      {error ? (
        <>
          <AlertTitle>Алдаа гарлаа</AlertTitle>
          <AlertDescription className="text-xs">{error}</AlertDescription>
        </>
      ) : (
        <AlertDescription className="text-xs">
          Төлбөр төлөгдсөний дараа таны захиалга идэвхэждэг болохыг анхаараарай!
          Та өөрийн банкны аппликейшныг ашиглан QR кодыг уншуулж төлбөр төлөх
          боломжтой
        </AlertDescription>
      )}
    </Alert>

    {loading && (
      <DialogFooter className="sm:justify-center gap-2 pt-4 block md:flex space-y-2 md:space-y-0">
        <BackButton disabled />
        <Button size="lg" className="flex-1 w-full" disabled>
          Төлбөр шалгах
        </Button>
      </DialogFooter>
    )}
  </>
);

export default QrDetail;
