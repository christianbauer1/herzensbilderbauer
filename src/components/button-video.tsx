import { PlayIcon } from "@/components/icons";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function ButtonVideo({
  gifUrl,
  gifAlt,
  videoUrl,
  videoTitle,
  showPlayButton = false,
  className,
}: VideoButton) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {showPlayButton ? (
          <PlayIcon
            className={cn(
              "text-primary cursor-pointer rounded-full shadow-lg",
              className,
            )}
          />
        ) : (
          <div
            className={cn(
              "bg-background relative flex h-16 w-16 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-full border p-1.5 shadow-lg",
              className,
            )}
          >
            <img
              alt={gifAlt}
              src={gifUrl}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="px-3">
        <iframe
          height={300}
          className="w-full"
          src={videoUrl}
          title={videoTitle}
          //@ts-ignore
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
