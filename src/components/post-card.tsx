import { Button } from "@/components/ui";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  type: "horizontal" | "vertical";
  data: {
    title: string;
    summary: string;
    cover: string;
  };
  className?: string;
  imgClassName?: string;
};

const PostCard = ({
  type,
  data,
  className,
  imgClassName,
}: Props) => {
  const { cover, summary, title } = data;

  if (type === "horizontal") {
    return (
      <div className={cn(["flex gap-x-4", className])}>
        <div className={cn(["relative", imgClassName])}>
          <Image src={cover} alt="" fill className="rounded-lg object-cover" />
        </div>
        <div className="flex flex-col justify-between gap-y-2">
          <h1 className="text-lg font-semibold line-clamp-2">{title}</h1>
          <p className="line-clamp-3 text-zinc-400 text-sm">{summary}</p>
          <Button size="sm" className="w-fit">
            Read Story
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={cn(["space-y-4", className])}>
        <div className={cn(["relative w-full", imgClassName])}>
          <Image src={cover} className="rounded-lg object-cover" alt="" fill />
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="line-clamp-3 text-sm text-zinc-400">{summary}</p>
        <Button>Read Story</Button>
      </div>
    );
  }
};

export default PostCard;
