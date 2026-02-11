import Fab from "@/components/fab";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function FabVideo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Fab>
          <div className="relative flex h-16 w-16 cursor-pointer items-center justify-center sm:h-20 sm:w-20">
            {/* <PlayIcon className="absolute z-10 h-8 w-8 text-white" /> */}
            <img
              src="/images/introVideo.gif"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </Fab>
      </DialogTrigger>
      <DialogContent className="px-3">
        <iframe
          height={300}
          className="w-full"
          src="https://www.youtube.com/embed/SnmMWh9-A9M?si=xRqFTuqQG5GoSjmd"
          title="Christian der Fotograf präsentiert sich"
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
